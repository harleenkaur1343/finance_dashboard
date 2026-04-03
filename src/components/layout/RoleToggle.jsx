import { useState } from "react";

// export default function RoleToggle(){
//   const [ role, setRole] = useState("user");

//   return(
//     <div className="flex items-center gap-2">
//       <select
//         value={role}
//         onChange={(e)=>setRole(e.target.value)}
//         className="bg-card border border-border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
//       >
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>
//     </div>
//   )
// }

import { ShieldCheck, User } from "lucide-react";
import { useFinanceStore } from "../../store/useFinanceStore";

export default function RoleToggle() {
  const role = useFinanceStore((s)=>s.role);
  const setRole = useFinanceStore((s)=>s.setRole);

  return (
    <div className="flex items-center gap-1 bg-muted/40 border border-[hsl(var(--color-muted)/0.3)] rounded-xl p-1 backdrop-blur-sm">
      {[
        { value: "user", label: "User", Icon: User },
        { value: "admin", label: "Admin", Icon: ShieldCheck },
      ].map(({ value, label, Icon }) => (
        <button
          key={value}
          onClick={() => setRole(value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
            ${
              role === value
                ? "bg-[hsl(var(--color-accent)/0.2)] text-[hsl(var(--color-accent))] shadow-sm border border-[hsl(var(--color-border))]"
                : "text-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-border))]"
            }`}
        >
          <Icon size={13} />
          {label}
        </button>
      ))}
    </div>
  );
}
