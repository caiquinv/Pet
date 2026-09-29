import React, { useState } from 'react';
import { Scale, Activity, Flame, Check, Sparkles } from 'lucide-react';

export const InteractiveCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(8);
  const [isNeutered, setIsNeutered] = useState<boolean>(true);
  const [activity, setActivity] = useState<'sedentario' | 'moderado' | 'ativo'>('moderado');
  const [bodyScore, setBodyScore] = useState<number>(5); // 1 to 9, 5 is ideal
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);

  const calculateGrams = () => {
    let basePercentage = 0.03; // 3%
    if (weight <= 3) basePercentage = 0.05;
    else if (weight <= 7) basePercentage = 0.04;
    else if (weight <= 15) basePercentage = 0.032;
    else if (weight <= 30) basePercentage = 0.028;
    else basePercentage = 0.024;

    // Adjust for activity
    if (activity === 'sedentario') basePercentage *= 0.9;
    if (activity === 'ativo') basePercentage *= 1.15;

    // Adjust for neutered (lower caloric need)
    if (isNeutered) basePercentage *= 0.95;

    // Adjust for body score
    if (bodyScore > 5) {
      basePercentage *= Math.max(0.8, 1 - (bodyScore - 5) * 0.05);
    } else if (bodyScore < 5) {
      basePercentage *= Math.min(1.2, 1 + (5 - bodyScore) * 0.05);
    }

    const totalDailyGrams = Math.round(weight * 1000 * basePercentage);
    const perMealGrams = Math.round(totalDailyGrams / mealsPerDay);

    const meatGrams = Math.round(totalDailyGrams * 0.45);
    const vegGrams = Math.round(totalDailyGrams * 0.35);
    const carbGrams = Math.round(totalDailyGrams * 0.20);

    return {
      daily: totalDailyGrams,
      meal: perMealGrams,
      meat: meatGrams,
      veg: vegGrams,
      carb: carbGrams,
    };
  };

  const results = calculateGrams();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-xl max-w-2xl mx-auto my-8 relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-stone-900 text-base leading-tight">
              Calculadora de Porção Diária & Gramas
            </h4>
            <p className="text-[11px] text-stone-500">
              Baseada no NRC & FEDIAF de nutrição canina
            </p>
          </div>
        </div>
        <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
          FERRAMENTA INCLUSA NO GUIA
        </span>
      </div>

      {/* Form Controls */}
      <div className="space-y-5">
        
        {/* Step 1: Weight */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-stone-800">
              1. Peso atual do seu cão (kg):
            </label>
            <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {weight} kg
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="60"
            step="0.5"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-1">
            <span>1 kg (Porte Mini)</span>
            <span>15 kg (Médio)</span>
            <span>35 kg (Grande)</span>
            <span>60 kg (Gigante)</span>
          </div>
        </div>

        {/* Step 2: Castrated / Intact & Activity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              2. Castrado ou Inteiro:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsNeutered(true)}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  isNeutered
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Castrado
              </button>
              <button
                type="button"
                onClick={() => setIsNeutered(false)}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  !isNeutered
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Inteiro
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              3. Nível de Atividade:
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value as any)}
              className="w-full py-1.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 font-medium focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="sedentario">Sedentário (pouco passeio)</option>
              <option value="moderado">Moderado (passeio diário leve)</option>
              <option value="ativo">Ativo (+1h de brincadeiras)</option>
            </select>
          </div>
        </div>

        {/* Step 3: Body Score (1-9) */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-stone-800">
              4. Escore Corporal (1 = Muito Magro | 5 = Ideal | 9 = Obeso):
            </label>
            <span className="text-xs font-bold text-stone-700">
              Nota: <strong>{bodyScore}</strong> ({bodyScore < 4 ? 'Abaixo do peso' : bodyScore <= 6 ? 'Peso Ideal' : 'Sobrepeso'})
            </span>
          </div>
          <div className="grid grid-cols-9 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => (
              <button
                key={score}
                type="button"
                onClick={() => setBodyScore(score)}
                className={`py-1.5 text-xs font-bold rounded border text-center transition-all cursor-pointer ${
                  bodyScore === score
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Meals per day */}
        <div className="flex items-center justify-between pt-1">
          <label className="text-xs font-bold text-stone-800">
            5. Número de refeições por dia:
          </label>
          <div className="flex gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setMealsPerDay(num)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  mealsPerDay === num
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {num}x
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* RESULT CARD */}
      <div className="mt-6 p-4 sm:p-5 bg-gradient-to-br from-emerald-50 to-teal-50/70 rounded-2xl border border-emerald-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              Resultado Personalizado:
            </p>
            <p className="text-2xl sm:text-3xl font-black text-stone-900">
              {results.daily}g <span className="text-sm font-semibold text-stone-600">de comida/dia</span>
            </p>
          </div>
          <div className="bg-white px-3.5 py-2 rounded-xl border border-emerald-200 text-center sm:text-right shadow-xs">
            <p className="text-[11px] text-stone-500 font-medium">Por Refeição ({mealsPerDay}x ao dia):</p>
            <p className="text-lg font-black text-emerald-700">{results.meal}g no prato</p>
          </div>
        </div>

        {/* Portion breakdown */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-white/80 p-2 rounded-lg border border-emerald-100">
            <p className="text-[10px] text-stone-500 font-medium">Carnes / Proteínas</p>
            <p className="font-bold text-stone-900">{results.meat}g</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-emerald-100">
            <p className="text-[10px] text-stone-500 font-medium">Legumes / Fibras</p>
            <p className="font-bold text-stone-900">{results.veg}g</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-emerald-100">
            <p className="text-[10px] text-stone-500 font-medium">Carboidratos Saudáveis</p>
            <p className="font-bold text-stone-900">{results.carb}g</p>
          </div>
        </div>

        <p className="text-[11px] text-stone-500 text-center mt-3">
          *A versão completa desta calculadora inteligente acompanha o Guia Pet Comilão para você consultar sempre que seu pet mudar de peso!
        </p>
      </div>

    </div>
  );
};
