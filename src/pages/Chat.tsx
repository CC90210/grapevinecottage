import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = "https://n8n.srv993801.hstgr.cloud/webhook/4608e17f-7b99-4a80-bc11-34781dd8376c";

const Chat = () => {
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
    inputRef.current?.focus();
  }, []);

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
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
            🍇
          </div>
          <div>
            <h1 className="font-semibold text-lg">Chat with Kim</h1>
            <p className="text-sm opacity-90">Grapevine Cottage</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'ml-auto bg-primary text-primary-foreground rounded-br-sm'
                : 'mr-auto bg-white text-foreground border border-border rounded-bl-sm'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="mr-auto bg-white border border-border rounded-2xl p-3 px-4">
            <span className="animate-pulse">Kim is typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="p-4 border-t border-border bg-white flex gap-3"
        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 px-5 py-3 text-base rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chat;