import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // NO overflow properties here - let body scroll naturally
    <div className="flex flex-col" style={{ overflow: 'visible', transform: 'none' }}>
      <Header />
      <main className="pt-20" style={{ overflow: 'visible', transform: 'none' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
