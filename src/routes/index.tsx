import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Headphones,
  Layers,
  Gauge,
  Wifi,
  MonitorPlay,
  Smartphone,
  Laptop,
  Home,
  Lock,
  MessageCircle,
  Router,
  Network,
  Tv,
  Building2,
  Star,
  ArrowRight,
  Plus,
  Minus,
  Compass,
  Users,
  Briefcase,
  Signal,
  Phone,
} from "lucide-react";
import { useState } from "react";

import lifeEntertainment from "@/assets/life-entertainment.jpg";
import lifeGaming from "@/assets/life-gaming.jpg";
import lifeRemote from "@/assets/life-remote.jpg";
import lifeBusiness from "@/assets/life-business.jpg";
import lifeSmart from "@/assets/life-smart.jpg";
import lifeLearning from "@/assets/life-learning.jpg";
import cableShowcase from "@/assets/cable-showcase.jpg";
import netFibre from "@/assets/net-fibre.jpg";
import netTower from "@/assets/net-tower.jpg";
import netTechnician from "@/assets/net-technician.jpg";
import netRouter from "@/assets/net-router.jpg";
import netNoc from "@/assets/net-noc.jpg";
import tvSports from "@/assets/tv-sports.jpg";
import mobile from "@/assets/mobile.jpg";

import { Reveal, Counter } from "@/components/site/motion";
import { CoverageFinder } from "@/components/site/CoverageFinder";
import { pageHead, SITE_NAME, SITE_URL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      path: "/",
      title: `${SITE_NAME} | Smarter Broadband & Cable Connectivity Assistance`,
      description:
        "Explore broadband, internet and cable TV options available in your area. Smart Net Guide simplifies coverage checks, plan guidance and the entire connection request process.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE_NAME,
            url: SITE_URL,
            image: `${SITE_URL}/favicon.ico`,
            description:
              "Independent assistance with broadband, internet and cable TV connection requests.",
            openingHours: "Mo-Sa 08:00-20:00",
          }),
        },
      ],
    };
  },
  component: Index,
});


const reasons = [
  {
    icon: Gauge,
    title: "Fast connection guidance",
    copy: "Skip the hold music. Tell us your address and we map the serviceable networks within minutes, so you know exactly what's possible before committing to anything.",
  },
  {
    icon: Network,
    title: "Multiple network options",
    copy: "Fibre, cable, fixed wireless and hybrid setups are all reviewed together, then narrowed down to the few that genuinely fit your household or workplace.",
  },
  {
    icon: Headphones,
    title: "Dedicated customer assistance",
    copy: "One specialist owns your request from first question to activation day — no ticket handoffs, no repeating your story to a new agent every call.",
  },
  {
    icon: Layers,
    title: "Simple request handling",
    copy: "Paperwork, scheduling and follow-ups are handled for you. You approve the choice; we coordinate the rest and keep you updated at every milestone.",
  },
  {
    icon: Compass,
    title: "Flexible recommendations",
    copy: "Recommendations shift with how you actually live — heavy streaming, four-person video calls, or a quiet home that just needs something dependable.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable support throughout",
    copy: "After activation we stay reachable for setup questions, coverage tuning and anything that needs a second look during your first weeks online.",
  },
];

const lifestyles = [
  {
    img: lifeEntertainment,
    title: "Home Entertainment",
    copy: "Movie nights that never buffer, across every screen in the house at once.",
    tag: "Households",
  },
  {
    img: lifeGaming,
    title: "Gaming & Streaming",
    copy: "Low-latency routes and upload headroom built for live play and broadcast.",
    tag: "Creators",
  },
  {
    img: lifeRemote,
    title: "Remote Work",
    copy: "Calls that hold steady while the rest of the home stays fully online.",
    tag: "Professionals",
  },
  {
    img: lifeBusiness,
    title: "Small Business",
    copy: "Point-of-sale, cloud tools and staff Wi-Fi on one dependable backbone.",
    tag: "Teams",
  },
  {
    img: lifeSmart,
    title: "Smart Homes",
    copy: "Dozens of connected devices coordinated without slowing anything down.",
    tag: "Automation",
  },
];

const journey = [
  { title: "Check Coverage", copy: "Enter your ZIP, city or locality to see serviceable networks." },
  { title: "Explore Options", copy: "Compare speeds, technology types and bundles side by side." },
  { title: "Submit Request", copy: "Share your details once; we prepare the full request for you." },
  { title: "Expert Assistance", copy: "A specialist verifies availability and confirms scheduling." },
  { title: "Get Connected", copy: "Installation is coordinated and we follow up after activation." },
];

const features = [
  { icon: Zap, title: "Ultra-Fast Internet", copy: "Guidance toward the fastest tier serviceable at your address." },
  { icon: Signal, title: "Stable Connections", copy: "Options screened for consistency, not just headline speed." },
  { icon: MonitorPlay, title: "HD Streaming", copy: "Bandwidth planned around simultaneous 4K viewing." },
  { icon: Smartphone, title: "Multi-Device Support", copy: "Capacity sized for phones, tablets, TVs and consoles." },
  { icon: Laptop, title: "Work From Anywhere", copy: "Upload-first setups for meetings and large file transfers." },
  { icon: Home, title: "Smart Home Integration", copy: "Networks that handle dense IoT device counts calmly." },
  { icon: Lock, title: "Secure Networking", copy: "Router and network hygiene advice included at setup." },
  { icon: MessageCircle, title: "Responsive Assistance", copy: "Real people reachable when something needs attention." },
];

const categories = [
  {
    icon: Compass,
    name: "Explorer",
    copy: "For single residents and light users who mainly browse, stream and stay in touch.",
  },
  {
    icon: Users,
    name: "Family",
    copy: "Balanced capacity for households juggling streaming, homework and gaming at once.",
  },
  {
    icon: Briefcase,
    name: "Professional",
    copy: "Upload-heavy configurations for remote roles, creatives and always-on video calls.",
  },
  {
    icon: Building2,
    name: "Business",
    copy: "Resilient connectivity for storefronts, clinics, studios and growing office teams.",
  },
];

const smartLiving = [
  { icon: Wifi, title: "Wi-Fi Optimization" },
  { icon: Network, title: "Mesh Networking" },
  { icon: Laptop, title: "Home Office Setup" },
  { icon: Router, title: "Router Configuration" },
  { icon: MonitorPlay, title: "Streaming Tuning" },
  { icon: Smartphone, title: "Device Assistance" },
];

const stats = [
  { value: 42800, suffix: "+", label: "Successful Connection Requests" },
  { value: 1900, suffix: "+", label: "Areas Supported" },
  { value: 36500, suffix: "+", label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

const testimonials = [
  {
    name: "Marisa Okonjo",
    role: "Homeowner, Denver",
    quote:
      "I'd been on hold with three companies for a week. Smart Net Guide figured out what was actually available on my street in one call and handled the rest.",
  },
  {
    name: "Devin Hartley",
    role: "Streamer, Austin",
    quote:
      "They asked about my upload needs before recommending anything. First time anyone did that. My streams have been rock steady since.",
  },
  {
    name: "Priya Raghavan",
    role: "Clinic Manager",
    quote:
      "Our practice couldn't afford downtime during the switch. The scheduling was coordinated around our closing hours and everything just worked.",
  },
  {
    name: "Tom Bergstrom",
    role: "Remote Engineer",
    quote:
      "Clear comparisons, no pressure, no upselling. I picked a mid tier and they agreed it was the right call rather than pushing me higher.",
  },
  {
    name: "Alina Cruz",
    role: "Parent of three",
    quote:
      "Four devices streaming and nobody argues anymore. The follow-up after installation was the part that really surprised me.",
  },
];

const faqs = [
  {
    q: "How does the coverage check work?",
    a: "Enter your ZIP code, city or locality and we review which broadband and cable networks are serviceable near that location. A specialist then verifies the exact options for your specific address before anything is submitted.",
  },
  {
    q: "Is there a cost to explore options?",
    a: "Exploring availability and receiving guidance costs nothing. Any charges relate to the service you ultimately choose and are always disclosed before a request is submitted.",
  },
  {
    q: "How long does a connection request take?",
    a: "Most requests are reviewed the same day. Installation timelines depend on the network and your area, and typically range from a couple of days to two weeks.",
  },
  {
    q: "Can you help with equipment and Wi-Fi setup?",
    a: "Yes. Our Smart Living support covers router configuration, mesh planning, streaming optimization and connected device troubleshooting after activation.",
  },
  {
    q: "What details do you need from me?",
    a: "A service address, a way to reach you, and a short description of how your household or business uses the internet. That's enough to prepare accurate recommendations.",
  },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <main>
      {/* HERO — centered, text-first, with an orbiting network graphic */}
      <section className="relative overflow-hidden bg-ink pt-20 pb-16 text-ivory sm:pt-24 lg:pt-28">
        <div className="mesh-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="net-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-3xl" />

        {/* headline — centered, big, sits above the orbit */}
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <h1 className="mx-auto max-w-4xl text-[2.3rem] leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-7xl">
            Smarter Connectivity for Every <span className="text-gradient">Home &amp; Business</span>
          </h1>
        </div>

        {/* content (left) — orbit graphic (centre) — stats (right) */}
        <div className="relative mx-auto mt-12 grid max-w-[92rem] items-center gap-8 px-5 sm:px-8 sm:mt-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.7fr)_minmax(0,0.62fr)] lg:gap-2">
          {/* left: copy + CTA */}
          <div className="text-center lg:justify-self-start lg:text-left">
            <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-ivory/70 sm:text-base lg:mx-0">
              Explore the broadband and cable connectivity options available in your area, compare
              what genuinely fits the way you live or work, and let our specialists simplify the
              entire connection request process.
            </p>
            <div className="mt-7 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  to="/coverage"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-mint-foreground transition-transform hover:-translate-y-0.5"
                >
                  Check Coverage <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
                >
                  <Phone className="h-4 w-4" /> {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <Link
                to="/contact"
                className="text-sm font-semibold text-ivory/80 underline-offset-4 transition-colors hover:text-ivory hover:underline"
              >
                Connect with a Specialist
              </Link>
            </div>
          </div>

          {/* centre: orbit graphic — network hub with satellite service photos */}
          <div className="relative mx-auto h-80 w-full max-w-lg sm:h-[26rem] lg:h-[30rem] lg:max-w-none">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 560 480"
              fill="none"
              aria-hidden
            >
              <circle cx="280" cy="240" r="160" stroke="var(--mint)" strokeOpacity="0.18" strokeDasharray="4 8" />
              <circle cx="280" cy="240" r="245" stroke="var(--mint)" strokeOpacity="0.1" strokeDasharray="4 8" />
            </svg>

            <div className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-mint text-mint-foreground shadow-float sm:h-24 sm:w-24">
              <Wifi className="h-8 w-8 sm:h-9 sm:w-9" />
              <span className="animate-ring absolute inset-0 rounded-full border border-mint/50" />
            </div>

            {[
              { img: lifeLearning, label: "Laptop", pos: "-top-4 left-1/2 -translate-x-1/2", delay: 0 },
              { img: lifeGaming, label: "Gaming PC", pos: "top-[26%] right-[10%]", delay: 600 },
              { img: tvSports, label: "Smart TV", pos: "bottom-[4%] right-[18%]", delay: 1200 },
              { img: mobile, label: "Mobile", pos: "bottom-[4%] left-[18%]", delay: 1800 },
              { img: lifeSmart, label: "Smart home", pos: "top-[26%] left-[10%]", delay: 2400 },
            ].map((n) => (
              <div
                key={n.label}
                className={`animate-floaty absolute ${n.pos} flex flex-col items-center gap-2`}
                style={{ animationDelay: `${n.delay}ms` }}
              >
                <div className="glass-dark h-16 w-16 overflow-hidden rounded-full p-1 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                  <img
                    src={n.img}
                    alt=""
                    width={200}
                    height={200}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <span className="hidden rounded-full bg-ink/70 px-2.5 py-1 text-[10px] tracking-wide text-ivory/70 sm:block">
                  {n.label}
                </span>
              </div>
            ))}
          </div>

          {/* right: stats */}
          <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:flex-nowrap lg:items-end lg:justify-self-end lg:gap-4">
            {[
              { k: "1,900+", v: "Areas supported" },
              { k: "42,800+", v: "Requests handled" },
              { k: "98%", v: "Satisfaction rate" },
            ].map((s) => (
              <div
                key={s.k}
                className="glass-dark min-w-[7.5rem] flex-1 rounded-2xl px-4 py-3 text-center sm:flex-none lg:w-40 lg:text-right"
              >
                <p className="font-display text-xl font-bold text-gold sm:text-2xl">{s.k}</p>
                <p className="mt-1 text-[11px] leading-snug text-ivory/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 -bottom-px h-20 rounded-t-[100%] bg-background" />
      </section>

      {/* COVERAGE FINDER */}
      <section className="relative -mt-8 px-5 pb-20 sm:px-8">
        <div className="net-grid relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-secondary/50 p-6 sm:p-12">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
          <div className="relative text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Coverage Finder</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Instantly see which broadband and cable networks reach your neighbourhood.
            </p>
          </div>
          <div className="relative mt-8">
            <CoverageFinder />
          </div>
        </div>
      </section>

      {/* WHY PEOPLE CHOOSE US — numbered index grid */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs tracking-[0.24em] text-primary uppercase">Why people choose us</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Advice that starts with your address, not a sales script
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Six commitments that shape every recommendation we make — from the first coverage
              check to the weeks after your line goes live.
            </p>
            <Link
              to="/coverage"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/8"
            >
              Start with coverage <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/35">
                  <span className="pointer-events-none absolute -top-4 right-3 font-display text-6xl font-bold text-primary/6 transition-colors group-hover:text-primary/12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-primary/8 text-primary">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 text-base font-semibold sm:text-lg">{r.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLES — image mosaic */}
      <section className="bg-ink py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <p className="text-xs tracking-[0.24em] text-gold uppercase">
                  Designed for every lifestyle
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  One network, six very different kinds of days
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ivory/60">
                Pick the day that looks most like yours — the setup is shaped around it.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lifestyles.map((l, i) => (
              <Reveal key={l.title} delay={i * 60} className={i === 0 ? "lg:col-span-2" : ""}>
                <article
                  className={`group relative h-full overflow-hidden rounded-4xl border border-ivory/10 ${
                    i === 0 ? "min-h-[18rem]" : "min-h-[16rem]"
                  }`}
                >
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
                  <div className="relative flex h-full flex-col justify-end gap-2 p-6 sm:p-7">
                    <span className="inline-flex w-fit rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[10px] tracking-[0.22em] text-mint uppercase">
                      {l.tag}
                    </span>
                    <h3 className="text-xl font-semibold sm:text-2xl">{l.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-ivory/70">{l.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY — curved timeline */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="mesh-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center">
              <p className="text-xs tracking-[0.24em] text-primary uppercase">Connection journey</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Five steps, fully guided</h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            <svg
              className="absolute inset-x-0 top-10 hidden h-24 w-full lg:block"
              viewBox="0 0 1000 100"
              fill="none"
              aria-hidden
            >
              <path
                d="M0 70 C 200 -10, 320 110, 500 50 S 820 -10, 1000 60"
                stroke="var(--mint)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>
            <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {journey.map((s, i) => (
                <Reveal key={s.title} delay={i * 110}>
                  <li
                    className="glass h-full rounded-3xl p-6"
                    style={{ transform: `translateY(${i % 2 ? 22 : 0}px)` }}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary font-display text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FEATURES — horizontal rail with running index */}
      <section className="overflow-hidden py-16">
        <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.24em] text-primary uppercase">Connectivity features</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                The details that decide whether a connection feels effortless
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground sm:block">
              Scroll sideways — eight things we check before anything gets recommended.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-24" />
          <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative w-[15.5rem] shrink-0 snap-start overflow-hidden rounded-4xl border border-border bg-card p-6 transition-colors hover:border-primary/35"
              >
                <span className="font-display text-sm font-semibold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:-translate-y-1">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.copy}</p>
              </div>
            ))}
            <div className="w-1 shrink-0" aria-hidden />
          </div>
        </div>
      </section>

      {/* NETWORK TYPES — photo band */}
      <section className="bg-ink py-20 text-ivory">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs tracking-[0.24em] text-gold uppercase">The networks</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Fibre in the ground, signal in the air, an engineer at your door
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
                Three different kinds of infrastructure can serve one street. We check all of them
                before recommending anything.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                img: netFibre,
                alt: "Illuminated fibre optic strands connected to network equipment",
                tag: "Fibre",
                title: "Light-speed lines",
                copy: "Symmetrical speeds where the fibre network already reaches your street.",
              },
              {
                img: netTower,
                alt: "Telecom tower and rooftop antennas above a neighbourhood at dusk",
                tag: "Fixed wireless",
                title: "Signal over the rooftops",
                copy: "Tower-served coverage for addresses wired infrastructure hasn't reached.",
              },
              {
                img: netTechnician,
                alt: "An engineer connecting a broadband cable to a wall termination box",
                tag: "Installation",
                title: "Activation day handled",
                copy: "We prepare the request so the visit is booked, scoped and quick.",
              },
            ].map((n, i) => (
              <Reveal key={n.tag} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-4xl border border-ivory/10 bg-ivory/[0.04]">
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <img
                      src={n.img}
                      alt={n.alt}
                      loading="lazy"
                      width={1280}
                      height={864}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-mint/20 px-3 py-1 text-[11px] tracking-[0.18em] text-mint uppercase">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/60">{n.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — interactive selector */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mesh-bg mx-auto max-w-6xl overflow-hidden rounded-4xl bg-ink text-ivory">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-12 lg:pr-6">
              <p className="text-xs tracking-[0.24em] text-gold uppercase">Connection categories</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Find the profile that fits</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
                Pick a profile and see the kind of setup we'd typically point you toward.
              </p>

              <div className="mt-8 space-y-2">
                {categories.map((c, i) => {
                  const active = categoryIndex === i;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setCategoryIndex(i)}
                      aria-pressed={active}
                      className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors ${
                        active ? "bg-ivory/12" : "hover:bg-ivory/6"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                          active ? "bg-mint text-mint-foreground" : "bg-ivory/10 text-ivory/70"
                        }`}
                      >
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-base font-semibold ${active ? "text-ivory" : "text-ivory/70"}`}
                        >
                          {c.name}
                        </span>
                      </span>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-all ${active ? "translate-x-0 text-mint opacity-100" : "-translate-x-1 opacity-0"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="glass-dark relative m-3 flex flex-col justify-center rounded-4xl p-8 sm:m-5 sm:p-12">
              {categories.map((c, i) => (
                <div
                  key={c.name}
                  className={`${categoryIndex === i ? "block" : "hidden"} animate-in fade-in`}
                >
                  <span className="grid h-16 w-16 place-items-center rounded-3xl bg-mint/15 text-mint">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">{c.name}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/65">{c.copy}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/coverage"
                      className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-mint-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Check Coverage <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`tel:${SITE_PHONE_TEL}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
                    >
                      <Phone className="h-4 w-4" /> {SITE_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CABLE TV SHOWCASE — overlapping curved containers */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-[3rem] sm:rounded-[4rem]">
            <img
              src={cableShowcase}
              alt="A premium home theatre room with a large screen showing live sports"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
            />
          </div>
          <Reveal>
            <div className="glass relative mx-auto -mt-24 max-w-2xl rounded-4xl p-8 sm:-mt-32 sm:p-12 lg:mr-0 lg:ml-auto">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] text-primary uppercase">
                <Tv className="h-4 w-4" /> Cable TV
              </span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Television worth gathering around
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Explore entertainment, live sports, regional programming, kids' content and premium
                television line-ups available through supported providers in your location. We help
                you understand what each package actually includes before you decide.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Entertainment", "Sports", "Regional", "Kids", "Premium"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Explore Cable TV <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { img: tvSports, alt: "Live stadium match on a wall-mounted television", label: "Live sports" },
            {
              img: lifeEntertainment,
              alt: "A family watching a film together in the living room",
              label: "Family entertainment",
            },
            {
              img: lifeLearning,
              alt: "A student joining an online class from home",
              label: "Kids & learning",
            },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <figure className="group relative overflow-hidden rounded-4xl">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1280}
                  height={864}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-sm font-semibold text-ivory">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SMART LIVING */}
      <section className="bg-ink py-20 text-ivory">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs tracking-[0.24em] text-gold uppercase">Smart living</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Support that continues long after activation
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ivory/65">
                  A connection is only as good as the network inside your walls. Our team helps you
                  place hardware, tune coverage and get every device behaving — from the router in
                  the hallway to the console two floors up.
                </p>
                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-ivory/10"
                >
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="space-y-4">
              <Reveal>
                <div className="relative overflow-hidden rounded-4xl border border-ivory/10">
                  <img
                    src={netRouter}
                    alt="A mesh Wi-Fi unit and modem on a shelf in a living room"
                    loading="lazy"
                    width={1280}
                    height={864}
                    className="h-52 w-full object-cover sm:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
                  <div className="absolute bottom-5 left-5 max-w-[15rem]">
                    <p className="text-sm font-semibold text-ivory">Hardware placed properly</p>
                    <p className="mt-1 text-xs leading-snug text-ivory/65">
                      Router, mesh nodes and set-top box positioned for full-home coverage.
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {smartLiving.map((s, i) => (
                  <Reveal key={s.title} delay={i * 70}>
                    <div className="group h-full rounded-3xl border border-ivory/10 bg-ivory/5 p-5 transition-colors hover:border-mint/40">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint/15 text-mint transition-transform group-hover:-translate-y-1">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-4 text-sm font-semibold">{s.title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — over network operations imagery */}
      <section className="px-5 py-20 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl">
          <img
            src={netNoc}
            alt="Network operations centre with coverage maps on large screens"
            loading="lazy"
            width={1280}
            height={864}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="net-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="relative grid gap-5 p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="glass-dark h-full rounded-4xl p-8 text-center text-ivory">
                  <p className="font-display text-4xl font-semibold text-mint">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-xs tracking-[0.12em] text-ivory/60 uppercase">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — masonry */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.24em] text-primary uppercase">Customer stories</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              People who stopped dreading the words "service provider"
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="break-inside-avoid rounded-4xl border border-border bg-card p-7 shadow-soft">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-4xl bg-secondary/60 p-7 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
            <div>
              <p className="text-xs tracking-[0.24em] text-primary uppercase">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold">Questions we hear most</h2>
              <div className="mt-8 hidden lg:block">
                <div className="relative grid h-40 w-40 place-items-center rounded-full bg-primary/8">
                  <Headphones className="h-14 w-14 text-primary" />
                  <span className="animate-ring absolute h-24 w-24 rounded-full border border-primary/30" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="rounded-3xl border border-border bg-card">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-semibold">{f.q}</span>
                      {open ? (
                        <Minus className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-primary" />
                      )}
                    </button>
                    {open && (
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-8 sm:px-8">
        <div className="mesh-bg mx-auto max-w-6xl rounded-4xl p-1.5">
          <div className="glass rounded-4xl px-6 py-16 text-center sm:px-14">
            <Reveal>
              <div>
                <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl">
                  See what's available at your address today
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Explore the broadband and cable services reaching your area, and let a specialist
                  handle the request from there.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/coverage"
                    className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    Check Coverage
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full border border-primary/25 bg-card px-8 py-4 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    Talk to an Expert
                  </Link>
                  <a
                    href={`tel:${SITE_PHONE_TEL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-8 py-4 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" /> {SITE_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
