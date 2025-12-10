import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

type ShowType = "club" | "festival" | "special" | "private";

type ShowItem = {
  date: string;
  city: string;
  venue: string;
  type: ShowType;
  ticketLink?: string;
  note?: string;
};

const upcomingShows: ShowItem[] = [
  {
    date: "Jan 25, 2026",
    city: "Los Angeles, CA",
    venue: "Laugh Factory – Hollywood",
    type: "club",
    ticketLink: "#",
    note: "Featuring Set",
  },
  {
    date: "Feb 02, 2026",
    city: "Houston, TX",
    venue: "Houston Improv",
    type: "club",
    ticketLink: "#",
    note: "Weekend Showcase",
  },
  {
    date: "Feb 14, 2026",
    city: "Las Vegas, NV",
    venue: "Bally's Casino – Comedy Night",
    type: "special",
    ticketLink: "#",
    note: "Valentine's Day Special",
  },
  {
    date: "Mar 08, 2026",
    city: "New York, NY",
    venue: "Comedy in Harlem",
    type: "club",
    ticketLink: "#",
    note: "Headlining",
  },
];

const pastShows: ShowItem[] = [
  {
    date: "Nov 10, 2025",
    city: "Sacramento, CA",
    venue: "Tommy T's",
    type: "club",
    note: "Sold Out",
  },
  {
    date: "Oct 21, 2025",
    city: "Washington, D.C.",
    venue: "Howard Theatre",
    type: "special",
    note: "Live Taping",
  },
  {
    date: "Sep 30, 2025",
    city: "Las Vegas, NV",
    venue: "MGM Grand – Comedy Night",
    type: "club",
  },
  {
    date: "Aug 15, 2025",
    city: "Los Angeles, CA",
    venue: "Comedy Union",
    type: "club",
  },
];

function ShowBadge({ type }: { type: ShowType }) {
  const labels: Record<ShowType, string> = {
    club: "Club",
    festival: "Festival",
    special: "Special Event",
    private: "Private",
  };

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase tracking-[0.15em] bg-muted text-muted-foreground">
      {labels[type]}
    </span>
  );
}

const Shows = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
              Live Shows
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
              See Roz Washington Live
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From comedy clubs and casinos to theaters and special events, Roz brings
              high-energy, grown-woman comedy to stages across the country. Check back
              often — new dates are added regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold">Upcoming Dates</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {upcomingShows.length} Show{upcomingShows.length > 1 ? "s" : ""} Listed
            </span>
          </div>

          {upcomingShows.length === 0 ? (
            <p className="text-muted-foreground">
              New shows are being booked. Join the mailing list or follow on social
              media to be the first to know about upcoming dates.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingShows.map((show, i) => (
                <article
                  key={`upcoming-${i}`}
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
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={14} />
                      <span className="text-sm">{show.venue}</span>
                    </div>
                    <div className="pt-2">
                      <ShowBadge type={show.type} />
                    </div>
                    {show.note && (
                      <p className="text-xs text-muted-foreground">{show.note}</p>
                    )}
                  </div>
                  {show.ticketLink && (
                    <Button variant="ticket" size="sm" className="mt-6">
                      Get Tickets
                    </Button>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Shows */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-12 lg:py-16 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold">Past Shows & Highlights</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected Dates
            </span>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            A snapshot of where Roz has brought the laughs — from legendary comedy
            rooms to historic theaters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastShows.map((show, i) => (
              <article
                key={`past-${i}`}
                className="rounded-2xl border border-border bg-card/30 p-5 space-y-2"
              >
                <p className="text-xs text-muted-foreground uppercase">{show.date}</p>
                <h3 className="font-semibold">{show.city}</h3>
                <p className="text-sm text-muted-foreground">{show.venue}</p>
                <div className="pt-1">
                  <ShowBadge type={show.type} />
                </div>
                {show.note && (
                  <p className="text-xs text-accent">{show.note}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-secondary/50">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-display font-bold">Book Roz For Your Stage</h2>
            <p className="text-muted-foreground">
              Clubs, festivals, colleges, corporate events, and private shows welcome.
              For availability and rates, visit the booking page or email directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero">Book Now</Button>
              </Link>
              <Button variant="heroOutline" asChild>
                <a href="mailto:booking@rozwashington.com">Email Booking</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shows;
