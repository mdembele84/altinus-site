import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles, Lock } from 'lucide-react';

const ProfitSimulator = () => {
  const [investment, setInvestment] = useState(20000);
  const annualRate = 0.24; // 24% cible
  const durationYears = 5;

  // Seuil de négociation
  const NEGOTIATION_THRESHOLD = 100000;
  const isNegotiable = investment >= NEGOTIATION_THRESHOLD;

  // Calculs financiers
  const quarterlyRate = annualRate / 4;
  const quarterlyPayout = investment * quarterlyRate;
  const annualPayout = investment * annualRate;
  const totalGain = annualPayout * durationYears;
  const roiPercent = (totalGain / investment) * 100;

  // Génération du calendrier prévisionnel (4 prochains trimestres)
  const getNextQuarterDates = () => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 1; i <= 4; i++) {
      const d = new Date(today);
      d.setMonth(today.getMonth() + i * 3);
      dates.push(d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }));
    }
    return dates;
  };

  const nextPayouts = getNextQuarterDates();

  return (
    <section className="bg-zinc-950 text-white py-24 px-6 border-t border-white/5 selection:bg-amber-500 selection:text-black" id="simulation">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase">Projection Financière</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Simulez vos revenus passifs.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Projetez la croissance de votre patrimoine avec un rendement cible de 24% par an, versé trimestriellement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
          
          {/* Colonne gauche : contrôles */}
          <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800 z-10">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm uppercase tracking-widest text-zinc-500 font-bold">
                  Montant de l'investissement
                </label>
                {isNegotiable && (
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold uppercase animate-pulse">
                    <Sparkles size={14} /> Statut Premium Débloqué
                  </div>
                )}
              </div>
              
              <div className="text-5xl font-bold text-white mb-6 tracking-tighter transition-all duration-300">
                {investment.toLocaleString('fr-FR')} €
              </div>
              
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-all ${isNegotiable ? 'bg-amber-900/40 accent-amber-400' : 'bg-zinc-800 accent-zinc-500'}`}
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-2 font-mono">
                <span>20 000 € (Min)</span>
                <span className={isNegotiable ? "text-amber-500 font-bold" : ""}>100 000 € (Négociable)</span>
                <span>500 000 € +</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <div className="text-zinc-400 text-sm mb-1">Revenu Trimestriel</div>
                <div className="text-2xl font-bold text-amber-400">
                  + {quarterlyPayout.toLocaleString('fr-FR')} €
                </div>
                <div className="text-xs text-zinc-600 mt-1">Versé sur votre compte</div>
              </div>
              <div className={`bg-zinc-900/50 p-6 rounded border transition-all duration-500 ${isNegotiable ? 'border-amber-500/50 bg-amber-900/10' : 'border-white/5'}`}>
                <div className="text-zinc-400 text-sm mb-1">Revenu Annuel</div>
                <div className="text-2xl font-bold text-white">
                  + {annualPayout.toLocaleString('fr-FR')} €
                </div>
                <div className={`text-xs mt-1 font-medium flex items-center gap-1 ${isNegotiable ? 'text-amber-400' : 'text-zinc-600'}`}>
                  {isNegotiable ? (
                    <>
                      <Sparkles size={12} /> Taux négociable & sur-mesure
                    </>
                  ) : (
                    "24% de rendement cible"
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-300 mb-6">
                <Calendar className="w-4 h-4 text-amber-500" />
                Votre calendrier de versements
              </h4>
              <div className="space-y-3">
                {nextPayouts.map((date, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm py-2 border-b border-zinc-800/50 last:border-0">
                    <span className="text-zinc-400 capitalize">{date}</span>
                    <span className="text-white font-mono font-bold">+ {quarterlyPayout.toLocaleString('fr-FR')} €</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : résultats & CTA */}
          <div className="lg:col-span-5 bg-zinc-900/80 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden z-10">
            {/* Lueur dorée d'ambiance qui s'intensifie si négociable */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700 ${isNegotiable ? 'bg-amber-500/30' : 'bg-amber-600/10'}`}></div>

            <div>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border transition-colors duration-300 ${isNegotiable ? 'bg-amber-500 text-black border-amber-500' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                {isNegotiable ? "✨ Membre Privilège" : "Projection sur 5 ans"}
              </div>

              <div className="mb-2 text-zinc-400 text-sm">Gain total estimé</div>
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-1">
                {totalGain.toLocaleString('fr-FR')} €
              </div>
              <div className="text-amber-500 font-medium text-sm mb-8">
                +{roiPercent.toFixed(0)}% de retour sur investissement
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Capital initial récupérable à la fin du cycle.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Fiscalité avantageuse.</span>
                </div>
                {isNegotiable ? (
                   <div className="flex items-start gap-3 text-sm text-white font-bold animate-pulse">
                   <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                   <span>Rémunération négociable (+100k€).</span>
                 </div>
                ) : (
                  <div className="flex items-start gap-3 text-sm text-zinc-500">
                    <Lock className="w-5 h-5 text-zinc-600 shrink-0" />
                    <span>Taux négociable à partir de 100k€.</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <a
                href="/rendez-vous"
                className="group w-full bg-white text-black py-4 px-6 rounded font-bold text-center flex items-center justify-center gap-3 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                {isNegotiable ? "Discuter de mon offre sur-mesure" : "Valider mon éligibilité"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-xs text-zinc-600 mt-4">
                Entretien confidentiel avec Moussa Dembele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitSimulator;