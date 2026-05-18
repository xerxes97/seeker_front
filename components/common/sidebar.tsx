"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/common/button";
import { useStore } from "@/stores";

const navItems = [
  { href: "/findings", icon: "work_outline", label: "Findings" },
  // { href: "/matches", icon: "analytics", label: "Matches" },
  { href: "/profile", icon: "person_outline", label: "Profile" },
  // { href: "/favorites", icon: "star_outline", label: "Favorites" },
  // { href: "/settings", icon: "settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useStore((s) => s.logout);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-stack-lg px-stack-md z-50 px-4 py-8">
      <div className="mb-stack-lg">
        <h1 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
          CareerArch
        </h1>
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-1">
          Premium Tier
        </p>
      </div>

      <nav className="flex-grow space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 py-2 px-3 cursor-pointer transition-colors duration-200 active:scale-95 rounded-lg ${
              isActive(item.href)
                ? "bg-secondary-container text-on-secondary-container font-medium"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-body-md text-body-md">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-stack-md border-t border-outline-variant/30">
        <Button variant="contained" color="primary" className="mb-4" fullWidth>
          Upgrade Plan
        </Button>

        <div className="space-y-1 mt-4">
          <Link
            href="/help"
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-body-md text-body-md">Help</span>
          </Link>
          <button
            onClick={async () => {
              await logout();
              router.push("/");
            }}
            className="flex items-center gap-3 py-2 px-3 w-full text-left text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md text-body-md">Logout</span>
          </button>
        </div>

        <div className="flex items-center gap-3 px-3 pt-2">
          <img
            alt="User Workspace Avatar"
            className="w-10 h-10 rounded-full border border-outline-variant object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHnAEeQFHvjJLqzAGMQvZD0da973QPGacJ2DaKc98j26fOiwMEtlGOnhOS9rfmlslhcRgrPp7Fzp89ASxAEmTs0IyTpcr0Ohww_xHgLxF8TekjQ_CU1DSdwewHAcphQtzyLE5G10mdeXlmBGyCulrL9pZBlNnvaM2hCjn4lQr362lED8Kz_HHmvhyrwQAPpoOM5k7ZzFyF3V5HO-3gHA9oMRHR_MKjMrnwvkHC3L4F0Mjjh7ZIGfuoC5AT9QdtOzTNf_PVKVshZA"
          />
          <div>
            <p className="font-label-md text-label-md font-bold text-on-surface">
              Alex Rivera
            </p>
            <p className="text-[11px] text-on-surface-variant">Design Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
