import React, { useState } from 'react';
import { ShieldCheck, Lock, Heart, FileText } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16 text-xs border-t border-stone-800" id="rodape">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-sm">
                🐾
              </span>
              <span className="font-extrabold text-lg text-white font-heading tracking-tight">
                Guia Pet Comilão
              </span>
            </div>
            
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Iniciativa para democratizar a Alimentação Natural para cães no Brasil, promovendo saúde duradoura, pele sem coceiras e longevidade através de comida de verdade simples e acessível.
            </p>

            <div className="pt-2 text-[11px] text-stone-400">
              <p>Autoria: Dra. Fernanda Soares (Médica Veterinária)</p>
              <p>Distribuição Digital Segura</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Navegação
            </p>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#pilares" className="hover:text-emerald-400 transition-colors">Os 4 Pilares da AN</a></li>
              <li><a href="#expert" className="hover:text-emerald-400 transition-colors">Conheça a Dra. Fernanda</a></li>
              <li><a href="#prova-social" className="hover:text-emerald-400 transition-colors">Antes e Depois / Depoimentos</a></li>
              <li><a href="#bonus" className="hover:text-emerald-400 transition-colors">Calculadora & Bônus Inclusos</a></li>
              <li><a href="#oferta" className="hover:text-emerald-400 transition-colors">Garantir Guia por R$ 14,90</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Legal and Security */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Segurança & Políticas
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <button
                onClick={() => setModalType('termos')}
                className="text-stone-400 hover:text-emerald-400 transition-colors underline cursor-pointer"
              >
                Termos de Uso
              </button>
              <span className="text-stone-600">·</span>
              <button
                onClick={() => setModalType('privacidade')}
                className="text-stone-400 hover:text-emerald-400 transition-colors underline cursor-pointer"
              >
                Políticas de Privacidade
              </button>
            </div>

            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-[10px] text-stone-300 leading-snug">
                <p className="font-bold text-white">Ambiente 100% Criptografado</p>
                <p>Pagamento seguro com liberação imediata do conteúdo.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Warning */}
        <div className="pt-8 pb-4 text-[11px] text-stone-500 leading-relaxed max-w-4xl mx-auto text-center space-y-2">
          <p>
            <strong>Aviso Médico Veterinário Preventivo:</strong> Os conteúdos apresentados no Guia Pet Comilão têm finalidade educacional e de orientação sobre nutrição canina bioapropriada. Cada cão possui individualidades metabólicas, de idade e histórico de saúde. Em casos de suspeita de intoxicação, doenças renais ou hepáticas crônicas graves já instaladas, consulte sempre o médico veterinário de sua confiança.
          </p>
          <p>
            © {new Date().getFullYear()} Guia Pet Comilão · Todos os direitos reservados.
          </p>
        </div>

      </div>

      {/* Policy Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 font-black text-lg p-2 cursor-pointer"
            >
              ✕
            </button>
            
            {modalType === 'termos' ? (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-lg font-black text-stone-900 mb-2">Termos de Uso</h3>
                <p>Ao adquirir o Guia Pet Comilão, você recebe uma licença individual e intransferível de uso pessoal dos e-books e materiais complementares.</p>
                <p>O valor de R$ 14,90 é cobrado em parcela única, garantindo acesso vitalício ao conteúdo sem taxas adicionais ou assinaturas recorrentes.</p>
              </div>
            ) : (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-lg font-black text-stone-900 mb-2">Políticas de Privacidade</h3>
                <p>Seus dados cadastrais informados durante o pagamento são processados de forma estritamente segura e criptografada por gateways bancários certificados.</p>
                <p>Não compartilhamos nem comercializamos seus dados com terceiros em hipótese alguma.</p>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2.5 bg-stone-900 text-white rounded-xl font-bold text-xs hover:bg-stone-800 cursor-pointer"
            >
              Entendi e Fechar
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
