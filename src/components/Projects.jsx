import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Leaf } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const tags = [
  "TensorFlow",
  "MobileNetV2",
  "Flask",
  "React",
  "Computer Vision",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-slate-50 overflow-hidden"
      data-testid="projects-section"
    >
      <div className="absolute top-32 right-10 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-60" />
      <span className="hidden lg:block absolute top-24 left-20 font-mono-code text-purple-200 text-xl -rotate-6">
        {"// featured.work"}
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="font-mono-code text-xs tracking-[0.3em] uppercase text-orange-500">
            ── PROJECTS
          </span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
            Featured{" "}
            <span className="squiggle-underline text-purple-700">Work</span>
          </h2>
        </div>

        {/* Featured: LeafScan */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2rem] border-2 border-slate-100 shadow-2xl shadow-purple-900/5 overflow-hidden"
          data-testid="project-leafscan"
        >
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Mockup side */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-purple-50 to-orange-50 p-10 sm:p-14 flex items-center justify-center min-h-[360px] order-2 lg:order-1">
              <div className="absolute inset-6 dot-pattern opacity-50" />

              <div className="relative w-full max-w-md">
                {/* Stylized phone/screen mockup */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-purple-900/10 p-6 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-auto font-mono-code text-xs text-slate-400">
                      leafscan.ai
                    </span>
                  </div>

                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern-orange opacity-30" />
                    <Leaf className="w-20 h-20 text-white drop-shadow-2xl relative z-10" />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur font-mono-code text-[10px] text-slate-800 z-10">
                      detecting…
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-xs text-slate-500">
                        Tomato — Early Blight
                      </span>
                      <span className="font-bold text-emerald-600 text-sm">
                        97.2%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                        style={{ width: "97%" }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-mono-code text-xs text-slate-400">
                        Apple — Scab
                      </span>
                      <span className="text-slate-400 text-sm">2.1%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-300 rounded-full"
                        style={{ width: "12%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-5 -right-3 px-3 py-2 rounded-2xl bg-orange-500 text-white shadow-xl rotate-6 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-display font-bold text-sm">
                    Featured
                  </span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-10 sm:p-14 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-mono-code text-xs">
                  ● Live Project
                </span>
                <span className="font-mono-code text-xs uppercase tracking-widest text-slate-400">
                  2025
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                LeafScan<span className="text-orange-500">.</span>
              </h3>
              <p className="mt-2 font-mono-code text-sm text-purple-700">
                CNN Plant Disease Detection
              </p>

              <p className="mt-5 text-slate-600 leading-relaxed">
                A CNN-based plant disease detection system using{" "}
                <strong className="text-slate-900">
                  MobileNetV2 Transfer Learning
                </strong>{" "}
                on the PlantVillage dataset. Achieves{" "}
                <strong className="text-orange-500">
                  97.23% validation accuracy
                </strong>{" "}
                across 38 disease classes and 87,000+ images. Built with
                TensorFlow, a Flask backend, and a React frontend.
              </p>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { v: "97.23%", l: "Accuracy" },
                  { v: "38", l: "Classes" },
                  { v: "87K+", l: "Images" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="font-display font-black text-xl text-purple-700">
                      {s.v}
                    </div>
                    <div className="font-mono-code text-[10px] uppercase tracking-widest text-slate-500">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 font-mono-code text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ZaidKhan1812"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
                  data-testid="project-github-btn"
                >
                  <GithubIcon className="w-4 h-4" /> View on GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-500/30"
                  data-testid="project-demo-btn"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Coming soon placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-2 gap-6"
        >
          {[1, 2].map((n) => (
            <div
              key={n}
              className="p-8 rounded-3xl border-2 border-dashed border-slate-200 bg-white/60 hover:border-orange-300 hover:bg-orange-50/30 transition-all group"
              data-testid={`project-placeholder-${n}`}
            >
              <span className="font-mono-code text-xs uppercase tracking-widest text-slate-400">
                Project 0{n + 1}
              </span>
              <h4 className="mt-2 font-display font-bold text-2xl text-slate-400 group-hover:text-orange-500 transition-colors">
                More coming soon…
              </h4>
              <p className="mt-2 text-slate-500 text-sm">
                Currently cooking something interesting. Want to be the first to
                know?
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
