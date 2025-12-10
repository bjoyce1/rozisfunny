import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import rozRed from "@/assets/roz-red.jpeg";
import rozHero from "@/assets/roz-hero.jpeg";
import rozStage from "@/assets/roz-stage.jpeg";

const Press = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
              Press & Media
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
              Roz Washington – Press & EPK
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For interviews, features, festival programs, and media coverage, this page
              has everything you need to introduce <strong className="text-foreground">Roz Washington</strong> to your audience — fast.
            </p>
          </div>
        </div>
      </section>

      {/* Download EPK */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Download Electronic Press Kit (EPK)</h2>
            <p className="text-muted-foreground">
              The EPK includes a professional bio, stage credits, TV/radio highlights,
              approved photos, show descriptions, and contact information.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="/roz-washington-epk.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} /> Download EPK (PDF)
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              If the download button doesn't work, email{" "}
              <a href="mailto:booking@rozwashington.com" className="underline text-accent">
                booking@rozwashington.com
              </a>{" "}
              to request the latest EPK.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Quick Facts</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Based In</p>
                <p className="text-foreground">Los Angeles, CA</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Profession</p>
                <p className="text-foreground">Comedienne • Actor • Radio Host • Voice Over Artist • Producer</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Style</p>
                <p className="text-foreground">Fearless, grown-woman comedy with classic showmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Credits */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Selected Credits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/50 p-5 space-y-3">
                <p className="font-semibold text-foreground">Television & On-Screen</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>NBC – Featured comedic appearances</li>
                  <li>BET – Stand-up & comedy programming</li>
                  <li>TV One – Comedy and entertainment</li>
                  <li>Bounce TV – Comedic performance</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5 space-y-3">
                <p className="font-semibold text-foreground">Stand-Up & Live Comedy</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>The Laugh Factory – Hollywood</li>
                  <li>The Comedy Store – Hollywood</li>
                  <li>The Improv – Hollywood, Houston, Arlington, Ontario, Brea, Irvine</li>
                  <li>Comedy Union, HAHA Café, Flappers, Mic Drop San Diego</li>
                  <li>Bally's, MGM, Hard Rock – Las Vegas</li>
                  <li>Howard Theatre – Washington, D.C.</li>
                  <li>Comedy in Harlem – New York</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5 space-y-3">
                <p className="font-semibold text-foreground">Radio & Voice</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Co-Host – Quakeshouse Radio</li>
                  <li>Co-Host – ApolloNightLA (YouTube)</li>
                  <li>Voice Over – "The BluntHeads" (animated series)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5 space-y-3">
                <p className="font-semibold text-foreground">Writing & Producing</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Short Films – "The Payout," "Cheat On Me If You Want To," "Last Night My Weave Saved My Life"</li>
                  <li>Holiday Short – "Compton Baby"</li>
                  <li>Founder – Pay The Lady Productions (live comedy shows)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Photos */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Press Photos</h2>
            <p className="text-muted-foreground">
              High-resolution photos available for editorial use. Please credit: Roz Washington.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[rozRed, rozHero, rozStage].map((photo, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden border border-border relative">
                  <img 
                    src={photo} 
                    alt={`Roz Washington press photo ${i + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="gold" size="sm">
                      <Download size={16} /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voice & Style Quotes */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Voice & Style</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="italic text-muted-foreground">
                  "Roz Washington brings the crisp timing of classic comedy with the
                  unapologetic honesty of right now."
                </p>
                <p className="mt-3 text-xs text-muted-foreground">— Industry Description</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="italic text-muted-foreground">
                  "If I'm going through it, it's going in the set. Nothing is wasted — every
                  situation is either a lesson or material."
                </p>
                <p className="mt-3 text-xs text-muted-foreground">— Roz Washington</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="bg-secondary/30">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-display font-bold">Media & Interview Requests</h2>
            <p className="text-muted-foreground">
              For press interviews, podcast appearances, TV/radio bookings, and written features,
              please include your outlet, deadline, and format in your inquiry.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Mail size={20} className="text-accent" />
              <a 
                href="mailto:booking@rozwashington.com" 
                className="text-accent hover:underline font-medium"
              >
                booking@rozwashington.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
