import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found — Roz Washington";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const url = `https://rozisfunny.com${location.pathname}`;
    const description = "This page took an unexpected break. Head back to rozisfunny.com for tour dates, clips, and booking.";

    const restorers = [
      setMeta('meta[name="description"]', "name", "description", description),
      setMeta('meta[property="og:title"]', "property", "og:title", "Page Not Found — Roz Washington"),
      setMeta('meta[property="og:description"]', "property", "og:description", description),
      setMeta('meta[property="og:url"]', "property", "og:url", url),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Page Not Found — Roz Washington"),
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description),
    ];

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const robotsExisted = !!robots;
    const prevRobots = robots?.getAttribute("content") ?? null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex");

    return () => {
      document.title = prevTitle;
      restorers.forEach((r) => r());
      if (prevCanonical !== null) canonical?.setAttribute("href", prevCanonical);
      if (robotsExisted && prevRobots !== null) robots?.setAttribute("content", prevRobots);
      else robots?.remove();
    };
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
