"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type Mode = "easy" | "medium" | "hard";
interface GameState {
  score: number; streak: number; mode: Mode; answered: boolean;
  digits: string[]; virgulePos: number; targetPos: number; originalPos: number;
  operationText: string;
}
interface FeedbackState { text: string; explain: string; kind: "correct" | "wrong" | "" }

const C = {
  easy:   { nums:[1.5,2.3,4.7,9.5,6.8,12.4,25.6,3.9,8.1,15.3,42.5,0.5,7.2], ops:[{m:10,mul:true},{m:100,mul:true},{m:10,mul:false},{m:100,mul:false}] },
  medium: { nums:[3.45,12.78,0.56,45.6,123.4,56.78,9.05,0.8,2.5,7.25], ops:[{m:10,mul:true},{m:100,mul:true},{m:1000,mul:true},{m:10,mul:false},{m:100,mul:false},{m:1000,mul:false}] },
  hard:   { nums:[0.045,3.456,78.9,0.123,456.7,12.005,234.56,0.5,9.5,0.0078], ops:[{m:10,mul:true},{m:100,mul:true},{m:1000,mul:true},{m:10000,mul:true},{m:10,mul:false},{m:100,mul:false},{m:1000,mul:false},{m:10000,mul:false}] },
};

function pick<T>(a: T[]): T { return a[Math.floor(Math.random() * a.length)]; }
function fmt(n: number): string { return parseFloat(n.toPrecision(12)).toString(); }

function numberToStrip(s: string): { digits: string[]; vp: number } {
  const digits: string[] = []; let vp = -1;
  for (const ch of s) { if (ch === ".") vp = digits.length; else digits.push(ch); }
  if (vp === -1) vp = digits.length;
  return { digits, vp };
}

function padForTarget(digits: string[], origPos: number, targetPos: number) {
  let d = [...digits], op = origPos, tp = targetPos;
  while (tp > d.length) d.push("0");
  while (tp < 0) { d.unshift("0"); op++; tp++; }
  if (tp <= 0) { d.unshift("0"); op++; tp++; }
  for (let i = 0; i < 2; i++) { d.unshift("0"); op++; tp++; }
  for (let i = 0; i < 2; i++) d.push("0");
  return { digits: d, origPos: op, targetPos: tp };
}

function isGhost(digits: string[], idx: number, vp: number): boolean {
  let firstNZ = digits.findIndex(c => c !== "0"); if (firstNZ === -1) firstNZ = digits.length - 1;
  let lastNZ = digits.length - 1; while (lastNZ > 0 && digits[lastNZ] === "0") lastNZ--;
  if (idx < firstNZ && idx < vp - 1) return true;
  if (idx > lastNZ && idx >= vp) return true;
  return false;
}

function buildQuestion(mode: Mode) {
  const cfg = C[mode];
  const number = pick(cfg.nums);
  const op = pick(cfg.ops);
  const shift = Math.round(Math.log10(op.m)) * (op.mul ? 1 : -1);
  const { digits, vp } = numberToStrip(fmt(number));
  const padded = padForTarget(digits, vp, vp + shift);
  const opSym = op.mul ? "×" : "÷";
  return { digits: padded.digits, virgulePos: padded.origPos, originalPos: padded.origPos, targetPos: padded.targetPos, operationText: `${fmt(number).replace(".",",")} ${opSym} ${op.m} = ?` };
}

function Confetti() {
  const colors = ["#ff6b35","#4ecdc4","#ffe66d","#2ecc71","#e74c3c","#9b59b6"];
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({length:30}).map((_,i) => (
        <div key={i} className="absolute rounded-sm" style={{ left:`${Math.random()*100}%`, top:-10, width:8+Math.random()*8, height:8+Math.random()*8, background:pick(colors), animation:`confettiFall ${1+Math.random()}s ${Math.random()*0.5}s ease forwards` }} />
      ))}
    </div>
  );
}

export default function VirgulesPage() {
  const [gs, setGs] = useState<GameState>(() => ({ score:0, streak:0, mode:"easy", answered:false, ...buildQuestion("easy") }));
  const [fb, setFb] = useState<FeedbackState>({ text:"", explain:"", kind:"" });
  const [confetti, setConfetti] = useState(false);
  const [glow, setGlow] = useState<""| "correct"|"wrong">("");
  const [shake, setShake] = useState(false);
  const [okComma, setOkComma] = useState(false);

  const startQuestion = useCallback((mode: Mode = gs.mode) => {
    setGs(prev => ({ score: mode!==prev.mode?0:prev.score, streak: mode!==prev.mode?0:prev.streak, mode, answered:false, ...buildQuestion(mode) }));
    setFb({text:"",explain:"",kind:""}); setGlow(""); setShake(false); setOkComma(false);
  }, [gs.mode]);

  const moveVirgule = useCallback((dir: 1|-1) => {
    if (gs.answered) return;
    setGs(prev => {
      const newPos = prev.virgulePos + dir;
      if (newPos < 0 || newPos > prev.digits.length) return prev;
      const digits = [...prev.digits];
      if (dir===1 && newPos >= digits.length-1) digits.push("0");
      if (dir===-1 && newPos<=1) { digits.unshift("0"); return {...prev, digits, virgulePos:prev.virgulePos+dir+1, targetPos:prev.targetPos+1, originalPos:prev.originalPos+1}; }
      return {...prev, digits, virgulePos:newPos};
    });
  }, [gs.answered]);

  const checkAnswer = useCallback(() => {
    if (gs.answered) return;
    const correct = gs.virgulePos === gs.targetPos;
    const shift = gs.targetPos - gs.originalPos;
    const dir = shift > 0 ? "droite" : "gauche";
    const steps = Math.abs(shift);
    const pts = gs.mode==="easy"?1:gs.mode==="medium"?2:3;
    const msgs = ["Bravo ! 🎉","Excellent ! ✨","Parfait ! 🌟","Génial ! 🚀","Trop fort(e) ! 💪"];
    setGs(prev => ({...prev, answered:true, score:correct?prev.score+pts:prev.score, streak:correct?prev.streak+1:0}));
    if (correct) {
      setFb({text:pick(msgs), explain:"", kind:"correct"}); setGlow("correct");
      if ((gs.streak+1)%5===0 && gs.streak>0) { setConfetti(true); setTimeout(()=>setConfetti(false),2500); }
    } else {
      setFb({text:"Pas tout à fait… 🤔", explain:`Il fallait déplacer la virgule de ${steps} case${steps>1?"s":""} vers la ${dir}`, kind:"wrong"});
      setShake(true); setGlow("wrong");
      setTimeout(()=>{ setGs(prev=>({...prev,virgulePos:prev.targetPos})); setOkComma(true); }, 700);
    }
  }, [gs]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key==="ArrowLeft") moveVirgule(-1);
      else if (e.key==="ArrowRight") moveVirgule(1);
      else if (e.key==="Enter") { if (gs.answered) startQuestion(); else checkAnswer(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [moveVirgule, checkAnswer, gs.answered, startQuestion]);

  const stripBorder = glow==="correct"?"2px solid #2ecc71":glow==="wrong"?"2px solid #e74c3c":"2px dashed #e0e0e0";
  const stripShadow = glow==="correct"?"0 0 0 4px rgba(46,204,113,.15)":glow==="wrong"?"0 0 0 4px rgba(231,76,60,.15)":"none";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');
        @keyframes confettiFall{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
        .do-shake{animation:shake .4s ease}
      `}</style>
      {confetti && <Confetti />}

      <div className="fixed z-40 flex items-center justify-between px-8 py-3" style={{top:72,left:0,right:0}}>
        <Link href="/jeux" className="text-sm font-medium no-underline" style={{color:"var(--sable)"}}>← Tous les jeux</Link>
      </div>

      <div className="min-h-screen pb-20" style={{background:"#fef9f0",paddingTop:120}}>
        <div style={{maxWidth:700,margin:"0 auto",padding:"0 20px"}}>

          <div className="text-center mb-6">
            <h1 style={{fontFamily:"'Fredoka',cursive",fontSize:"2.2rem",fontWeight:700,background:"linear-gradient(135deg,#ff6b35,#e55a2b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>La Virgule Décimale ✨</h1>
            <p style={{color:"#636e72",fontSize:"1rem",fontWeight:300}}>Déplace la virgule pour trouver le résultat !</p>
          </div>

          <div className="flex justify-center gap-6 mb-5">
            {[{icon:"⭐",val:gs.score,bg:"#ffe66d"},{icon:"🔥",val:gs.streak,bg:"#e8faf8"}].map(({icon,val,bg})=>(
              <div key={icon} className="flex items-center gap-2 font-medium text-lg">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:bg}}>{icon}</div>
                <span>{val}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mb-6 rounded-2xl p-1.5" style={{background:"white",boxShadow:"0 4px 20px rgba(0,0,0,.08)"}}>
            {(["easy","medium","hard"] as Mode[]).map((m,i)=>(
              <button key={m} onClick={()=>startQuestion(m)} className="flex-1 rounded-xl py-2.5 font-medium text-sm transition-all" style={{background:gs.mode===m?"#ff6b35":"transparent",color:gs.mode===m?"white":"#636e72",boxShadow:gs.mode===m?"0 2px 12px rgba(255,107,53,.3)":"none"}}>
                {["Facile","Moyen","Difficile"][i]}
              </button>
            ))}
          </div>

          <div className="rounded-3xl p-8 mb-6 relative overflow-hidden" style={{background:"white",boxShadow:"0 8px 40px rgba(0,0,0,.12)"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:"linear-gradient(90deg,#ff6b35,#4ecdc4,#ffe66d)"}} />

            <div className="text-center mb-6" style={{fontFamily:"'Fredoka',cursive",fontSize:"2rem",fontWeight:600}}>
              {gs.operationText.split(" ").map((w,i)=>(
                <span key={i} style={{color:(w==="×"||w==="÷")?"#ff6b35":"inherit",margin:"0 4px"}}>{w}</span>
              ))}
            </div>

            <p className="text-center mb-5 text-sm" style={{color:"#636e72"}}>Utilise les flèches <strong style={{color:"#ff6b35"}}>◀ ▶</strong> pour déplacer la virgule</p>

            <div className={`flex flex-col items-center rounded-2xl p-7 mb-6 transition-all ${shake?"do-shake":""}`} style={{background:"linear-gradient(135deg,#f8f9fa,#fff)",border:stripBorder,boxShadow:stripShadow,minHeight:130}}>
              <div className="flex items-end justify-center">
                {Array.from({length:gs.digits.length+1}).map((_,i)=>(
                  <div key={i} className="flex items-end">
                    {i===gs.virgulePos ? (
                      <div className="flex items-end justify-center" style={{width:18,height:58}}>
                        <span style={{fontFamily:"'Fredoka',cursive",fontSize:"2.4rem",fontWeight:700,color:okComma?"#2ecc71":"#ff6b35",transition:"color .3s"}}>,</span>
                      </div>
                    ) : !gs.answered ? (
                      <div className="flex items-end justify-center cursor-pointer group" style={{width:18,height:58}} onClick={()=>{const diff=i-gs.virgulePos;const step=diff>0?1:-1;for(let k=0;k<Math.abs(diff);k++)moveVirgule(step);}}>
                        <div className="w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{background:"#ff6b35",marginBottom:6}} />
                      </div>
                    ) : <div style={{width:18,height:58}} /> }
                    {i<gs.digits.length && (
                      <div className="flex items-center justify-center rounded-xl" style={{width:46,height:58,fontFamily:"'Fredoka',cursive",fontSize:"2rem",fontWeight:600,color:isGhost(gs.digits,i,gs.virgulePos)?"#ccc":"#2d3436"}}>
                        {gs.digits[i]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {([-1,1] as (1|-1)[]).map(dir=>(
                  <button key={dir} onClick={()=>moveVirgule(dir)} disabled={gs.answered} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-default" style={{border:"2.5px solid #e0e0e0",background:"white",color:"#636e72"}}>
                    {dir===-1?"◀":"▶"}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center min-h-12 mb-2">
              {fb.text && <p style={{fontFamily:"'Fredoka',cursive",fontSize:"1.2rem",fontWeight:600,color:fb.kind==="correct"?"#2ecc71":"#e74c3c"}}>{fb.text}</p>}
              {fb.explain && <p className="text-sm mt-1" style={{color:"#636e72"}} dangerouslySetInnerHTML={{__html:fb.explain}} />}
            </div>

            <div className="flex justify-center gap-3">
              {!gs.answered ? (
                <button onClick={checkAnswer} className="rounded-2xl px-9 py-3 font-bold text-lg transition-all hover:-translate-y-0.5" style={{fontFamily:"'Fredoka',cursive",background:"#ff6b35",color:"white",boxShadow:"0 3px 12px rgba(255,107,53,.3)"}}>Valider ✓</button>
              ) : (
                <button onClick={()=>startQuestion()} className="rounded-2xl px-9 py-3 font-bold text-lg transition-all hover:-translate-y-0.5" style={{fontFamily:"'Fredoka',cursive",background:"#4ecdc4",color:"white",boxShadow:"0 3px 12px rgba(78,205,196,.3)"}}>Suivant →</button>
              )}
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{background:"white",borderLeft:"4px solid #4ecdc4",boxShadow:"0 4px 20px rgba(0,0,0,.08)"}}>
            <h3 style={{fontFamily:"'Fredoka',cursive",color:"#4ecdc4",fontWeight:600,marginBottom:12}}>💡 L&apos;astuce</h3>
            <ul className="text-sm space-y-1" style={{color:"#636e72",listStyle:"none"}}>
              <li><span style={{color:"#ff6b35",fontWeight:600}}>× 10, 100, 1000…</span> → virgule vers la <strong>droite</strong> (le nombre grandit)</li>
              <li><span style={{color:"#4ecdc4",fontWeight:600}}>÷ 10, 100, 1000…</span> → virgule vers la <strong>gauche</strong> (le nombre rapetisse)</li>
              <li>Nombre de zéros = nombre de cases à déplacer !</li>
            </ul>
          </div>

          <p className="text-center mt-6 text-xs" style={{color:"#b2bec3"}}>← → Flèches clavier · Entrée pour valider / suivant</p>
        </div>
      </div>
    </>
  );
}
