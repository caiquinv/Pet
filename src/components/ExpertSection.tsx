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
                  src={ASSETS.vetSofia}
                  alt="Dra. Sofia Martins Médica Veterinária"
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
              &ldquo;Muitas vezes tratam-se apenas os sinais exteriores, esquecendo que a verdadeira causa começa na tigela de comida.&rdquo;
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Olá, sou a <strong>Dra. Sofia Martins</strong>, Médica Veterinária. Ao longo da minha prática clínica, acompanhei inúmeros tutores preocupados com cães que apresentavam vermelhidão na pele, lambedura compulsiva das patas e comichão persistente.
            </p>

            <p className="text-stone-700 text-base leading-relaxed">
              É frequente recorrer-se a soluções de alívio rápido que acalmam a comichão durante alguns dias, mantendo o animal com uma ração seca ultraprocessada rica em conservantes e farinhas industriais. <strong>Quando o tratamento termina, o desconforto volta porque a origem na alimentação não foi revista.</strong>
            </p>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-stone-800 text-sm leading-relaxed">
              <p className="font-semibold text-emerald-950 mb-1">
                O Propósito da Alimentação Caseira
              </p>
              <p className="text-xs sm:text-sm text-stone-700">
                &ldquo;Estruturei o <strong>Método Pele Tranquila Canina</strong> para que qualquer tutor consiga preparar refeições frescas, simples e equilibradas em sua casa. Ajudar a restaurar o equilíbrio do organismo através de ingredientes naturais e ver o alívio na vida do animal é a maior satisfação do meu trabalho.&rdquo;
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
