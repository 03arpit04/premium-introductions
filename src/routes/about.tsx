import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandStatement } from "@/components/site/BrandStatement";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Orlint" },
      { name: "description", content: "Orlint is a boutique business introductions firm. We connect opportunity with capability through meaningful, deliberate introductions." },
      { property: "og:title", content: "Orlint" },
      { property: "og:description", content: "A boutique firm built on relationships, discretion, and outcomes." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 bg-background">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              eyebrow="About Orlint"
              title={<>A boutique firm built on <em className="italic text-accent">relationships.</em></>}
              intro="Orlint is a private introductions firm. We work quietly with business owners, operators, and decision makers to connect them with the partners, solution providers, and opportunities most aligned with their goals."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-narrow grid gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Our approach</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every introduction we make is considered. We take the time to
                understand who you are, what you're building, and who you need
                to know. Then, and only then, do we open a door.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Our standard</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We measure ourselves by outcomes, not volume. A single well-placed
                introduction is worth more than a hundred cold conversations.
                That is the standard we hold ourselves to.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-foreground text-background">
        <div className="container-narrow text-center">
          <Reveal>
            <BrandStatement size="xl" className="[&_span]:text-accent" />
            <p className="mt-10 max-w-xl mx-auto text-background/70">
              We identify opportunities, facilitate introductions, and open
              doors. You focus on the relationship.
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-background px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:bg-accent hover:text-foreground hover:border-accent"
              >
                Request Introduction
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
