type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-6 fade-in">
      <h2 className="font-serif text-3xl text-nordic-charcoal md:text-4xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-nordic-charcoal/70 md:text-base">{subtitle}</p>
    </div>
  );
}
