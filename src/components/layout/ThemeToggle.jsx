import { Moon, Sun } from "lucide-react";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function ThemeToggle() {
  const theme = useFinanceStore((s) => s.theme);
  const toggleTheme = useFinanceStore((s) => s.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="border border-[hsl(var(--color-muted)/0.4)] p-2 rounded-lg hover:bg-[hsl(var(--color-border))]"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}