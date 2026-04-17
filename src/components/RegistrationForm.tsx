import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface RegistrationFormProps {
  variant?: 'dark' | 'light';
  id?: string;
  eventName: string;
  googleScriptEnvKey: string;
  onSuccess: () => void;
}

type FormState = 'idle' | 'loading' | 'error';

export default function RegistrationForm({
  variant = 'light',
  id,
  eventName,
  googleScriptEnvKey,
  onSuccess,
}: RegistrationFormProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [error, setError] = useState('');

  const isDark = variant === 'dark';

  const inputClass = isDark
    ? 'w-full px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white transition-all outline-none placeholder:text-white/40 focus:border-[#FECE33] focus:shadow-[0_0_0_3px_rgba(254,206,51,0.15)]'
    : 'w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyChecked || !consentChecked) {
      setError('Пожалуйста, подтвердите согласие с политикой конфиденциальности и обработкой персональных данных');
      return;
    }
    setError('');
    setFormState('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      company: formData.get('company'),
      position: formData.get('position'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      event: eventName,
      timestamp: new Date().toISOString(),
    };

    try {
      const scriptUrl = import.meta.env[googleScriptEnvKey];
      if (scriptUrl && !scriptUrl.startsWith('YOUR_')) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        });
      }
// e.currentTarget.reset();
      setPrivacyChecked(false);
      setConsentChecked(false);
      onSuccess();
    } catch {
      setFormState('error');
    }
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-3xl p-8 space-y-4 ${
        isDark
          ? 'bg-white/[0.06] border border-white/10'
          : 'bg-white shadow-2xl'
      }`}
    >
      <div className="mb-6">
        <h3 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          Регистрация
        </h3>
        <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
          Все заявки проходят премодерацию. Количество мест ограничено.
        </p>
      </div>

      <input type="text" name="firstName" placeholder="Имя*" required className={inputClass} />
      <input type="text" name="lastName" placeholder="Фамилия*" required className={inputClass} />
      <input type="text" name="company" placeholder="Компания*" required className={inputClass} />
      <input type="text" name="position" placeholder="Должность*" required className={inputClass} />
      <input type="email" name="email" placeholder="Email*" required className={inputClass} />
      <input type="tel" name="phone" placeholder="Телефон*" required className={inputClass} />

      <div className="space-y-3 pt-2">
        <label className={`flex items-start gap-2 cursor-pointer text-xs leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
          <input
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#FECE33] flex-shrink-0"
          />
          <span>
            Отправляя информацию и посещая наш сайт, вы соглашаетесь с условиями{' '}
            <a
              href="https://24ttl.ru/wp-content/uploads/2026/01/politika-konfidenczialnosti-01-09-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FECE33] hover:underline font-semibold"
            >
              Политику конфиденциальности
            </a>{' '}
            ООО «24ТТЛ».
          </span>
        </label>
        <label className={`flex items-start gap-2 cursor-pointer text-xs leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#FECE33] flex-shrink-0"
          />
          <span>
            Я даю согласие на обработку моих персональных данных ООО «24ТТЛ» и принимаю условия{' '}
            <a
              href="https://24ttl.ru/wp-content/uploads/2026/01/soglasie-na-obrabotku-personalnyh-dannyh-dlya-sajta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FECE33] hover:underline font-semibold"
            >
              Согласия на обработку персональных данных
            </a>.
          </span>
        </label>
      </div>

      {(error || formState === 'error') && (
        <div className={`px-4 py-3 rounded-2xl text-sm ${
          isDark
            ? 'bg-red-500/20 border border-red-500/40 text-red-400'
            : 'bg-red-100 border-2 border-red-500 text-red-700'
        }`}>
          {error || 'Ошибка при отправке. Попробуйте ещё раз.'}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="w-full bg-[#FECE33] text-black py-4 px-8 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wider mt-2"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправка...
          </>
        ) : (
          'ОТПРАВИТЬ ЗАЯВКУ'
        )}
      </button>
    </form>
  );
}
