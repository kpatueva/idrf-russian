import { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  const [progress, setProgress] = useState(100);
  const DURATION = 10000;

  useEffect(() => {
    if (!isOpen) {
      setProgress(100);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / DURATION) * 100);
      setProgress(remaining);

      if (remaining === 0) {
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-[scale-in_0.3s_ease-out] transform">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h3 className="text-2xl font-black text-black mb-3">
            Заявка успешно отправлена!
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Ваша заявка отправлена на премодерацию. Вам придет уведомления после её прохождения. Увидимся на IDRF!
          </p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <div
              className="bg-[#FECE33] h-full transition-all duration-[50ms] ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-gray-500 text-sm">
            Окно автоматически закроется через {Math.ceil((progress / 100) * 10)} сек
          </p>
        </div>
      </div>
    </div>
  );
}
