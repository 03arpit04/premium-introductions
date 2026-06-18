import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandStatement } from "@/components/site/BrandStatement";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Orlint" },
      { name: "description", content: "Tell us what you're looking for. Every enquiry is handled personally and discreetly." },
      { property: "og:title", content: "Orlint" },
      { property: "og:description", content: "Request an introduction." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 bg-background">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's begin a conversation."
              intro="Tell us what you're looking for and we'll see how we can help."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-background">
        <div className="container-narrow grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Email</div>
                <a href="mailto:connect@orlint.com" className="mt-3 block font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors">
                  connect@orlint.com
                </a>
              </div>
              <div className="pt-8 border-t border-border/70">
                <BrandStatement size="md" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget).entries());
                console.log("orlint.contact", data);
                alert("Thank you. We'll be in touch shortly.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="bg-secondary/40 p-8 md:p-12 border border-border/70 space-y-6"
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
                  rows={6}
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
          </Reveal>
        </div>
      </section>
    </>
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
