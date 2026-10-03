import React from 'react';
import { Star, CheckCircle, Heart, MessageSquareQuote } from 'lucide-react';
import { ASSETS } from '../constants';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana & Fred (Shih Tzu, 4 anos)',
      location: 'Porto',
      text: 'O Fred acordava a meio da noite a morder as patas com tanto afinco que ficavam bastante irritadas. Já tínhamos gasto bastante com rações especiais de linha veterinária. Quando começámos a aplicar o método com receitas caseiras de carne picada e abóbora cozida, a comichão acalmou em poucos dias. Notámos uma diferença enorme no descanso da casa.',
      rating: 5,
      highlight: 'Redução notória da comichão nas patas',
    },
    {
      name: 'Carlos & Thor (Golden Retriever, 3 anos)',
      location: 'Lisboa',
      text: 'Tinha receio de que preparar comida caseira para um Golden ficasse dispendioso por causa do porte dele. Mas com a organização de porções no congelador, as compras no talho acabam por compensar em comparação com sacos de ração cara. O pelo dele está muito mais bonito e com menos queda.',
      rating: 5,
      highlight: 'Mais económico e pelo com mais vigor',
    },
    {
      name: 'Juliana & Mel (Sem Raça Definida, 6 anos)',
      location: 'Coimbra',
      text: 'A Mel vomitava com frequência pela manhã e mostrava pouco interesse pela ração seca. A Lista Semáforo ajudou-me a perceber o que podia estar a irritar a digestão dela. Fizemos a transição em 7 etapas e hoje ela come tudo com gosto e sem indisposições.',
      rating: 5,
      highlight: 'Mais apetite e digestão tranquila',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="prova-social">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            EXPERIÊNCIAS DE QUEM JÁ EXPERIMENTOU
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Veja a diferença que a comida fresca pode fazer na rotina do seu cão
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Tutores que decidiram rever a alimentação diária dos seus animais e encontraram uma solução mais natural e equilibrada.
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
                Evolução Positiva
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                De noites agitadas com comichão a uma pelagem densa, brilhante e dias mais felizes
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Ao reduzir o recurso a farinhas ultraprocessadas e ingredientes desidratados das rações industriais, o organismo do cão tem oportunidade de recuperar. A pele acalma e os pelos ganham um aspeto mais sedoso e resistente.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900">
                  <p className="text-[11px] font-semibold text-rose-600">ANTES</p>
                  <p>Comichão frequente, desconforto nas patas e fezes volumosas com odor forte</p>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900">
                  <p className="text-[11px] font-semibold text-emerald-600">APÓS A ADAPTAÇÃO</p>
                  <p>Sono descansado, pele sem irritações aparentes e refeições feitas com apetite</p>
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
                  <p className="text-[11px] text-stone-500">{t.location} (Portugal)</p>
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
                &ldquo;Depois de semanas complicadas, foi um alívio vê-lo dormir a noite inteira sem passar horas a lamber as patas. O Método Pele Tranquila Canina trouxe-nos a orientação simples de que precisávamos.&rdquo;
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
