type HeroTitleProps = {
  plaats?: string; // optioneel, geen fallback
};

export default function HeroTitle({ plaats }: HeroTitleProps) {
  if (!plaats) return null;

  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
      CV Ketel Onderhoud in <span className="text-red-500">{plaats}</span> door een Betrouwbare Specialist
    </h1>
  );
}
