import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  BarChart3,
  Send,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "zaidkhan18122007@gmail.com",
    href: "mailto:zaidkhan18122007@gmail.com",
    color: "bg-orange-500",
    testid: "social-email",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/zaidkhan1812/",
    color: "bg-blue-600",
    testid: "social-linkedin",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "ZaidKhan1812",
    href: "https://github.com/ZaidKhan1812",
    color: "bg-slate-900",
    testid: "social-github",
  },
  {
    icon: BarChart3,
    label: "Kaggle",
    value: "zaidkhan18122007",
    href: "https://kaggle.com/zaidkhan18122007",
    color: "bg-cyan-600",
    testid: "social-kaggle",
  },
];

// Web3Forms access key — get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "2b57ce88-97c6-4a66-a3d3-f46ba8096e04";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} — Portfolio`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        toast.success("Thanks! Your message has been sent.", {
          description: "I'll get back to you within 24 hours.",
        });
        setForm({ name: "", email: "", message: "" });
        // Reset success state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      data-testid="contact-section"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-60" />
      <span className="hidden lg:block absolute top-24 right-20 font-mono-code text-purple-200 text-2xl rotate-3">
        {"// say_hi();"}
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: CTA + socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-code text-xs tracking-[0.3em] uppercase text-orange-500">
            ── GET IN TOUCH
          </span>
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.05] tracking-tight">
            Let's Work{" "}
            <span className="text-purple-700 italic">Together</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-md">
            Message me{" "}
            <strong className="text-slate-900">before ordering</strong> and I'll
            tell you honestly if I can help.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  data-testid={s.testid}
                >
                  <div
                    className={`w-11 h-11 flex-shrink-0 rounded-xl ${s.color} text-white flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono-code text-[10px] uppercase tracking-widest text-slate-400">
                      {s.label}
                    </div>
                    <div className="font-semibold text-slate-900 text-sm truncate">
                      {s.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-purple-50 border-2 border-purple-100 shadow-xl shadow-purple-900/5"
          data-testid="contact-form"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              Send a message
            </h3>
            <span className="font-mono-code text-xs text-purple-700">
              {"<form />"}
            </span>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {/* Name & Email side by side on medium+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono-code text-xs uppercase tracking-widest text-slate-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-1.5 w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border-2 border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-sm sm:text-base"
                  data-testid="contact-input-name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono-code text-xs uppercase tracking-widest text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border-2 border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-sm sm:text-base"
                  data-testid="contact-input-email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-mono-code text-xs uppercase tracking-widest text-slate-500"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                className="mt-1.5 w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border-2 border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none text-sm sm:text-base"
                data-testid="contact-input-message"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-orange-500 text-white font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
              data-testid="contact-submit-btn"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Sent!
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
