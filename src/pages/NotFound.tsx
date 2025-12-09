import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-8xl font-display font-bold text-gradient-gold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page took an unexpected break.
        </p>
        <Link to="/">
          <Button variant="hero">
            <Home size={18} /> Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
