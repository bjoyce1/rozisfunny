import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const shows = [
  { date: "Jan 25, 2026", city: "Los Angeles, CA", venue: "Laugh Factory", link: "#", soldOut: false },
  { date: "Feb 02, 2026", city: "Houston, TX", venue: "Improv Houston", link: "#", soldOut: false },
  { date: "Feb 10, 2026", city: "New York, NY", venue: "Comedy in Harlem", link: "#", soldOut: false },
  { date: "Feb 14, 2026", city: "Atlanta, GA", venue: "Uptown Comedy Corner", link: "#", soldOut: false },
  { date: "Feb 21, 2026", city: "Chicago, IL", venue: "The Comedy Bar", link: "#", soldOut: false },
  { date: "Mar 05, 2026", city: "Las Vegas, NV", venue: "MGM Grand", link: "#", soldOut: true },
];

const Shows = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
              Live <span className="text-gradient-gold">Shows</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Catch Roz Washington live on stage. New dates added regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Shows List */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl mx-auto space-y-4">
            {shows.map((show, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card/50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-accent/60 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-accent">
                    <Calendar size={16} />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {show.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{show.city}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} />
                    <span className="text-sm">{show.venue}</span>
                  </div>
                </div>
                
                {show.soldOut ? (
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-muted text-muted-foreground">
                    Sold Out
                  </span>
                ) : (
                  <Button variant="ticket">
                    Get Tickets
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* No shows message */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground">
              Don't see a show near you?{" "}
              <a href="/#contact" className="text-accent hover:underline">
                Request Roz for your event →
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shows;
