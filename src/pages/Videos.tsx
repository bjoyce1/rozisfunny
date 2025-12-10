import { Layout } from "@/components/Layout";
import { Mail } from "lucide-react";

type VideoCategory = "standup" | "crowdwork" | "sketch" | "interview";

type VideoItem = {
  title: string;
  videoId: string;
  isShort?: boolean;
  category: VideoCategory;
};

const videos: VideoItem[] = [
  // Stand-Up
  { title: "Roz Washington - Full Set (40 min)", videoId: "9llEkazrclM", category: "standup" },
  { title: "Live at the Improv", videoId: "4myA0NbrP1I", category: "standup" },
  { title: "Roz vs Relationships", videoId: "FKLyRXLNuYM", category: "standup" },
  { title: "Comedy Club Night", videoId: "bJkdybDfeew", category: "standup" },
  
  // Crowd Work
  { title: "Crowd Work Chaos", videoId: "193I6X9URjM", category: "crowdwork" },
  { title: "Front Row Couple Wasn't Ready", videoId: "NEhIe3aWUrI", isShort: true, category: "crowdwork" },
  { title: "Dating in LA", videoId: "RUO-56EJIiw", isShort: true, category: "crowdwork" },
  
  // Sketches
  { title: "HR Would Hate This Set", videoId: "CsbCHwpCp5g", category: "sketch" },
  { title: "Behind the Scenes", videoId: "4U52gpsKlWc", category: "sketch" },
  { title: "Best of Roz Compilation", videoId: "m1Rqv6ccmIw", category: "sketch" },
  
  // Interviews
  { title: "Radio Interview - Quakeshouse", videoId: "gMO2qlZmaSU", category: "interview" },
  { title: "Podcast Appearance", videoId: "RJdpAhqoQQQ", category: "interview" },
  { title: "Comedy Special Feature", videoId: "mo4IhyceQEk", category: "interview" },
];

const categories: { key: VideoCategory; label: string }[] = [
  { key: "standup", label: "Stand-Up" },
  { key: "crowdwork", label: "Crowd Work" },
  { key: "sketch", label: "Sketches & Bits" },
  { key: "interview", label: "Interviews & Podcasts" },
];

function VideoEmbed({ video }: { video: VideoItem }) {
  return (
    <div className={`w-full ${video.isShort ? 'aspect-[9/16] max-w-[280px] mx-auto' : 'aspect-video'} rounded-xl overflow-hidden border border-border bg-background`}>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const Videos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
              Videos & Clips
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
              Watch Roz Washington In Action
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stand-up clips, crowd work chaos, sketches, and on-air appearances —
              all in one place. Pick a category or scroll and let the laughs find you.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16 space-y-16">
          {categories.map((cat) => {
            const filtered = videos.filter((v) => v.category === cat.key);
            if (!filtered.length) return null;

            return (
              <div key={cat.key} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-display font-bold">{cat.label}</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {filtered.length} Clip{filtered.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((video, i) => (
                    <article
                      key={`${cat.key}-${i}`}
                      className="group rounded-2xl border border-border bg-card/50 p-4 space-y-4 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
                    >
                      <VideoEmbed video={video} />
                      <div className="space-y-1">
                        <h3 className="font-semibold group-hover:text-accent transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          {video.isShort ? "YouTube Short" : "YouTube"}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30">
        <div className="container py-12 text-center space-y-4">
          <p className="text-muted-foreground">
            For full sets, custom clips, or media usage, contact:
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
      </section>
    </Layout>
  );
};

export default Videos;
