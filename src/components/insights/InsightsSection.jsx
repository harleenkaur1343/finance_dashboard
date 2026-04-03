import { transactions } from "../../data/mockData";
import InsightCard from "./InsightCard";

export default function InsightsSection() {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const savings = income - expenses;

  const categoryMap = {};

  //key val pair of the category and amount spent on the category
  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  //sorting
  const topCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  )[0];

  return (
    <div className="mt-6" id="insights">
      <h2 className="text-lg font-semibold mb-[var(--space-3)]">Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard
          title="Top Spending Category"
          value={topCategory ? topCategory[0] : "N/A"}
          description={topCategory ? `Rs. ${topCategory[1]} spent` : "No data"}
        />

        <InsightCard
          title="Total Income vs Expense"
          value={`Rs. ${income} / Rs. ${expenses}`}
        />

        <InsightCard
          title="Savings"
          value={`Rs. ${savings}`}
          description={
            savings >= 0 ? "You are saving" : "You are overspending"
          }
        />
      </div>
    </div>
  );
}
