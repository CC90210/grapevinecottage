import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    setValidationError(null);

    const userMessage = input.trim();
    
    // Validate input with zod
    const validation = chatMessageSchema.safeParse({ message: userMessage });
    if (!validation.success) {
      setValidationError(validation.error.errors[0]?.message || "Invalid message");
      return;
    }

    // Check rate limit (10 messages per minute per session)
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

      // Extended timeout for AI responses (30 seconds)
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

      // Get raw response text and validate with our schema
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

  return (
    <>
      {/* Chat Toggle Button - Mobile optimized */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{
          bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px) + 1rem)",
          right: "max(1.5rem, env(safe-area-inset-right, 0px) + 1rem)",
          zIndex: 99999,
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

      {/* Chat Window - Mobile optimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chat-window-container fixed rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            style={{
              zIndex: 99998,
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

            {/* Input Area */}
            <form
              onSubmit={sendMessage}
              className="flex flex-col gap-2 p-4 border-t bg-white"
              style={{ borderColor: "#E8E0E8" }}
            >
              {validationError && (
                <p className="text-xs text-red-500 px-2">{validationError}</p>
              )}
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  maxLength={1000}
                  className="flex-1 px-5 py-3 text-sm rounded-full border outline-none transition-colors focus:border-primary disabled:opacity-50"
                  style={{ borderColor: validationError ? "#ef4444" : "#E8E0E8" }}
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
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-optimized styles */}
      <style>{`
        .chat-window-container {
          bottom: 5.5rem;
          right: 1.5rem;
          width: 380px;
          max-width: calc(100vw - 3rem);
          height: 520px;
          max-height: 70vh;
        }
        
        @media (max-width: 480px) {
          .chat-window-container {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            border-radius: 0 !important;
          }
        }
        
        @supports (padding: env(safe-area-inset-bottom)) {
          .chat-window-container {
            padding-bottom: env(safe-area-inset-bottom, 0px);
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
