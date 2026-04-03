import { useState, useEffect } from "react";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function TransactionModal() {
  const {
    isModalOpen,
    closeModal,
    addTransaction,
    updateTransaction,
    editingTx,
  } = useFinanceStore();

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  // Populate when editing
  useEffect(() => {
    if (editingTx) {
      setForm(editingTx);
    }
  }, [editingTx]);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTx) {
      updateTransaction({ ...form, id: editingTx.id });
    } else {
      addTransaction(form);
    }

    closeModal();
    setForm({ date: "", category: "", amount: "", type: "expense" });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      
      <div className="bg-[hsl(var(--color-card))] p-6 rounded-xl shadow-lg w-full max-w-md">
        
        <h2 className="text-lg font-semibold mb-4">
          {editingTx ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          
          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="border border-[hsl(var(--color-border))] rounded-lg p-2"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            className="border border-[hsl(var(--color-border))] rounded-lg p-2"
            required
          />

          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            className="border border-[hsl(var(--color-border))] rounded-lg p-2"
            required
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
            className="border border-[hsl(var(--color-border))] rounded-lg p-2"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-3 py-1 text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[hsl(var(--color-accent))] text-white px-4 py-1 rounded-lg text-sm"
            >
              {editingTx ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}