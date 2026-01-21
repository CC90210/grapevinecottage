import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, X, Send } from "lucide-react";
import { chatMessageSchema, parseWebhookResponse, checkRateLimit } from "@/lib/validation";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL =
  "https://n8n.srv993801.hstgr.cloud/webhook/4608e17f-7b99-4a80-bc11-34781dd8376c";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! Welcome to Grapevine Cottage! 💜" },
    { role: "assistant", content: "I'm Kim, the owner. What brings you in today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getSessionId = () => {
    let sessionId = sessionStorage.getItem("chatSessionId");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem("chatSessionId", sessionId);
    }
    return sessionId;
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const userMessage = input.trim();
    
    const validation = chatMessageSchema.safeParse({ message: userMessage });
    if (!validation.success) {
      setValidationError(validation.error.errors[0]?.message || "Invalid message");
      return;
    }

    const sessionId = getSessionId();
    if (!checkRateLimit(`chat_${sessionId}`, 10, 60000)) {
      setValidationError("Too many messages. Please wait a moment.");
      return;
    }

    if (isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const payload = {
        action: "sendMessage",
        sessionId: sessionId,
        chatInput: userMessage,
        timestamp: new Date().toISOString(),
        history: messages.slice(-10).map((msg) => ({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.content,
        })),
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const rawText = await response.text();
      const botResponse = parseWebhookResponse(rawText);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botResponse },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      let errorMessage: string;
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          errorMessage =
            "Sorry, that took too long! Please try again or call us at (705) 445-8001.";
        } else if (
          error.message.includes("Failed to fetch") ||
          error.message.includes("NetworkError")
        ) {
          errorMessage =
            "Couldn't connect to the server. Please check your connection or call us at (705) 445-8001.";
        } else {
          errorMessage =
            "Oops! Something went wrong. Feel free to call us at (705) 445-8001!";
        }
      } else {
        errorMessage =
          "Oops! Something went wrong. Feel free to call us at (705) 445-8001!";
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (validationError) {
      setValidationError(null);
    }
  };

  // Get the portal container - fallback to body if not found
  const portalContainer = document.getElementById('chat-portal-root') || document.body;
  
  // Always render - don't wait for mounted state
  if (typeof window === 'undefined') return null;

  const chatContent = (
    <>
      {/* Chat Toggle Button - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        type="button"
        style={{
          position: 'fixed',
          bottom: isMobile ? '20px' : '24px',
          right: isMobile ? '16px' : '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2147483647,
          background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)',
          boxShadow: '0 4px 20px rgba(107, 78, 113, 0.5)',
          transform: 'none',
          WebkitTransform: 'none',
          pointerEvents: 'auto',
        }}
      >
        {isOpen ? (
          <X style={{ width: 24, height: 24, color: 'white' }} />
        ) : (
          <MessageCircle style={{ width: 24, height: 24, color: 'white' }} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: isMobile ? '0' : '96px',
            right: isMobile ? '0' : '24px',
            left: isMobile ? '0' : 'auto',
            top: isMobile ? '0' : 'auto',
            width: isMobile ? '100%' : '380px',
            height: isMobile ? '100%' : '520px',
            maxHeight: isMobile ? '100%' : '70vh',
            borderRadius: isMobile ? '0' : '16px',
            zIndex: 2147483646,
            background: '#FDF8F3',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column' as const,
            transform: 'none',
            WebkitTransform: 'none',
            pointerEvents: 'auto',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              flexShrink: 0,
              background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)',
              borderRadius: isMobile ? '0' : '16px 16px 0 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                🍇
              </div>
              <div>
                <h3 style={{ margin: 0, fontWeight: 600, color: 'white', fontSize: '16px' }}>
                  Grapevine Cottage
                </h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '12px' }}>
                  Chat with Kim ✨
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              aria-label="Close chat"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              <X style={{ width: 20, height: 20, color: 'white' }} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
              minHeight: 0,
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  ...(msg.role === 'user'
                    ? {
                        marginLeft: 'auto',
                        borderRadius: '16px 16px 4px 16px',
                        background: '#6B4E71',
                        color: 'white',
                      }
                    : {
                        marginRight: 'auto',
                        borderRadius: '16px 16px 16px 4px',
                        background: 'white',
                        color: '#3D3D3D',
                        border: '1px solid #E8E0E8',
                      }),
                }}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div
                style={{
                  marginRight: 'auto',
                  borderRadius: '16px',
                  padding: '12px 16px',
                  background: 'white',
                  border: '1px solid #E8E0E8',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6B4E71', opacity: 0.6 }}>●</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6B4E71', opacity: 0.8 }}>●</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6B4E71' }}>●</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={sendMessage}
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '8px',
              padding: '16px',
              borderTop: '1px solid #E8E0E8',
              background: 'white',
              flexShrink: 0,
              paddingBottom: isMobile ? 'max(16px, env(safe-area-inset-bottom))' : '16px',
              borderRadius: isMobile ? '0' : '0 0 16px 16px',
            }}
          >
            {validationError && (
              <p style={{ fontSize: '12px', color: '#ef4444', margin: 0, padding: '0 8px' }}>
                {validationError}
              </p>
            )}
            <div style={{ display: 'flex', gap: '12px' }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                disabled={isLoading}
                maxLength={1000}
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  fontSize: '16px',
                  borderRadius: '9999px',
                  border: `1px solid ${validationError ? '#ef4444' : '#E8E0E8'}`,
                  outline: 'none',
                  opacity: isLoading ? 0.5 : 1,
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: input.trim() && !isLoading ? '#6B4E71' : '#C4B8C6',
                  opacity: !input.trim() || isLoading ? 0.5 : 1,
                }}
              >
                <Send style={{ width: 20, height: 20, color: 'white' }} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );

  // Render to portal container
  return createPortal(chatContent, portalContainer);
};

export default ChatWidget;
