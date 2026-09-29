import React from 'react';
import { Award, ShieldCheck, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { ASSETS } from '../constants';

export const ExpertSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200" id="expert">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Expert Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-100 relative group">
                <img
                  src={ASSETS.vetFernanda}
                  alt="Dra. Fernanda Soares Médica Veterinária"
                  className="w-full h-auto object-cover object-center aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-black text-lg sm:text-xl">Dra. Fernanda Soares</p>
                  <p className="text-xs text-emerald-300 font-medium">Médica Veterinária · Nutrição & Dermatologia Canina</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-4 -right-2 bg-emerald-600 text-white p-3 rounded-2xl shadow-lg flex items-center gap-2 border-2 border-white">
                <Stethoscope className="w-5 h-5 text-emerald-200" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200">Protocolo Clínico</p>
                  <p className="text-xs font-black">Validado em Consultório</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Biography & Mission */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              QUEM CRIOU O MÉTODO ADEUS ALERGIA CANINA
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              &ldquo;Chega de ver cães dopados de antialérgicos enquanto a causa está no prato de ração.&rdquo;
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Olá, sou a <strong>Dra. Fernanda Soares</strong>. Ao longo de anos atendendo em clínicas veterinárias, perdi a conta de quantos tutores desesperados chegavam com seus cães cheios de feridas nas patas, pelos caindo em tufos e orelhas inflamadas.
            </p>

            <p className="text-stone-700 text-base leading-relaxed">
              A conduta padrão do mercado muitas vezes é a mesma: receitar um antialérgico de alto custo que alivia por 15 dias, indicar uma ração medicamentosa cheia de farinhas refinadas e conservantes químicos, e mandar voltar no mês seguinte. <strong>Um ciclo vicioso que custa caro e não resolve a raiz da inflamação.</strong>
            </p>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-stone-800 text-sm leading-relaxed">
              <p className="font-semibold text-emerald-950 mb-1">
                A Minha Missão com a Nutrição Caseira
              </p>
              <p className="text-xs sm:text-sm text-stone-700">
                &ldquo;Criei o método <strong>Adeus Alergia Canina</strong> para que qualquer tutor, mesmo sem experiência na cozinha, consiga preparar refeições caseiras, baratas e perfeitamente balanceadas para desinflamar o organismo do seu cão. Ver o alívio das coceiras, o fim das feridas e a saúde plena de volta é a maior recompensa da minha profissão.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Baseado no NRC & FEDIAF</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Nutrição Limpa e sem Conflitos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
