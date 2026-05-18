import { motion } from "framer-motion";
import { Globe, Bot, Code2, Brain, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Scraping",
    description:
      "Custom scrapers for data extraction, lead generation, and continuous price monitoring at scale.",
    highlight: false,
  },
  {
    icon: Bot,
    title: "Automation Scripts",
    description:
      "Python automation for repetitive tasks, file handling, and workflow optimization that saves hours weekly.",
    highlight: false,
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web apps built with React, Flask, Next.js, and Supabase — clean, fast and production-ready.",
    highlight: false,
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Deep learning models, image classifiers, and data pipelines powered by TensorFlow & transfer learning.",
    highlight: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      data-testid="services-section"
    >
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-purple-100 blur-3xl opacity-60" />
      <span className="hidden lg:block absolute top-20 left-10 font-mono-code text-orange-200 text-2xl -rotate-3">
        {"</>"}
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="font-mono-code text-xs tracking-[0.3em] uppercase text-orange-500">
              ── SERVICES
            </span>
            <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
              What I Can{" "}
              <span className="text-purple-700 italic">Do For You</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base sm:text-right">
            Four core services — picked because they're what I actually do well,
            not what sounds impressive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const highlighted = s.highlight;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-7 rounded-3xl border-2 transition-all duration-300 ${
                  highlighted
                    ? "bg-purple-700 text-white border-purple-700 shadow-2xl shadow-purple-700/40 lg:-translate-y-4"
                    : "bg-white text-slate-900 border-slate-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
                }`}
                data-testid={`service-card-${i}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    highlighted
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40"
                      : "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white"
                  } transition-colors`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-display font-bold text-xl mb-3">
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    highlighted ? "text-purple-100" : "text-slate-600"
                  }`}
                >
                  {s.description}
                </p>

                <div
                  className={`mt-6 inline-flex items-center gap-1.5 font-mono-code text-xs uppercase tracking-widest ${
                    highlighted
                      ? "text-orange-200"
                      : "text-slate-400 group-hover:text-orange-500"
                  } transition-colors`}
                >
                  0{i + 1} / 04
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
