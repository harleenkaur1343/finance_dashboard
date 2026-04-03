import Layout from "./components/layout/Layout";
import { useFinanceStore } from "./store/useFinanceStore";
import { useState, useEffect } from "react";
export default function App() {
  const theme = useFinanceStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Layout />
    </>
  );
}
