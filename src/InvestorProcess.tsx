import { motion } from 'framer-motion';
import { ArrowRight, Lock, Repeat, Activity, ArrowLeft, TrendingUp, Shuffle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <Lock className="w-6 h-6 text-black" />,
      title: "1. Positionnement Stratégique",
      desc: "Votre capital est mobilisé et positionné en Afrique de l'Ouest (Zone UEMOA). C'est là que la liquidité est requise pour initier les opérations de compensation.",
      visual: "Hub : Afrique de l'Ouest"
    },
    {
      id: 2,
      icon: <Briefcase className="w-6 h-6 text-black" />,
      title: "2. Le Service B2B",
      desc: "Nous agissons en tant que fournisseur de liquidité pour des opérateurs agréés. Lorsqu'un client veut envoyer des fonds depuis l'Afrique Centrale, l'opérateur local manque souvent de CFA Ouest-Africain pour payer le bénéficiaire instantanément.",
      visual: "Partenariat Opérateurs"
    },
    {
      id: 3,
      icon: <Activity className="w-6 h-6 text-black" />,
      title: "3. L'Exécution (Le Déblocage)",
      desc: "Grâce à la liquidité Altinus déjà sur place, la transaction est débloquée immédiatement. Nous permettons à l'opérateur de finaliser le transfert sans attente.",
      visual: "Exécution Instantanée"
    },
    {
      id: 4,
      icon: <Repeat className="w-6 h-6 text-black" />,
      title: "4. La Compensation & Marge",
      desc: "L'opérateur nous rembourse le montant avancé + une commission B2B pour ce service de trésorerie. Le capital est reconstitué et prêt pour un nouveau cycle.",
      visual: "Rotation du Capital"
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* HEADER NAV */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>
        <div className="text-amber-500 font-bold tracking-wider uppercase text-xs border border-amber-500/30 px-3 py-1 rounded-full">
          Modèle 100% B2B
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            POURQUOI CE CORRIDOR EST-IL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700">
              SI RENTABLE ?
            </span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Nous opérons sur le flux <strong>Afrique Centrale (CEMAC) vers Afrique de l'Ouest (UEMOA)</strong>. Un axe où la demande explose mais où la logistique bancaire traditionnelle est lente.
          </p>
        </motion.div>
      </section>

      {/* LE PROBLÈME (ANALOGIE) */}
      <section className="py-16 px-6 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">Comprendre le besoin</h3>
            <h2 className="text-3xl font-bold mb-6">Le Paradoxe de la Liquidité.</h2>
            <p className="text-zinc-400 mb-4 leading-relaxed">
              Il y a énormément d'argent qui veut sortir d'Afrique Centrale pour aller vers l'Afrique de l'Ouest (commerce, importations). 
            </p>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Mais les opérateurs sur place en Afrique Centrale n'ont pas de comptes bancaires "miroirs" en Afrique de l'Ouest suffisamment approvisionnés pour payer les destinataires. <strong>Le tuyau est bouché.</strong>
            </p>
            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 text-sm text-amber-100">
              <strong>La solution Altinus :</strong> Nous stockons la liquidité "à l'arrivée" (Afrique de l'Ouest). Nous ouvrons les vannes pour les opérateurs agréés et prenons une commission à chaque passage.
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 w-full bg-black rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden">
             {/* Visualisation Flux */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black"></div>
             <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center relative z-10 w-full justify-center px-4">
                
                <div className="text-center opacity-50">
                    <div className="text-xs uppercase text-zinc-500 mb-2">Départ</div>
                    <div className="w-24 h-24 rounded-full border-2 border-zinc-800 bg-zinc-900 flex flex-col items-center justify-center">
                        <span className="font-bold text-zinc-400">Afrique<br/>Centrale</span>
                        <span className="text-[10px] text-zinc-600 mt-1">Forte Demande</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                   <ArrowRight className="text-amber-500 w-8 h-8 md:w-12 md:h-12 animate-pulse hidden md:block" />
                   <ArrowRight className="text-amber-500 w-8 h-8 md:w-12 md:h-12 animate-pulse md:hidden rotate-90" />
                   <span className="text-xs uppercase text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">Flux Bloqué ?</span>
                </div>

                <div className="text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-20 whitespace-nowrap">
                        Liquidité Altinus ICI
                    </div>
                    <div className="text-xs uppercase text-zinc-500 mb-2">Arrivée</div>
                    <div className="w-24 h-24 rounded-full border-2 border-amber-500 bg-zinc-900 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                        <span className="font-bold text-white">Afrique<br/>de l'Ouest</span>
                        <span className="text-[10px] text-amber-500 mt-1">Déblocage</span>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* LE CYCLE DÉTAILLÉ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mécanique d'un cycle B2B</h2>
          <p className="text-zinc-500 mt-2">Nous ne traitons pas avec les particuliers, uniquement avec des opérateurs agréés.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-950 border border-amber-500 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-amber-500/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{step.visual}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                    {step.desc}
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI B2B ? */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">LA PUISSANCE DU MODÈLE B2B</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-100 rounded-lg">
               <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
               <h3 className="text-xl font-bold mb-2">Volume Massif</h3>
               <p className="text-zinc-600 text-sm">En travaillant avec des opérateurs, nous traitons des volumes de gros, pas des petites transactions individuelles. Cela maximise la rotation du capital.</p>
            </div>
            <div className="p-8 bg-zinc-100 rounded-lg">
               <Shuffle className="w-10 h-10 text-amber-600 mb-4" />
               <h3 className="text-xl font-bold mb-2">Corridor Stratégique</h3>
              <p className="text-zinc-600 text-sm">Le flux Afrique Centrale &rarr; Ouest est structurellement déséquilibré. La liquidité y vaut de l'or, ce qui justifie nos marges élevées.</p>
            </div>
            <div className="p-8 bg-zinc-100 rounded-lg">
               <Briefcase className="w-10 h-10 text-amber-600 mb-4" />
               <h3 className="text-xl font-bold mb-2">Risque Maîtrisé</h3>
               <p className="text-zinc-600 text-sm">Nos partenaires sont des acteurs agréés. Nous ne portons pas le risque client final, nous portons uniquement le service de liquidité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à investir dans l'économie réelle ?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/rendez-vous" className="bg-amber-500 text-black px-8 py-4 font-bold rounded hover:bg-amber-400 transition-colors">
            Devenir Investisseur
          </Link>
          <Link to="/" className="border border-white/20 px-8 py-4 font-bold rounded hover:bg-white/10 transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestorProcess;
