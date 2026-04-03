import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { balanceData } from "../../data/mockData";

export default function LineChartComponent() {
  return (
    <div className="bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-md p-[var(--space-4)] h-80">
      <h3 className="text-lg font-semibold mb-[var(--space-3)]">Balance Trend</h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={balanceData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "hsl(var(--color-muted))", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(var(--color-muted))", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--color-card))",
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "8px",
              fontSize: "13px",
            }}
            formatter={(value) => [`₹${value.toLocaleString()}`, "Balance"]}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="hsl(var(--color-accent))"
            strokeWidth={2}
            dot={{ r: 4, fill: "hsl(var(--color-accent))" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}