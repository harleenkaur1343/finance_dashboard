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
        {role === "admin" && (
          <button
            onClick={() => openModal()}
            className="mb-4 bg-[hsl(var(--color-accent))] text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add
          </button>
        )}
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
