import { Layout } from "@/components/Layout";
import rozPortrait from "@/assets/roz-portrait.jpeg";
import rozHat from "@/assets/roz-hat.png";
import rozPink from "@/assets/roz-pink.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
              About <span className="text-gradient-gold">Roz</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los Angeles native. Comedy veteran. Unapologetically hilarious.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-10 items-start">
            {/* Photo */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border-2 border-border shadow-xl">
                <img 
                  src={rozPortrait} 
                  alt="Roz Washington portrait" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={rozHat} 
                    alt="Roz Washington performing" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={rozPink} 
                    alt="Roz Washington on stage" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Roz Washington</strong> is a multi-hyphenate entertainer — stand-up comedienne, actor, radio host, voice-over artist, and producer — who has lit up stages across the United States with her fearless, high-energy brand of humor.
                </p>
                <p>
                  A Los Angeles native, Roz has headlined top venues including the legendary Laugh Factory, The Comedy Store, The Improv, and Comedy in Harlem, as well as casinos like Bally's and MGM in Las Vegas. Her sharp wit, bold delivery, and unapologetic comedy style have made her a crowd favorite from coast to coast.
                </p>
                <p>
                  Beyond the stage, Roz has built a diverse entertainment career. She's appeared on NBC, BET, TV One, and Bounce TV, co-hosted hit radio shows, and lent her voice to animated characters and commercial campaigns. Her command of the mic extends from comedy clubs to corporate events, private parties, and major festivals.
                </p>
                <p>
                  Roz is also the founder of <strong className="text-foreground">Pay The Lady Productions</strong>, a live entertainment company that produces comedy showcases and variety events, giving platform to emerging and established voices in stand-up comedy.
                </p>
                <p>
                  Whether she's telling stories about growing up in LA, navigating modern dating, or calling out the absurdity of everyday life, Roz Washington delivers laughter that's real, relatable, and unapologetically her.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-accent pl-6 py-4 my-8">
                <p className="text-xl font-display italic text-foreground">
                  "They said I was 'too much' — so I put it on stage and sold tickets."
                </p>
                <footer className="mt-3 text-sm text-accent">— Roz Washington</footer>
              </blockquote>

              {/* Credits */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">
                  Notable Appearances
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["NBC", "BET", "TV One", "Bounce TV", "Laugh Factory", "The Comedy Store", "The Improv", "MGM Las Vegas", "Bally's"].map((credit) => (
                    <span 
                      key={credit}
                      className="px-3 py-1.5 rounded-full text-sm bg-muted border border-border"
                    >
                      {credit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
