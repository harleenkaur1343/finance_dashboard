export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--color-border))] mt-12 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      
      <p className="text-xs text-[hsl(var(--color-muted))]">
        © {new Date().getFullYear()} Zorvyn. All rights reserved.
      </p>

      <p className="text-xs text-[hsl(var(--color-muted))]">
        Built with <span className="text-[hsl(var(--color-accent))]">Love</span> using React & Tailwind
      </p>

    </footer>
  );
}