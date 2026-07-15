import { useState } from 'react';
import { Percent, BookOpen, ChevronRight, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Simulateur from '../components/Simulateur';
import logoSap from '../assets/logo-sap.png';
import photoTom from '../assets/tom-vidal.jpg';

const Accueil = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tomvidal1301@gmail.com');
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2500); // Le message disparaît après 2,5 secondes
  };
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation Fixe */}
      <div className="sticky top-0 z-50 bg-spindle-300 shadow-md">
        <nav className="flex justify-between items-center py-4 px-8 max-w-6xl mx-auto">
          <div className="text-2xl font-black tracking-tight text-spindle-950">Tom Vidal</div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-spindle-900">
            <a href="#parcours" className="hover:text-white transition-colors">Parcours</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#tarifs" className="hover:text-white transition-colors">Simulateur Tarif</a>
          </div>
          <a href="#contact" className="bg-paprika-800 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-spindle-900 transition-all shadow-sm">
            Contact
          </a>
        </nav>
      </div>

{/* Hero Section (Fond Pastel Très Clair) */}
      <header className="bg-spindle-50">
        <div className="px-8 py-16 md:py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Colonne de gauche (Textes et Bouton) */}
          <div>
            <span className="text-spindle-800 font-bold tracking-wider uppercase text-xs mb-4 block">
              Cours particuliers à Toulouse et aux alentours
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-spindle-950">
              Réussir en Maths et Physique-Chimie
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cours à domicile, personnalisés pour chaque élève tout au
              long de l’année pour aborder le programme en toute
              confiance, et se donner tous les moyens de réussir son bac
              et son entrée dans le supérieur.
            </p>
            <div className="flex gap-4">
              <a 
                href="#tarifs" 
                className="inline-flex items-center gap-2 bg-paprika-800 text-white px-12 py-4 rounded-xl font-bold hover:bg-paprika-900 transition-all shadow-lg"
              >
                Tarification <ChevronRight size={20}/>
              </a>
            </div>
          </div>
          
          {/* Colonne de droite (Photo) */}
          <div className="relative">
            {/* L'ombre derrière la photo */}
            <div className="absolute inset-0 bg-spindle-200 rounded-[2rem] transform rotate-3 scale-105 opacity-70"></div>
            <img 
              src={photoTom}  /* On utilise la variable importée */
              alt="Tom Vidal" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
            />
          </div>

        </div>
      </header>

{/* Parcours Section (Fond Blanc) */}
      <section id="parcours" className="bg-white py-24 px-8 scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-spindle-950">
            Un parcours d'excellence 100% toulousain
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                year: "Bac S 2020 option sport", 
                place: "Lycée Raymond Naves", 
                desc: "Formation rigoureuse et dépassement sportif" 
              },
              { 
                year: "Prépa MPSI-MP", 
                place: "Lycée Pierre de Fermat", 
                desc: "Le parcours scientifique de renommée nationale" 
              },
              { 
                year: "Cycle Ingénieur", 
                place: "INP - ENSEEIHT", 
                desc: "Spécialisation Électronique & Systèmes Embarqués" 
              }
            ].map((step, i) => (
              <div key={i} className="bg-spindle-50 p-8 rounded-2xl border border-spindle-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-spindle-800 font-extrabold mb-2 text-lg">{step.year}</div>
                <div className="font-bold text-slate-800 mb-2">{step.place}</div>
                <div className="text-sm text-slate-500">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Nouveau paragraphe d'expérience */}
          <div className="max-w-3xl mx-auto bg-spindle-50/50 border border-spindle-100 p-8 rounded-2xl">
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              En parallèle de mes études, <span className="text-spindle-900 font-bold">5 ans d’expérience</span> en soutien scolaire m’ont donné une connaissance fine du programme et de ses attendus pour apporter une aide précise et pertinente pour chaque élève, et chaque parcours.
            </p>
          </div>

        </div>
      </section>

{/* SAP / Avantage Section Repensée (Fond Pastel) */}
      <section id="services" className="bg-spindle-50 py-24 px-8 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          
          {/* En-tête centré */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-spindle-950">
                Vos cours à moitié prix
              </h2>
              <img 
                src={logoSap} 
                alt="Logo officiel Services à la Personne" 
                className="h-12 mix-blend-multiply"
              />
            </div>
            <p className="text-slate-700 leading-relaxed text-lg max-w-3xl">
              Opter pour une activité déclarée et agréée "Service à la Personne" (SAP) me permet de vous proposer des avantages fiscaux directs grâce à ces deux dispositifs :
            </p>
          </div>
          
          {/* Grille des deux dispositifs (Encarts) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Encart 1 : Crédit d'impôt */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-spindle-100 flex flex-col hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-spindle-200 p-3 rounded-full text-spindle-800 shrink-0">
                  <Percent size={24}/>
                </div>
                <h3 className="text-xl font-bold text-spindle-950">Le crédit d'impôt de 50%</h3>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium flex-grow mb-8">
                L'État prend en charge la moitié des dépenses engagées pour les cours particuliers à domicile. Concrètement, que vous soyez imposable ou non, cette aide vous est garantie et acquise sur l'ensemble de mes prestations.
              </p>
              <Link 
                to="/credit-impot" 
                className="bg-spindle-800 text-white text-center px-6 py-4 rounded-xl font-bold hover:bg-spindle-900 transition-colors shadow-sm w-full"
              >
                En savoir plus sur le crédit d'impôt
              </Link>
            </div>

            {/* Encart 2 : Avance Immédiate */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-spindle-100 flex flex-col hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-spindle-200 p-3 rounded-full text-spindle-800 shrink-0">
                  <BookOpen size={24}/>
                </div>
                <h3 className="text-xl font-bold text-spindle-950">L'Avance Immédiate (AIS)</h3>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium flex-grow mb-8">
                Oubliez l'attente de l'année suivante pour être remboursé ! Avec ce service gratuit mis en place par l'Urssaf, l'avantage fiscal est déduit instantanément de votre facture. Vous ne réglez que votre reste à charge à la fin du mois, sans jamais avancer la part financée par l'État.
              </p>
              <Link 
                to="/avance-immediate" 
                className="bg-spindle-800 text-white text-center px-6 py-4 rounded-xl font-bold hover:bg-spindle-900 transition-colors shadow-sm w-full"
              >
                En savoir plus sur l'avance immédiate
              </Link>
            </div>
            
          </div>

          {/* Ligne basse : Call-to-action Simulateur */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 bg-spindle-950 p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-spindle-900">
            <p className="text-xl font-bold text-white text-center sm:text-left">
              Pour estimer votre budget avec crédit d'impôt :
            </p>
            <a 
              href="#tarifs" 
              className="flex items-center gap-2 bg-paprika-800 hover:bg-paprika-900 transition-colors px-8 py-4 rounded-xl font-bold text-white shadow-md shrink-0"
            >
              Simulateur de tarif <ChevronRight size={20}/>
            </a>
          </div>

        </div>
      </section>

      {/* Intégration de la Section Simulateur */}
      <section id="tarifs" className="scroll-mt-16">
        <Simulateur />
      </section>

     {/* Footer Complet avec Contact, Mentions Légales et Logo SAP */}
      <footer id="contact" className="bg-spindle-950 pt-10 pb-8 px-8 text-spindle-200 text-xs">
        <div className="max-w-6xl mx-auto">
          
          {/* Ligne de contact */}
          <div className="text-center mb-10 flex flex-col items-center">
            <p className="inline-block bg-paprika-800 text-white px-6 py-4 rounded-xl text-sm font-medium shadow-sm">
              Contactez-moi par appel, SMS au <a href="tel:0781302497" className="font-bold hover:underline">07 81 30 24 97</a> ou par mail à l'adresse{' '}
              <button 
                onClick={handleCopyEmail}
                className="font-bold hover:text-spindle-200 transition-colors inline-flex items-center gap-1.5 group underline decoration-spindle-400/50 underline-offset-4"
                title="Copier l'adresse"
              >
                tomvidal1301@gmail.com
                {emailCopied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </p>
            
            {/* Message de confirmation (s'affiche uniquement si copié) */}
            <div className="h-6 mt-2">
              {emailCopied && (
                <span className="text-green-400 text-sm font-medium animate-pulse">
                  ✓ Adresse mail copiée dans le presse-papier !
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-spindle-800 pt-8">
            {/* Textes légaux (à gauche sur ordinateur) */}
            <div className="text-center md:text-left space-y-2">
              <p className="font-bold text-sm text-white">Tom Vidal — Micro-Entreprise — SIRET 106 318 249 00013</p>
              <p className="opacity-90">Agrément Services à la Personne (SAP) — Crédit d'impôt de 50% selon l'article 199 sexdecies du CGI.</p>
              <p className="opacity-60 pt-2">© 2026 Tous droits réservés.</p>
            </div>

            {/* Logo SAP (à droite sur ordinateur) */}
            <div className="bg-white p-2 rounded-xl shadow-sm shrink-0">
              <img 
                src={logoSap} 
                alt="Logo officiel Services à la Personne" 
                className="h-16 md:h-20 mix-blend-multiply"
              />
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Accueil;