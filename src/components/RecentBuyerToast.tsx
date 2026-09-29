import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Ana & Bob (Spitz Alemão)', city: 'Porto', time: 'há 3 minutos' },
  { name: 'Rodrigo & Amora (Buldogue Francês)', city: 'Lisboa', time: 'há 7 minutos' },
  { name: 'Inês & Luke (Golden Retriever)', city: 'Coimbra', time: 'há 11 minutos' },
  { name: 'Tiago & Mel (SRD)', city: 'Braga', time: 'há 14 minutos' },
  { name: 'Beatriz & Thor (Shih Tzu)', city: 'Faro', time: 'há 18 minutos' },
];

export const RecentBuyerToast: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setCurrentIdx(0);
      setVisible(true);
    }, 4500);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => ((prev ?? 0) + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 800);
    }, 14000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (currentIdx === null || !visible) return null;

  const item = NOTIFICATIONS[currentIdx];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
        <CheckCircle className="w-4 h-4 text-emerald-600" />
      </div>
      <div className="text-left text-xs leading-tight">
        <p className="font-bold text-stone-900">{item.name}</p>
        <p className="text-[11px] text-stone-500">{item.city} · acedeu ao guia {item.time}</p>
      </div>
    </div>
  );
};
