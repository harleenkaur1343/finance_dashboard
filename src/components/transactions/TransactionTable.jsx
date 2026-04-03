import { Pencil, Trash } from "lucide-react";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function TransactionTable({ data, role }) {
  const openModal = useFinanceStore((s) => s.openModal);
  const deleteTransaction = useFinanceStore((s) => s.deleteTransaction);

  

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (confirmDelete) {
      deleteTransaction(id);
    }
  };
  return (
    <div className="overflow-x-auto overflow-y-auto h-[18rem]">
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr className="text-left border-b border-[hsl(var(--color-border))]">
            <th className="py-2">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center py-4 px-2 text-[hsl(var(--color-muted))]"
              >
                No transactions found
              </td>
            </tr>
          ) : (
            data.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-[hsl(var(--color-border))]"
              >
                <td className="py-2">{tx.date}</td>
                <td>{tx.category}</td>
                <td>Rs {tx.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-md text-xs ${
                      tx.type === "income"
                        ? "bg-[hsl(var(--color-income)/0.1)] text-[hsl(var(--color-income))]"
                        : "bg-[hsl(var(--color-expense)/0.1)] text-[hsl(var(--color-expense))]"
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>

                {role === "admin" && (
                  <td className="flex gap-3 p-2">
                    <Pencil size={16}   onClick={() => openModal(tx)} className="cursor-pointer text-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-accent))] transition-colors duration-200" />
                    <Trash size={16} onClick={() => handleDelete(tx.id)} className="cursor-pointer text-[hsl(var(--color-muted))] hover:text-[crimson]" />
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
