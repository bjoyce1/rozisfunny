import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen bg-bone text-ink flex flex-col items-center justify-center px-6 text-center">
    <p className="font-marker text-explosion text-2xl rotate-[-3deg] inline-block mb-4">
      Hmmm.
    </p>
    <h1
      className="font-display font-black leading-none"
      style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}
    >
      4<span className="text-explosion">0</span>4
    </h1>
    <p className="font-display font-black uppercase text-xl md:text-2xl mt-6">
      Page got the punchline cut.
    </p>
    <p className="font-sans text-ink/80 max-w-md mt-3">
      Whatever you were looking for isn't here. Head back home and catch Roz.
    </p>
    <Link
      to="/"
      className="mt-8 slab bg-explosion text-ink font-display font-black uppercase text-lg px-6 py-3 hover-shake"
    >
      Back to Roz
    </Link>
  </main>
);

export default NotFound;
