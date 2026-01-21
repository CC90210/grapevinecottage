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

  return (
    <>
      {/* Floating Chat Button */}
      <div
        className="chat-widget-button"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-widget-window">
          {/* Header */}
          <div className="chat-widget-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="chat-widget-avatar">🍇</div>
              <div>
                <div style={{ fontWeight: 600, color: 'white', fontSize: 16 }}>Grapevine Cottage</div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12 }}>Chat with Kim ✨</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-widget-close">
              <X size={24} color="white" />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-widget-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-widget-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="chat-widget-message assistant">Typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="chat-widget-input-form">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              className="chat-widget-input"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="chat-widget-send"
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
