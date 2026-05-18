import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <button
          onClick={() => handleClick("#home")}
          className="flex items-center gap-2 group"
          data-testid="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-700 text-white font-display font-black text-lg flex items-center justify-center shadow-lg shadow-purple-700/30 group-hover:rotate-6 transition-transform">
            KZ
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-700 rounded-full hover:bg-purple-50 transition-colors"
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick("#contact")}
            className="px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
            data-testid="nav-cta-contact"
          >
            Let's Talk →
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-200"
            data-testid="nav-mobile-menu"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-left px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-purple-50 hover:text-purple-700"
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="mt-2 px-4 py-3 rounded-full bg-orange-500 text-white font-bold"
                data-testid="nav-mobile-cta"
              >
                Let's Talk →
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
