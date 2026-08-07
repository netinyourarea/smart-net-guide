import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export const INDEPENDENCE_NOTICE =
  "Smart Net Guide operates as an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company. All trademarks and brand names belong to their respective owners.";

const groups = [
  {
    title: "Quick Links",
    items: [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/coverage", label: "Coverage" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { to: "/services", label: "Broadband" },
      { to: "/services", label: "Internet" },
      { to: "/services", label: "Cable TV" },
      { to: "/coverage", label: "Coverage Finder" },
    ],
  },
  {
    title: "Legal",
    items: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/terms", label: "Refund Policy" },
      { to: "/terms", label: "Disclaimer" },
    ],
  },
] as const;


export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-ivory">
      <div className="net-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10 shrink-0" />
              <span className="font-display text-lg font-semibold">
                Smart Net <span className="text-gold">Guide</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              A modern connectivity desk helping households and businesses explore broadband and
              cable options available at their address, then handling the request from start to
              finish.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs tracking-[0.2em] text-gold uppercase">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-sm text-ivory/70 transition-colors hover:text-mint"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-ivory/12 bg-ivory/5 p-6">
          <p className="text-xs leading-relaxed text-ivory/60">{INDEPENDENCE_NOTICE}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Smart Net Guide. All rights reserved.</p>
          <p>Independent connection assistance service.</p>
        </div>
      </div>
    </footer>
  );
}
