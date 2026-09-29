import React from 'react';
import { ShieldCheck, Lock, RotateCcw, Sparkles } from 'lucide-react';
import { PRICE } from '../constants';

interface GuaranteeSectionProps {
  onGoToCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onGoToCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200" id="garantia">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/30 shadow-lg text-center relative overflow-hidden">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-emerald-100">
            <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 text-emerald-100" />
          </div>

          <p className="text-xs uppercase tracking-widest font-extrabold text-emerald-800 mb-2">
            Garantia de Satisfação de 7 Dias
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Experimente sem qualquer risco pessoal
          </h2>

          <p className="text-stone-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Adquira o método <strong>Adeus Alergia Canina</strong> hoje, consulte as 100 receitas, utilize a calculadora de dose e prepare as primeiras refeições frescas para o seu cão com total tranquilidade.
          </p>

          {/* Guarantee Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-8">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-start gap-3">
              <RotateCcw className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-stone-900 text-sm mb-1">
                  Reembolso integral
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Se nos primeiros 7 dias considerar que o material não foi útil, basta enviar-nos uma mensagem por e-mail para receber a devolução total do valor pago, sem complicações.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-start gap-3">
              <Lock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-stone-900 text-sm mb-1">
                  Acesso permanente
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  O guia em PDF fica guardado no seu telemóvel, tablet ou computador para consultar sempre que necessitar, sem qualquer limite temporal.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onGoToCheckout}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base py-3 px-8 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>APROVEITAR A GARANTIA E ACEDER POR {PRICE}</span>
          </button>

        </div>

      </div>
    </section>
  );
};
