import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "TensorFlow", "Flask", "React", "Next.js", "Flutter"],
  },
  {
    title: "Specializations",
    skills: ["AI / ML", "Deep Learning", "CNN", "Transfer Learning"],
  },
  {
    title: "Web & Backend",
    skills: ["Supabase", "REST APIs", "Web Development"],
  },
  {
    title: "Tools",
    skills: ["Automation Scripts", "Web Scraping", "Git / GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-slate-50 overflow-hidden"
      data-testid="skills-section"
    >
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-70" />
      <span className="hidden lg:block absolute top-24 right-16 font-mono-code text-purple-200 text-xl rotate-6">
        {"{ stack: true }"}
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-mono-code text-xs tracking-[0.3em] uppercase text-orange-500">
            ── STACK
          </span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
            What I{" "}
            <span className="squiggle-underline text-purple-700">
              Work With
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            A focused toolkit, sharpened on real projects — not just tutorials.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-3xl bg-white border-2 border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all"
              data-testid={`skill-group-${i}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono-code text-xs text-orange-500">
                  0{i + 1}.
                </span>
                <h3 className="font-display font-bold text-slate-900">
                  {g.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-orange-100 hover:text-orange-700 hover:scale-105 transition-all cursor-default"
                    data-testid={`skill-tag-${s.replace(/\s|\/|\./g, "-").toLowerCase()}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
