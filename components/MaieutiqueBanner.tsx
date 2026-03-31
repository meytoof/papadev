export default function MaieutiqueBanner() {
  return (
    <section
      className="mx-20 mb-24 rounded-3xl relative overflow-hidden"
      style={{ background: "var(--foret)" }}
    >
      {/* déco SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 280" preserveAspectRatio="none">
        <circle cx="700" cy="-50" r="250" fill="rgba(122,191,160,0.06)" />
        <circle cx="600" cy="300" r="180" fill="rgba(193,80,46,0.05)" />
      </svg>

      <div className="relative z-10 grid gap-16 items-center p-16" style={{ gridTemplateColumns: "1fr auto" }}>
        {/* Left */}
        <div>
          <p className="font-mono-dm text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>
            ✦ Partenaire recommandé
          </p>
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(1.8rem,2.5vw,2.5rem)", color: "var(--cream)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Ton enfant a besoin d&apos;un{" "}
            <em style={{ color: "var(--vert-mai)" }}>tuteur intelligent</em>&nbsp;?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.7, maxWidth: 480 }}>
            Maïeutique, c&apos;est le compagnon d&apos;apprentissage IA pour les ados et étudiants qui veulent
            vraiment comprendre — pas juste mémoriser. La méthode socratique, réinventée pour 2025.
            Essai gratuit, sans CB.
          </p>
        </div>
        {/* Card */}
        <div
          className="rounded-3xl p-8 text-center"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", minWidth: 220 }}
        >
          <span className="text-5xl block mb-4">🦉</span>
          <p className="font-display text-xl mb-1" style={{ color: "var(--cream)" }}>Maïeutique</p>
          <span className="font-mono-dm text-xs block mb-6" style={{ color: "rgba(245,240,232,0.4)" }}>maieutique.app</span>
          <a
            href="https://maieutique.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-6 py-3 font-medium text-sm transition-all hover:-translate-y-0.5"
            style={{ background: "var(--vert-mai)", color: "var(--encre)" }}
          >
            Essayer gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}
