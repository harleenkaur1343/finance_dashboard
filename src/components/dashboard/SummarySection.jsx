import { Wallet, ArrowUp, ArrowDown } from "lucide-react";
import SummaryCard from "./SummaryCard";

export default function SummarySection() {
  const iconsize = 20;
  return (
    <div id="dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <SummaryCard
        title="Total Balance"
        amount="45,000"
        type=""
        icon={<Wallet size={iconsize} />}
      />

      <SummaryCard
        title="Income"
        amount="60,000"
        type="income"
        icon={<ArrowUp size={iconsize} />}
      />

      <SummaryCard
        title="Expenses"
        amount="15,000"
        type="expense"
        icon={<ArrowDown size={iconsize} />}
      />
    </div>
  );
}
