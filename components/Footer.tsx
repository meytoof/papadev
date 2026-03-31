import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-20 py-12 text-sm"
      style={{ background: "var(--encre)", color: "rgba(245,240,232,0.6)" }}
    >
      <Link href="/" className="font-display text-xl font-black no-underline" style={{ color: "var(--cream)" }}>
        Papa<span style={{ color: "var(--terracotta-light)" }}>Dev</span>
      </Link>
      <p style={{ maxWidth: 300, lineHeight: 1.6, fontWeight: 300 }}>
        Un blog fait avec amour (et un peu de code) par un papa épicurieux quelque part en Savoie.
      </p>
      <nav className="flex gap-6">
        {[
          { href: "/articles", label: "Articles" },
          { href: "/jeux", label: "Jeux" },
          { href: "https://maieutique.app", label: "Maïeutique", ext: true },
          { href: "https://levisweb.net", label: "LevisWeb", ext: true },
        ].map(({ href, label, ext }) => (
          <a
            key={href}
            href={href}
            target={ext ? "_blank" : undefined}
            rel={ext ? "noopener noreferrer" : undefined}
            className="no-underline transition-colors hover:opacity-80"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
