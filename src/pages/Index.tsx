import { useEffect, useState } from "react";
import { Instagram, Facebook, Youtube, Music2, ExternalLink, Mail, ArrowDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import rozHero from "@/assets/roz-hero.jpeg";
import rozStage from "@/assets/roz-stage.jpeg";

/* ---------------- Data ---------------- */

const navItems = [
  { label: "About", href: "#about" },
  { label: "Reel", href: "#reel" },
  { label: "Tour", href: "#tour" },
  { label: "Book", href: "#book" },
];

const credits = [
  { title: "Hump Day Comedy the Movie", year: "2025", role: "Actor", tag: "ACTOR" },
  { title: "Boosters LA", year: "2022", role: "Actor", tag: "ACTOR" },
  { title: "West Comedy Jam", year: "—", role: "Performer", tag: "STAND-UP" },
  { title: "Pay The Lady", year: "Funny Media Group", role: "Star, Stand-Up Special", tag: "SPECIAL" },
  { title: "Apollo Night L.A. Radio", year: "Ongoing", role: "Co-Host", tag: "HOST" },
  { title: "Laffaholics (BRIC TV)", year: "—", role: "Featured Comedian", tag: "TV" },
];

const tourDates = [
  { date: "TBA 2026", venue: "Improv Hollywood", city: "Los Angeles, CA" },
  { date: "TBA 2026", venue: "Improv Houston", city: "Houston, TX" },
  { date: "TBA 2026", venue: "Improv Brea", city: "Brea, CA" },
];

const featuredClips = [
  { title: "Crowd Work Chaos", id: "193I6X9URjM" },
  { title: "Roz vs Relationships", id: "FKLyRXLNuYM" },
  { title: "HR Would Hate This Set", id: "NEhIe3aWUrI" },
];

const quotes = [
  { text: "One of the most explosive comedians on the planet.", source: "Tagline Standard" },
  { text: "Roz commands the stage like she owns the lease.", source: "Press" },
];

/* ---------------- Page ---------------- */

const Index = () => {
  const [year] = useState(new Date().getFullYear());
  const [bookingSent, setBookingSent] = useState(false);

  useEffect(() => {
    document.title = "Roz Washington — Stand-Up Comedian, Actor & Radio Host | Apollo Night LA";
  }, []);

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Booking inquiry — ${f.get("name") || "Roz fan"}`);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nEvent date: ${f.get("date")}\nVenue / City: ${f.get("venue")}\nEvent type: ${f.get("type")}\nBudget: ${f.get("budget")}\n\n${f.get("message")}`
    );
    window.location.href = `mailto:funnyroz@gmail.com?subject=${subject}&body=${body}`;
    setBookingSent(true);
    toast.success("Booking request sent! Roz will be in touch soon.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    toast.success(`You're on the list: ${email}`);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="bg-bone text-ink min-h-screen overflow-x-hidden">
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-50 bg-bone/90 backdrop-blur border-b-2 border-ink">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="font-display font-black text-2xl tracking-tight">
            ROZ<span className="text-explosion">.</span>COM
          </a>
          <nav className="flex items-center gap-6 font-display text-sm md:text-base font-bold uppercase">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-explosion transition-colors hover-shake">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="relative border-b-4 border-ink">
        <div className="container relative py-16 md:py-24 lg:py-32">
          {/* tour stamp */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 hidden sm:block z-10">
            <div className="stamp text-xs md:text-sm">
              EST.<br />Apollo Night LA
            </div>
          </div>

          <p className="font-marker text-explosion text-lg md:text-xl mb-4 animate-scribble-in">
            one of the most EXPLOSIVE comedians on the planet
          </p>

          <h1
            className="font-display font-black text-ink leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)" }}
          >
            <span className="block animate-slide-up-stagger" style={{ animationDelay: "0.05s" }}>ROZ</span>
            <span className="block animate-slide-up-stagger" style={{ animationDelay: "0.2s" }}>WASHINGTON</span>
          </h1>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a
              href="#book"
              className="slab bg-explosion text-ink font-display font-black uppercase text-xl px-8 py-4 hover-shake inline-flex items-center justify-center"
            >
              Book Roz
            </a>
            <a
              href="#reel"
              className="slab bg-bone text-ink font-display font-black uppercase text-xl px-8 py-4 hover-shake inline-flex items-center justify-center"
            >
              Watch the Reel
            </a>
          </div>

          <div className="mt-16 flex justify-end items-end gap-2 text-explosion font-marker text-lg md:text-xl">
            <span className="rotate-[-4deg]">scroll, scroll, scroll</span>
            <ArrowDown className="animate-bounce" size={28} />
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="border-b-4 border-ink">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
          <div className="slab bg-ink p-2">
            <img
              src={rozHero}
              alt="Portrait of Roz Washington, Los Angeles stand-up comedian"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-top grayscale-[10%]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="marquee-underline">About Roz</span>
            </h2>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "ACTOR", bg: "bg-explosion", rot: "rotate-[-3deg]" },
                { label: "WRITER", bg: "bg-gold", rot: "rotate-[2deg]" },
                { label: "RADIO HOST", bg: "bg-explosion", rot: "rotate-[-2deg]" },
                { label: "VO ARTIST", bg: "bg-gold", rot: "rotate-[3deg]" },
              ].map((b) => (
                <span
                  key={b.label}
                  className={`${b.bg} ${b.rot} slab text-ink font-display font-black px-3 py-1 text-sm md:text-base uppercase`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <p className="font-sans text-lg leading-relaxed text-ink">
              Roz Washington is a Los Angeles–based stand-up comedian, actor, writer, and radio host
              called <span className="font-marker text-explosion">"one of the most explosive comedians on the planet."</span>{" "}
              She co-hosts the <strong>Apollo Night L.A.</strong> radio show, plays the national Improv
              comedy club circuit, and headlines her recurring{" "}
              <strong>Rozzzzzz Komedy &amp; Karaoke</strong> events.
            </p>
            <p className="font-sans text-lg leading-relaxed text-ink">
              Film and TV credits include <em>Hump Day Comedy the Movie</em>, <em>Boosters LA</em>,
              and <em>West Comedy Jam</em>. Her stand-up special{" "}
              <strong>Pay The Lady</strong> is streaming now.
            </p>
          </div>
        </div>
      </section>

      {/* ============ REEL ============ */}
      <section id="reel" className="border-b-4 border-ink bg-bone">
        <div className="container py-16 md:py-24 space-y-10">
          <h2 className="text-5xl md:text-7xl font-black text-center">
            <span className="marquee-underline">The Reel</span>
          </h2>

          <div className="slab aspect-video w-full max-w-5xl mx-auto bg-ink">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/k19gD1nhrAc"
              title="Roz Washington — Pay The Lady Special"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            {featuredClips.map((c) => (
              <div key={c.id} className="slab bg-bone group hover:-translate-y-1 transition-transform">
                <div className="aspect-video bg-ink">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${c.id}`}
                    title={c.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 border-t-2 border-ink">
                  <p className="font-display font-black uppercase text-xl">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CREDITS ============ */}
      <section id="credits" className="border-b-4 border-ink">
        <div className="container py-16 md:py-24 space-y-10">
          <h2 className="text-5xl md:text-7xl font-black">
            <span className="marquee-underline">Credits</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credits.map((c) => (
              <article key={c.title} className="slab bg-bone p-5 flex flex-col gap-3 hover:bg-gold/30 transition-colors">
                <h3 className="font-display font-black text-2xl leading-tight">{c.title}</h3>
                <p className="font-sans text-ash text-sm">{c.year} · {c.role}</p>
                <span className="self-start mt-auto bg-explosion text-ink font-display font-black uppercase text-xs px-2.5 py-1 slab">
                  {c.tag}
                </span>
              </article>
            ))}
          </div>

          <a
            href="https://www.imdb.com/name/nm7843347/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-bold uppercase border-b-2 border-ink hover:text-explosion hover:border-explosion"
          >
            Full IMDb credits <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* ============ APOLLO NIGHT LA ============ */}
      <section id="radio" className="bg-ink text-bone border-b-4 border-ink">
        <div className="container py-16 md:py-24 text-center space-y-8">
          <p className="font-marker text-gold text-xl rotate-[-2deg] inline-block">on the airwaves</p>
          <h2 className="text-5xl md:text-7xl font-black">
            Catch Roz <br className="md:hidden" /> on the Radio
          </h2>
          <p className="font-sans max-w-2xl mx-auto text-bone/85 text-lg">
            Co-host of <strong>Apollo Night L.A.</strong> — the show keeping Black comedy and culture
            loud in Los Angeles.
          </p>
          <a
            href="https://apollonightla.com"
            target="_blank"
            rel="noopener noreferrer"
            className="slab inline-flex items-center gap-2 bg-gold text-ink font-display font-black uppercase text-xl px-8 py-4 hover-shake"
          >
            Listen Now <ExternalLink size={18} />
          </a>

          {/* equalizer */}
          <div className="flex justify-center items-end gap-1 h-12 pt-4">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 bg-explosion"
                style={{
                  height: `${20 + Math.abs(Math.sin(i * 0.7)) * 80}%`,
                  animation: `eq 1.${i % 9}s ease-in-out ${i * 0.05}s infinite alternate`,
                }}
              />
            ))}
          </div>
          <style>{`@keyframes eq { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }`}</style>
        </div>
      </section>

      {/* ============ KOMEDY & KARAOKE ============ */}
      <section id="karaoke" className="border-b-4 border-ink">
        <div className="container py-16 md:py-24 grid md:grid-cols-[2fr,1fr] gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">
              ROZZZZ<span className="text-explosion">ZZZ</span> <br />
              KOMEDY <br /> &amp; KARAOKE
            </h2>
            <p className="font-marker text-explosion text-xl rotate-[-2deg] inline-block">
              the mic drop — literally
            </p>
            <p className="font-sans text-lg max-w-xl">
              The recurring show where stand-up meets the mic drop. Bring your voice, leave your dignity.
            </p>
          </div>

          <div className="slab bg-gold p-6 text-center">
            <p className="font-marker text-ink rotate-[-3deg] mb-2">next show</p>
            <p className="font-display font-black text-4xl">TBA</p>
            <p className="font-sans text-ink/80 mt-1">Los Angeles, CA</p>
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 slab inline-block bg-explosion text-ink font-display font-black uppercase px-6 py-3 hover-shake"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </section>

      {/* ============ TOUR ============ */}
      <section id="tour" className="border-b-4 border-ink bg-bone">
        <div className="container py-16 md:py-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="marquee-underline">On the Road</span>
            </h2>
            <a
              href="https://improv.com/comic/roz+washington/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold uppercase border-b-2 border-ink hover:text-explosion hover:border-explosion inline-flex items-center gap-2"
            >
              Improv tour dates <ExternalLink size={16} />
            </a>
          </div>

          <ul className="divide-y-2 divide-ink border-y-2 border-ink">
            {tourDates.map((t, i) => (
              <li key={i} className="py-5 grid md:grid-cols-[1fr,2fr,auto] items-center gap-4">
                <p className="font-display font-black text-3xl md:text-4xl">{t.date}</p>
                <div>
                  <p className="font-display font-black text-xl uppercase">{t.venue}</p>
                  <p className="font-sans text-ash">{t.city}</p>
                </div>
                <a
                  href="#book"
                  className="slab bg-explosion text-ink font-display font-black uppercase px-5 py-2.5 hover-shake justify-self-start md:justify-self-end"
                >
                  Tickets
                </a>
              </li>
            ))}
          </ul>

          <p className="font-sans">
            No dates near you?{" "}
            <a href="#newsletter" className="font-marker text-explosion text-xl">
              get on the list →
            </a>
          </p>
        </div>
      </section>

      {/* ============ PRESS / QUOTES ============ */}
      <section id="press" className="border-b-4 border-ink">
        <div className="container py-16 md:py-24 space-y-10">
          <h2 className="text-5xl md:text-7xl font-black">
            <span className="marquee-underline">Press</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {quotes.map((q, i) => (
              <blockquote key={i} className="space-y-3">
                <p className="font-display italic text-3xl md:text-4xl leading-tight">
                  "{q.text}"
                </p>
                <footer className="font-marker text-explosion text-lg">— {q.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOKING ============ */}
      <section id="book" className="border-b-4 border-ink bg-gold/40">
        <div className="container py-16 md:py-24 grid lg:grid-cols-[1.4fr,1fr] gap-12">
          <div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
              BOOK <br /> <span className="text-explosion">ROZ</span>
            </h2>
            <p className="font-marker text-ink text-xl rotate-[-2deg] inline-block mt-4">
              clubs · corporate · private · festival
            </p>

            {bookingSent ? (
              <div className="mt-8 slab bg-bone p-8 text-center space-y-3 animate-fade-up">
                <CheckCircle2 className="mx-auto text-explosion" size={48} />
                <p className="font-display font-black text-3xl uppercase">Request Sent!</p>
                <p className="font-sans text-ink/80">
                  Thanks — your booking inquiry is on its way to Roz. Expect a reply within 48 hours.
                </p>
                <button
                  onClick={() => setBookingSent(false)}
                  className="font-marker text-explosion text-lg underline"
                >
                  send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Name" required />
                <Field name="email" label="Email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="date" label="Event date" type="text" placeholder="MM / YYYY" />
                <Field name="venue" label="Venue / City" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-display font-bold uppercase text-sm" htmlFor="type">Event type</label>
                  <select
                    id="type" name="type"
                    className="w-full slab bg-bone px-4 py-3 font-sans focus:outline-none"
                  >
                    {["Corporate", "Club", "Private", "Festival", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <Field name="budget" label="Budget range" placeholder="e.g. $5k–$10k" />
              </div>
              <div className="space-y-1">
                <label className="font-display font-bold uppercase text-sm" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  className="w-full slab bg-bone px-4 py-3 font-sans focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="slab bg-explosion text-ink font-display font-black uppercase text-xl px-8 py-4 hover-shake inline-flex items-center gap-2"
              >
                Send Booking Request <Mail size={18} />
              </button>
            </form>
            )}
          </div>

          <aside className="space-y-6 self-start lg:sticky lg:top-28">
            <div className="slab bg-ink text-bone p-6 space-y-3">
              <p className="font-marker text-gold text-xl rotate-[-2deg] inline-block">direct line</p>
              <a
                href="mailto:funnyroz@gmail.com"
                className="block font-display font-black text-3xl break-words hover:text-explosion"
              >
                funnyroz@gmail.com
              </a>
              <p className="font-sans text-bone/80">Booking inquiries 24/7</p>
            </div>
            <div className="slab bg-bone p-6 space-y-2">
              <p className="font-display font-black uppercase">Or via GigSalad</p>
              <a
                href="https://www.gigsalad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-marker text-explosion text-xl"
              >
                book through gigsalad →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink text-bone">
        <div className="container py-14 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-black text-3xl">ROZ WASHINGTON</p>
            <p className="font-marker text-explosion text-lg mt-2 rotate-[-2deg] inline-block">
              one of the most explosive comedians on the planet
            </p>
            <img
              src={rozStage}
              alt="Roz Washington on stage"
              loading="lazy"
              className="mt-4 w-full max-w-xs aspect-[4/3] object-cover slab border-bone"
            />
          </div>

          <div>
            <p className="font-display font-black uppercase mb-4 text-gold">Follow</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://instagram.com/realfunnyroz", label: "Instagram", icon: <Instagram size={20} /> },
                { href: "https://facebook.com/ROZ.PYT", label: "Facebook", icon: <Facebook size={20} /> },
                { href: "https://youtube.com/@paytheladyproduction", label: "YouTube", icon: <Youtube size={20} /> },
                { href: "https://tiktok.com/@rozisfunny", label: "TikTok", icon: <Music2 size={20} /> },
                { href: "https://www.imdb.com/name/nm7843347/", label: "IMDb", icon: <ExternalLink size={20} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="slab border-bone p-3 hover:bg-explosion hover:text-ink hover:border-explosion transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div id="newsletter">
            <p className="font-display font-black uppercase mb-2 text-gold">On the List</p>
            <p className="font-sans text-bone/80 mb-4">Tour dates + new clips. No spam.</p>
            <form onSubmit={handleNewsletter} className="flex gap-0">
              <input
                type="email" name="email" required placeholder="you@email.com"
                className="flex-1 slab border-bone bg-ink text-bone px-4 py-3 font-sans focus:outline-none placeholder:text-bone/50"
              />
              <button
                type="submit"
                className="slab border-bone bg-explosion text-ink font-display font-black uppercase px-5 py-3 hover-shake"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-bone/20">
          <p className="container py-5 text-center text-xs uppercase tracking-widest text-bone/60 font-sans">
            © {year} Roz Washington · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

/* small input field component */
function Field({
  name, label, type = "text", required, placeholder,
}: {
  name: string; label: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="font-display font-bold uppercase text-sm">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full slab bg-bone px-4 py-3 font-sans focus:outline-none"
      />
    </div>
  );
}

export default Index;
