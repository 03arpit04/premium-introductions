import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandStatement } from "@/components/site/BrandStatement";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orlint — Connecting Opportunity With Capability" },
      { name: "description", content: "Orlint helps businesses discover the right partners, solution providers, and opportunities through meaningful introductions. We bring. You close." },
      { property: "og:title", content: "Orlint — Connecting Opportunity With Capability" },
      { property: "og:description", content: "Premium business introductions for serious decision makers." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Relationships />
      <WhatWeDo />
      <HowItWorks />
      <WhoWeWorkWith />
      <WhyOrlint />
      <Philosophy />
      <FinalCTA />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-premium)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-narrow relative pt-28 pb-32 md:pt-40 md:pb-44">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="gold-rule" />
            A Private Network for Serious Business
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[0.98] tracking-[0.01em] [word-spacing:0.08em] md:text-7xl lg:text-[5.5rem]">
            <span className="block">Connecting Opportunity</span>
            <span className="mt-[0.18em] block">
              With <span className="italic text-accent">Capability.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            Orlint helps businesses discover the right partners, solution providers,
            service providers, and opportunities through meaningful
            introductions.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 border-t border-border/70 pt-12">
            <BrandStatement size="md" />
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              We identify opportunities, facilitate introductions, and open
              doors. You focus on building relationships and closing deals.
            </p>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:bg-accent hover:text-foreground"
            >
              Request Introduction
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Talk To Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Relationships() {
  const cards = [
    {
      n: "01",
      title: "Opportunity",
      copy: "Doors open where introductions are made with intent.",
    },
    {
      n: "02",
      title: "Connection",
      copy: "Trust is the currency of every meaningful business relationship.",
    },
    {
      n: "03",
      title: "Growth",
      copy: "The right conversation can change the trajectory of a company.",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="The Premise"
            title={
              <>
                Business is built on <em className="italic text-accent">relationships.</em>
              </>
            }
            intro="The right introduction can save months of searching, outreach, and uncertainty. Whether you're looking for solution providers, service providers, partners, or opportunities, Orlint helps connect the right people at the right time."
          />
        </Reveal>

        <div className="mt-20 grid gap-px bg-border/70 md:grid-cols-3 border border-border/70">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 100}>
              <div className="bg-background p-10 md:p-14 h-full transition-colors hover:bg-secondary/40">
                <div className="font-display text-accent text-2xl">{c.n}</div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl">{c.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    {
      title: "Business Matchmaking",
      copy: "We connect businesses with relevant partners, solution providers, and opportunities.",
    },
    {
      title: "Strategic Introductions",
      copy: "Meaningful introductions designed to create real business outcomes.",
    },
    {
      title: "Capability Discovery",
      copy: "Helping organizations find trusted providers and capabilities.",
    },
    {
      title: "Partnership Facilitation",
      copy: "Connecting businesses that can create value together.",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-secondary/40">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="We help businesses find the right people."
          />
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="border-t border-foreground/80 pt-8">
                <h3 className="font-display text-3xl md:text-4xl">{it.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                  {it.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Tell Us What You're Looking For",
      copy: "Share your requirement, challenge, or opportunity.",
    },
    {
      n: "02",
      title: "We Find Relevant Matches",
      copy: "We identify businesses and opportunities aligned with your needs.",
    },
    {
      n: "03",
      title: "We Make The Introduction",
      copy: "We connect both parties directly.",
    },
    {
      n: "04",
      title: "You Close The Deal",
      copy: "Build the relationship and take it forward.",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="A discreet, deliberate process." />
        </Reveal>

        <div className="mt-20 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 py-10 border-t border-border/70 last:border-b">
                <div className="font-display text-accent text-2xl md:text-3xl pt-1">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                    {s.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 border-y border-border/70 bg-gradient-to-r from-transparent via-accent/10 to-transparent px-8 py-20 text-center">
            <BrandStatement size="lg" className="text-foreground [&_span]:text-accent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhoWeWorkWith() {
  const groups = [
    "Business Owners",
    "Service Providers",
    "Solution Providers",
    "Consultancies",
    "Staffing Firms",
    "Growing Companies",
    "Partnership Teams",
    "Enterprise Buyers",
  ];
  return (
    <section className="py-28 md:py-40 bg-secondary/40">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Businesses building meaningful partnerships."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/70 border border-border/70">
          {groups.map((g, i) => (
            <Reveal key={g} delay={i * 40}>
              <div className="bg-background p-8 md:p-10 h-full flex items-center justify-center text-center min-h-[140px] transition-colors hover:bg-foreground hover:text-background group">
                <span className="font-display text-xl md:text-2xl">{g}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOrlint() {
  const items = [
    { title: "Quality Over Quantity", copy: "Every introduction is intentional." },
    { title: "Relationship Driven", copy: "Business grows through trusted connections." },
    { title: "Curated Opportunities", copy: "Relevant introductions over random outreach." },
    { title: "Long-Term Thinking", copy: "Focused on meaningful business relationships." },
  ];
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="Why Orlint" title="A standard of introduction worth keeping." />
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full p-10 border border-border/70 bg-background hover:border-accent transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="h-px w-8 bg-accent" />
                <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight">{it.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-32 md:py-48 bg-foreground text-background">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-background/60">
              <span className="h-px w-10 bg-accent" />
              Our Philosophy
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-5xl mx-auto">
              One introduction can <em className="italic text-accent">change everything.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-20 max-w-2xl mx-auto text-center space-y-3 font-display text-2xl md:text-3xl text-background/90">
            <p>The right client.</p>
            <p>The right solution provider.</p>
            <p>The right partner.</p>
            <p>The right opportunity.</p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-20 max-w-xl mx-auto text-center text-background/70 leading-relaxed">
            <p>
              Most businesses don't have an opportunity problem. They have a
              connection problem.
            </p>
            <p className="mt-4 text-background">Orlint exists to solve that.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-narrow text-center">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Get In Touch"
            title="Ready for the right connection?"
            intro="Tell us what you're looking for and we'll see how we can help."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:bg-accent hover:text-foreground"
            >
              Request Introduction
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Get A Quote
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-24 border-t border-border/70 pt-16">
            <BrandStatement size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-secondary/40 border-t border-border/60">
      <div className="container-narrow grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's begin a conversation."
              intro="Share what you're looking for. Every enquiry is handled personally and discreetly."
            />
            <div className="mt-12 space-y-6 text-sm">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Email</div>
                <a href="mailto:connect@orlint.com" className="mt-2 block text-foreground text-lg hover:text-accent transition-colors">
                  connect@orlint.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("orlint.contact", data);
        alert("Thank you. We'll be in touch shortly.");
        (e.currentTarget as HTMLFormElement).reset();
      }}
      className="bg-background p-8 md:p-12 border border-border/70 space-y-6"
    >
      <Field name="name" label="Name" required />
      <Field name="company" label="Company" />
      <div className="grid md:grid-cols-2 gap-6">
        <Field name="email" type="email" label="Email" required />
        <Field name="phone" label="Phone" />
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          What are you looking for?
        </label>
        <textarea
          name="enquiry"
          rows={5}
          required
          className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:bg-accent hover:text-foreground"
      >
        Request Introduction
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
