import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, Sparkles, CreditCard, Smartphone } from 'lucide-react';
import { PRICE } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mbway'>('card');
  const [hasPaid, setHasPaid] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [mbwayPhone, setMbwayPhone] = useState('');

  if (!isOpen) return null;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setHasPaid(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!hasPaid ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full">
                PAGAMENTO 100% SEGURO
              </span>
              <h3 className="text-2xl font-black text-stone-900 mt-2">
                Adeus Alergia Canina
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Acesso vitalício ao Método de Nutrição Caseira por apenas <strong className="text-emerald-700 font-extrabold">{PRICE}</strong>
              </p>
            </div>

            {/* Payment Method Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-stone-100 rounded-2xl mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                Cartão Bancário
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('mbway')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'mbway'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                MB WAY
              </button>
            </div>

            {/* Buyer Contact Form */}
            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex.: Maria Santos"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  O seu e-mail (onde receberá o acesso ao guia):
                </label>
                <input
                  type="email"
                  required
                  placeholder="o.seu.email@exemplo.pt"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              {/* CARD TAB */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Número do Cartão de Débito / Crédito:
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Validade (MM/AA):
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        CVV:
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* MB WAY TAB */}
              {paymentMethod === 'mbway' && (
                <div className="space-y-3 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div className="text-center mb-2">
                    <p className="text-xs font-bold text-stone-800">Pagamento por MB WAY</p>
                    <p className="text-[11px] text-stone-500">
                      Introduza o número de telemóvel associado ao seu MB WAY para confirmar o pedido na aplicação:
                    </p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Número de Telemóvel (+351):
                    </label>
                    <input
                      type="tel"
                      placeholder="912 345 678"
                      value={mbwayPhone}
                      onChange={(e) => setMbwayPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500 font-mono text-center"
                    />
                  </div>
                  <p className="text-[10px] text-stone-400 text-center">
                    Receberá de imediato uma notificação no seu telemóvel para autorizar o valor de <strong>{PRICE}</strong>.
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Check className="w-5 h-5" />
                <span>CONFIRMAR POR {PRICE} · ACEDER AO GUIA</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 mt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias com reembolso total se não ficar satisfeito.</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-stone-900">
              Pagamento Confirmado! 🎉
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Obrigado pela sua confiança. O seu acesso já está disponível. Pode descarregar de imediato o guia em formato digital e consultar as receitas:
            </p>

            <div className="space-y-2 pt-2">
              <a
                href="#pilares"
                onClick={onClose}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descarregar Guia Adeus Alergia Canina (PDF)
              </a>

              <button
                onClick={() => {
                  onClose();
                  const calcEl = document.getElementById('pilares');
                  if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Instruções dos 4 Pilares
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-stone-400 hover:text-stone-700 block mx-auto pt-2 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
