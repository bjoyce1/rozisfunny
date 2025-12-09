import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Calendar, ArrowRight } from "lucide-react";
import rozHero from "@/assets/roz-hero.jpeg";
import rozStage from "@/assets/roz-stage.jpeg";

const upcomingShows = [
  { date: "Jan 25, 2026", city: "Los Angeles, CA", venue: "Laugh Factory", link: "#" },
  { date: "Feb 02, 2026", city: "Houston, TX", venue: "Improv Houston", link: "#" },
  { date: "Feb 10, 2026", city: "New York, NY", venue: "Comedy in Harlem", link: "#" },
];

const featuredClips = [
  { 
    title: "Crowd Work Chaos", 
    videoId: "193I6X9URjM", 
    platform: "YouTube" 
  },
  { 
    title: "Roz vs Relationships", 
    videoId: "FKLyRXLNuYM", 
    platform: "YouTube" 
  },
  { 
    title: "HR Would Hate This Set", 
    videoId: "NEhIe3aWUrI", 
    platform: "Short" 
  },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Spotlight Effect */}
        <div className="absolute inset-0 spotlight" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-up">
              <p className="text-xs tracking-[0.25em] text-accent uppercase font-medium">
                Comedienne • Actor • Radio Host • Voice Over Artist
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
                Funny. Fearless.
                <span className="text-gradient-gold block">Unfiltered.</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                Roz Washington brings classic comedy energy with a modern mouth — from
                the biggest clubs in the country to your favorite screens and streams.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  variant="hero" 
                  onClick={() => scrollToSection("videos")}
                >
                  <Play size={18} /> Watch a Clip
                </Button>
                <Button 
                  variant="heroOutline"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Roz
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground pt-4">
                As seen at Laugh Factory, The Improv, Comedy in Harlem, Bally's, MGM, and more.
              </p>
            </div>

            {/* Right Content - Image + Quick Laugh Button */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div 
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-border shadow-2xl animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <img 
                  src={rozHero} 
                  alt="Roz Washington - Los Angeles comedian" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              <Button
                variant="wine"
                size="lg"
                className="rounded-full animate-glow-pulse"
                onClick={() => scrollToSection("quick-laugh")}
              >
                😂 Need a quick laugh?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LAUGH SECTION */}
      <section id="quick-laugh" className="bg-secondary/50 border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Hit Play. Laugh Immediately.
            </h2>
            <p className="text-muted-foreground">
              A quick dose of Roz's stand-up — no co-pay required.
            </p>
            
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4myA0NbrP1I"
                title="Roz Washington Comedy Clip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS */}
      <section id="shows" className="border-b border-border">
        <div className="container py-12 lg:py-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Upcoming Shows
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Live & On Stage</p>
            </div>
            <Link to="/shows">
              <Button variant="outline" size="sm">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingShows.map((show, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card/50 p-6 flex flex-col justify-between hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar size={14} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {show.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{show.city}</h3>
                  <p className="text-sm text-muted-foreground">{show.venue}</p>
                </div>
                <Button variant="ticket" size="sm" className="mt-6">
                  Get Tickets
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS / CLIPS */}
      <section id="videos" className="bg-secondary/30 border-b border-border">
        <div className="container py-12 lg:py-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Clips & Chaos
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Stand-up, crowd work, and pure foolishness.
              </p>
            </div>
            <Link to="/videos">
              <Button variant="outline" size="sm">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredClips.map((clip, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-border bg-card/50 flex flex-col hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video bg-background relative">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${clip.videoId}`}
                    title={clip.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {clip.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {clip.platform}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Meet Roz Washington
              </h2>
              <p className="text-muted-foreground">
                Los Angeles native Roz Washington has lit up stages across the
                country — from Laugh Factory and The Comedy Store to Bally's and
                MGM in Las Vegas — with a fearless, high-energy style rooted in
                sharp wit and real-life stories.
              </p>
              <p className="text-muted-foreground">
                She's appeared on NBC, BET, TV One, and Bounce TV, co-hosted hit
                radio shows, voiced animated characters, and built her own live
                comedy brand under Pay The Lady Productions.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-2">
                  Read Full Bio <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="rounded-3xl border border-border bg-card/50 p-6 space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 mx-auto">
                <img 
                  src={rozStage} 
                  alt="Roz Washington on stage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-center">
                <p className="italic text-muted-foreground">
                  "They said I was 'too much' — so I put it on stage and sold tickets."
                </p>
                <footer className="mt-3 text-sm text-accent font-medium">
                  — Roz Washington
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="bg-secondary/50">
        <div className="container py-12 lg:py-16">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Booking & Inquiries
              </h2>
              <p className="text-muted-foreground">
                For clubs, festivals, colleges, corporate events, radio, voice-over,
                and on-camera opportunities — reach out below.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Organization / Venue"
                />
                <input
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="City / Event Location"
                />
              </div>
              <textarea
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors min-h-[120px] resize-none"
                placeholder="Tell us about the event, dates, budget range, and what kind of show you'd like Roz to do."
              />
              <Button variant="hero" size="xl" className="w-full md:w-auto">
                Submit Booking Request
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Prefer email? Reach out at{" "}
              <a href="mailto:booking@rozwashington.com" className="text-accent hover:underline">
                booking@rozwashington.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
