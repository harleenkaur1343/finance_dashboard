import { X, LayoutDashboard, Receipt, Lightbulb } from "lucide-react";
import { useFinanceStore } from "../../store/useFinanceStore";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const isOpen = useFinanceStore((s) => s.isSidebarOpen);
  const closeSidebar = useFinanceStore((s) => s.closeSidebar);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col gap-2 py-6 px-4 bg-[hsl(var(--color-card))] border-r border-[hsl(var(--color-border))] min-h-screen">
        <SidebarContent />
      </aside>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[hsl(var(--color-card))] z-50 p-4 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeSidebar}
          className="mb-4 p-2 rounded-lg hover:bg-[hsl(var(--color-border))]"
        >
          <X size={20} />
        </button>

        <SidebarContent />
      </aside>
    </>
  );
}

export function SidebarContent() {
  const iconSize = 18;

  const navitems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={iconSize} />,
      href: "#dashboard",
    },
    {
      label: "Transactions",
      icon: <Receipt size={iconSize} />,
      href: "#transactions",
    },
    {
      label: "Insights",
      icon: <Lightbulb size={iconSize} />,
      href: "#insights",
    },
  ];
  return (
    <>
      <img
        className="max-w-48 h-auto mb-6"
        src="https://companyasset.blob.core.windows.net/assets/zorvynfulllogolight.png"
        alt="logo"
      />
      {navitems.map((navitem, index) => (
        <SideBarItem
          key={index}
          icon={navitem.icon}
          label={navitem.label}
          href={navitem.href}
        ></SideBarItem>
      ))}
    </>
  );
}

function SideBarItem({ icon, label, href }) {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = currentHash === href;

  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors
        ${
          isActive
            ? "bg-[hsl(var(--color-accent)/0.12)] text-[hsl(var(--color-accent))]"
            : "text-[hsl(var(--color-muted))] hover:bg-border"
        }`}
    >
      {icon}
      {label}
    </a>
  );
}
