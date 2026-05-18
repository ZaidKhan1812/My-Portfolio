import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      data-testid="about-section"
    >
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-purple-100 blur-3xl opacity-60" />
      <span className="hidden lg:block absolute top-32 left-12 font-mono-code text-purple-200 text-2xl -rotate-6">
        {"// about_me.py"}
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: heading + bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <span className="font-mono-code text-xs tracking-[0.3em] uppercase text-orange-500">
            ── ABOUT ME
          </span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
            Building tools that{" "}
            <span className="text-purple-700 italic">actually work.</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600 max-w-2xl">
            Hi! I'm <strong className="text-slate-900">Zaid</strong>, a Computer
            Engineering student specializing in Python and AI/ML. I build
            automation scripts, web scrapers, and deep learning models that
            actually work in production. My work spans{" "}
            <strong className="text-purple-700">computer vision</strong>,{" "}
            <strong className="text-purple-700">transfer learning</strong>, and{" "}
            <strong className="text-purple-700">full-stack AI integration</strong>{" "}
            delivering{" "}
            <strong className="text-orange-500">production-ready systems</strong>{" "}
            with real-world accuracy.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl">
            I'm fast, communicative, and deliver clean commented code every
            single time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Zap, label: "Fast Delivery" },
              { icon: Code2, label: "Clean Code" },
              { icon: Briefcase, label: "Production-Ready" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
              >
                <Icon className="w-4 h-4" /> {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 lg:mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-orange-200/40 rounded-3xl blur-2xl" />
            <div className="relative bg-purple-50 border-2 border-purple-100 rounded-3xl p-8 shadow-xl shadow-purple-900/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center shadow-lg shadow-purple-700/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-purple-700">
                  Education
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">
                B.Tech in CSE
                <br />
                <span className="text-purple-700">(AI/ML)</span>
              </h3>
              <p className="mt-3 text-slate-600">
                Vishwakarma University, Pune
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono-code text-xs text-slate-700">
                  Currently Pursuing · 2025 – 2029
                </span>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/40">
              <p className="font-mono-code text-xs uppercase tracking-widest text-orange-600 mb-2">
                {"// note"}
              </p>
              <p className="text-slate-700 leading-relaxed">
                No formal work experience yet — but{" "}
                <strong className="text-slate-900">
                  my projects speak louder
                </strong>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
