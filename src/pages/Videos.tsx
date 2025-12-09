import { Layout } from "@/components/Layout";

const videos = [
  { title: "Roz Washington - Full Set", videoId: "9llEkazrclM", category: "Full Set" },
  { title: "Crowd Work Chaos", videoId: "193I6X9URjM", category: "Live" },
  { title: "Roz vs Relationships", videoId: "FKLyRXLNuYM", category: "Stand-up" },
  { title: "HR Would Hate This Set", videoId: "NEhIe3aWUrI", category: "Short" },
  { title: "Dating in LA", videoId: "RUO-56EJIiw", category: "Short" },
  { title: "Comedy Special Clip", videoId: "4myA0NbrP1I", category: "Live" },
  { title: "Late Night Comedy", videoId: "CsbCHwpCp5g", category: "TV" },
  { title: "Radio Interview", videoId: "gMO2qlZmaSU", category: "Interview" },
  { title: "Behind the Scenes", videoId: "4U52gpsKlWc", category: "BTS" },
  { title: "Comedy Club Night", videoId: "bJkdybDfeew", category: "Live" },
  { title: "Best of Roz", videoId: "m1Rqv6ccmIw", category: "Compilation" },
  { title: "Podcast Appearance", videoId: "RJdpAhqoQQQ", category: "Interview" },
];

const Videos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 spotlight" />
        <div className="container relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
              Videos & <span className="text-gradient-gold">Clips</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stand-up clips, crowd work, TV appearances, and behind-the-scenes chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="border-b border-border">
        <div className="container py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-border bg-card/50 flex flex-col hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video bg-background">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-xs uppercase tracking-wide text-accent font-medium">
                    {video.category}
                  </span>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
