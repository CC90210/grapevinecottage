import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'agent';
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const WEBHOOK_URL = 'https://n8n.srv993801.hstgr.cloud/webhook-test/c5d3d125-7deb-4dcc-93a9-b0da24ecad07';

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'agent',
          content: "Hi there! Welcome to Grapevine Cottage — so glad you stopped by! I'm Kim, the owner. What brings you in today? 💜"
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Show typing indicator
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          action: 'sendMessage',
          chatInput: userMessage,
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          metadata: {
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct'
          }
        })
      });

      const data = await response.json();
      
      // Add agent response
      setMessages(prev => [...prev, { 
        role: 'agent', 
        content: data.output || "I'm sorry, I had a little hiccup there! Could you try that again?"
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'agent', 
        content: "Oops! Something went wrong on my end. Feel free to give us a call at (705) 445-8001 if you need help right away!"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            style={{
              background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)',
              boxShadow: '0 4px 15px rgba(107, 78, 113, 0.3), 0 2px 6px rgba(0, 0, 0, 0.1)'
            }}
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7 text-[#FDF8F3]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] max-h-[70vh] rounded-2xl flex flex-col overflow-hidden
                       max-[480px]:w-full max-[480px]:h-full max-[480px]:max-h-full max-[480px]:bottom-0 max-[480px]:right-0 max-[480px]:rounded-none"
            style={{
              background: '#FDF8F3',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Header */}
            <div 
              className="px-5 py-4 flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, #6B4E71 0%, #8B6B8F 100%)'
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: '#FDF8F3' }}
                >
                  🍇
                </div>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: '#FDF8F3' }}>
                    Grapevine Cottage
                  </h3>
                  <p className="text-xs opacity-90" style={{ color: '#FDF8F3' }}>
                    Kim is here to help ✨
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: '#FDF8F3' }}
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'self-end rounded-2xl rounded-br-sm' 
                      : 'self-start rounded-2xl rounded-bl-sm border'
                  }`}
                  style={{
                    background: msg.role === 'user' ? '#6B4E71' : '#FFFFFF',
                    color: msg.role === 'user' ? '#FDF8F3' : '#3D3D3D',
                    borderColor: msg.role === 'agent' ? '#E8E0E8' : 'transparent'
                  }}
                >
                  {msg.content}
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="self-start px-4 py-3 rounded-2xl border flex gap-1"
                  style={{ background: '#FFFFFF', borderColor: '#E8E0E8' }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#6B4E71' }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15
                      }}
                    />
                  ))}
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div 
              className="p-4 flex gap-3 border-t"
              style={{ background: '#FFFFFF', borderColor: '#E8E0E8' }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                placeholder="Type a message..."
                className="flex-1 rounded-3xl px-5 py-3 text-sm outline-none transition-colors border"
                style={{ 
                  borderColor: '#E8E0E8',
                  color: '#3D3D3D'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6B4E71'}
                onBlur={(e) => e.target.style.borderColor = '#E8E0E8'}
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                style={{
                  background: isTyping || !inputValue.trim() ? '#C4B8C6' : '#6B4E71'
                }}
              >
                <Send className="w-5 h-5" style={{ color: '#FDF8F3' }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
