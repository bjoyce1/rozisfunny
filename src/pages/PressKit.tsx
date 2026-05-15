import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const palette = [
  { name: "Bone", hex: "#F5E6D3", text: "#0A0A0A" },
  { name: "Ink", hex: "#0A0A0A", text: "#F5E6D3" },
  { name: "Explosion", hex: "#FF1B6B", text: "#0A0A0A" },
  { name: "Gold", hex: "#FFD60A", text: "#0A0A0A" },
  { name: "Ember", hex: "#FF4D00", text: "#0A0A0A" },
  { name: "Ash", hex: "#8A8278", text: "#0A0A0A" },
];

const downloads = [
  { label: "Brand identity sheet (SVG)", href: "/brand/roz-washington-brand-identity.svg" },
];

const bio = `Roz Washington is a stand-up comedian and radio host whose explosive presence has made her one of the most talked-about voices on the comedy circuit. Born and raised in Carson, CA, Roz mixes razor-sharp observation with unapologetic warmth — the kind of comic who can read the room and then set it on fire.`;

const PressKit = () => {
  useEffect(() => {
    document.title = "Press Kit — Roz Washington";
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Header bar */}
      <header className="border-b-2 border-ink">
        <div className="container flex items-center justify-between py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-explosion transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Roz
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-ash hidden sm:inline">
            Roz Washington · Press Kit · v1
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-explosion">
            Explosive Edition
          </span>
        </div>
      </header>

      <div className="container py-12 md:py-20 space-y-20">
        {/* Hero */}
        <section>
          <p className="font-marker text-explosion text-lg mb-4">press &amp; brand assets</p>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
            The <span className="marquee-underline">Press Kit</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
            Everything bookers, journalists, and producers need to feature Roz —
            wordmark, palette, photography notes, and the official bio.
          </p>
        </section>

        {/* Brand sheet */}
        <section>
          <div className="flex items-baseline justify-between border-b-2 border-ink pb-3 mb-6">
            <h2 className="font-display text-3xl md:text-4xl uppercase">Brand Sheet</h2>
            <a
              href="/brand/roz-washington-brand-identity.svg"
              download
              className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:text-explosion transition-colors"
            >
              <Download className="size-4" />
              Download SVG
            </a>
          </div>
          <div className="slab bg-card p-4 md:p-8">
            <img
              src="/brand/roz-washington-brand-identity.svg"
              alt="Roz Washington brand identity sheet showing wordmark, monogram, stamp, signature, color palette, and typography"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Palette */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl uppercase border-b-2 border-ink pb-3 mb-6">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 slab">
            {palette.map((c) => (
              <div
                key={c.name}
                className="aspect-square flex flex-col justify-end p-4"
                style={{ backgroundColor: c.hex, color: c.text }}
              >
                <p className="font-display uppercase text-lg">{c.name}</p>
                <p className="text-xs opacity-70 tracking-wider">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl uppercase border-b-2 border-ink pb-3 mb-6">
            Typography
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="slab bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">Display</p>
              <p className="font-display text-5xl uppercase leading-none">
                Antonio Black
              </p>
              <p className="text-sm text-foreground/70 mt-3">
                Headlines, marquee, wordmarks. Tight tracking, full caps.
              </p>
            </div>
            <div className="slab bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">Accent</p>
              <p className="font-marker text-explosion text-4xl">
                Permanent Marker
              </p>
              <p className="text-sm text-foreground/70 mt-3">
                Hand-drawn flourish for taglines and scribbles.
              </p>
            </div>
            <div className="slab bg-card p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">Body</p>
              <p className="font-sans text-xl leading-relaxed">
                Outfit — clean, readable, modern. Used everywhere else, weight 400–600.
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl uppercase border-b-2 border-ink pb-3 mb-6">
            Official Bio
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">{bio}</p>
        </section>

        {/* Downloads */}
        <section>
          <h2 className="font-display text-3xl md:text-4xl uppercase border-b-2 border-ink pb-3 mb-6">
            Downloads
          </h2>
          <ul className="divide-y divide-ink/20 border-y-2 border-ink">
            {downloads.map((d) => (
              <li key={d.href} className="flex items-center justify-between py-4">
                <span className="font-sans">{d.label}</span>
                <a href={d.href} download>
                  <Button variant="wine" size="sm" className="gap-2">
                    <Download className="size-4" />
                    Download
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="text-center pt-8 border-t-2 border-ink">
          <p className="font-marker text-explosion text-2xl mb-2">booking &amp; press</p>
          <a
            href="mailto:funnyroz@gmail.com"
            className="font-display text-3xl md:text-5xl uppercase hover:text-explosion transition-colors"
          >
            funnyroz@gmail.com
          </a>
        </section>
      </div>
    </motion.main>
  );
};

export default PressKit;
