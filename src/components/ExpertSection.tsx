import React from 'react';
import { ShieldCheck, Heart, Stethoscope, Sparkles } from 'lucide-react';
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
                  src="/vet-sofia-martins.webp"
                  alt="Dra. Sofia Martins Médica Veterinária"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover object-center aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-black text-lg sm:text-xl">Dra. Sofia Martins</p>
                  <p className="text-xs text-emerald-300 font-medium">Médica Veterinária · Foco em Nutrição e Cuidados Preventivos</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-4 -right-2 bg-emerald-600 text-white p-3 rounded-2xl shadow-lg flex items-center gap-2 border-2 border-white">
                <Stethoscope className="w-5 h-5 text-emerald-200" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200">Abordagem Prática</p>
                  <p className="text-xs font-black">Nutrição Preventiva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Biography & Mission */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              SOBRE O MÉTODO PELE TRANQUILA CANINA
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              &ldquo;Muitas vezes concentramos a atenção apenas nos sinais exteriores e esquecemos de olhar para a rotina como um todo — incluindo a alimentação.&rdquo;
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Olá, sou a <strong>Dra. Sofia Martins</strong>, Médica Veterinária. No contacto frequente com tutores dedicados, acompanho a preocupação de ver o animal desconfortável com a pele sensibilizada, comichão e lambedura insistente.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Muitas vezes tenta-se apenas uma solução rápida através de loções ou mudanças pontuais de ração, sem estruturar a rotina de cuidados de forma abrangente. <strong>Compreender o que o animal ingere e introduzir alimentos frescos com boa hidratação é um passo fundamental para o seu bem-estar diário.</strong>
            </p>

            <div className="p-4 sm:p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-stone-800 text-sm leading-relaxed">
              <p className="font-bold text-emerald-950 mb-1.5">
                O Propósito do Método Pele Tranquila Canina
              </p>
              <p className="text-xs sm:text-sm text-stone-700">
                &ldquo;Estruturei este método para que qualquer tutor tenha em mãos orientações práticas, a lista de alimentos permitidos e 100 receitas simples de preparar em casa. Apoiar a vitalidade e a qualidade de vida dos cães através de comida de verdade é o que me move todos os dias.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Diretrizes Europeias de Nutrição Animal</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Ingredientes Reais e Sem Aditivos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
