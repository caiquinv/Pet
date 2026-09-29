import React from 'react';
import { Flame, ShieldCheck, Zap } from 'lucide-react';
import { PRICE, ORIGINAL_PRICE } from '../constants';

interface HeaderAlertProps {
  onGoToCheckout: () => void;
}

export const HeaderAlert: React.FC<HeaderAlertProps> = ({ onGoToCheckout }) => {
  return (
    <aside aria-label="Aviso de condição especial" className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white text-xs sm:text-sm font-medium py-2.5 px-4 shadow-sm border-b border-emerald-600/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-stone-900 text-xs font-bold shrink-0 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
          </span>
          <p className="leading-tight">
            <strong className="text-amber-300 font-semibold">Oferta Especial de Lançamento:</strong> Guia Completo + 100 Receitas + Calculadora de <span className="line-through opacity-80">R$ {ORIGINAL_PRICE}</span> por apenas <strong className="text-amber-300 font-black">R$ {PRICE}</strong> (Acesso Vitalício Imediato!)
          </p>
        </div>

        <button
          onClick={onGoToCheckout}
          className="hidden md:inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-3.5 py-1 rounded-full text-xs shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-stone-950" />
          Garantir por R$ {PRICE}
        </button>
      </div>
    </aside>
  );
};
