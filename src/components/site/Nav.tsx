import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/coverage", label: "Coverage" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;


export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 ${
          solid
            ? "glass-dark text-ivory"
            : "border border-ivory/12 bg-ink/35 text-ivory backdrop-blur-md"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-none font-semibold sm:text-lg">
              Smart Net <span className="text-gold">Guide</span>
            </span>
            <span className="hidden truncate text-[10px] tracking-[0.22em] text-ivory/50 uppercase sm:block">
              Connectivity
            </span>
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-[13px] font-medium whitespace-nowrap text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"
              activeProps={{ className: "bg-ivory/15 text-ivory" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <Link
            to="/contact"
            className="hidden rounded-full bg-mint px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-mint-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-dark mx-auto mt-2 max-h-[75vh] max-w-7xl overflow-y-auto rounded-3xl p-3 text-ivory lg:hidden">
          <div className="grid gap-1 sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-ivory/80 hover:bg-ivory/10 hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 sm:col-span-2 sm:grid-cols-2">
              <Link
                to="/coverage"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-ivory/25 px-4 py-3 text-center text-sm font-semibold text-ivory"
              >
                Check Coverage
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-mint px-4 py-3 text-center text-sm font-semibold text-mint-foreground"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

      )}
    </header>
  );
}
