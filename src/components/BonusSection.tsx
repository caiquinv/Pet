import React from 'react';
import { Gift, Calculator, BookOpen, Check, Sparkles, Snowflake, Zap } from 'lucide-react';
import { InteractiveCalculator } from './InteractiveCalculator';
import { PRICE } from '../constants';

interface BonusSectionProps {
  onGoToCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onGoToCheckout }) => {
  const bonuses = [
    {
      badge: 'BÔNUS 01 · DESTAQUE',
      title: 'Calculadora de Gramas & Porção Diária Exata',
      desc: 'Informe o peso do cão, se é castrado, o escore de condição corporal (ECC) e o nível de atividade para receber os gramas exatos por refeição, sem erro de dosagem!',
      value: 'R$ 47,00',
      tag: 'GRÁTIS HOJE',
    },
    {
      badge: 'BÔNUS 02',
      title: 'Livro com 50 Receitas Cozidas para Cães',
      desc: 'Cardápios práticos, nutritivos e muito baratos. Alivia gastrite, acalma o estômago e tem aroma irresistível para cães enjoados.',
      value: 'R$ 39,00',
      tag: 'GRÁTIS HOJE',
    },
    {
      badge: 'BÔNUS 03',
      title: 'Livro com 50 Receitas Cruas (Com e Sem Osso)',
      desc: 'A dieta biologicamente apropriada com técnicas seguras de congelamento profilático para dentes limpos e máxima imunidade.',
      value: 'R$ 39,00',
      tag: 'GRÁTIS HOJE',
    },
    {
      badge: 'BÔNUS 04',
      title: 'Tabela Semáforo Imprimível de Geladeira',
      desc: 'Lista visual colorida de fácil consulta para ter sempre à vista: o que PODE, o que exige CUIDADO e o que NUNCA dar para o cão.',
      value: 'R$ 27,00',
      tag: 'GRÁTIS HOJE',
    },
    {
      badge: 'BÔNUS 05',
      title: 'Guia de Congelamento & Marmitas para 15 a 30 Dias',
      desc: 'Aprenda a cozinhar apenas 1 ou 2 vezes no mês e ter potinhos prontos no congelador. Praticidade absoluta no dia a dia.',
      value: 'R$ 37,00',
      tag: 'GRÁTIS HOJE',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200" id="bonus">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full mb-3">
            <Gift className="w-3.5 h-3.5 text-orange-600" />
            PRESENTES ESPECIAIS INCLUSOS NO PACOTE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Você não recebe apenas o guia: leva todo esse arsenal de bônus
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Tudo o que você precisa para alimentar seu cão com segurança, calcular a gramatura exata e nunca perder tempo cozinhando todo dia.
          </p>
        </div>

        {/* Real Interactive Calculator Highlight */}
        <div className="mb-14">
          <div className="text-center mb-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Teste Agora Mesmo a Ferramenta Bônus
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
              Descubra quantos gramas seu peludo deve comer hoje:
            </h3>
          </div>
          <InteractiveCalculator />
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="bg-stone-50 p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-500/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {b.badge}
                  </span>
                  <span className="text-xs font-bold text-stone-400 line-through">
                    {b.value}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-stone-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                  {b.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  {b.tag}
                </span>
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Acesso Imediato
                </span>
              </div>
            </div>
          ))}

          {/* Value Summary Card */}
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-700/60 px-2 py-0.5 rounded">
                VALOR TOTAL DOS BÔNUS
              </span>
              <p className="text-2xl font-black mt-3 mb-2 text-white">
                Mais de R$ 189,00 em materiais complementares
              </p>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Adquirindo o Guia Pet Comilão hoje por apenas R$ {PRICE}, você leva absolutamente todos os 5 bônus sem pagar nenhum centavo a mais.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-700/60 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">Custo dos Bônus:</span>
              <span className="text-xl font-black text-amber-300">GRÁTIS HOJE</span>
            </div>
          </div>

        </div>

        {/* Mid-page conversion hook */}
        <div className="text-center">
          <button
            onClick={onGoToCheckout}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base py-3.5 px-8 rounded-2xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>QUERO GARANTIR TODOS OS BÔNUS POR APENAS R$ {PRICE}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
