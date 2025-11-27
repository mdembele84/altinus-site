import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Lock, Globe, Repeat, Coins, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <Lock className="w-6 h-6 text-black" />,
      title: "1. La Sécurisation",
      desc: "Votre capital est déposé sur un compte dédié en France. Il n'est pas utilisé pour acheter des actions ou des cryptos volatiles. Il devient une « brique » de liquidité.",
      visual: "Paris, France"
    },
    {
      id: 2,
      icon: <Globe className="w-6 h-6 text-black" />,
      title: "2. Le Déploiement",
      desc: "Nous mettons cette liquidité à disposition d'opérateurs de transfert d'argent agréés. Ils ont un besoin vital d'argent disponible instantanément pour servir leurs clients (diaspora, importateurs).",
      visual: "Corridor Europe → Afrique"
    },
    {
      id: 3,
      icon: <Activity className="w-6 h-6 text-black" />,
      title: "3. L'Opération Réelle",
      desc: "L'argent sert à exécuter une transaction réelle (ex: un père envoie de l'argent à sa famille, une entreprise paie un fournisseur). C'est l'économie réelle.",
      visual: "Transactions Commerciales"
    },
    {
      id: 4,
      icon: <Repeat className="w-6 h-6 text-black" />,
      title: "4. La Rotation & Le Profit",
      desc: "Une fois la transaction faite, l'opérateur nous rembourse le montant + une commission de service. L'argent est revenu à la case départ, mais il a généré un profit.",
      visual: "Rapatriement + Marge"
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* HEADER NAV SIMPLE */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>
        <div className="text-amber-500 font-bold tracking-wider uppercase text-xs border border-amber-500/30 px-3 py-1 rounded-full">
          Mécanique Interne
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            COMMENT VOTRE ARGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700">
              GÉNÈRE-T-IL DU PROFIT ?
            </span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Pas de magie, pas de spéculation. Juste une mécanique logistique bien huilée qui répond à un besoin urgent de l'économie africaine.
          </p>
        </motion.div>
      </section>

      {/* COMPRENDRE LE BESOIN (ANALOGIE) */}
      <section className="py-16 px-6 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">L'Analogie simple</h3>
            <h2 className="text-3xl font-bold mb-6">Imaginez un pont à péage.</h2>
            <p className="text-zinc-400 mb-4 leading-relaxed">
              Des milliers de véhicules (les transactions financières) veulent traverser chaque jour entre l'Europe et l'Afrique. Mais le pont est souvent bloqué par manque de personnel aux guichets (manque de liquidité).
            </p>
            <p className="text-white text-lg font-medium leading-relaxed">
              Altinus ne construit pas de voitures. <br />
              <span className="text-amber-500">Altinus fournit les guichetiers</span> pour que le trafic circule vite. À chaque passage, nous percevons un petit péage.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full bg-black rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden">
            {/* Abstract Bridge Visualization */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black"></div>
            <div className="flex gap-8 items-center relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-500">Europe</div>
              <div className="flex flex-col items-center gap-2">
                <ArrowRight className="text-amber-500 animate-pulse" />
                <span className="text-xs uppercase text-amber-500 font-bold">Liquidité</span>
              </div>
              <div className="w-20 h-20 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-500">Afrique</div>
            </div>
          </div>
        </div>
      </section>

      {/* LE CYCLE DÉTAILLÉ (TIMELINE) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Le cycle de vie de votre investissement</h2>
          <p className="text-zinc-500 mt-2">Un processus qui se répète plusieurs fois par mois.</p>
        </div>

        <div className="relative">
          {/* Ligne verticale */}
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
                {/* Point central */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-950 border border-amber-500 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>

                {/* Carte Contenu */}
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

                {/* Espace vide pour l'alternance */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT'S SAFE (GRID) */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-4">POURQUOI EST-CE <br />MOINS RISQUÉ ?</h2>
              <p className="text-zinc-600 max-w-md">
                Contrairement à la bourse ou à l'immobilier, notre modèle ne dépend pas de la valeur d'un actif, mais du <strong>volume d'activité</strong>.
              </p>
            </div>
            <Link to="/rendez-vous" className="hidden md:flex items-center gap-2 font-bold hover:gap-4 transition-all">
              En discuter de vive voix <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-100 rounded-lg">
              <ShieldCheck className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pas de Spéculation</h3>
              <p className="text-zinc-600 text-sm">Nous n'achetons rien en espérant que le prix monte. Nous fournissons simplement l'argent nécessaire pour faire une transaction instantanée.</p>
            </div>
            <div className="p-8 bg-zinc-100 rounded-lg">
              <Coins className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Liquidité Courte</h3>
              <p className="text-zinc-600 text-sm">L'argent ne reste jamais bloqué des années. Les cycles durent quelques jours. La vélocité réduit l'exposition au risque.</p>
            </div>
            <div className="p-8 bg-zinc-100 rounded-lg">
              <Lock className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Actifs Tangibles</h3>
              <p className="text-zinc-600 text-sm">Chaque flux financier correspond à une réalité économique (import, export, famille). Ce n'est pas de la finance virtuelle.</p>
            </div>
          </div>

          <div className="mt-12 md:hidden">
            <Link to="/rendez-vous" className="w-full bg-black text-white py-4 rounded flex items-center justify-center font-bold">
              En discuter de vive voix
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Convaincu par la mécanique ?</h2>
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
