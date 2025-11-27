import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, ChevronDown, Menu, X, Download, Loader2 } from 'lucide-react';
import LiquidityModel from './LiquidityModel';
import ProfitSimulator from './ProfitSimulator';
import BookingPage from './BookingPage';
import InvestorProcess from './InvestorProcess';

// --- CONFIGURATION ---
// Lien direct vers ton logo sur Cloudinary
const LOGO_URL = "https://res.cloudinary.com/www-danapay-com/image/upload/v1764220316/Logo_Altinus_hebham.png";

// URL DE TON WEBHOOK N8N (À REMPLACER)
const N8N_WEBHOOK_URL = "https://TON_INSTANCE_N8N/webhook/lead-download";

export const AltinusLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // États du formulaire
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Envoi des données à n8n
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: 'Landing Page Download',
          date: new Date().toISOString()
        })
      });

      // 2. Déclenchement du téléchargement du PDF
      // Note : Si le volume ne marchait pas pour le logo, assure-toi que le PDF est bien
      // dans public/ressources/ ou héberge-le aussi sur Cloudinary pour être tranquille.
      const link = document.createElement('a');
      link.href = '/ressources/Altinus - Executive Summary - V2.pdf';
      link.download = 'Altinus - Executive Summary - V2.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSuccess(true);
      
      // Fermeture automatique après 3 secondes
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);

    } catch (error) {
      console.error("Erreur lors de l'envoi", error);
      // Fallback téléchargement
      const link = document.createElement('a');
      link.href = '/ressources/Altinus - Executive Summary - V2.pdf';
      link.download = 'Altinus - Executive Summary - V2.pdf';
      link.click();
      setIsModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* --- MODAL FORMULAIRE --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-zinc-900 border border-amber-500/30 p-8 rounded-lg max-w-md w-full shadow-[0_0_50px_rgba(245,158,11,0.1)]"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X size={20} />
              </button>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Téléchargement lancé !</h3>
                  <p className="text-zinc-400 text-sm">Merci de votre intérêt. Le document va s'ouvrir.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    {/* LOGO CLOUDINARY MODAL */}
                    <img src={LOGO_URL} alt="Altinus Logo" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h3 className="text-xl font-bold text-white">Accéder à l'Executive Summary</h3>
                    <p className="text-zinc-400 text-sm mt-2">Veuillez renseigner vos informations pour télécharger la brochure officielle.</p>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">Nom complet</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">Email professionnel</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">Téléphone</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="+33 6 ..."
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-amber-500 text-black font-bold py-4 rounded hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : 'Accéder au document'}
                  </button>
                  <p className="text-[10px] text-center text-zinc-600">Vos données restent confidentielles.</p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
            {/* LOGO CLOUDINARY NAV */}
            <img src={LOGO_URL} alt="Altinus Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
              Altinus<span className="text-amber-500">.Club</span>
            </div>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#concept" className="hover:text-amber-400 transition-colors">Le Modèle</a>
          <a href="#ethics" className="hover:text-amber-400 transition-colors">Finance Éthique</a>
          <a href="#simulation" className="hover:text-amber-400 transition-colors">Simulateur</a>
          <Link to="/notre-methode" className="hover:text-amber-400 transition-colors">Comprendre la Méthode</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col justify-center items-center px-6 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale z-0 mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="z-10 max-w-5xl w-full text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-2">
                {/* LOGO CLOUDINARY HERO (Petit) */}
                <img src={LOGO_URL} alt="Logo" className="w-6 h-6 object-contain" />
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-500 font-bold">
                Investment Club • 2025
                </p>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              L'ALLIANCE ENTRE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                LIQUIDITÉ
              </span> <br /> & PERFORMANCE.
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed pt-4 mx-auto md:mx-0">
              Fournisseur de liquidité B2B pour les opérateurs de transfert d'argent. 
              Nous fluidifions le corridor stratégique Afrique Centrale → Afrique de l'Ouest.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a href="/rendez-vous" className="group bg-amber-500 text-black px-8 py-4 font-bold flex items-center justify-center gap-3 hover:bg-amber-400 transition-all rounded-sm">
                Devenir Membre
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 border border-white/20 hover:border-amber-500/50 hover:text-amber-400 transition-all flex items-center justify-center rounded-sm gap-2"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Télécharger la Brochure</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce w-6 h-6 text-zinc-500" />
        </motion.div>
      </header>

      {/* --- TICKER --- */}
      <div className="border-b border-white/10 bg-zinc-900 overflow-hidden py-4">
        <div className="flex justify-around items-center text-xs md:text-sm tracking-widest uppercase font-mono text-zinc-500">
          <span>• Ticket: 20k€</span>
          <span className="text-amber-400 font-bold">• Cible: 24% / An</span>
          <span>• Modèle: B2B Wholesale</span>
          <span className="hidden md:inline">• Sans Spéculation</span>
        </div>
      </div>

      {/* --- BENTO GRID --- */}
      <section id="concept" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Block - B2B Corridor */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-zinc-900/50 border border-white/10 p-10 rounded-sm relative overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Liquidité B2B Stratégique</h3>
            <p className="text-zinc-400 mb-6 max-w-md">
              Nous fournissons la trésorerie indispensable aux opérateurs agréés pour exécuter les transferts du corridor <strong>Afrique Centrale vers Afrique de l'Ouest</strong>.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500"></div>Liquidité positionnée en Afrique de l'Ouest</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500"></div>Modèle de gros (Wholesale) à forte rotation</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-amber-500 to-amber-700 text-black p-10 rounded-sm flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest text-xs opacity-70">Performance Cible</div>
              <div className="text-6xl font-bold tracking-tighter">24%</div>
              <div className="text-sm mt-1 font-medium opacity-80">Plafond annuel (ADP)</div>
            </div>
            <div className="mt-8 text-sm leading-tight border-t border-black/10 pt-4 font-medium">
              Rendement versé trimestriellement. Adossé à une activité réelle, sans dette.
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-zinc-900/50 border border-white/10 p-10 rounded-sm flex flex-col justify-center items-start group hover:bg-zinc-900 transition-colors">
            <ShieldCheck className="w-10 h-10 mb-4 text-zinc-500 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">100% Conforme</h3>
            <p className="text-zinc-400 text-sm">
              Opérations documentées et vérifiables. Respect strict des réglementations françaises et des normes de la finance islamique.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-2 bg-zinc-900/50 border border-white/10 p-10 rounded-sm flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Digitalisation de l'Actionnariat</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Une plateforme de gestion complète pour une transparence totale.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-zinc-500 uppercase">
                <div>• Suivi Dividendes</div>
                <div>• Registre Actionnaires</div>
                <div>• Souscription Online</div>
                <div>• Accès 24/24</div>
              </div>
            </div>
            <div className="flex-1 bg-black w-full h-32 rounded border border-zinc-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-x-4 top-4 h-1 bg-zinc-800 rounded"></div>
               <div className="absolute inset-x-4 top-8 h-1 w-2/3 bg-zinc-800 rounded"></div>
               <div className="absolute right-4 bottom-4 text-amber-500 text-xs font-mono">+6.0% Ce trimestre</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <LiquidityModel />
      <ProfitSimulator />

      <section id="ethics" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                FINANCE<br/>HALAL.
              </h2>
              <p className="text-zinc-600 text-lg">
                Altinus incarne une finance moderne, fidèle à ses valeurs et adaptée aux cadres européens.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 gap-8">
              {[
                { title: "Pas d'intérêt (Riba)", desc: "La rémunération provient uniquement de bénéfices réalisés, jamais d'intérêts." },
                { title: "Pas de spéculation (Gharar)", desc: "Toutes les opérations sont adossées à des actifs réels et identifiables." },
                { title: "Partage du risque", desc: "Chaque investisseur bénéficie des résultats réels du cycle d'activité." },
                { title: "Transparence & Équité", desc: "Toutes les clauses sont claires, traçables et validées juridiquement." }
              ].map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="border-b border-zinc-200 pb-8 hover:pl-4 hover:border-amber-500 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-zinc-950 pt-24 pb-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* LOGO CLOUDINARY FOOTER */}
          <img src={LOGO_URL} alt="Altinus Logo" className="w-20 h-20 mx-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 object-contain" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Prêt à investir autrement ?</h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            Nous cherchons à réunir des investisseurs avertis pour un projet collectif, durable et spirituellement aligné.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href="/rendez-vous" className="bg-amber-500 text-black px-8 py-4 font-bold hover:bg-amber-400 transition-colors rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Réserver un appel
            </a>
            <a href="mailto:moussa@altinus.club" className="border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 rounded-sm">
              moussa@altinus.club
            </a>
          </div>

          <div className="text-zinc-600 text-xs uppercase tracking-widest flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
            <p>© 2025 ALTINUS.CLUB</p>
            <p className="mt-2 md:mt-0">Basé en France • Normes Internationales</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AltinusLanding />} />
        <Route path="/rendez-vous" element={<BookingPage />} />
        <Route path="/notre-methode" element={<InvestorProcess />} />
      </Routes>
    </Router>
  );
};

export default App;
