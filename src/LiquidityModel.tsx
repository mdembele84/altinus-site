import React from 'react';
import { motion } from 'framer-motion';
import { Repeat, ArrowRightLeft, Banknote, Globe, TrendingUp } from 'lucide-react';

const LiquidityModel = () => {
  // Steps that describe the liquidity cycle
  const steps = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "1. Le Constat",
      subtitle: "Déséquilibre de Liquidité",
      desc: "En Afrique, les opérateurs de transfert d'argent font face à une demande explosive mais manquent de liquidité immédiate (fonds de roulement) pour exécuter tous les ordres instantanément."
    },
    {
      // Changement ici : emerald -> amber
      icon: <Banknote className="w-8 h-8 text-amber-400" />,
      title: "2. L'Apport Altinus",
      subtitle: "Fournisseur de Liquidité",
      desc: "Grâce aux capitaux du club, Altinus met à disposition cette liquidité critique. Nous ne prêtons pas d'argent avec intérêt : nous finançons la capacité opérationnelle."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-blue-400" />,
      title: "3. L'Opération",
      subtitle: "Corridor Afrique Centrale <-> Ouest",
      desc: "Les fonds permettent d'exécuter des milliers de transactions transfrontalières réelles (commerce, diaspora). L'argent circule pour débloquer l'économie réelle."
    },
    {
      icon: <Repeat className="w-8 h-8 text-purple-400" />,
      title: "4. La Rotation",
      subtitle: "Le Moteur de la Performance",
      desc: "Une fois les transactions soldées (quelques jours), le capital est rapatrié avec une marge commerciale fixe. Il est immédiatement réinjecté dans un nouveau cycle."
    }
  ];

  return (
    <div id="invest" className="bg-zinc-950 min-h-screen text-white font-sans pt-24 pb-24 selection:bg-amber-500 selection:text-black">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Changement ici : emerald -> amber */}
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4 block">Mécanique de Performance</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            L'ARGENT QUI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">TRAVAILLE VRAIMENT.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Pas de spéculation boursière, pas de crypto-monnaies volatiles. Nous générons du rendement en résolvant un problème logistique réel : l'acheminement de la liquidité.
          </p>
        </motion.div>
      </div>

      {/* VISUAL CYCLE SECTION */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Ligne centrale connectrice */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>

        <div className="space-y-24 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Côté Image / Icône abstract */}
              <div className="flex-1 w-full flex justify-center md:justify-end items-center">
                <div className={`relative p-8 rounded border border-white/10 bg-zinc-900/80 backdrop-blur w-full max-w-sm ${index % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-zinc-800 w-12 h-12 rounded flex items-center justify-center mb-4 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  {/* Changement ici : emerald -> amber */}
                  <h4 className="text-sm uppercase tracking-wider text-amber-500/80 mb-3">{step.subtitle}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Point central sur la ligne */}
              <div className="hidden md:flex w-12 h-12 bg-zinc-950 border border-zinc-700 rounded-full items-center justify-center relative z-20 shrink-0">
                <span className="text-xs font-mono text-zinc-500">0{index + 1}</span>
              </div>

              {/* Espace vide pour l'équilibre de la grille */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUMMARY BLOCK */}
      <div className="max-w-4xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-zinc-100 text-black rounded p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Pourquoi ça rapporte 24% ?</h3>
            <p className="text-zinc-700 mb-4">
              La clé n'est pas le taux d'une opération unique, mais la <strong>vélocité</strong>.
            </p>
            <p className="text-zinc-600 text-sm">
              Si nous faisons tourner le capital 3 fois par mois avec une petite marge sécurisée à chaque fois, l'effet cumulé sur l'année dépasse largement les placements traditionnels, sans prendre les risques de la spéculation.
            </p>
          </div>
          <div className="flex-shrink-0 bg-white p-6 rounded shadow-sm border border-zinc-200 text-center min-w-[200px]">
            {/* Changement ici : emerald -> amber */}
            <TrendingUp className="w-10 h-10 mx-auto text-amber-600 mb-2" />
            <div className="text-3xl font-bold tracking-tighter">0%</div>
            <div className="text-xs uppercase font-bold text-zinc-400">Spéculation</div>
            <div className="w-full h-px bg-zinc-100 my-2"></div>
            <div className="text-3xl font-bold tracking-tighter">100%</div>
            <div className="text-xs uppercase font-bold text-zinc-400">Traçable</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiquidityModel;