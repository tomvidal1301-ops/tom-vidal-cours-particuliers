import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSap from '../assets/logo-sap.png';

export default function CreditImpot() {
    const [tax, setTax] = useState<number>(3000);
    const [hours, setHours] = useState<number>(80);
    const [rate, setRate] = useState<number>(20);

    const totalCost = hours * rate;
    const stateShare = totalCost * 0.5;
    const clientShare = totalCost * 0.5;
    const finalTax = tax - stateShare;

    return (
        <div className="bg-spindle-50 text-spindle-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
                
                <div className="mb-6">
                    <Link to="/#services" className="text-spindle-800 hover:underline font-bold text-sm flex items-center gap-2">
                        ← Retour à l'accueil
                    </Link>
                </div>

                <header className="mb-8 border-b border-spindle-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <span className="bg-spindle-200 text-spindle-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Le crédit d'impôt pour les services d'aide à la personne</span>
                        <h1 className="text-3xl font-extrabold text-spindle-950 tracking-tight mt-3">Vos cours de maths à moitié prix</h1>
                        <p className="text-spindle-600 mt-2">Comment fonctionne le crédit d’impôt pour le soutien scolaire à domicile</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <img src={logoSap} alt="Logo SAP" className="h-16 mix-blend-multiply" />
                        <div className="flex items-center gap-2 text-xs font-semibold bg-white text-spindle-800 border border-spindle-200 px-3 py-1.5 rounded-xl">
                            Agrément n° SAP106318249
                        </div>
                    </div>
                </header>

                <div className="bg-spindle-950 text-white rounded-2xl p-6 shadow-md mb-8">
                    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-spindle-200">
                        Ce qu'il faut savoir en un coup d'œil :
                    </h2>
                    <p className="text-sm text-spindle-100 leading-relaxed">
                        L'État finance définitivement <strong>50 % du coût</strong> des cours particuliers de votre enfant à domicile. Grâce à l’<strong>Avance Immédiate de l'Urssaf</strong>, vous n'avancez plus aucun frais : vous ne payez que la moitié de la facture chaque mois. Ce n’est pas un crédit à rembourser, mais une réduction directe de vos impôts.
                    </p>
                </div>

                <h2 className="text-xl font-bold text-spindle-950 mb-4 flex items-center gap-2">
                    Simulez votre budget et vos économies en temps réel
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-spindle-200 p-6 shadow-sm h-fit space-y-6">
                        <h3 className="font-bold text-spindle-950 text-sm border-b border-spindle-100 pb-2">
                            Vos paramètres personnalisés
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs font-semibold text-spindle-800 mb-1">
                                    <label htmlFor="hourly-rate" className="flex items-center gap-1">Tarif horaire convenu</label>
                                    <span className="text-spindle-800 font-bold font-mono">{rate} €/h</span>
                                </div>
                                <input 
                                    type="range" id="hourly-rate" min="10" max="30" step="1" 
                                    value={rate} onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full h-2 bg-spindle-100 rounded-lg appearance-none cursor-pointer accent-spindle-800" 
                                />
                                <span className="text-[10px] text-spindle-500">Le prix de base brut avant avantage fiscal.</span>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold text-spindle-800 mb-1">
                                    <label htmlFor="hours-planned">Volume de cours estimé (à l'année)</label>
                                    <span className="text-spindle-800 font-bold font-mono">{hours} h</span>
                                </div>
                                <input 
                                    type="range" id="hours-planned" min="10" max="150" step="2" 
                                    value={hours} onChange={(e) => setHours(Number(e.target.value))}
                                    className="w-full h-2 bg-spindle-100 rounded-lg appearance-none cursor-pointer accent-spindle-800" 
                                />
                                <span className="text-[10px] text-spindle-500">Référence : 2h de cours par semaine pendant 40 semaines scolaires = 80h.</span>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold text-spindle-800 mb-1">
                                    <label htmlFor="parent-tax">Votre impôt sur le revenu habituel</label>
                                    <span className="text-spindle-800 font-bold font-mono">{tax.toLocaleString('fr-FR')} €</span>
                                </div>
                                <input 
                                    type="range" id="parent-tax" min="0" max="10000" step="500" 
                                    value={tax} onChange={(e) => setTax(Number(e.target.value))}
                                    className="w-full h-2 bg-spindle-100 rounded-lg appearance-none cursor-pointer accent-spindle-800" 
                                />
                                <span className="text-[10px] text-spindle-500">Que vous payiez 0 € d'impôts ou plus, l'aide de l'État s'applique de la même manière.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white rounded-2xl border border-spindle-200 p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-spindle-950 text-sm border-b border-spindle-100 pb-2 mb-4">
                                Votre bilan financier réel
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-spindle-50 pb-2">
                                <span className="text-xs text-spindle-700 font-medium">Prestations brutes totales (valeur réelle) :</span>
                                <strong className="text-xs text-spindle-950 font-mono">{totalCost.toLocaleString('fr-FR')} €</strong>
                            </div>
                            <div className="flex justify-between border-b border-spindle-50 pb-2">
                                <span className="text-xs text-spindle-900 font-bold">Votre paiement total cumulé (Avance Immédiate) :</span>
                                <strong className="text-sm text-spindle-800 font-black font-mono">{clientShare.toLocaleString('fr-FR')} €</strong>
                            </div>
                            <div className="flex justify-between border-b border-spindle-50 pb-2">
                                <span className="text-xs text-spindle-600 font-medium">Prise en charge directe et définitive de l'État :</span>
                                <strong className="text-xs text-spindle-600 font-bold font-mono">{stateShare.toLocaleString('fr-FR')} €</strong>
                            </div>

                            <div className="bg-spindle-50 p-4 rounded-xl border border-spindle-100">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-spindle-600">Votre impôt d'origine :</span>
                                    <span className="font-mono text-spindle-700">{tax.toLocaleString('fr-FR')} €</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-spindle-950">
                                    <span>Votre impôt après prise en compte des cours :</span>
                                    <span className="font-mono text-spindle-950">
                                        {finalTax < 0 ? (
                                            <span className="text-indigo-600 font-bold">{finalTax.toLocaleString('fr-FR')} € (L'État vous rembourse {Math.abs(finalTax).toLocaleString('fr-FR')} €)</span>
                                        ) : (
                                            `${finalTax.toLocaleString('fr-FR')} €`
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[11px] text-spindle-600 mt-4 leading-relaxed bg-white p-3 rounded-lg border border-spindle-100">
                            {finalTax < 0 ? (
                                <><strong>Explication :</strong> Les cours ouvrent le droit à {stateShare.toLocaleString('fr-FR')} € d'aide. Comme vous ne payez habituellement que {tax.toLocaleString('fr-FR')} € d'impôts, l'État vous reverse l'aide restante par virement, soit {Math.abs(finalTax).toLocaleString('fr-FR')} €. Grâce au service d'avance immédiate, vous avez déjà profité de cette aide chaque mois, tout est parfaitement réglé !</>
                            ) : (
                                <><strong>Explication :</strong> Les cours ouvrent le droit à {stateShare.toLocaleString('fr-FR')} € d'aide. Votre impôt final est réduit à {finalTax.toLocaleString('fr-FR')} €. Grâce au service d'avance immédiate, vous avez économisé directement ces {stateShare.toLocaleString('fr-FR')} € au fil de l'année sur vos factures de cours.</>
                            )}
                        </p>
                    </div>
                </div>

                <h2 className="text-lg font-bold text-spindle-950 mb-6 flex items-center gap-2">
                    Quelle est la différence entre un "Crédit" et une "Réduction" d’impôt ?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl border border-spindle-200 p-5 shadow-sm">
                        <span className="bg-spindle-100 text-spindle-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">La Réduction d'Impôt</span>
                        <p className="text-xs text-spindle-700 leading-relaxed">
                            Elle réduit votre impôt à payer, mais si vous êtes non imposable ou faiblement imposable, l'aide restante est perdue. <strong>Elle ne profite pas de la même façon à tous.</strong>
                        </p>
                    </div>
                    <div className="bg-white rounded-xl border border-spindle-200 p-5 shadow-sm">
                        <span className="bg-spindle-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">Le Crédit d'Impôt (Le dispositif des cours)</span>
                        <p className="text-xs text-spindle-700 leading-relaxed">
                            Il réduit votre impôt et <strong>si le montant de l'aide dépasse vos impôts à payer, le Trésor Public vous rembourse directement la différence par virement !</strong> Tout le monde y a droit de manière parfaitement équitable, que l'on paie des impôts ou non.
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-2xl border border-spindle-200 shadow-sm text-xs">
                    <h3 className="font-bold text-spindle-950 text-sm flex items-center gap-1.5 mb-4 border-b border-spindle-100 pb-3">
                        Comment mettre cela en place ? En quelques étapes très simples :
                    </h3>
                    <div className="space-y-4 text-spindle-700">
                        <div className="flex gap-3">
                            <span className="bg-spindle-800 text-white font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0">1</span>
                            <span className="pt-1"><strong>Vous me transmettez :</strong> Vos nom, prénom, date de naissance, adresse email et coordonnées bancaires (pour l'Urssaf).</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-spindle-800 text-white font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0">2</span>
                            <span className="pt-1"><strong>Vous recevez un email de l'Urssaf :</strong> Vous n'avez qu'à cliquer sur le lien sécurisé pour valider votre inscription en 2 clics.</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-spindle-800 text-white font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0">3</span>
                            <span className="pt-1"><strong>À la fin de chaque mois :</strong> Je génère votre facture. Vous recevez un SMS de l'Urssaf, vous validez la facture (ou celle-ci est validée automatiquement après 48h) et vous n'êtes prélevé que de 50 %.</span>
                        </div>
                    </div>
                </div>

                {/* Pied de page (Footer légal et explicatif) */}
                <footer className="border-t border-spindle-200 pt-6 mt-8 flex flex-col gap-5 text-xs text-spindle-400">
                    <p className="text-center font-medium">
                        Explications économiques & fiscales sur le crédit d'impôt pour les activités de service à la personne — Réalisé par Tom Vidal
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