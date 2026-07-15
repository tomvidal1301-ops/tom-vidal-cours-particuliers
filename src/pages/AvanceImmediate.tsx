import { Link } from 'react-router-dom';
import logoSap from '../assets/logo-sap.png';

export default function AvanceImmediate() {
    return (
        <div className="bg-spindle-50 text-spindle-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Bouton Retour */}
                <div className="mb-6">
                    <Link to="/#services" className="text-spindle-800 hover:underline font-bold text-sm flex items-center gap-2">
                        ← Retour à l'accueil
                    </Link>
                </div>

                {/* En-tête */}
                <header className="mb-8 border-b border-spindle-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <span className="bg-spindle-200 text-spindle-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">L'avance immédiate du crédit d'impôt</span>
                        <h1 className="text-3xl font-extrabold text-spindle-950 tracking-tight mt-3">N'avancez aucun frais pour payer vos cours !</h1>
                        <p className="text-spindle-600 mt-2">Comment fonctionne l'avance immédiate du crédit d'impôt</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <a
                            href="https://www.servicesalapersonne.gouv.fr/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-transform hover:scale-105 hover:opacity-80"
                        >
                            <img src={logoSap} alt="Logo officiel Services à la Personne" className="h-16 mix-blend-multiply" />
                        </a>
                        <div className="flex items-center gap-2 text-xs font-semibold bg-white text-spindle-800 border border-spindle-200 px-3 py-1.5 rounded-xl">
                            Déclaration n° SAP106318249
                        </div>
                    </div>
                </header>

                {/* Bloc d'introduction (Fond sombre) */}
                <div className="bg-spindle-950 text-white rounded-2xl p-6 shadow-md mb-8">
                    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-spindle-200">
                        Un service gratuit pour alléger votre budget
                    </h2>
                    <p className="text-sm text-spindle-100 leading-relaxed">
                        Afin de vous proposer un service de soutien scolaire de haute qualité dans les meilleures conditions budgétaires, mon entreprise individuelle est officiellement habilitée au service d'<strong>Avance Immédiate du crédit d'impôt</strong>. Ce dispositif dématérialisé est mis en place par l'<strong>Urssaf</strong> et la <strong>Direction générale des Finances publiques (DGFiP)</strong>.
                    </p>
                </div>

                {/* Section Conditions */}
                <h2 className="text-xl font-bold text-spindle-950 mb-4 flex items-center gap-2">
                    Conditions d'accès et flexibilité
                </h2>

                <div className="bg-white rounded-2xl border border-spindle-200 p-6 shadow-sm mb-8">
                    <p className="text-sm text-spindle-700 leading-relaxed mb-4">
                        L'accès à ce service est réservé aux particuliers domiciliés fiscalement en France, disposant d'un numéro de sécurité sociale valide et d'un compte bancaire au format SEPA.
                    </p>
                    <div className="bg-spindle-50 p-4 rounded-xl border border-spindle-100">
                        <p className="text-sm text-spindle-900 font-semibold leading-relaxed">
                            L'adhésion à ce service d'avance de trésorerie est entièrement facultative et non obligatoire. Si vous ne souhaitez pas l'utiliser, vous conserverez la possibilité de régler mes prestations à taux plein et de bénéficier de votre crédit d'impôt classique de 50% l'année suivante, lors de votre déclaration de revenus.
                        </p>
                    </div>
                </div>

                {/* Section Parcours */}
                <h2 className="text-xl font-bold text-spindle-950 mb-4 flex items-center gap-2">
                    Parcours d'activation & Fonctionnement général
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl border border-spindle-200 p-5 shadow-sm flex flex-col">
                        <span className="bg-spindle-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">Étape 1 : Inscription</span>
                        <p className="text-xs text-spindle-700 leading-relaxed flex-grow">
                            Avec votre accord, je procède à votre enregistrement sur le portail de l'Urssaf. Vous recevez immédiatement un email automatique contenant un lien sécurisé de validation.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl border border-spindle-200 p-5 shadow-sm flex flex-col">
                        <span className="bg-spindle-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">Étape 2 : Activation</span>
                        <p className="text-xs text-spindle-700 leading-relaxed flex-grow">
                            Vous vous connectez au site dédié de l'Urssaf pour créer vos identifiants d'accès personnels et valider vos coordonnées bancaires. Votre compte est activé à vie.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl border border-spindle-200 p-5 shadow-sm flex flex-col">
                        <span className="bg-spindle-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">Étape 3 : Validation</span>
                        <p className="text-xs text-spindle-700 leading-relaxed flex-grow">
                            À la fin de chaque mois, j'émets votre facture. Vous recevez un SMS de l'Urssaf. <strong>Vous disposez alors de 48h pour valider ou contester la demande de paiement</strong>. Sans action, elle est automatiquement validée.
                        </p>
                    </div>
                </div>

                {/* Section Informations complémentaires */}
                <h2 className="text-xl font-bold text-spindle-950 mb-4 flex items-center gap-2">
                    Informations complémentaires
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-2xl border border-spindle-200 p-6 shadow-sm">
                        <h3 className="font-bold text-spindle-950 text-sm mb-3">Votre interlocuteur unique</h3>
                        <p className="text-sm text-spindle-700 leading-relaxed">
                            Pour toute question relative à l'organisation des cours, aux horaires, au calcul des factures ou en cas de réclamation, <strong>votre interlocuteur reste exclusivement Tom Vidal</strong>. L'Urssaf n'intervient que comme intermédiaire de paiement et de calcul fiscal.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-spindle-200 p-6 shadow-sm">
                        <h3 className="font-bold text-spindle-950 text-sm mb-3">Plafonds de crédit d'impôt</h3>
                        <p className="text-sm text-spindle-700 leading-relaxed">
                            Les dépenses de services à la personne sont soumises à un plafond annuel global fixé par la loi. Pour vous informer sur les plafonds applicables à votre foyer fiscal, veuillez consulter le site officiel des impôts :
                            <a href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile" target="_blank" rel="noreferrer" className="text-spindle-800 font-bold hover:underline block mt-3 font-mono break-words">https://www.impots.gouv.fr/</a>
                        </p>
                    </div>
                </div>

                {/* Pied de page (Footer légal et explicatif) */}
                <footer className="border-t border-spindle-200 pt-6 mt-8 flex flex-col gap-5 text-xs text-spindle-400">
                    <p className="text-center font-medium">
                        Explications sur le fonctionnement de l'avance immédiate du crédit d'impôt pour les activités de service à la personne — Réalisé par Tom Vidal
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <span>SIRET : 10631824900013 — Tom Vidal</span>
                        <span>Charte de conformité AICI — Version 1.1</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}