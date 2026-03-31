# PapaDev — CLAUDE.md

## Présentation du projet
Blog pour les papas épicurieux qui mettent un point d'honneur dans l'éducation de leurs enfants.
Deux axes : **articles de blog** (parentalité, pédagogie, épicurisme) + **jeux éducatifs** gratuits pour enfants.

**Owner :** Quentin / LevisWeb (levisweb.net)
**Stack :** Next.js 15 (App Router) + TypeScript + Tailwind CSS
**Déploiement :** Vercel (team_RK3hEE30xBMAqPtjHb1YZiqZ)
**Repo :** GitHub → meytoof/papadev (branche `main`)

---

## Architecture des pages

```
app/
├── page.tsx                        → Accueil
├── articles/page.tsx               → Liste + premier article
├── jeux/page.tsx                   → Catalogue des jeux
└── jeux/virgule-decimale/page.tsx  → Le jeu interactif
```

---

## Règles de dev

- Build Vercel : `next build` (pas de Prisma pour l'instant)
- Jamais `prisma db push` en build script
- Jamais commit `.env`
- GSAP : `overflow-x: clip` jamais `overflow-x: hidden`
- PowerShell : séparateur `;` pas `&&`
- Git commits : messages entre guillemets simples
- Vérifier build Vercel après chaque push

## Palette & Design

- `--terracotta: #C1502E` — CTA principal
- `--foret: #2D4A3E` — sections sombres
- `--cream: #F5F0E8` — background général
- `--sable: #B8A88A` — textes secondaires
- `--encre: #1A1A18` — sections plein écran
- Fonts : Playfair Display (titres) + DM Sans (corps) + DM Mono (labels)

## Jeux disponibles

| Slug | Nom | Catégorie | Status |
|------|-----|-----------|--------|
| `virgule-decimale` | La Virgule Décimale | Mathématiques | ✅ Live |
| `tables-chrono` | Tables Chrono | Mathématiques | 🔜 Bientôt |
| `mot-mystere` | Mot Mystère | Lecture | 🔜 Bientôt |
| `memo-flash` | Mémo Flash | Mémoire | 🔜 Bientôt |
| `le-detective` | Le Détective des Mots | Logique | 🔜 Bientôt |
| `quiz-phenomenes` | Quiz Phénomènes | Sciences | 🔜 Bientôt |
| `l-accordeur` | L'Accordeur | Langues | 🔜 Bientôt |

## Partenaire mis en avant
**Maïeutique** (maieutique.app) — encart sur chaque page.

## Notes
- Jeu original backup : `C:\wamp64\www\papadev_virgule_backup.html`
- Contenu statique pour l'instant (pas de CMS / BDD)
- Tous les jeux sont **gratuits**, non-négociable
