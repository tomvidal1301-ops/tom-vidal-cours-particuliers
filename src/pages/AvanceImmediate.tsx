import { Link } from 'react-router-dom';

export default function AvanceImmediate() {
    return (
        <div className="bg-slate-100 text-slate-800 min-h-screen py-8">
            
            <div className="max-w-3xl mx-auto px-6 mb-4">
                <Link to="/" className="text-indigo-600 hover:underline font-bold text-sm flex items-center gap-2">
                    ← Retour à l'accueil
                </Link>
            </div>

            {/* Print Tip for Tom (Not printed) */}
            <div className="max-w-3xl mx-auto px-6 mb-6 print:hidden">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-sm flex items-start gap-3">
                    <span className="material-icons text-amber-600 mt-0.5">print</span>
                    <div className="text-xs text-amber-800">
                        <strong className="block mb-1">💡 Comment générer ton justificatif PDF :</strong>
                        Fais un clic droit sur cette page ou appuie sur <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">Ctrl+P</code> (ou <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">Cmd+P</code>), sélectionne <strong>"Enregistrer au format PDF"</strong>, puis dépose le fichier obtenu dans ton formulaire de demande.
                    </div>
                </div>
            </div>

            {/* Main Flyer Document */}
            <div className="max-w-3xl mx-auto bg-white border border-slate-200 shadow-lg rounded-3xl p-8 sm:p-12 print:border-slate-300">
                
                {/* Header */}
                <div className="border-b-2 border-slate-100 pb-8 mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tight">TOM VIDAL — MATHÉMATIQUES</h1>
                        <p className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Soutien scolaire & Cours particuliers à domicile</p>
                        <div className="text-[11px] text-slate-400 mt-3 space-y-0.5">
                            <p>SIRET : 10631824900013</p>
                            <p>Déclaration SAP enregistrée sous le numéro : <strong>SAP106318249</strong></p>
                            <p>Adresse : 12 Rue de la République, 31000 Toulouse</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl sm:text-right shrink-0">
                        <span className="bg-indigo-100 text-indigo-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit sm:ml-auto">Dispositif National</span>
                        <h2 className="text-xs font-bold text-slate-900 mt-2">Avance Immédiate du Crédit d'Impôt</h2>
                        <p className="text-[10px] text-slate-400 mt-1">Information à destination des familles d'élèves</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6 text-xs leading-relaxed text-slate-600">
                    
                    <p className="text-slate-700">
                        Chère famille, afin de vous proposer un service de soutien scolaire de haute qualité dans les meilleures conditions budgétaires, mon entreprise individuelle est officiellement habilitée au service d'<strong>Avance Immédiate du crédit d'impôt</strong>.
                    </p>

                    <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100/50">
                        <strong className="text-indigo-950 block mb-1">1. Présentation générale du dispositif d'État</strong>
                        Ce service d'Avance Immédiate est un dispositif d'aide à la personne optionnel, gratuit et dématérialisé, mis en place par l'<strong>Urssaf</strong> et la <strong>Direction générale des Finances publiques (DGFiP)</strong>.
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">2. Conditions d'accès pour les bénéficiaires</h3>
                        <p>
                            L'accès à ce service est réservé aux particuliers domiciliés fiscalement en France, disposant d'un numéro de sécurité sociale valide, et d'un compte bancaire au format SEPA. 
                        </p>
                        <p className="text-indigo-700 font-semibold">
                            L'adhésion à ce service d'avance de trésorerie est entièrement facultative et non obligatoire. Si vous ne souhaitez pas l'utiliser, vous conserverez la possibilité de régler mes prestations à taux plein et de bénéficier de votre crédit d'impôt classique de 50% l'année suivante, lors de votre déclaration de revenus.
                        </p>
                    </div>

                    <div className="space-y-4 border-t border-b border-slate-100 py-6">
                        <h3 className="font-bold text-slate-900 text-sm">3. Parcours d'activation & Fonctionnement général</h3>
                        <p>
                            Une fois notre convention de cours signée, le fonctionnement administratif se déroule en quatre étapes simples et transparentes :
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="text-slate-900 block mb-1">Étape 1 : Inscription</strong>
                                Avec votre accord, je procède à votre enregistrement sur le portail de l'Urssaf. Vous recevez immédiatement un email automatique contenant un lien sécurisé de validation.
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="text-slate-900 block mb-1">Étape 2 : Activation</strong>
                                Vous vous connectez au site dédié de l'Urssaf pour créer vos identifiants d'accès personnels et valider vos coordonnées bancaires. Votre compte est activé à vie.
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="text-slate-900 block mb-1">Étape 3 : Validation (48h)</strong>
                                À la fin de chaque mois, j'émets votre facture de cours. Vous recevez un SMS de l'Urssaf. <strong>Vous disposez alors de 48 heures pour valider ou contester la demande de paiement</strong> sur votre espace en ligne. Sans action de votre part, la demande est automatiquement validée par l'Urssaf après ce délai.
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">4. Votre interlocuteur unique</h3>
                            <p className="text-slate-500">
                                Pour toute question relative à l'organisation des cours, aux horaires, au calcul des factures ou en cas de réclamation, <strong>votre interlocuteur reste exclusivement Tom Vidal</strong>. L'Urssaf n'intervient que comme intermédiaire de paiement et de calcul fiscal.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">5. Plafonds de crédit d'impôt</h3>
                            <p className="text-slate-500">
                                Les dépenses de services à la personne sont soumises à un plafond annuel global fixé par la loi. Pour vous informer sur les plafonds applicables à votre foyer fiscal, veuillez consulter le site officiel des impôts à l'adresse suivante :
                                <br />
                                <a href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline block mt-2 font-mono">https://www.impots.gouv.fr/portail/particulier/emploi-domicile</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="border-t-2 border-slate-100 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 gap-4">
                    <span>Charte de conformité AICI — Version 1.1 (Juillet 2026)</span>
                    <span className="font-semibold text-slate-600">Document d'Information validé par Tom Vidal</span>
                </div>

            </div>
        </div>
    );
}