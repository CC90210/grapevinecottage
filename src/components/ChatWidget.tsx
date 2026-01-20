import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

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

  const WEBHOOK_URL =
    "https://n8n.srv993801.hstgr.cloud/webhook/6dc09240-bee8-440d-a1c7-e8483212baea/chat";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
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
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const payload = {
        action: "sendMessage",
        sessionId: getSessionId(),
        chatInput: userMessage,
      };

      console.log("Sending to webhook:", WEBHOOK_URL, payload);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.output ||
            data.text ||
            data.response ||
            "I'm sorry, could you try that again?",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Feel free to call us at (705) 445-8001!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full z-[9998] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{
          background: "linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)",
          boxShadow: "0 4px 20px rgba(107, 78, 113, 0.4)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[70vh] rounded-2xl overflow-hidden z-[9999] flex flex-col shadow-2xl md:right-6 md:bottom-24"
            style={{
              background: "#FDF8F3",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{
                background: "linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🍇
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">
                    Grapevine Cottage
                  </h3>
                  <p className="text-white/90 text-xs">Chat with Kim ✨</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "ml-auto rounded-2xl rounded-br-sm text-white"
                      : "mr-auto rounded-2xl rounded-bl-sm border"
                  }`}
                  style={
                    msg.role === "user"
                      ? { background: "#6B4E71" }
                      : {
                          background: "#FFFFFF",
                          color: "#3D3D3D",
                          borderColor: "#E8E0E8",
                        }
                  }
                >
                  {msg.content}
                </div>
              ))}

              {isLoading && (
                <div
                  className="mr-auto rounded-2xl px-4 py-3 border flex gap-1"
                  style={{ background: "#FFFFFF", borderColor: "#E8E0E8" }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#6B4E71", animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#6B4E71", animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#6B4E71", animationDelay: "300ms" }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - THE CRITICAL PART */}
            <form
              onSubmit={sendMessage}
              className="flex gap-3 p-4 border-t bg-white"
              style={{ borderColor: "#E8E0E8" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-5 py-3 text-sm rounded-full border outline-none transition-colors focus:border-primary disabled:opacity-50"
                style={{ borderColor: "#E8E0E8" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: input.trim() && !isLoading ? "#6B4E71" : "#C4B8C6",
                }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile fullscreen styles */}
      <style>{`
        @media (max-width: 480px) {
          .fixed.bottom-24.right-6 {
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            bottom: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
