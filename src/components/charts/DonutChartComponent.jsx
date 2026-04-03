import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { expenseData } from "../../data/mockData";

export default function DonutChartComponent() {
  return (
    <div className="bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-md p-[var(--space-4)] h-80">
      <h3 className="text-lg font-semibold mb-[var(--space-3)]">Spending Breakdown</h3>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            cx="50%"
            cy="50%"
            fill="fill"
          >
           
          </Pie>
          <Tooltip
            contentStyle={{
              background: "hsl(var(--color-card))",
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "8px",
              fontSize: "13px",
            }}
            formatter={(value) => [`₹${value.toLocaleString()}`, ""]}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ color: "hsl(var(--color-muted))", fontSize: "12px" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}