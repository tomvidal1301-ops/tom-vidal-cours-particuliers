import { useState } from 'react';

export default function Simulateur() {
    const [level, setLevel] = useState<number>(35);
    const [hours, setHours] = useState<number>(2);
    const [group, setGroup] = useState<number>(1);

    const discount = group === 1 ? 1 : (group === 2 ? 0.8 : 0.7);
    const brutH = level * discount;
    const brutW = brutH * hours;
    const netH = brutH / 2;
    const netW = brutW / 2;

    const levels = [35, 42, 49];
    const groups = [
        { label: "Élève seul", mult: 1 },
        { label: "Groupe de 2 (-20%)", mult: 0.8 },
        { label: "Groupe de 3 (-30%)", mult: 0.7 }
    ];

    return (
        <div className="font-sans text-slate-900 py-10 px-4 bg-[#afcef2] min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* En-tête simplifié pour l'intégration au site */}
                <header className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                        Simulateur de tarif
                    </h2>
                </header>

                {/* Calculateur */}
                <div className="bg-white rounded-3xl shadow-xl border border-white/50 p-8 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-400 mb-3">Niveau scolaire</label>
                            <select 
                                value={level} 
                                onChange={(e) => setLevel(Number(e.target.value))}
                                className="w-full p-4 rounded-xl border border-slate-200 font-bold bg-slate-50 outline-none focus:border-[#afcef2] transition-colors"
                            >
                                <option value="35">Seconde</option>
                                <option value="42">Première</option>
                                <option value="49">Terminale</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-400 mb-3">Heures / semaine</label>
                            <div className="flex gap-2">
                                {[2, 4, 6].map((h) => (
                                    <button 
                                        key={h}
                                        onClick={() => setHours(h)} 
                                        className={`flex-1 p-4 rounded-xl border font-bold transition-colors ${
                                            hours === h 
                                                ? 'bg-[#afcef2] text-white' 
                                                : 'text-slate-900'
                                        }`}
                                    >
                                        {h}h
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-400 mb-3">Option Groupe</label>
                            <select 
                                value={group} 
                                onChange={(e) => setGroup(Number(e.target.value))}
                                className="w-full p-4 rounded-xl border border-slate-200 font-bold bg-slate-50 outline-none focus:border-[#afcef2] transition-colors"
                            >
                                <option value="1">Élève seul</option>
                                <option value="2">Groupe de 2 (-20%)</option>
                                <option value="3">Groupe de 3 (-30%)</option>
                            </select>
                        </div>
                    </div>

                    <p className="text-center text-slate-500 text-sm mb-6 border-b border-slate-100 pb-6">
                        Tarif brut (pour 1 élève) avant crédit d'impôt : <span className="font-bold">{brutH.toFixed(2)}</span>€/h (<span className="font-bold">{brutW.toFixed(2)}</span>€/sem)
                    </p>

                    <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
                        <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest font-bold">Reste à charge (pour 1 élève) après crédit d'impôt de 50% :</p>
                        <div className="font-black mb-1">
                            <span className="text-6xl text-[#afcef2]">{netH.toFixed(2)}</span>
                            <span className="text-6xl text-[#afcef2]">€</span>
                            <span className="text-2xl font-medium text-white"> / heure</span>
                        </div>
                        <div className="border-t border-slate-700 pt-6 mt-6">
                            <p className="text-2xl font-bold">Soit : <span className="text-[#afcef2]">{netW.toFixed(2)}</span> <span className="text-[#afcef2]">€</span> <span className="text-xl font-normal text-white"> / semaine</span></p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 text-center mb-10">
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                        *Ce simulateur ne vaut pas devis. Le tarif des cours est susceptible de varier selon les frais de déplacements engendrés (qui bénéficient également du crédit d'impôt de 50%). Ces frais dépendent de la distance du domicile, du nombre d'élèves ainsi que d'éventuels enchaînements de cours dans la même zone afin de vous offrir le tarif le plus juste.*
                    </p>
                </div>

                <h2 className="text-xl font-bold mb-6 px-2 text-slate-900">Grille tarifaire complète (Horaire)</h2>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-12 overflow-x-auto">
                    <table className="w-full min-w-[500px] text-left border-collapse">
                        <thead className="bg-slate-100 text-slate-600 text-xs uppercase">
                            <tr>
                                <th className="p-4">Configuration</th>
                                <th className="p-4">Seconde</th>
                                <th className="p-4">Première</th>
                                <th className="p-4">Terminale</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-slate-100">
                            {groups.map((g, index) => (
                                <tr key={index} className="hover:bg-slate-50">
                                    <td className="p-4 font-bold text-slate-800">{g.label}</td>
                                    {levels.map((l, lIndex) => (
                                        <td key={lIndex} className="p-4 text-slate-600">
                                            {((l * g.mult) / 2).toFixed(2)}€/h
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}