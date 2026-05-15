import { useEffect, useState } from "react";
import { Home, Film, Calendar, Mail, Mic2 } from "lucide-react";

const tabs = [
  { id: "top", label: "Home", icon: Home },
  { id: "reel", label: "Reel", icon: Film },
  { id: "radio", label: "Radio", icon: Mic2 },
  { id: "tour", label: "Tour", icon: Calendar },
  { id: "book", label: "Book", icon: Mail },
];

export function MobileTabBar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = tabs.map((t) => t.id);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bone/95 backdrop-blur-xl border-t-2 border-ink pb-safe"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.25rem)" }}
    >
      <ul className="flex items-stretch justify-between px-1">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = active === t.id;
          return (
            <li key={t.id} className="flex-1">
              <button
                onClick={() => go(t.id)}
                aria-current={isActive ? "page" : undefined}
                className="w-full flex flex-col items-center justify-center gap-0.5 py-2 px-1 relative"
              >
                <span
                  className={`flex items-center justify-center w-11 h-7 rounded-full transition-colors ${
                    isActive ? "bg-explosion text-ink" : "text-ink/70"
                  }`}
                >
                  <Icon size={20} strokeWidth={2.4} />
                </span>
                <span
                  className={`font-display font-black uppercase text-[10px] tracking-wide ${
                    isActive ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
