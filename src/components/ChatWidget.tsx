import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = "https://n8n.srv993801.hstgr.cloud/webhook/4608e17f-7b99-4a80-bc11-34781dd8376c";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! Welcome to Grapevine Cottage! 💜" },
    { role: "assistant", content: "I'm Kim, the owner. What brings you in today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
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
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: getSessionId(),
          chatInput: userMessage,
          timestamp: new Date().toISOString(),
          history: messages.slice(-10),
        }),
      });

      const rawText = await response.text();
      let botResponse = rawText;
      try {
        const json = JSON.parse(rawText);
        botResponse = json.output || json.text || json.response || json.message || rawText;
      } catch { /* use raw text */ }

      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Oops! Something went wrong. Call us at (705) 445-8001!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple inline styles - no external CSS dependencies
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)',
    boxShadow: '0 4px 20px rgba(107, 78, 113, 0.5)',
  };

  const windowStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 99998,
    background: '#FDF8F3',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
        aria-label="Chat"
      >
        {isOpen ? (
          <X size={24} color="white" />
        ) : (
          <MessageCircle size={24} color="white" />
        )}
      </button>

      {/* Chat Window - Full screen on mobile */}
      {isOpen && (
        <div style={windowStyle}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
              }}>
                🍇
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'white', fontSize: 16 }}>Grapevine Cottage</div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12 }}>Chat with Kim ✨</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer' }}
            >
              <X size={24} color="white" />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  fontSize: 14,
                  lineHeight: 1.5,
                  borderRadius: 16,
                  ...(msg.role === 'user'
                    ? { marginLeft: 'auto', background: '#6B4E71', color: 'white' }
                    : { marginRight: 'auto', background: 'white', color: '#3D3D3D', border: '1px solid #E8E0E8' }),
                }}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{
                padding: '12px 16px',
                background: 'white',
                border: '1px solid #E8E0E8',
                borderRadius: 16,
                width: 'fit-content',
              }}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            style={{
              display: 'flex',
              gap: 12,
              padding: 16,
              paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
              borderTop: '1px solid #E8E0E8',
              background: 'white',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '12px 20px',
                fontSize: 16,
                borderRadius: 9999,
                border: '1px solid #E8E0E8',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: 'none',
                background: input.trim() ? '#6B4E71' : '#ccc',
                cursor: input.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send size={20} color="white" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;