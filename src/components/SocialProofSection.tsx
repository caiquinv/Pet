import React from 'react';
import { Heart, Sparkles, Check, AlertCircle } from 'lucide-react';
import { ASSETS } from '../constants';

export const SocialProofSection: React.FC = () => {
  const educationalPoints = [
    {
      title: 'Elevada Digestibilidade e Absorção',
      desc: 'Ingredientes frescos cozinhados a temperaturas suaves preservam os nutrientes, facilitando a assimilação de vitaminas e aminoácidos essenciais para a pele e o pelo.',
      tag: 'Absorção Nutricional',
    },
    {
      title: 'Hidratação Biológica Natural',
      desc: 'Ao contrário das rações secas (que contêm menos de 10% de humidade), as refeições frescas fornecem cerca de 70% de água natural, apoiando o funcionamento renal e a barreira cutânea.',
      tag: 'Hidratação Celular',
    },
    {
      title: 'Controlo Rigoroso dos Ingredientes',
      desc: 'Ao preparar em casa, sabe com precisão o que entra na tigela. É simples excluir potenciais alergénios comuns e escolher carnes magras e legumes bem tolerados.',
      tag: 'Hipoalergénico Caseiro',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="prova-social">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            BENEFÍCIOS DA ALIMENTAÇÃO NATURAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Como a comida fresca atua no bem-estar e na pele do seu cão
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Compreenda a ciência simples de substituir aditivos e farinhas processadas por refeições biológicas e equilibradas.
          </p>
        </div>

        {/* Visual Transformation Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-inner border border-stone-100">
              <img
                src="/dog-results-happy.webp"
                alt="Exemplo de cão com pelagem recuperada e ar saudável"
                width={800}
                height={597}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md uppercase tracking-wider">
                Evolução Nutricional
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                Da sensibilidade diária ao equilíbrio digestivo e pelagem fortalecida
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Ao reduzir o recurso a farinhas ultraprocessadas e ingredientes desidratados das rações industriais, o organismo do cão tem oportunidade de se regenerar. A barreira da pele fortalece-se e o pelo ganha um aspeto mais sedoso e resistente.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl text-stone-700">
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Ração Ultraprocessada</p>
                  <p className="mt-1 font-medium">Baixa humidade (&lt;10%), amidos em excesso e conservantes industriais</p>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900">
                  <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Nutrição Caseira</p>
                  <p className="mt-1 font-medium">Humidade natural (~70%), digestão suave e nutrientes íntegros</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pilares Científicos e Educativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {educationalPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-0.5 rounded-md mb-3">
                  {point.tag}
                </div>

                <h3 className="font-extrabold text-stone-900 text-base mb-2">
                  {point.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Baseado em evidências nutricionais</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso Responsável de Saúde Animal */}
        <div className="max-w-2xl mx-auto bg-amber-50/80 border border-amber-200/80 p-5 rounded-2xl text-stone-700 text-xs text-center space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 text-amber-900 font-bold">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Nota Importante de Saúde Animal</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            As orientações nutricionais deste método têm fins exclusivamente educativos e preventivos de suporte ao bem-estar diário. <strong>Não substitui o acompanhamento veterinário</strong>, diagnóstico clínico ou tratamento médico prescrito para o seu animal.
          </p>
        </div>

      </div>
    </section>
  );
};
