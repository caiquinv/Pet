import React from 'react';
import { Star, CheckCircle, Heart, Sparkles, MessageSquareQuote } from 'lucide-react';
import { ASSETS } from '../constants';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana & Fred (Shih Tzu, 4 anos)',
      location: 'São Paulo - SP',
      text: 'O Fred acordava às 3h da manhã chorando e lambendo a pata até ficar em carne viva. Eu já tinha gasto mais de R$ 900 com consultas e ração hipoalergênica. Quando comecei a aplicar o Guia Pet Comilão com as receitinhas de carne com abóbora e cenoura ralada, em 5 dias ele parou completamente de se roer. O investimento no guia foi a melhor decisão que tomei!',
      rating: 5,
      highlight: 'Parou de lamber as patas em 5 dias',
    },
    {
      name: 'Carlos Eduardo & Thor (Golden Retriever, 3 anos)',
      location: 'Curitiba - PR',
      text: 'Achava que alimentação natural pra Golden ia me custar uma fortuna porque ele come muito. Mas com o Guia Pet Comilão e o método das marmitas congeladas, gasto menos do que gastava com o saco de 15kg de ração super premium! O pelo dele nunca teve tanto brilho e a queda reduziu drasticamente.',
      rating: 5,
      highlight: 'Economizou mais de R$ 200 no mês',
    },
    {
      name: 'Juliana Mendes & Mel (SRD, 6 anos)',
      location: 'Belo Horizonte - MG',
      text: 'A Mel vomitava aquela babinha amarela quase toda manhã e tinha um hálito bem forte. Descobri na Lista Semáforo como a ração seca tava irritando o estômago dela. Fiz a transição certinha em 7 dias como o guia ensina. Hoje ela devora todo o prato feliz da vida e nunca mais teve refluxo.',
      rating: 5,
      highlight: 'Fim dos vômitos e refluxo gástrico',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="prova-social">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            HISTÓRIAS REAIS DE TRANSFORMAÇÃO
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Veja o que acontece quando você troca a ração seca por Comida de Verdade
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Mais de <strong>4.700 tutores</strong> já devolveram a tranquilidade para as suas noites e a saúde para o prato de seus cães.
          </p>
        </div>

        {/* Visual Transformation Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-inner border border-stone-100">
              <img
                src={ASSETS.transformation}
                alt="Antes e depois de cão com pele recuperada e alegre"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md uppercase tracking-wider">
                Resultado Comprovado
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                De noites em claro se coçando a uma pelagem densa, brilhante e estômago em paz
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Ao eliminar as farinhas ultraprocessadas, conservantes químicos e o excesso de sódio das rações industriais, o organismo do cão desinflama de dentro para fora. A vermelhidão da pele desaparece e os pelos voltam a crescer fortes e sedosos.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900">
                  <p className="text-[11px] font-semibold text-rose-600">ANTES</p>
                  <p>Coceira crônica, patas machucadas e fezes volumosas com odor forte</p>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900">
                  <p className="text-[11px] font-semibold text-emerald-600">DEPOIS (14 DIAS)</p>
                  <p>Sono profundo a noite inteira, pele calma, hálito limpo e prato vazio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-0.5 rounded-md mb-3">
                  {t.highlight}
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold text-stone-900">{t.name}</p>
                  <p className="text-[11px] text-stone-500">{t.location}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Student Feedback Quote Highlight */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-emerald-900 to-stone-900 text-white p-6 sm:p-7 rounded-3xl shadow-lg border border-emerald-700/40">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-medium italic text-emerald-50 leading-relaxed mb-3">
                &ldquo;O Pipoca passou a primeira noite inteira sem sequer relar na pata depois de semanas de sofrimento. Fazia meses que eu não conseguia ter uma noite inteira de sono. O Guia Pet Comilão mudou a nossa rotina para sempre!&rdquo;
              </p>
              <p className="text-xs font-bold text-amber-300">
                — Carla Silveira, tutora do Pipoca (Beagle de 5 anos)
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
