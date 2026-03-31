import Link from "next/link";
import Footer from "@/components/Footer";
import MaieutiqueBanner from "@/components/MaieutiqueBanner";

const JEUX_PREVIEW = [
  { slug: "virgule-decimale", icon: "🔢", cat: "Mathématiques", name: "La Virgule Décimale", desc: "Multiplications et divisions par 10, 100, 1000 via le déplacement de la virgule.", badge: "Disponible", badgeColor: "#2D4A3E" },
  { slug: "#", icon: "📖", cat: "Lecture", name: "Mot Mystère", desc: "Synonymes et définitions pour enrichir le vocabulaire.", badge: "Bientôt", badgeColor: "#B8A88A" },
  { slug: "#", icon: "🃏", cat: "Mémoire", name: "Mémo Flash", desc: "Tables, conjugaisons, capitales : apprendre par cœur comme un sport.", badge: "Bientôt", badgeColor: "#B8A88A" },
  { slug: "#", icon: "🧩", cat: "Logique", name: "Le Détective des Mots", desc: "Anagrammes et charades pour entraîner le raisonnement.", badge: "Bientôt", badgeColor: "#B8A88A" },
  { slug: "#", icon: "🔬", cat: "Sciences", name: "Quiz Phénomènes", desc: "Pourquoi le ciel est bleu ? Quiz illustrés pour curieux.", badge: "Bientôt", badgeColor: "#B8A88A" },
  { slug: "#", icon: "🌍", cat: "Langues", name: "L'Accordeur", desc: "Genre, nombre, pluriels irréguliers rendus jouables.", badge: "Bientôt", badgeColor: "#B8A88A" },
];

const PILLARS = [
  { icon: "🎮", title: "Des jeux éducatifs vraiment fun", desc: "Conçus pour que les enfants demandent à y revenir." },
  { icon: "📚", title: "Des articles sans blabla", desc: "Des conseils testés par un vrai papa, pas par des experts en chambre." },
  { icon: "🍷", title: "L'épicurisme, une pédagogie", desc: "Curiosité, plaisir, partage : les mêmes valeurs à table et à l'école." },
  { icon: "🛠️", title: "Fait maison, par un dev-papa", desc: "Chaque outil créé ici, c'est pour mes enfants. Avant tout." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="grid min-h-screen pt-20" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Left */}
        <div className="flex flex-col justify-center px-20 py-24">
          <p className="font-mono-dm text-xs tracking-widest uppercase mb-6" style={{ color: "var(--terracotta)" }}>
            🍕 Le blog des papas qui aiment trop les bonnes choses
          </p>
          <h1
            className="font-display font-black mb-7"
            style={{ fontSize: "clamp(3rem,5vw,5.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            Élever ses enfants<br />avec{" "}
            <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>curiosité</em><br />
            &amp; bon goût.
          </h1>
          <p className="mb-10" style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--encre-soft)", fontWeight: 300, maxWidth: 460 }}>
            Parce qu&apos;un papa <strong style={{ fontWeight: 500, color: "var(--encre)" }}>épicurieux</strong>, c&apos;est un papa qui profite
            pleinement de la vie — et qui transmet cette passion à ses enfants.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link
              href="/articles"
              className="inline-block rounded-full px-8 py-4 font-medium no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "var(--terracotta)", color: "var(--blanc)" }}
            >
              Lire les articles →
            </Link>
            <Link
              href="/jeux"
              className="inline-block font-medium no-underline transition-colors"
              style={{ color: "var(--foret)", borderBottom: "2px solid var(--sable)", paddingBottom: 2 }}
            >
              Voir les jeux éducatifs
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="relative flex items-center justify-center overflow-hidden p-16" style={{ background: "var(--foret)" }}>
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ top: -100, right: -100, background: "rgba(255,255,255,0.04)" }} />
          <div className="absolute w-[300px] h-[300px] rounded-full" style={{ bottom: 50, left: 50, background: "rgba(255,255,255,0.04)" }} />
          <div className="relative z-10 rounded-3xl p-12 text-center max-w-sm w-full" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <span className="text-6xl block mb-6">🎲</span>
            <h3 className="font-display text-2xl mb-4" style={{ color: "var(--cream)", lineHeight: 1.2 }}>
              Apprendre en jouant, vraiment.
            </h3>
            <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem", lineHeight: 1.65, fontWeight: 300 }}>
              Des mini-jeux conçus par un papa-dev pour transformer les révisions en plaisir.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {["Maths", "Lecture", "Mémoire", "Logique"].map(t => (
                <span key={t} className="rounded-full px-3 py-1 font-mono-dm text-xs" style={{ background: "rgba(193,80,46,0.25)", color: "var(--terracotta-light)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCEPT ── */}
      <section id="concept" className="grid gap-24 items-center px-20 py-32" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <p className="font-mono-dm text-xs tracking-widest uppercase mb-5" style={{ color: "var(--sable)" }}>Le concept</p>
          <h2 className="font-display mb-6" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
            Un papa épicurieux,<br />c&apos;est quoi <em style={{ color: "var(--terracotta)" }}>exactement</em>&nbsp;?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--encre-soft)", fontWeight: 300, marginBottom: "1rem" }}>
            C&apos;est celui qui mange bien, qui boit avec modération (hm), qui joue aux bons jeux vidéo,
            et qui se demande comment transmettre tout ça sans formater ses enfants.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--encre-soft)", fontWeight: 300 }}>
            PapaDev est né de cette contradiction : comment être un papa passionné par les plaisirs de la vie
            tout en étant <strong style={{ color: "var(--encre)", fontWeight: 500 }}>vraiment présent</strong> dans l&apos;éducation de ses enfants ?
          </p>
          <div className="grid gap-6 mt-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {[{ num: "0 €", lbl: "Tous les jeux sont gratuits, toujours." }, { num: "∞", lbl: "Curiosité requise pour entrer ici." }].map(({ num, lbl }) => (
              <div key={num} className="rounded-2xl p-6" style={{ background: "var(--foret)", color: "var(--cream)" }}>
                <div className="font-display font-black" style={{ fontSize: "2.5rem", color: "var(--terracotta-light)", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(245,240,232,0.7)", marginTop: "0.4rem" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl p-12" style={{ background: "var(--cream-dark)", position: "relative", overflow: "hidden" }}>
          {PILLARS.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl p-5 transition-transform hover:translate-x-1.5" style={{ background: "var(--blanc)", border: "1px solid var(--sable-light)" }}>
              <span className="text-3xl flex-shrink-0">{icon}</span>
              <div>
                <h4 className="font-medium mb-1" style={{ fontSize: "0.95rem" }}>{title}</h4>
                <p style={{ fontSize: "0.82rem", color: "var(--sable)", fontWeight: 300 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTICLES PREVIEW ── */}
      <section className="px-20 py-28" style={{ background: "var(--encre)", color: "var(--cream)" }}>
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-display" style={{ fontSize: "clamp(2rem,3vw,2.8rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            Les derniers<br /><em style={{ color: "var(--terracotta-light)" }}>articles</em>
          </h2>
          <Link href="/articles" className="text-sm tracking-widest uppercase no-underline transition-colors" style={{ color: "var(--sable)", borderBottom: "1px solid var(--encre-soft)" }}>
            Tous les articles ↗
          </Link>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
          {[
            { icon: "📖", bg: "linear-gradient(135deg,#2D4A3E,#3D6B5A)", tag: "Éditorial", title: "Pourquoi j'ai créé PapaDev — et pourquoi ça compte vraiment", desc: "La genèse d'un projet né un soir de devoirs ratés, d'une explication qui n'a pas marché.", featured: true },
            { icon: "🧮", bg: "linear-gradient(135deg,#3A3830,#4A4840)", tag: "Maths", title: "La virgule magique et le secret des ×10", desc: "Comment un concept simple devient un jeu inoubliable.", featured: false },
            { icon: "🍕", bg: "linear-gradient(135deg,#1A1A18,#2A2A28)", tag: "Épicurisme", title: "Cuisiner avec ses enfants : la vraie leçon de maths", desc: "Les fractions, les proportions, et le plaisir de faire ensemble.", featured: false },
          ].map(({ icon, bg, tag, title, desc, featured }) => (
            <Link key={title} href="/articles" className="rounded-3xl overflow-hidden no-underline flex flex-col transition-transform hover:-translate-y-1" style={{ background: "var(--encre-soft)", border: "1px solid rgba(255,255,255,0.06)", color: "inherit", ...(featured ? { gridRow: "1 / 3" } : {}) }}>
              <div className="flex items-center justify-center" style={{ background: bg, fontSize: featured ? "5rem" : "3rem", aspectRatio: featured ? "auto" : "16/9", flex: featured ? 1 : "none", minHeight: featured ? 200 : "auto" }}>
                {icon}
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full px-3 py-1 font-mono-dm text-xs mb-3" style={{ background: "rgba(193,80,46,0.2)", color: "var(--terracotta-light)" }}>{tag}</span>
                <h3 className="font-display mb-2" style={{ fontSize: featured ? "1.7rem" : "1.1rem", lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.6)", fontWeight: 300, lineHeight: 1.65 }}>{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── JEUX PREVIEW ── */}
      <section className="px-20 py-32">
        <p className="font-mono-dm text-xs tracking-widest uppercase mb-3" style={{ color: "var(--sable)" }}>Jeux éducatifs</p>
        <h2 className="font-display mb-4" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
          Des jeux qui font<br /><em style={{ color: "var(--foret-light)" }}>vraiment apprendre</em>
        </h2>
        <p className="mb-16" style={{ fontSize: "1.05rem", fontWeight: 300, color: "var(--encre-soft)", maxWidth: 550, lineHeight: 1.7 }}>
          Développés par un papa-développeur, testés par de vrais enfants. Gratuits. Toujours.
        </p>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {JEUX_PREVIEW.map(({ slug, icon, cat, name, desc, badge, badgeColor }) => (
            <Link key={name} href={slug !== "#" ? `/jeux/${slug}` : "/jeux"} className="rounded-3xl p-8 flex flex-col no-underline transition-all hover:-translate-y-1.5" style={{ background: "var(--blanc)", border: "1px solid var(--sable-light)", color: "inherit" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6" style={{ background: "rgba(193,80,46,0.1)" }}>{icon}</div>
              <p className="font-mono-dm text-xs tracking-widest uppercase mb-1" style={{ color: "var(--sable)" }}>{cat}</p>
              <h3 className="font-medium mb-2">{name}</h3>
              <p className="flex-1" style={{ fontSize: "0.85rem", color: "var(--encre-soft)", fontWeight: 300, lineHeight: 1.6 }}>{desc}</p>
              <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--cream-dark)" }}>
                <span className="font-mono-dm text-xs rounded-full px-3 py-1" style={{ background: `${badgeColor}20`, color: badgeColor }}>{badge}</span>
                <span style={{ color: "var(--sable-light)" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PUB MAIEUTIQUE ── */}
      <MaieutiqueBanner />

      <Footer />
    </>
  );
}
