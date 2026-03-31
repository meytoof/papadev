import Link from "next/link";
import Footer from "@/components/Footer";
import MaieutiqueBanner from "@/components/MaieutiqueBanner";

const JEUX = [
  {
    slug: "virgule-decimale", icon: "🔢", cat: "Mathématiques", name: "La Virgule Décimale",
    desc: "Multiplications et divisions par 10, 100, 1000 via le déplacement visuel de la virgule. Conçu après une session de devoirs mémorable.",
    tags: ["×10 ×100 ×1000", "÷10 ÷100 ÷1000", "Décimaux", "CM1–6ème"],
    status: "live", age: "8 ans+",
  },
  { slug: null, icon: "🧮", cat: "Mathématiques", name: "Tables Chrono", desc: "Les tables de multiplication en course contre la montre. Leaderboard familial inclus.", tags: ["Tables 1–12", "Chrono", "Score"], status: "soon", age: "7–12 ans" },
  { slug: null, icon: "📐", cat: "Mathématiques", name: "Géo Builder", desc: "Construire des figures géométriques en résolvant des problèmes d'aire et périmètre.", tags: ["Aire", "Périmètre", "Géométrie"], status: "soon", age: "9–13 ans" },
  { slug: null, icon: "📖", cat: "Lecture", name: "Mot Mystère", desc: "Synonymes et définitions pour enrichir le vocabulaire. Jeu de déduction.", tags: ["Vocabulaire", "Synonymes"], status: "soon", age: "8–12 ans" },
  { slug: null, icon: "✍️", cat: "Orthographe", name: "Dictée Express", desc: "Dictées courtes auto-corrigées avec explication de chaque erreur.", tags: ["Dictée", "Autocorrection"], status: "soon", age: "8–13 ans" },
  { slug: null, icon: "🌍", cat: "Grammaire", name: "L'Accordeur", desc: "Genre, nombre, pluriels irréguliers et exceptions rendus jouables.", tags: ["Accord", "Genre/Nombre"], status: "soon", age: "7–11 ans" },
  { slug: null, icon: "🃏", cat: "Mémoire", name: "Mémo Flash", desc: "Tables, conjugaisons, capitales : apprendre par cœur comme un sport de combat.", tags: ["Tables", "Conjugaison", "Géo"], status: "soon", age: "7–14 ans" },
  { slug: null, icon: "🔍", cat: "Logique", name: "Le Détective des Mots", desc: "Syllabes, anagrammes, charades : raisonnement logique camouflé en jeu de lettres.", tags: ["Anagrammes", "Logique"], status: "soon", age: "8–12 ans" },
  { slug: null, icon: "🔬", cat: "Sciences", name: "Quiz Phénomènes", desc: "Pourquoi le ciel est bleu ? Des quiz illustrés pour les curieux en herbe.", tags: ["Sciences", "Quiz"], status: "soon", age: "8–14 ans" },
];

const STATUS_LABEL: Record<string, string> = { live: "Disponible", soon: "Bientôt", wip: "En dev" };
const STATUS_COLOR: Record<string, string> = { live: "var(--foret-light)", soon: "var(--sable)", wip: "var(--terracotta)" };

export default function JeuxPage() {
  const jeuLive = JEUX.find(j => j.status === "live")!;
  const jeusBientot = JEUX.filter(j => j.status !== "live");

  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden px-20 pt-40 pb-20" style={{ background: "var(--foret)", color: "var(--cream)" }}>
        <div className="absolute bottom-[-4rem] right-[-2rem] pointer-events-none select-none" style={{ fontSize: "30rem", opacity: 0.05, lineHeight: 1 }}>🎲</div>
        <p className="font-mono-dm text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(122,191,160,0.8)" }}>🎮 Apprendre en s&apos;amusant</p>
        <h1 className="font-display font-black mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 700 }}>
          Les jeux <em style={{ color: "var(--vert-mai)" }}>éducatifs</em><br />de PapaDev
        </h1>
        <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.05rem", fontWeight: 300, maxWidth: 550, lineHeight: 1.7 }}>
          Faits maison. Testés par de vrais enfants. Gratuits, toujours.
        </p>
        <div className="flex gap-12 mt-10">
          {[{ n: "1", l: "Jeu disponible" }, { n: "5+", l: "En création" }, { n: "0 €", l: "Toujours gratuits" }].map(({ n, l }) => (
            <div key={n}>
              <div className="font-display font-black" style={{ fontSize: "2rem", color: "var(--vert-mai)" }}>{n}</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(245,240,232,0.5)", fontWeight: 300, marginTop: "0.2rem" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* JEU FEATURED : VIRGULE DECIMALE */}
      <div className="px-20 py-16">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="font-display text-2xl" style={{ letterSpacing: "-0.02em" }}>🔢 <em style={{ color: "var(--terracotta)" }}>Mathématiques</em></h2>
          <div className="flex-1 h-px" style={{ background: "var(--sable-light)" }} />
        </div>

        <div className="grid overflow-hidden rounded-3xl mb-12" style={{ gridTemplateColumns: "1fr 1.3fr", background: "var(--encre)", minHeight: 400 }}>
          {/* Info */}
          <div className="p-14 flex flex-col justify-center">
            <span className="inline-block rounded-full px-4 py-1 font-mono-dm text-xs mb-5 w-fit" style={{ background: "rgba(193,80,46,0.2)", color: "var(--terracotta-light)" }}>
              🔢 Mathématiques — Disponible
            </span>
            <h3 className="font-display mb-4" style={{ fontSize: "clamp(1.8rem,2.5vw,2.5rem)", color: "var(--cream)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              La <em style={{ color: "var(--terracotta-light)" }}>Virgule</em><br />Décimale
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.98rem", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.5rem" }}>
              ×10, ×100, ×1000 n&apos;est pas une question de &quot;zéros à ajouter&quot;. C&apos;est une question de déplacement.
              Ce jeu le rend évident, visuel, et inoubliable.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {jeuLive.tags.map(t => (
                <span key={t} className="rounded-lg px-3 py-1 font-mono-dm text-xs" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(245,240,232,0.7)" }}>{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/jeux/virgule-decimale" className="inline-block rounded-full px-8 py-4 font-medium no-underline transition-all hover:-translate-y-0.5" style={{ background: "var(--terracotta)", color: "var(--blanc)" }}>
                ▶ Jouer maintenant
              </Link>
              <span className="font-mono-dm text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>À partir de 8 ans</span>
            </div>
          </div>
          {/* Visual */}
          <div className="flex items-center justify-center p-14 relative" style={{ background: "linear-gradient(135deg,#1e3530,#2D4A3E)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(193,80,46,0.15) 0%, transparent 70%)" }} />
            <div className="relative z-10 rounded-2xl p-8 text-center w-full max-w-xs" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <p className="font-mono-dm text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>Exemple</p>
              <p className="mb-2" style={{ color: "rgba(245,240,232,0.8)", fontSize: "0.9rem" }}>3,7 × 10 = ?</p>
              <div className="font-display font-black my-4" style={{ fontSize: "3rem", color: "var(--cream)", letterSpacing: "0.05em" }}>
                3<span style={{ color: "var(--terracotta-light)" }}>,</span>7
              </div>
              <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.5)" }}>↓ virgule → 1 cran à droite</p>
              <div className="font-display font-black" style={{ fontSize: "3rem", color: "var(--vert-mai)", letterSpacing: "0.05em" }}>37</div>
            </div>
          </div>
        </div>

        {/* GRILLE AUTRES JEUX */}
        <div className="flex items-center gap-6 mb-8">
          <h2 className="font-display text-2xl" style={{ letterSpacing: "-0.02em" }}>📚 <em style={{ color: "var(--foret-light)" }}>Prochainement</em></h2>
          <div className="flex-1 h-px" style={{ background: "var(--sable-light)" }} />
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {jeusBientot.map(({ icon, cat, name, desc, age, status }) => (
            <div key={name} className="rounded-2xl p-6 flex flex-col opacity-60" style={{ background: "var(--blanc)", border: "1px solid var(--sable-light)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: "rgba(193,80,46,0.08)" }}>{icon}</div>
              <p className="font-mono-dm text-xs tracking-widest uppercase mb-1" style={{ color: "var(--sable)" }}>{cat}</p>
              <h3 className="font-medium mb-2" style={{ fontSize: "0.95rem" }}>{name}</h3>
              <p className="flex-1" style={{ fontSize: "0.8rem", color: "var(--encre-soft)", fontWeight: 300, lineHeight: 1.6 }}>{desc}</p>
              <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid var(--cream-dark)" }}>
                <span className="font-mono-dm text-xs rounded-full px-2 py-0.5" style={{ background: `${STATUS_COLOR[status]}20`, color: STATUS_COLOR[status] }}>{STATUS_LABEL[status]}</span>
                <span className="font-mono-dm text-xs" style={{ color: "var(--sable)" }}>{age}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MaieutiqueBanner />
      <Footer />
    </>
  );
}
