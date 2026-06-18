export function BrandStatement({
  size = "lg",
  className = "",
}: {
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeCls =
    size === "xl"
      ? "text-6xl md:text-8xl lg:text-9xl"
      : size === "lg"
        ? "text-5xl md:text-7xl"
        : "text-3xl md:text-5xl";
  return (
    <div className={`font-display tracking-tight leading-[0.95] ${sizeCls} ${className}`}>
      We bring. <span className="text-accent italic">You close.</span>
    </div>
  );
}
