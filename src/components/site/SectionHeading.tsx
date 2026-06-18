import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-rule" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
