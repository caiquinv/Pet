import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Lock, 
  Sparkles, 
  CreditCard, 
  QrCode, 
  TrendingDown, 
  DollarSign, 
  Heart, 
  X, 
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';
import { PRICE, ORIGINAL_PRICE } from '../constants';

interface AnchoringSectionProps {
  onDirectCheckout: () => void;
}

export const AnchoringSection: React.FC<AnchoringSectionProps> = ({ onDirectCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100/80 border-b border-stone-200" id="oferta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            ANCORAGEM DE VALOR & ECONOMIA REAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Quanto custa continuar enchendo o pote com ração que adoece seu cão?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Compare o custo financeiro e emocional de tratar apenas os sintomas versus a solução definitiva pela raiz com alimentação de verdade.
          </p>
        </div>

        {/* 1. COMPARAÇÃO DETALHADA DE GASTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
          
          {/* Card 1: Caminho Tradicional / Sintomas */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-rose-200 shadow-sm flex flex-col justify-between relative">
            <span className="absolute -top-3 left-6 bg-rose-600 text-white text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              Tratando Apenas os Sintomas
            </span>
            
            <div>
              <div className="flex items-center gap-2 mb-2 text-rose-600">
                <X className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Rações Comerciais & Farmácia
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Gastos recorrentes todos os meses que nunca curam o problema pela raiz:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Ração Hipoalergênica / Medicamentosa</span>
                  <span className="font-bold text-rose-600">R$ 380 a R$ 490/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Antialérgicos e Corticoides contínuos</span>
                  <span className="font-bold text-rose-600">R$ 340 a R$ 560/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Shampoos terapêuticos e sprays calmantes</span>
                  <span className="font-bold text-rose-600">R$ 130 a R$ 190/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Consultas veterinárias emergenciais</span>
                  <span className="font-bold text-rose-600">R$ 190 a R$ 260/mês</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200">
              <div className="flex justify-between items-center text-sm font-bold text-rose-950 mb-1">
                <span>Custo Médio Mensal:</span>
                <span className="text-xl font-black text-rose-600">R$ 1.040+ / mês</span>
              </div>
              <p className="text-[11px] text-rose-700 leading-snug">
                E no primeiro mês sem os remédios, as coceiras e feridas voltam no mesmo dia.
              </p>
            </div>
          </div>

          {/* Card 2: Caminho Guia Pet Comilão */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              100% Saudável & Econômico
            </div>

            <div>
              <span className="bg-emerald-100 text-emerald-900 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider">
                Solução Definitiva Pela Causa
              </span>

              <div className="flex items-center gap-2 mb-2 mt-3 text-emerald-600">
                <Check className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Alimentação Natural Pet Comilão
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Ingredientes frescos e nutritivos comprados direto na feira ou açougue:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Carnes magras, legumes frescos e ovos</span>
                  <span className="font-bold text-emerald-700">R$ 110 a R$ 160/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Antialérgicos e remédios contínuos</span>
                  <span className="font-bold text-emerald-700">R$ 0,00</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Marmitas práticas prontas no freezer</span>
                  <span className="font-bold text-emerald-700">Menos tempo na cozinha</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Noites inteiras de sono sem barulho de coceira</span>
                  <span className="font-bold text-emerald-700">Paz para a casa toda</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex justify-between items-center text-sm font-bold text-emerald-950 mb-1">
                <span>Economia Líquida Todo Mês:</span>
                <span className="text-xl font-black text-emerald-700">+R$ 880 / mês</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Você cuida do seu pet com saúde de verdade gastando uma fração da ração industrial.
              </p>
            </div>
          </div>

        </div>

        {/* 2. REGRA DO MENOS DE 50 CENTAVOS POR DIA */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-lg border border-emerald-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-800/80 px-2.5 py-1 rounded-md">
                PERSPECTIVA DE VALOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Menos de R$ 0,50 centavos por dia durante o primeiro mês
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Um único café na padaria custa R$ 6,00. Uma consulta veterinária não sai por menos de R$ 180,00. O investimento para ter todo o protocolo passo a passo de Alimentação Natural é menor do que uma casquinha de sorvete.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center">
              <p className="text-xs text-stone-300 font-medium">Acesso Vitalício por apenas:</p>
              <div className="text-3xl sm:text-4xl font-black text-amber-300 my-1">
                R$ {PRICE}
              </div>
              <p className="text-[11px] text-emerald-200">Pagamento Único · Sem Assinaturas</p>
            </div>

          </div>
        </div>

        {/* 3. CARD DE OFERTA DIRETA DEFINITIVA */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-3 border-emerald-600 shadow-2xl relative overflow-hidden" id="checkout-box">
          
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-block bg-orange-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm mb-3">
              OFERTA DE LANÇAMENTO EXCLUSIVA
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              Tenha Acesso Imediato ao Método Adeus Alergia Canina
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              O método definitivo de nutrição caseira para desinflamar o estômago, cicatrizar a pele e acabar com as alergias do seu cão.
            </p>
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

          {/* O QUE ESTÁ INCLUSO NO GUIA */}
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/80 mb-8 max-w-2xl mx-auto">
            <p className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Tudo o que está incluído no seu acesso:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Guia Adeus Alergia Canina:</strong> O passo a passo da nutrição caseira anti-alérgica</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>50 Receitas Cozidas Hipoalergênicas:</strong> Práticas, deliciosas e baratas</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>50 Receitas Cruas Biológicas:</strong> Protocolo BARF com e sem osso seguro</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Lista Semáforo Anti-Inflamatória:</strong> O que pode, o que exige cuidado e o que nunca dar</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Protocolo de Transição em 4 Fases:</strong> Adaptação suave sem diarreia nem vômitos</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Calculadora de Porção Diária:</strong> Dosagem exata em gramas pelo peso e rotina</span>
              </div>
            </div>
          </div>

          {/* CALL TO ACTION BOTÃO PRINCIPAL */}
          <div className="max-w-xl mx-auto space-y-4">
            
            <button
              onClick={onDirectCheckout}
              className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Zap className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">
                  Liberação Imediata no Pix / Cartão
                </span>
                <span className="block text-base sm:text-lg font-black leading-tight">
                  SIM! QUERO O MÉTODO ADEUS ALERGIA CANINA POR R$ {PRICE}
                </span>
              </div>
            </button>

            {/* Selos de Segurança e Confiança */}
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
