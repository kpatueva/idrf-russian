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
    speakersCount: 6,
  },
  {
    id: '2',
    slug: 'ai-content-automation-webinar',
    title: 'AI Content Automation',
    subtitle: 'Автоматизация контента с помощью ИИ для маркетплейсов',
    date: '15 марта 2026',
    time: '14:00 - 16:00',
    location: 'Онлайн (Zoom)',
    format: 'webinar',
    status: 'registration-open',
    description: 'Как автоматизировать создание карточек товаров, описаний и визуалов для маркетплейсов с помощью генеративного ИИ. Практические инструменты и workflow.',
    tags: ['AI', 'Контент', 'Маркетплейсы'],
    speakersCount: 3,
  },
  {
    id: '3',
    slug: 'digital-retail-analytics-meetup',
    title: 'Digital Retail Analytics',
    subtitle: 'Аналитика нового поколения для ритейла',
    date: '10 апреля 2026',
    time: '11:00 - 14:00',
    location: 'Москва, Loft Hall',
    format: 'meetup',
    status: 'upcoming',
    description: 'Q-Commerce-аналитика, предиктивные модели и data-driven решения для ритейлеров. Разбор инструментов и подходов от практиков рынка.',
    tags: ['Аналитика', 'Data', 'Ритейл'],
    speakersCount: 5,
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
