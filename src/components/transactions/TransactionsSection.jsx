import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function TransactionsSection() {
  const transactions = useFinanceStore((s) => s.transactions);
  const search = useFinanceStore((s) => s.search);
  const setSearch = useFinanceStore((s) => s.setSearch);
  const filter = useFinanceStore((s) => s.filter);
  const setFilter = useFinanceStore((s) => s.setFilter);
  const openModal = useFinanceStore((s) => s.openModal);
  const role = useFinanceStore((s) => s.role);

  const exportToJSON = (data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  const exportToCSV = (data) => {
    const headers = ["Date", "Category", "Amount", "Type"];

    const rows = data.map((tx) => [tx.date, tx.category, tx.amount, tx.type]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  const filteredData = transactions.filter((tx) => {
    const matchesSearch = tx.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" ? true : tx.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div
      id="transactions"
      className="mt-6 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-md p-[var(--space-4)]"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-[var(--space-3)]">
          Transactions
        </h2>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => exportToCSV(filteredData)}
            className="px-3 py-2 text-sm text-[hsl(var(--color-accent))] rounded-lg border border-[hsl(var(--color-accent))] cursor-pointer hover:shadow-md"
          >
            Export CSV
          </button>

          <button
            onClick={() => exportToJSON(filteredData)}
            className="px-3 py-2 text-sm text-[hsl(var(--color-accent))] rounded-lg border border-[hsl(var(--color-accent))] cursor-pointer hover:shadow-md"
          >
            Export JSON
          </button>
          {role === "admin" && (
            <button
              onClick={() => openModal()}
              className="bg-[hsl(var(--color-accent))] text-white px-3 py-2 rounded-lg text-sm cursor-pointer hover:shadow-lg"
            >
              + Add
            </button>
          )}
        </div>
      </div>

      <TransactionFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <TransactionTable data={filteredData} role={role} />
    </div>
  );
}
