import { Search } from "lucide-react";

export default function TransactionFilters({ search, setSearch, filter, setFilter }) {
  const filters = ["all", "income", "expense"];

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">

      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--color-muted))]"
        />
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-lg
            bg-[hsl(var(--color-card))]
            border border-[hsl(var(--color-border))]
            text-[hsl(var(--color-foreground))]
            placeholder:text-[hsl(var(--color-muted))]
            focus:outline-none focus:ring-1 focus:ring-[hsl(var(--color-accent))]
            transition-all"
        />
      </div>

      {/* Filter Toggle Pills */}
      <div className="sm: justify-center flex items-center gap-1 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-lg p-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all duration-200 cursor-pointer
              ${filter === f
                ? "bg-[hsl(var(--color-accent))] text-white shadow-sm"
                : "text-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-border))]"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

    </div>
  );
}