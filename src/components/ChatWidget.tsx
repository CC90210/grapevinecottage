import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = "/api/chat-webhook";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! Welcome to Grapevine Cottage! 💜" },
    { role: "assistant", content: "I'm Kim, the owner. What brings you in today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ensure we only render portal after mount (client-side)
  useEffect(() => {
    setMounted(true);
    console.log("[ChatWidget] Mounted, portal ready");
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      console.log(`[ChatWidget] Sending message via proxy: ${WEBHOOK_URL}`);
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: getSessionId(),
          session_id: getSessionId(),
          chatInput: userMessage,
          message: userMessage,
          page_url: window.location.href,
          timestamp: new Date().toISOString(),
          history: messages.slice(-10),
        }),
      });

      console.log(`[ChatWidget] Response status: ${response.status}`);
      const rawText = await response.text();
      let botResponse = rawText;
      try {
        const json = JSON.parse(rawText);
        botResponse = json.output || json.text || json.response || json.message || rawText;
      } catch (e) {
        console.warn("[ChatWidget] Error parsing JSON response, using raw text", e);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
    } catch (error) {
      console.error("[ChatWidget] Webhook error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Oops! Something went wrong. Call us at (705) 445-8001!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render anything until mounted (prevents SSR issues)
  if (!mounted) return null;

  const widgetContent = (
    <>
      {/* TOGGLE BUTTON - Rendered separately with maximum z-index */}
      <button
        id="chat-toggle-btn"
        onClick={() => {
          console.log("[ChatWidget] Button clicked, toggling:", !isOpen);
          setIsOpen(!isOpen);
        }}
        aria-label="Chat"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6B4E71, #8B6B8F)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(107,78,113,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2147483647,
          // Prevent ALL transforms
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "auto",
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div
          id="chat-window"
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 350,
            maxWidth: "calc(100vw - 40px)",
            height: 500,
            maxHeight: "calc(100vh - 120px)",
            background: "#1a1a1a",
            borderRadius: 16,
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 2147483646,
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #6B4E71, #8B6B8F)",
              padding: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              🍇
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Chat with Kim</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Grapevine Cottage</div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background: m.role === "user" ? "#6B4E71" : "#2a2a2a",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: 12,
                  maxWidth: "80%",
                  fontSize: 14,
                  lineHeight: 1.4,
                }}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#2a2a2a",
                  color: "rgba(255,255,255,0.6)",
                  padding: "10px 14px",
                  borderRadius: 12,
                  fontSize: 14,
                }}
              >
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            style={{
              display: "flex",
              gap: 8,
              padding: 12,
              borderTop: "1px solid #333",
              background: "#1a1a1a",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              style={{
                flex: 1,
                border: "1px solid #444",
                borderRadius: 20,
                padding: "10px 16px",
                fontSize: 16,
                outline: "none",
                background: "#2a2a2a",
                color: "white",
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#6B4E71",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: !input.trim() || isLoading ? 0.5 : 1,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );

  // CRITICAL: Render directly to document.body via portal
  // This escapes the React DOM tree and any CSS transforms from framer-motion
  return createPortal(widgetContent, document.body);
};

export default ChatWidget;
