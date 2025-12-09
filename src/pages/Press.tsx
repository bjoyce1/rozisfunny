import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import rozRed from "@/assets/roz-red.jpeg";
import rozHero from "@/assets/roz-hero.jpeg";
import rozStage from "@/assets/roz-stage.jpeg";

const pressLinks = [
  { title: "Comedy Central Interview", outlet: "Comedy Central", link: "#" },
  { title: "Rising Stars of Comedy", outlet: "LA Weekly", link: "#" },
  { title: "Women in Comedy Feature", outlet: "The Grio", link: "#" },
];

const Press = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
              Press & <span className="text-gradient-gold">EPK</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Media resources, press kit, and promotional materials for event organizers and press.
            </p>
          </div>
        </div>
      </section>

      {/* EPK Section */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16 space-y-12">
          {/* Bio */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Official Bio</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Roz Washington</strong> is a Los Angeles-based stand-up comedienne, actor, radio host, and voice-over artist whose fearless and unapologetic comedy style has made her a favorite at venues across the country.
              </p>
              <p>
                She has headlined at Laugh Factory, The Comedy Store, The Improv, Comedy in Harlem, and major casino venues including Bally's and MGM Las Vegas. Her television credits include appearances on NBC, BET, TV One, and Bounce TV.
              </p>
              <p>
                As the founder of Pay The Lady Productions, Roz produces live comedy showcases and variety events, championing diverse voices in stand-up comedy.
              </p>
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-6">
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

          {/* Press Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold">Press Coverage</h2>
            <div className="space-y-3">
              {pressLinks.map((press, i) => (
                <a
                  key={i}
                  href={press.link}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/50 hover:border-accent/60 transition-colors group"
                >
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {press.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{press.outlet}</p>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Download EPK */}
          <div className="bg-secondary/50 rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-display font-bold">Download Full EPK</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Get the complete electronic press kit including hi-res photos, full bio, technical rider, and promotional materials.
            </p>
            <Button variant="hero" size="xl">
              <Download size={18} /> Download Press Kit (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Contact for Press */}
      <section className="bg-secondary/30">
        <div className="container py-12 text-center space-y-4">
          <h2 className="text-xl font-display font-bold">Media Inquiries</h2>
          <p className="text-muted-foreground">
            For interviews, press inquiries, or media requests, please contact:
          </p>
          <a 
            href="mailto:press@rozwashington.com" 
            className="text-accent hover:underline text-lg font-medium"
          >
            press@rozwashington.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
