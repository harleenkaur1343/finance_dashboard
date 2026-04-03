import RoleToggle from "./RoleToggle";
import { useFinanceStore } from "../../store/useFinanceStore";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const openSidebar = useFinanceStore((s) => s.openSidebar);

  return (
    <header className="bg-card px-6 py-4 flex items-center justify-between">
      <button
        onClick={openSidebar}
        className="md:hidden rounded-lg p-2 hover:bg-[hsl(var(--color-border))]"
      >
        <Menu size={22} />
      </button>
      <h1 className="hidden md:block md:text-2xl font-semibold">Overview</h1>
      <div className="flex gap-3">
      <RoleToggle />
      <ThemeToggle/>
      </div>
      
    </header>
  );
}
