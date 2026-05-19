import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ZoomIn } from "lucide-react";

const tags = [
  "TensorFlow",
  "MobileNetV2",
  "Flask",
  "React",
  "Computer Vision",
];

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
            {/* Project Screenshot */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-purple-50 to-orange-50 p-8 sm:p-12 flex items-center justify-center min-h-[360px] order-2 lg:order-1">
              <div className="absolute inset-6 dot-pattern opacity-50" />

              <div className="relative w-full max-w-lg">
                {/* Browser frame - clickable */}
                <div
                  className="bg-white rounded-2xl shadow-2xl shadow-purple-900/10 overflow-hidden border border-slate-200 cursor-pointer group"
                  onClick={() => setLightboxOpen(true)}
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-auto font-mono-code text-xs text-slate-400">
                      leafscan.app
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src="/leafscan-preview.png"
                      alt="LeafScan — Plant Disease Detection App"
                      className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <ZoomIn className="w-4 h-4 text-slate-700" />
                        <span className="text-sm font-bold text-slate-700">
                          Click to preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-3 px-3 py-2 rounded-2xl bg-orange-500 text-white shadow-xl rotate-6 flex items-center gap-1.5 z-10">
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src="/leafscan-preview.png"
              alt="LeafScan — Plant Disease Detection App"
              className="relative z-10 max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
