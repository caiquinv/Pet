import React from 'react';
import { Check, ShieldCheck, Flame, Zap, Lock, Sparkles, CreditCard, QrCode } from 'lucide-react';
import { ASSETS, PRICE, ORIGINAL_PRICE } from '../constants';

interface AnchoringSectionProps {
  onDirectCheckout: () => void;
}

export const AnchoringSection: React.FC<AnchoringSectionProps> = ({ onDirectCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 via-amber-50/40 to-stone-50 border-b border-stone-200" id="oferta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            ANCORAGEM DE VALOR & ECONOMIA REAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Quanto custa continuar enchendo o pote com ração que adoece seu cão?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Coloque na ponta do lápis o quanto você gasta todo mês tentando apagar o fogo das alergias versus a comida de verdade.
          </p>
        </div>

        {/* Cost Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Traditional Path (Expensive & Ineffective) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-rose-200 shadow-sm relative">
            <span className="absolute -top-3 left-6 bg-rose-600 text-white text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
              O Caminho das Rações & Farmácias
            </span>
            
            <h3 className="font-extrabold text-stone-900 text-xl mb-4">
              Gastos Recorrentes Mensais:
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-stone-700 mb-6">
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span>1 Saco de Ração Medicamentosa (10-15kg)</span>
                <span className="font-bold text-rose-600">R$ 350 a R$ 480</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span>Antialérgicos e Corticoides contínuos</span>
                <span className="font-bold text-rose-600">R$ 320 a R$ 580</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span>Shampoos medicamentosos e pomadas</span>
                <span className="font-bold text-rose-600">R$ 120 a R$ 190</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span>Consultas veterinárias de retorno</span>
                <span className="font-bold text-rose-600">R$ 180 a R$ 250</span>
              </li>
            </ul>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200">
              <div className="flex justify-between items-center text-sm font-bold text-rose-950 mb-1">
                <span>Total gasto todo santo mês:</span>
                <span className="text-xl font-black text-rose-600">R$ 970+ / mês</span>
              </div>
              <p className="text-[11px] text-rose-800 leading-snug">
                E no mês seguinte, se você suspender a medicação, a coceira e as feridas voltam na mesma hora.
              </p>
            </div>
          </div>

          {/* Card 2: Pet Comilão Natural Food Path */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              100% Saudável & Econômico
            </div>

            <span className="bg-emerald-100 text-emerald-900 text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
              O Método Guia Pet Comilão
            </span>

            <h3 className="font-extrabold text-stone-900 text-xl mb-4 mt-2">
              Alimentação Natural Balanceada:
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-stone-700 mb-6">
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Carnes, legumes e ovos de feira/açougue
                </span>
                <span className="font-bold text-emerald-700">R$ 110 a R$ 160</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Fim dos remédios químicos contínuos
                </span>
                <span className="font-bold text-emerald-700">R$ 0,00</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Marmitas prontas no congelador
                </span>
                <span className="font-bold text-emerald-700">Economia de tempo</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Noites de sono completas e tranquilas
                </span>
                <span className="font-bold text-emerald-700">Não tem preço!</span>
              </li>
            </ul>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex justify-between items-center text-sm font-bold text-emerald-950 mb-1">
                <span>Economia média mensal no seu bolso:</span>
                <span className="text-xl font-black text-emerald-700">+R$ 800 / mês</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Você cuida do seu pet com carinho e comida de verdade gastando muito menos do que na ração industrial.
              </p>
            </div>
          </div>

        </div>

        {/* PRIMARY DIRECT CHECKOUT BOX */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-3 border-emerald-600 shadow-2xl relative overflow-hidden" id="checkout-box">
          
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-block bg-orange-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm mb-3">
              OFERTA ESPECIAL POR TEMPO LIMITADO
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              Tenha Acesso Imediato ao Guia Pet Comilão Completo + Todos os Bônus
            </h3>
          </div>

          {/* Pricing Highlight */}
          <div className="flex flex-col items-center justify-center text-center my-6">
            <p className="text-sm font-bold text-stone-400 line-through mb-1">
              De R$ {ORIGINAL_PRICE} por apenas
            </p>
            <div className="flex items-baseline gap-1 text-emerald-700">
              <span className="text-2xl sm:text-3xl font-extrabold">R$</span>
              <span className="text-6xl sm:text-7xl font-black tracking-tight text-emerald-600">{PRICE}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-600 mt-2">
              Pagamento único · Acesso vitalício imediato · Sem mensalidades
            </p>
          </div>

          {/* What is Included Checklist */}
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/80 mb-8 max-w-2xl mx-auto">
            <p className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Tudo o que você vai receber agora:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>Guia Pet Comilão</strong> completo (Passo a Passo)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>50 Receitas Cozidas</strong> econômicas e gostosas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>50 Receitas Cruas</strong> (com e sem osso)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>Lista Semáforo</strong> de geladeira (Pode/Cuidado/Nunca)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>Calculadora de Gramas</strong> por Peso e Condição</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span><strong>Guia de Congelamento</strong> de marmitas para 30 dias</span>
              </div>
            </div>
          </div>

          {/* SINGLE DIRECT CONVERSION CALL-TO-ACTION */}
          <div className="max-w-xl mx-auto space-y-4">
            
            <button
              onClick={onDirectCheckout}
              className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Zap className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">
                  Liberação Automática no Pix / Cartão
                </span>
                <span className="block text-base sm:text-lg font-black leading-tight">
                  SIM! QUERO O GUIA PET COMILÃO POR R$ {PRICE}
                </span>
              </div>
            </button>

            {/* Payment security info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 pt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Pagamento Criptografado
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                Aprovação Instantânea no Pix
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Garantia de 7 Dias
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
