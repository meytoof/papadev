"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5"
      style={{
        background: "rgba(245,240,232,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--sable-light)",
      }}
    >
      <Link
        href="/"
        className="font-display text-2xl font-black no-underline"
        style={{ color: "var(--foret)" }}
      >
        Papa<span style={{ color: "var(--terracotta)" }}>Dev</span>
      </Link>

      <ul className="flex list-none m-0 p-0" style={{ gap: "2rem" }}>
        {[
          { href: "/articles", label: "Articles" },
          { href: "/jeux", label: "Jeux éducatifs" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium tracking-widest uppercase no-underline transition-colors"
              style={{ color: path.startsWith(href) ? "var(--terracotta)" : "var(--encre-soft)" }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://maieutique.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium no-underline rounded-full px-5 py-2 transition-all"
            style={{ background: "var(--foret)", color: "var(--cream)" }}
          >
            Maïeutique ✦
          </a>
        </li>
      </ul>
    </nav>
  );
}
