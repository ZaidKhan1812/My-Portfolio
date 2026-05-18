import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-20 md:pb-28 bg-purple-700 text-white overflow-hidden"
      data-testid="hero-section"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-orange-400/30 blur-2xl" />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Code-style decorations */}
      <span className="hidden lg:block absolute top-28 right-1/4 font-mono-code text-purple-400/40 text-sm rotate-12">
        {"// building intelligent systems"}
      </span>
      <span className="hidden lg:block absolute bottom-32 left-1/4 font-mono-code text-orange-300/40 text-xl">
        {"</>"}
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-code text-xs tracking-widest uppercase text-white/90">
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
            data-testid="hero-heading"
          >
            Hi, I'm{" "}
            <span className="squiggle-underline text-orange-400">Zaid.</span>
            <br />
            <span className="inline-block mt-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/95">
              <TypeAnimation
                sequence={[
                  "An AI/ML Developer",
                  2000,
                  "A Python Engineer",
                  2000,
                  "An Automation Specialist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
            data-testid="hero-bio"
          >
            I build deep learning models, automation scripts, and web apps that
            actually work — in production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-orange-500 text-white font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
              data-testid="hero-cta-work"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent border-2 border-white/40 text-white font-bold hover:bg-white hover:text-purple-700 transition-all"
              data-testid="hero-cta-contact"
            >
              <Sparkles className="w-5 h-5" /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-2 text-sm font-mono-code text-white/60"
          >
            <MapPin className="w-4 h-4" /> Pune, India
            <span className="mx-3">·</span>
            <span>CSE / AI-ML · Vishwakarma University</span>
          </motion.div>
        </div>

        {/* Right: avatar with floating stats */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center min-h-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-orange-400/30 blur-3xl rounded-full" />
            <div className="avatar-ring float-anim relative z-10">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center shadow-2xl">
                {/* Placeholder avatar - stylized initials */}
                <span className="font-display font-black text-white text-8xl sm:text-9xl drop-shadow-lg select-none">
                  KZ
                </span>
              </div>
            </div>


          </motion.div>
        </div>
      </div>

      {/* Bottom curve / divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white"
        style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
      />
    </section>
  );
}
