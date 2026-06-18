import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Orlint" },
      { name: "description", content: "Orlint works with business owners, solution providers, consultancies, staffing firms, partnership teams, and enterprise buyers across industries." },
      { property: "og:title", content: "Orlint" },
      { property: "og:description", content: "Who we work with." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const groups = [
  { title: "Business Owners", copy: "Founders and principals looking for the right partners to grow with." },
  { title: "Service Providers", copy: "Agencies and firms seeking aligned clients and channel relationships." },
  { title: "Solution Providers", copy: "Trusted providers ready to be matched with serious buyers." },
  { title: "Consultancies", copy: "Advisory firms seeking strategic engagements and partnerships." },
  { title: "Staffing Firms", copy: "Talent businesses looking for enterprise demand and partner channels." },
  { title: "Growing Companies", copy: "Scaling businesses sourcing the capabilities behind their next chapter." },
  { title: "Partnership Teams", copy: "Channel and BD leaders building meaningful alliance pipelines." },
  { title: "Enterprise Buyers", copy: "Decision makers sourcing vetted, relevant providers, not vendor lists." },
];

function IndustriesPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 bg-background">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Businesses building meaningful partnerships."
              intro="We work with organizations who value the right relationship over the next transaction."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-secondary/40">
        <div className="container-narrow">
          <div className="grid gap-px bg-border/70 md:grid-cols-2 border border-border/70">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 4) * 60}>
                <div className="bg-background p-10 md:p-12 h-full">
                  <h3 className="font-display text-2xl md:text-3xl">{g.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{g.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:bg-accent hover:text-foreground"
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
