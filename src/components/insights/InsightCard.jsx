export default function InsightCard({ title, value, description }) {
  return (
    <div
      className="bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-md p-[var(--space-4)]"
      style={{
        background: `linear-gradient(hsl(var(--color-card)), hsl(var(--color-card))) padding-box,
                 linear-gradient(135deg, hsl(var(--color-accent)), hsl(var(--color-accent)/0.3)) border-box`,
        borderBottom: "4px solid transparent",
      }}
    >
      <h3 className="text-sm text-[hsl(var(--color-muted))]">{title}</h3>

      <p className="text-xl font-semibold mt-[var(--space-2)]">{value}</p>

      {description && (
        <p className="text-sm text-[hsl(var(--color-muted))] mt-[var(--space-2)]">
          {description}
        </p>
      )}
    </div>
  );
}
