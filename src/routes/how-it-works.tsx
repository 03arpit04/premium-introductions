import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandStatement } from "@/components/site/BrandStatement";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "orlint" },
      { name: "description", content: "A deliberate four-step process: tell us what you're looking for, we find relevant matches, we make the introduction, you close the deal." },
      { property: "og:title", content: "orlint" },
      { property: "og:description", content: "A deliberate four-step introductions process." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowPage,
});

const steps = [
  { n: "01", title: "Tell Us What You're Looking For", copy: "Share your requirement, challenge, or opportunity. The more we understand, the more precise the introduction." },
  { n: "02", title: "We Find Relevant Matches", copy: "We draw on a curated network to identify businesses and opportunities aligned with your needs." },
  { n: "03", title: "We Make The Introduction", copy: "We connect both parties directly and step back. No friction. No middlemen." },
  { n: "04", title: "You Close The Deal", copy: "Build the relationship and take it forward on your own terms." },
];

function HowPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 bg-background">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="A discreet, deliberate process."
              intro="Four steps. No noise. Every conversation handled with care."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-background">
        <div className="container-narrow max-w-4xl">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 py-12 border-t border-border/70 last:border-b">
                <div className="font-display text-accent text-2xl md:text-3xl pt-1">{s.n}</div>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl leading-tight">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{s.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 bg-foreground text-background">
        <div className="container-narrow text-center">
          <Reveal>
            <BrandStatement size="xl" className="[&_span]:text-accent" />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-background"
              >
                Start The Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
