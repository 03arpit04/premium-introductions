import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-narrow py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl tracking-[0.25em]">ORLINT</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Connecting Opportunity With Capability.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-foreground text-muted-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
              <li><Link to="/industries" className="hover:text-foreground text-muted-foreground">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </h4>
            <a
              href="mailto:connect@orlint.com"
              className="mt-5 inline-block text-sm text-foreground hover:text-accent transition-colors"
            >
              connect@orlint.com
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-border/60 pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-display text-4xl md:text-5xl tracking-tight">
            We bring. <span className="text-accent">You close.</span>
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Orlint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
