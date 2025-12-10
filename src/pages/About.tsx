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
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
              About Roz Washington
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
              Funny, Seasoned, and Absolutely Not Here for Your Nonsense.
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Roz Washington is the kind of comedian who makes you laugh, then makes you think,
              then makes you text your friend, "You should've been here."
            </p>
          </div>
        </div>
      </section>

      {/* Photos + Short Bio */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-10 items-start">
            {/* Photo Gallery */}
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

            {/* Short Fan-Facing Bio */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">The Short Story (For the Fans)</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Los Angeles native <strong className="text-foreground">Roz Washington</strong> is a
                  certified problem on the mic — the good kind. She brings fearless, high-energy,
                  grown-woman comedy to every stage she touches, mixing real-life stories, sharp
                  observations, and the kind of honesty that makes people laugh and shift in their seat
                  at the same time.
                </p>
                <p>
                  From Hollywood to Harlem, Roz has rocked legendary clubs like{" "}
                  <strong className="text-foreground">The Laugh Factory</strong>,{" "}
                  <strong className="text-foreground">The Comedy Store</strong>,{" "}
                  <strong className="text-foreground">The Improv</strong> (Hollywood, Houston, Arlington,
                  Ontario, Brea, Irvine), <strong className="text-foreground">Bally's</strong>,
                  <strong className="text-foreground"> MGM</strong>, and{" "}
                  <strong className="text-foreground">Hard Rock</strong> in Las Vegas, as well as{" "}
                  <strong className="text-foreground">Comedy Union</strong>,{" "}
                  <strong className="text-foreground">Mic Drop San Diego</strong>,{" "}
                  <strong className="text-foreground">Tommy T's</strong> in Sacramento,{" "}
                  <strong className="text-foreground">Comedy in Harlem</strong> in New York, and the{" "}
                  <strong className="text-foreground">Howard Theatre</strong> in D.C.
                </p>
                <p>
                  She's the one you call when you want a show that's smart, raw, a little bit
                  reckless, and absolutely unforgettable.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-accent pl-6 py-4 my-8">
                <p className="text-xl font-display italic text-foreground">
                  "They said I was 'too much' — so I put it on stage and sold tickets."
                </p>
                <footer className="mt-3 text-sm text-accent">— Roz Washington</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Professional Bio</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Roz Washington</strong> is a multi-hyphenate entertainer:
                comedienne, actor, radio host, voice-over artist, writer, and producer. Since entering
                the comedy circuit, she has built a strong reputation across the United States for her
                commanding stage presence, razor-sharp timing, and unapologetically authentic point of
                view.
              </p>
              <p>
                On stage, Roz has hosted and featured for national headliners at premier venues
                including The Laugh Factory, The Comedy Store, The Improv (Hollywood, Houston, Arlington,
                Ontario, Brea, Irvine), HAHA Café, Flappers, Mic Drop San Diego, Comedy Union Los
                Angeles, Comedy in Harlem New York, Tommy T's Sacramento, The Howard Theatre D.C.,
                and major casino stages in Las Vegas such as Bally's, MGM, and Hard Rock. Her
                performances blend bold storytelling with sharp crowd work, making her a favorite with
                both audiences and fellow comics.
              </p>
              <p>
                As an actor and on-screen talent, Roz has appeared on{" "}
                <strong className="text-foreground">NBC</strong>, <strong className="text-foreground">BET</strong>,{" "}
                <strong className="text-foreground">TV One</strong>, and{" "}
                <strong className="text-foreground">Bounce TV</strong>, bringing her natural comedic sensibility
                to television. Her distinctive voice has also made her a go-to for broadcast and voice
                work, including voice-over performance in the animated series{" "}
                <strong className="text-foreground">"The BluntHeads"</strong>.
              </p>
              <p>
                On the airwaves, Roz co-hosts the popular internet radio show{" "}
                <strong className="text-foreground">Quakeshouse Radio</strong> and the YouTube-based platform{" "}
                <strong className="text-foreground">ApolloNightLA</strong>, a showcase for unsigned and
                independent music artists. With her quick wit and fast-paced delivery, she delivers
                entertainment news, cultural commentary, political observations, and celebrity gossip
                in a style that is sharp, comedic, and fully her own.
              </p>
              <p>
                Behind the scenes, Roz is the writer and creator of numerous comedy sketches, parodies,
                and short films, including{" "}
                <strong className="text-foreground">"The Payout," "Cheat On Me If You Want To," "Last Night
                My Weave Saved My Life," "Old Man vs. Ruff Neck,"</strong> and the Christmas comedy short{" "}
                <strong className="text-foreground">"Compton Baby."</strong> Her work as a producer is
                anchored under her own brand,{" "}
                <strong className="text-foreground">Pay The Lady Productions</strong>, where she curates and
                produces live comedy shows, giving platforms to other talented comics while expanding
                her own creative universe.
              </p>
              <p>
                Often described as the modern, crisp essence of classic entertainment, Roz has drawn
                comparisons to <strong className="text-foreground">Carol Burnett</strong> with a hint of{" "}
                <strong className="text-foreground">Jerry Lewis</strong>, merged with the fearless wit of{" "}
                <strong className="text-foreground">Richard Pryor</strong>,{" "}
                <strong className="text-foreground">Moms Mabley</strong>, and{" "}
                <strong className="text-foreground">Paul Mooney</strong>. Her work reflects a distinct blend
                of old-school showmanship and present-day realness.
              </p>
              <p>
                With a clear vision, growing national presence, and an ever-expanding body of work,
                Roz Washington continues to solidify herself as a powerful and undeniable force in
                comedy and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Milestones */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">Highlights & Milestones</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Toured and performed at major clubs across Los Angeles, Las Vegas, New York, D.C., Houston, and beyond.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Hosted and featured for national headliners at mainstream comedy venues across the country.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Television appearances on NBC, BET, TV One, and Bounce TV.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Co-host of Quakeshouse Radio and ApolloNightLA, spotlighting indie and unsigned talent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Voice-over artist in the animated series "The BluntHeads."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Writer/creator of multiple comedy sketches and short films including "The Payout," "Cheat On Me If You Want To," and "Compton Baby."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Founder and producer of Pay The Lady Productions — a live comedy brand and production imprint.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="bg-secondary/30">
        <div className="container py-12 lg:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-display font-bold">A Little Extra (Because Roz Is)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="font-semibold mb-2 text-foreground">Comedy Style</p>
                <p className="text-muted-foreground text-sm">
                  Relatable, unfiltered, and unapologetically grown. Roz talks life, love, family,
                  work, and everything in between — with jokes that hit just as hard as the truth
                  behind them.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="font-semibold mb-2 text-foreground">On Stage Philosophy</p>
                <p className="text-muted-foreground text-sm">
                  If she's going through it, it's probably going in the set. Nothing is
                  wasted — every situation is either a lesson or material.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="font-semibold mb-2 text-foreground">Off Stage</p>
                <p className="text-muted-foreground text-sm">
                  Offstage, Roz is just as quick-witted, but a little more behind-the-scenes — writing,
                  producing, creating characters, and building stages for others to shine on.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/50 p-5">
                <p className="font-semibold mb-2 text-foreground">Unofficial Title</p>
                <p className="text-muted-foreground text-sm">
                  Crowd work specialist, energy shifter, and the friend you call when you need the
                  truth — but also need to laugh about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
