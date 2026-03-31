import Link from "next/link";
import Footer from "@/components/Footer";
import MaieutiqueBanner from "@/components/MaieutiqueBanner";

const ARTICLE_CARDS = [
  { icon: "🧮", bg: "linear-gradient(135deg,#2D4A3E,#3D6B5A)", tag: "Maths", tagColor: "var(--terracotta)", title: "La virgule et les puissances de 10 : comprendre au lieu de mémoriser", desc: "Le making-of du jeu et la pédagogie derrière.", time: "4 min" },
  { icon: "🍕", bg: "linear-gradient(135deg,#C1502E,#E07050)", tag: "Épicurisme", tagColor: "var(--foret)", title: "Cuisiner avec ses enfants : la vraie leçon de maths (et de chimie)", desc: "Des fractions aux réactions de Maillard : la cuisine est un labo à domicile.", time: "5 min" },
  { icon: "🎮", bg: "linear-gradient(135deg,#3A3830,#5A5850)", tag: "Jeu vidéo", tagColor: "var(--terracotta)", title: "Les bons jeux vidéo pour les enfants existent. Je les ai cherchés pour vous.", desc: "Pas les jeux \"éducatifs\" chiants. Les vrais bons jeux qui apprennent sans que ça se voit.", time: "7 min" },
];

export default function ArticlesPage() {
  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden px-20 pt-40 pb-20" style={{ background: "var(--encre)", color: "var(--cream)" }}>
        <div className="absolute bottom-[-2rem] right-12 font-display italic font-black pointer-events-none select-none" style={{ fontSize: "clamp(8rem,15vw,18rem)", color: "rgba(255,255,255,0.03)", lineHeight: 1 }}>Articles</div>
        <p className="font-mono-dm text-xs tracking-widest uppercase mb-4" style={{ color: "var(--terracotta-light)" }}>📚 Le savoir partagé</p>
        <h1 className="font-display font-black mb-5" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 700 }}>
          Les articles <em style={{ color: "var(--terracotta-light)" }}>du blog</em>
        </h1>
        <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.05rem", fontWeight: 300, maxWidth: 500, lineHeight: 1.7 }}>
          Éducation, jeux, épicurisme, parentalité décomplexée — tout ce qu&apos;un papa passionné a envie d&apos;écrire à 23h après que les enfants sont couchés.
        </p>
      </div>

      {/* PREMIER ARTICLE FEATURED */}
      <div className="grid gap-20 items-center px-20 pt-20 pb-12" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="rounded-full px-3 py-1 font-mono-dm text-xs" style={{ background: "rgba(193,80,46,0.12)", color: "var(--terracotta)" }}>Éditorial</span>
            <span className="font-mono-dm text-xs" style={{ color: "var(--sable)" }}>Mars 2025 · 6 min</span>
          </div>
          <h2 className="font-display mb-5" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
            Pourquoi j&apos;ai créé PapaDev —<br />et <em style={{ color: "var(--terracotta)" }}>pourquoi ça compte</em> vraiment
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--encre-soft)", fontWeight: 300, marginBottom: "2rem" }}>
            Un soir de devoirs raté, une explication qui part en vrille, un enfant qui lève les yeux au ciel.
            Et un papa-développeur qui se demande : et si on pouvait faire ça autrement ?
          </p>
          <a href="#article-complet" className="inline-block rounded-full px-8 py-4 font-medium no-underline transition-all hover:-translate-y-0.5" style={{ background: "var(--foret)", color: "var(--cream)" }}>
            Lire l&apos;article ↓
          </a>
        </div>

        {/* Article preview card */}
        <div id="article-complet" className="rounded-3xl p-12 relative overflow-hidden" style={{ background: "var(--blanc)", border: "1px solid var(--sable-light)" }}>
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none rounded-b-3xl" style={{ background: "linear-gradient(transparent, var(--blanc))" }} />
          <h3 className="font-display text-2xl mb-5" style={{ lineHeight: 1.3 }}>Pourquoi j&apos;ai créé PapaDev</h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--encre-soft)", fontWeight: 300, marginBottom: "1rem" }}>
            C&apos;était un mardi soir ordinaire. Les devoirs traînaient depuis une heure, la soupe refroidissait,
            et moi j&apos;essayais pour la troisième fois d&apos;expliquer comment multiplier par 10 avec des décimales.
            <strong style={{ color: "var(--encre)", fontWeight: 500 }}> Ma fille me regardait comme si j&apos;avais basculé vers le côté obscur.</strong>
          </p>
          <blockquote className="my-6 pl-6" style={{ borderLeft: "3px solid var(--terracotta)", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.5 }}>
            "Mais papa, tu m&apos;as dit de juste ajouter un zéro. Mais là il n&apos;y a pas de zéro à ajouter !"
          </blockquote>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--encre-soft)", fontWeight: 300, marginBottom: "1rem" }}>
            Elle avait raison. La règle qu&apos;on apprend tous ne marche pas vraiment. C&apos;est un raccourci qui devient un piège
            dès qu&apos;on dépasse les entiers. Multiplier 3,7 par 10, ce n&apos;est pas &quot;ajouter un zéro&quot;. C&apos;est déplacer la virgule.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--encre-soft)", fontWeight: 300 }}>
            Ce soir-là, j&apos;ai ouvert mon éditeur de code — parce que c&apos;est mon réflexe depuis quinze ans — et j&apos;ai commencé
            à imaginer un petit jeu. Quelque chose qui <strong style={{ color: "var(--encre)", fontWeight: 500 }}>montrerait visuellement</strong> le déplacement.
            Pas une règle à mémoriser, une évidence à ressentir.
          </p>
        </div>
      </div>

      {/* AUTRES ARTICLES */}
      <div className="px-20 pb-8">
        <div className="flex items-center gap-6 mb-8">
          <h3 className="font-mono-dm text-xs tracking-widest uppercase whitespace-nowrap" style={{ color: "var(--sable)" }}>Autres articles</h3>
          <div className="flex-1 h-px" style={{ background: "var(--sable-light)" }} />
        </div>
        <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {ARTICLE_CARDS.map(({ icon, bg, tag, tagColor, title, desc, time }) => (
            <div key={title} className="rounded-3xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 cursor-pointer" style={{ background: "var(--blanc)", border: "1px solid var(--sable-light)" }}>
              <div className="flex items-center justify-center text-5xl" style={{ background: bg, aspectRatio: "16/9" }}>{icon}</div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block rounded-full px-3 py-1 font-mono-dm text-xs mb-3 w-fit" style={{ background: `${tagColor}15`, color: tagColor }}>{tag}</span>
                <h4 className="font-display mb-2" style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>{title}</h4>
                <p className="flex-1" style={{ fontSize: "0.85rem", color: "var(--encre-soft)", fontWeight: 300, lineHeight: 1.65 }}>{desc}</p>
                <p className="font-mono-dm text-xs mt-4" style={{ color: "var(--sable)" }}>{time} de lecture</p>
              </div>
            </div>
          ))}
        </div>
        {/* Coming soon */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {["Les tables de multiplication : méthodes alternatives qui marchent vraiment", "Apprendre à lire en 2025 : ce qui a changé", "Les rituels du soir : coucher = moment d'apprentissage"].map(title => (
            <div key={title} className="rounded-3xl p-6 opacity-50" style={{ border: "1px dashed var(--sable-light)" }}>
              <span className="font-mono-dm text-xs rounded-full px-3 py-1 block w-fit mb-3" style={{ background: "var(--cream-dark)", color: "var(--sable)" }}>Bientôt</span>
              <h4 className="font-display" style={{ fontSize: "1rem", color: "var(--sable)" }}>{title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* PUB MAIEUTIQUE inline */}
      <div className="flex items-center gap-6 mx-20 my-16 rounded-2xl p-10" style={{ background: "var(--foret)", color: "var(--cream)" }}>
        <span className="text-4xl flex-shrink-0">🦉</span>
        <div className="flex-1">
          <h4 className="font-display text-xl mb-1">Maïeutique — Le tuteur IA pour ados &amp; étudiants</h4>
          <p style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.7)", fontWeight: 300, lineHeight: 1.6 }}>
            Ton enfant commence le collège ? Maïeutique l&apos;accompagne avec la méthode socratique. Essai gratuit.
          </p>
        </div>
        <a href="https://maieutique.app" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-block rounded-full px-6 py-3 font-medium no-underline transition-all hover:-translate-y-0.5" style={{ background: "var(--vert-mai)", color: "var(--encre)" }}>
          Essayer →
        </a>
      </div>

      <Footer />
    </>
  );
}
