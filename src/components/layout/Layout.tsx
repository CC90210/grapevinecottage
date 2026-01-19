import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

declare global {
  interface Window {
    createChat?: (config: {
      webhookUrl: string;
      mode: string;
      showWelcomeScreen: boolean;
      initialMessages: string[];
      i18n: Record<string, Record<string, string>>;
      theme: Record<string, string>;
    }) => void;
  }
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Check if chat is already initialized
    if (document.querySelector('.n8n-chat') || document.querySelector('[data-n8n-chat]')) {
      return;
    }

    // Add stylesheet
    if (!document.querySelector('link[href*="@n8n/chat"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);
    }

    // Add script
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      if (!document.querySelector('.n8n-chat')) {
        createChat({
          webhookUrl: 'https://n8n.srv993801.hstgr.cloud/webhook/6dc09240-bee8-440d-a1c7-e8483212baea/chat',
          mode: 'window',
          showWelcomeScreen: false,
          initialMessages: [
            'Hi there! Welcome to Grapevine Cottage! 💜',
            "I'm Kim, the owner. What brings you in today?"
          ],
          i18n: {
            en: {
              title: 'Grapevine Cottage',
              subtitle: "Chat with Kim ✨",
              inputPlaceholder: 'Type your message...',
              getStarted: 'Start Chatting',
              closeButtonTooltip: 'Close chat',
            },
          },
          theme: {
            primaryColor: '#6B4E71',
          },
        });
      }
    `;
    script.setAttribute('data-n8n-chat', 'true');
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[data-n8n-chat]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
