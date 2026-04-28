export type EventFormat = 'meetup' | 'webinar' | 'conference';
export type EventStatus = 'upcoming' | 'past' | 'registration-open';

export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  format: EventFormat;
  status: EventStatus;
  description: string;
  tags: string[];
  speakersCount?: number;
}

export const events: EventData[] = [
  {
    id: '1',
    slug: 'agentic-commerce-forum',
    title: 'Agentic Commerce Forum',
    subtitle: 'ИИ в e-commerce — без хайпа, с реальными кейсами',
    date: '12 февраля 2026',
    time: '10:00 - 13:00',
    location: 'Москва, SOK Rybakov Tower',
    format: 'meetup',
    status: 'past',
    description: 'Как на практике работает ИИ в e-commerce. Реальные кейсы внедрения ИИ-агентов от топ-менеджеров ведущих брендов и маркетплейсов.',
    tags: ['AI', 'E-commerce', 'Кейсы'],
  },
  {
    id: '2',
    slug: 'ai-content-automation-webinar',
    title: 'Как брендам работать с Q-comm полкой в 2026',
    subtitle: 'Аналитика, тренды, исследования быстрой доставки в России',
    date: '16 апреля 2026',
    time: '14:00 - 15:00 МСК',
    location: 'Онлайн, бесплатно',
    format: 'webinar',
    status: 'past',
    description: 'Аналитика, тренды и исследования быстрой доставки в России. Демо платформы 24SHELF и спецусловия для участников.',
    tags: ['Q-commerce', 'Аналитика', 'FMCG'],
  },
  {
    id: '3',
    slug: 'digital-retail-analytics-meetup',
    title: 'ИИ в e-commerce: российская практика внедрения',
    subtitle: 'Кейсы компаний, инструменты, перспективы',
    date: '23 апреля 2026',
    time: '9:30 - 13:00 МСК',
    location: 'Москва, SOK Rybakov Tower',
    format: 'meetup',
    status: 'past',
    description: 'Кейсы компаний, инструменты, перспективы. Закрытый митап для профессионалов e-commerce.',
    tags: ['AI', 'E-commerce', 'Кейсы'],
  },
  {
    id: '4',
    slug: 'best-practices-ecommerce-ai-meetup',
    title: 'Лучшие практики в e-commerce: как ИИ и технологии меняют правила игры',
    subtitle: 'Закрытый митап для профессионалов e-commerce',
    date: '21 мая 2026',
    time: '9:30 - 13:00 МСК',
    location: 'Москва, SOK Rybakov Tower',
    format: 'meetup',
    status: 'registration-open',
    description: 'Лучшие практики внедрения ИИ и технологий в e-commerce. Реальные кейсы, инструменты и нетворкинг.',
    tags: ['AI', 'E-commerce', 'Практики'],
  },
];

export function getEventBySlug(slug: string): EventData | undefined {
  return events.find((e) => e.slug === slug);
}

export const formatLabels: Record<EventFormat, string> = {
  meetup: 'Митап',
  webinar: 'Вебинар',
  conference: 'Конференция',
};

export const statusLabels: Record<EventStatus, string> = {
  upcoming: 'Скоро',
  past: 'Завершено',
  'registration-open': 'Регистрация открыта',
};
