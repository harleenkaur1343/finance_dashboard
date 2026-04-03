export default function SummaryCard({ title, amount, icon, type }) {
  return (
    <div className="bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-md p-[var(--space-4)] flex items-center justify-between">
      <div>
        <p className="text-sm text-[hsl(var(--color-muted))]">{title}</p>
        <h2 className="text-2xl font-semibold mt-[var(--space-2)]">
          Rs. {amount}
        </h2>
      </div>

      <div
        className={`p-[var(--space-3)] rounded-lg ${
          type === "income"
            ? "bg-[hsl(var(--color-income)/0.1)] text-[hsl(var(--color-income))]"
            : type === "expense"
              ? "bg-[hsl(var(--color-expense)/0.1)] text-[hsl(var(--color-expense))]"
              : "bg-[hsl(var(--color-accent)/0.1)] text-[hsl(var(--color-accent))]"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}
