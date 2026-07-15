import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreditImpot() {
    const [tax, setTax] = useState<number>(3000);
    const [hours, setHours] = useState<number>(40);
    const [rate, setRate] = useState<number>(30);

    const totalCost = hours * rate;
    const stateShare = totalCost * 0.5;
    const clientShare = totalCost * 0.5;
    const finalTax = tax - stateShare;

    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
                
                <div className="mb-6">
                    <Link to="/" className="text-indigo-600 hover:underline font-bold text-sm flex items-center gap-2">
                        ← Retour à l'accueil
                    </Link>
                </div>

                <header className="mb-8 border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Dispositif d'État d'Aide à la Personne</span>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Vos cours de maths à moitié prix</h1>
                        <p className="text-slate-500 mt-1">Comment fonctionne le crédit d’impôt immédiat pour le soutien scolaire à domicile</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl shrink-0">
                        <span className="material-icons text-emerald-600">verified</span>
                        Agrément SAP n° SAP106318249
                    </div>
                </header>

                <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md mb-8">
                    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-emerald-400">
                        <span className="material-icons">info_outline</span>
                        Ce qu'il faut savoir en un coup d'œil :
                    </h2>
                    <p className="text-sm text-indigo-100 leading-relaxed">
                        L'État finance définitivement <strong>50 % du coût</strong> des cours particuliers de votre enfant à domicile. Grâce à l’<strong>Avance Immédiate de l'Urssaf</strong>, vous n'avancez plus aucun frais : vous ne payez que la moitié de la facture chaque mois. Ce n’est pas un crédit à rembourser, mais une réduction directe de vos impôts.
                    </p>
                </div>

                <h2 className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2">
                    <span className="material-icons text-indigo-600">calculate</span>
                    Simulez votre budget et vos économies en temps réel
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-fit space-y-6">
                        <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                            Vos paramètres personnalisés
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                                    <label htmlFor="hourly-rate" className="flex items-center gap-1">Tarif horaire convenu</label>
                                    <span className="text-indigo-600 font-bold font-mono">{rate} €/h</span>
                                </div>
                                <input 
                                    type="range" id="hourly-rate" min="30" max="45" step="5" 
                                    value={rate} onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                                />
                                <span className="text-[10px] text-slate-400">Le prix de base brut avant avantage fiscal (selon votre zone).</span>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                                    <label htmlFor="hours-planned">Volume de cours estimé (à l'année)</label>
                                    <span className="text-indigo-600 font-bold font-mono">{hours} h</span>
                                </div>
                                <input 
                                    type="range" id="hours-planned" min="10" max="150" step="5" 
                                    value={hours} onChange={(e) => setHours(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                                />
                                <span className="text-[10px] text-slate-400">Par exemple : 1h30 par semaine pendant l'année scolaire correspond à environ 40h.</span>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                                    <label htmlFor="parent-tax">Votre impôt sur le revenu habituel</label>
                                    <span className="text-indigo-600 font-bold font-mono">{tax.toLocaleString('fr-FR')} €</span>
                                </div>
                                <input 
                                    type="range" id="parent-tax" min="0" max="10000" step="500" 
                                    value={tax} onChange={(e) => setTax(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                                />
                                <span className="text-[10px] text-slate-400">Que vous payiez 0 € d'impôts ou plus, l'aide de l'État s'applique de la même manière.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 mb-4">
                                Votre bilan financier réel
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-xs text-slate-600 font-medium">Prestations brutes totales (valeur réelle) :</span>
                                <strong className="text-xs text-slate-900 font-mono">{totalCost.toLocaleString('fr-FR')} €</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-xs text-slate-600 font-medium text-emerald-700">Votre paiement mensuel total cumulé (Avance Immédiate) :</span>
                                <strong className="text-xs text-emerald-600 font-bold font-mono">{clientShare.toLocaleString('fr-FR')} €</strong>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-xs text-slate-600 font-medium text-indigo-700">Prise en charge directe et définitive de l'État :</span>
                                <strong className="text-xs text-indigo-600 font-bold font-mono">{stateShare.toLocaleString('fr-FR')} €</strong>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-500">Votre impôt d'origine :</span>
                                    <span className="font-mono text-slate-600">{tax.toLocaleString('fr-FR')} €</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-slate-950">
                                    <span>Votre impôt après prise en compte des cours :</span>
                                    <span className="font-mono text-slate-950">
                                        {finalTax < 0 ? (
                                            <span className="text-emerald-600 font-bold">{finalTax.toLocaleString('fr-FR')} € (L'État vous rembourse {Math.abs(finalTax).toLocaleString('fr-FR')} €)</span>
                                        ) : (
                                            `${finalTax.toLocaleString('fr-FR')} €`
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-500 mt-4 leading-relaxed bg-indigo-50/40 p-3 rounded-lg border border-indigo-100/30">
                            {finalTax < 0 ? (
                                <><strong>Explication :</strong> Les cours ouvrent le droit à {stateShare.toLocaleString('fr-FR')} € d'aide. Comme vous ne payez habituellement que {tax.toLocaleString('fr-FR')} € d'impôts, l'État vous reverse l'aide restante par virement, soit {Math.abs(finalTax).toLocaleString('fr-FR')} €. Grâce au service d'avance immédiate, vous avez déjà profité de cette aide chaque mois, tout est parfaitement réglé !</>
                            ) : (
                                <><strong>Explication :</strong> Les cours ouvrent le droit à {stateShare.toLocaleString('fr-FR')} € d'aide. Votre impôt final est réduit à {finalTax.toLocaleString('fr-FR')} €. Grâce au service d'avance immédiate, vous avez économisé directement ces {stateShare.toLocaleString('fr-FR')} € au fil de l'année sur vos factures de cours.</>
                            )}
                        </p>
                    </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="material-icons text-indigo-600">help_outline</span>
                    Quelle est la différence entre un "Crédit" et une "Réduction" d’impôt ?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">La Réduction d'Impôt</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Elle réduit votre impôt à payer, mais si vous êtes non imposable ou faiblement imposable, l'aide restante est perdue. <strong>Elle ne profite pas de la même façon à tous.</strong>
                        </p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">Le Crédit d'Impôt (Le dispositif des cours)</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Il réduit votre impôt et <strong>si le montant de l'aide dépasse vos impôts à payer, le Trésor Public vous rembourse directement la différence par virement !</strong> Tout le monde y a droit de manière parfaitement équitable, que l'on paie des impôts ou non.
                        </p>
                    </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="material-icons text-slate-600">gavel</span>
                    Pourquoi l'État finance-t-il la moitié de vos cours ?
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Une logique gagnant-gagnant</span>
                </h2>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs text-slate-600 leading-relaxed">
                    <p>
                        Ce dispositif n'est pas un oubli ou une faveur administrative, c'est une décision économique réfléchie. L'État est en réalité le premier gagnant de cette opération pour trois raisons très concrètes :
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <strong className="text-slate-900 block mb-1">💸 Lutter contre le travail au noir</strong>
                            En proposant un cours déclaré à 15 €/h plutôt qu'un cours non déclaré à 25 €/h, l'État rend l'économie souterraine totalement obsolète et inutile pour les familles.
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <strong className="text-slate-900 block mb-1">💼 Encourager l'emploi</strong>
                            Ce service crée de l'activité pour les jeunes diplômés, professeurs indépendants et étudiants, injectant ainsi des revenus légaux et taxables directement dans l'économie réelle.
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <strong className="text-slate-900 block mb-1">🏦 Autofinancement des taxes</strong>
                            Les charges sociales prélevées sur l'activité des enseignants déclarés permettent de réinjecter des cotisations dans les caisses de l'État.
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-slate-100 p-6 rounded-2xl border border-slate-200 text-xs">
                    <h3 className="font-bold text-slate-950 text-sm flex items-center gap-1.5 mb-3">
                        <span className="material-icons text-slate-700 text-lg">touch_app</span>
                        Comment mettre cela en place ? C'est un jeu d'enfant :
                    </h3>
                    <div className="space-y-3 text-slate-600">
                        <div className="flex gap-2">
                            <span className="bg-indigo-600 text-white font-bold h-5 w-5 rounded-full flex items-center justify-center shrink-0">1</span>
                            <span><strong>Vous me transmettez :</strong> Vos nom, prénom, date de naissance, adresse email et coordonnées bancaires (pour l'Urssaf).</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="bg-indigo-600 text-white font-bold h-5 w-5 rounded-full flex items-center justify-center shrink-0">2</span>
                            <span><strong>Vous recevez un email de l'Urssaf :</strong> Vous n'avez qu'à cliquer sur le lien sécurisé pour valider votre inscription en 2 clics.</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="bg-indigo-600 text-white font-bold h-5 w-5 rounded-full flex items-center justify-center shrink-0">3</span>
                            <span><strong>À la fin de chaque mois :</strong> Je génère votre facture. Vous recevez un SMS de l'Urssaf, vous validez la facture (ou celle-ci est validée automatiquement après 48h) et vous n'êtes prélevé que de 50 %.</span>
                        </div>
                    </div>
                </div>

                <footer className="text-center text-xs text-slate-400 border-t border-slate-200 pt-6 mt-8">
                    Explications économiques & fiscales — Réalisé par Tom Vidal, Enseignant de Mathématiques
                </footer>
            </div>
        </div>
    );
}