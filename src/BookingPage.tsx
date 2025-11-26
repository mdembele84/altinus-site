import Cal from '@calcom/embed-react';
import { Phone, Mail, MapPin, Check, ArrowLeft } from 'lucide-react';

// Booking page using Cal.com embed component with Gold/Amber theme.
const BookingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col lg:flex-row selection:bg-amber-500 selection:text-black">
      {/* Côté gauche : argumentaire & contact */}
      <div className="lg:w-5/12 p-8 lg:p-16 flex flex-col justify-between border-r border-white/10 relative">
        <div>
          <a href="/" className="inline-flex items-center text-zinc-500 hover:text-white transition-colors text-sm mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au site
          </a>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
            Parlons <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white">
              Rentabilité.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Réservez un échange de 15 minutes avec la direction. <br />
            L'objectif : vérifier l'adéquation de votre profil avec le club et répondre à vos questions en toute transparence.
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Check size={16} />
              </div>
              [cite_start]<span className="text-sm font-medium">Accessible à partir de 20k€ [cite: 30]</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Check size={16} />
              </div>
              [cite_start]<span className="text-sm font-medium">Modèle sans spéculation [cite: 22]</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Check size={16} />
              </div>
              [cite_start]<span className="text-sm font-medium">Audit de conformité inclus [cite: 61]</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6 border border-white/5 space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Contacts directs</p>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Email</p>
              [cite_start]<a href="mailto:moussa@altinus.club" className="font-medium hover:text-amber-400 transition-colors">moussa@altinus.club [cite: 7]</a>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Téléphone / WhatsApp</p>
              [cite_start]<a href="https://wa.me/33667945061" className="font-medium hover:text-amber-400 transition-colors">+33 6 67 94 50 61 [cite: 6]</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Siège</p>
              <span className="font-medium">Paris, France</span>
            </div>
          </div>
        </div>
      </div>

      {/* Côté droit : calendrier embed */}
      <div className="lg:w-7/12 bg-white h-screen flex flex-col p-4 md:p-8">
        <div className="flex-1 w-full">
          <Cal
            namespace="30min"
            calLink="altinus/30min"
            style={{ width: '100%', height: '100%', overflow: 'auto' }}
            config={{ layout: 'month_view', theme: 'light', hideEventTypeDetails: 'true' }}
            calOrigin="https://calcom-web-app-production-37c9.up.railway.app"
            embedJsUrl="https://calcom-web-app-production-37c9.up.railway.app/embed/embed.js"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
