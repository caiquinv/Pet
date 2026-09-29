import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Lock, 
  CreditCard, 
  X
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
            VALOR E POUPANÇA REAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Quanto custa continuar a insistir em rações que não resolvem o desconforto?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Compare o impacto financeiro de tentar apenas disfarçar os sinais versus uma solução que atua na raiz através de comida equilibrada.
          </p>
        </div>

        {/* 1. COMPARAÇÃO DETALHADA DE GASTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
          
          {/* Card 1: Caminho Tradicional */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-rose-200 shadow-sm flex flex-col justify-between relative">
            <span className="absolute -top-3 left-6 bg-rose-600 text-white text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              Apenas a Aliviar os Sintomas
            </span>
            
            <div>
              <div className="flex items-center gap-2 mb-2 text-rose-600">
                <X className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Rações Especiais e Farmácia
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Despesas recorrentes todos os meses que não atuam na causa de base:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Ração hipoalergénica de marca veterinária</span>
                  <span className="font-bold text-rose-600">65 € a 95 €/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Anti-histamínicos e loções dermatológicas</span>
                  <span className="font-bold text-rose-600">45 € a 75 €/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Champôs calmantes e sprays tópicos</span>
                  <span className="font-bold text-rose-600">25 € a 40 €/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Consultas de acompanhamento frequentes</span>
                  <span className="font-bold text-rose-600">35 € a 50 €/mês</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200">
              <div className="flex justify-between items-center text-sm font-bold text-rose-950 mb-1">
                <span>Custo Médio Mensal:</span>
                <span className="text-xl font-black text-rose-600">170 € a 260 € / mês</span>
              </div>
              <p className="text-[11px] text-rose-700 leading-snug">
                E ao interromper os produtos, a comichão e as irritações cutâneas voltam frequentemente a manifestar-se.
              </p>
            </div>
          </div>

          {/* Card 2: Alimentação Caseira */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Natural e Económico
            </div>

            <div>
              <span className="bg-emerald-100 text-emerald-900 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider">
                Abordagem Prática pela Nutrição
              </span>

              <div className="flex items-center gap-2 mb-2 mt-3 text-emerald-600">
                <Check className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Método de Nutrição Caseira
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Ingredientes frescos adquiridos diretamente no supermercado ou no talho:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Carnes magras, legumes frescos e ovos</span>
                  <span className="font-bold text-emerald-700">30 € a 45 €/mês</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Redução de gastos contínuos de farmácia</span>
                  <span className="font-bold text-emerald-700">Grande poupança</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Doses práticas organizadas no congelador</span>
                  <span className="font-bold text-emerald-700">Menos tempo na cozinha</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Noites descansadas sem barulho de comichão</span>
                  <span className="font-bold text-emerald-700">Tranquilidade em casa</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex justify-between items-center text-sm font-bold text-emerald-950 mb-1">
                <span>Poupança Estimada:</span>
                <span className="text-xl font-black text-emerald-700">+140 € / mês</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Apoia a saúde e vitalidade do seu animal com comida de verdade, poupando nas despesas mensais.
              </p>
            </div>
          </div>

        </div>

        {/* 2. REGRA DO VALOR ACESSÍVEL */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-lg border border-emerald-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-800/80 px-2.5 py-1 rounded-md">
                PERSPECTIVA DE VALOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Menos de 0,50 € por dia no primeiro mês
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Um café numa esplanada custa cerca de 1,00 €. O valor para aceder a todo o guia estruturado de alimentação caseira fica por uma fração mínima de uma consulta ou de um saco de ração especial.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center">
              <p className="text-xs text-stone-300 font-medium">Acesso Vitalício por apenas:</p>
              <div className="text-3xl sm:text-4xl font-black text-amber-300 my-1">
                {PRICE}
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
              OFERTA DE LANÇAMENTO EM PORTUGAL
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              Aceda Já ao Método Pele Tranquila Canina
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              O guia prático de nutrição caseira para favorecer o equilíbrio digestivo, apoiar a pele e proporcionar mais conforto ao seu cão.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="flex flex-col items-center justify-center text-center my-6">
            <p className="text-sm font-bold text-stone-400 line-through mb-1">
              De {ORIGINAL_PRICE} por apenas
            </p>
            <div className="flex items-baseline gap-1 text-emerald-700">
              <span className="text-6xl sm:text-7xl font-black tracking-tight text-emerald-600">{PRICE}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-600 mt-2">
              Pagamento único · Acesso vitalício imediato · Sem mensalidades
            </p>
          </div>

          {/* O QUE ESTÁ INCLUÍDO NO GUIA */}
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/80 mb-8 max-w-2xl mx-auto">
            <p className="text-xs font-black text-stone-900 uppercase tracking-wider mb-3">
              Tudo o que está incluído no seu acesso:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Método Pele Tranquila Canina:</strong> O passo a passo completo da nutrição caseira</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>50 Receitas Cozinhadas:</strong> Práticas, nutritivas e fáceis de preparar</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>50 Receitas Cruas Apropriadas:</strong> Orientações claras com e sem osso</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Lista Semáforo de Alimentos:</strong> O que é permitido, o que exige cautela e o que nunca oferecer</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Protocolo de Transição em 4 Fases:</strong> Adaptação suave sem desarranjos intestinais</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>Guia de Proporções Caseiras:</strong> Equilíbrio simples de carnes, legumes e fibras</span>
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
                  Disponibilização Imediata
                </span>
                <span className="block text-base sm:text-lg font-black leading-tight">
                  SIM! QUERO O MÉTODO PELE TRANQUILA CANINA POR {PRICE}
                </span>
              </div>
            </button>

            {/* Selos de Segurança e Confiança */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 pt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Pagamento Seguro e Criptografado
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                Cartão Bancário / MB WAY
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
