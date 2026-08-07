import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page";
import { CoverageFinder } from "@/components/site/CoverageFinder";
import { Reveal } from "@/components/site/motion";
import { pageHead, breadcrumb, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/coverage")({
  head: () => {
    const head = pageHead({
      path: "/coverage/",
      title: `Coverage Finder — Check Availability | ${SITE_NAME}`,
      description:
        "Check which broadband and cable networks are serviceable at your ZIP code, city or locality, then confirm the exact options with a specialist.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "Coverage", path: "/coverage/" },
            ]),
          ),
        },
      ],
    };
  },
  component: CoveragePage,
});


const steps = [
  "Enter your ZIP code, city or locality above.",
  "We review the broadband and cable networks reaching that area.",
  "A specialist verifies the exact options serviceable at your address.",
  "You choose, and we prepare and submit the connection request.",
];

function CoveragePage() {
  return (
    <main>
      <PageHero
        eyebrow="Coverage"
        title="Check what reaches your address"
        intro="Availability changes street by street. Start with a location and we'll narrow it down to what's genuinely serviceable for you."
      />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <CoverageFinder />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 80}>
              <div className="flex h-full items-start gap-4 rounded-4xl border border-border bg-card p-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
