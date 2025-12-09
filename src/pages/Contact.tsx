import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
              Book <span className="text-gradient-gold">Roz</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clubs, festivals, colleges, corporate events, radio, voice-over, and on-camera opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Whether you're looking to book Roz for your venue, event, or production — or just want to say hi — we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:booking@rozwashington.com" className="text-muted-foreground hover:text-accent transition-colors">
                      booking@rozwashington.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Management</h3>
                    <p className="text-muted-foreground">Pay The Lady Productions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Based In</h3>
                    <p className="text-muted-foreground">Los Angeles, CA</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="rounded-2xl bg-secondary/50 p-6 border border-border">
                <p className="italic text-muted-foreground">
                  "I bring the energy, the laughs, and the 'did she really just say that?' moments that audiences remember."
                </p>
                <p className="mt-3 text-sm text-accent font-medium">— Roz Washington</p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-border bg-card/50 p-8">
              <h2 className="text-xl font-display font-bold mb-6">Booking Request</h2>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name *</label>
                    <input
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                      placeholder="you@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization / Venue</label>
                    <input
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                      placeholder="Company or venue name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Location</label>
                    <input
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Date</label>
                    <input
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                      placeholder="MM/DD/YYYY"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Type</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors">
                      <option value="">Select type</option>
                      <option value="comedy-club">Comedy Club</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Party</option>
                      <option value="festival">Festival</option>
                      <option value="college">College / University</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your event *</label>
                  <textarea
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors min-h-[140px] resize-none"
                    placeholder="Share details about the event, expected audience size, budget range, and what kind of show you'd like Roz to do."
                    required
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  Submit Booking Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
