import { create } from "zustand";
import { transactions as mockData, transactions } from "../data/mockData";

export const useFinanceStore = create((set) => ({
  transactions: mockData,

  theme: "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  role: "user",
  setRole: (role) => set({ role }),

  search: "",
  setSearch: (search) => set({ search }),

  filter: "all",
  setFilter: (filter) => set({ filter }),

  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  isModalOpen: false,
  editingTx: null,

  openModal: (tx = null) => set({ isModalOpen: true, editingTx: tx }),

  closeModal: () => set({ isModalOpen: false, editingTx: null }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, { ...tx, id: Date.now() }],
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((tx) => tx.id !== id),
    })),

  updateTransaction: (updatedTx) =>
    set((state) => ({
      transactions: state.transactions.map((tx) =>
        tx.id === updatedTx.id ? updatedTx : tx,
      ),
    })),
}));
