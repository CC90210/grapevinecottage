import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <span className="font-script text-4xl text-primary block mb-4">
            Oops!
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. 
            Perhaps it wandered off to explore our shop!
          </p>
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
