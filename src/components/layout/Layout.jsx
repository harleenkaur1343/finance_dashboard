import ChartsSection from "../charts/ChartsSection";
import SummarySection from "../dashboard/SummarySection";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import TransactionsSection from "../transactions/TransactionsSection";
import InsightsSection from "../insights/InsightsSection";
import TransactionModal from "../transactions/TransactionModal";import Footer from "./Footer";

export default function Layout() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header role={role} setRole={setRole} />

        <main className="p-6">
          <SummarySection />
          <ChartsSection />
          <TransactionsSection role={role} />
          <InsightsSection />
          <Footer/>
        </main>
        <TransactionModal />
      </div>
    </div>
  );
}

