# Настройка автоматических email-уведомлений

Система автоматически отправляет подтверждение на email после регистрации через форму.

## Что уже настроено

1. ✅ База данных с таблицей `registrations` для хранения заявок
2. ✅ Edge Function `submit-registration` для обработки форм
3. ✅ Форма на сайте подключена к Edge Function

## Настройка email-сервиса (Resend)

Для отправки email используется сервис **Resend**. Вот как его настроить:

### Шаг 1: Создайте аккаунт на Resend

1. Перейдите на [resend.com](https://resend.com)
2. Зарегистрируйтесь (бесплатный план: 3,000 emails/месяц)

### Шаг 2: Получите API ключ

1. Войдите в панель Resend
2. Перейдите в раздел **API Keys**
3. Создайте новый API ключ
4. Скопируйте ключ (он показывается только один раз!)

### Шаг 3: Добавьте API ключ в Supabase

Откройте ваш терминал и выполните:

```bash
# Установите Supabase CLI (если еще не установлен)
npm install -g supabase

# Добавьте secret в Supabase
supabase secrets set RESEND_API_KEY=re_ваш_api_ключ_здесь
```

**Важно:** Замените `re_ваш_api_ключ_здесь` на ваш реальный API ключ из Resend.

### Шаг 4: Настройте домен отправителя (опционально, но рекомендуется)

По умолчанию в коде используется `noreply@yourdomain.com`. Для production нужно:

1. В панели Resend добавьте и верифицируйте ваш домен
2. Обновите файл `supabase/functions/submit-registration/index.ts`:
   ```typescript
   from: "IDRF Forum <noreply@вашдомен.com>",
   ```

### Шаг 5: Протестируйте

1. Заполните форму регистрации на сайте
2. Проверьте email (включая папку спам)
3. Проверьте таблицу `registrations` в Supabase Dashboard

## Альтернативные email-сервисы

Если вместо Resend хотите использовать другой сервис:

### SendGrid

```typescript
const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${sendgridApiKey}`,
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: data.email }] }],
    from: { email: "noreply@yourdomain.com", name: "IDRF Forum" },
    subject: "Подтверждение регистрации на IDRF Forum",
    content: [{ type: "text/html", value: htmlContent }],
  }),
});
```

### Mailgun

```typescript
const formData = new FormData();
formData.append("from", "IDRF Forum <noreply@yourdomain.com>");
formData.append("to", data.email);
formData.append("subject", "Подтверждение регистрации на IDRF Forum");
formData.append("html", htmlContent);

const emailResponse = await fetch(
  "https://api.mailgun.net/v3/yourdomain.com/messages",
  {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
    },
    body: formData,
  }
);
```

## Просмотр регистраций

Все регистрации сохраняются в таблице `registrations` в Supabase:

1. Откройте Supabase Dashboard
2. Перейдите в Table Editor
3. Выберите таблицу `registrations`
4. Просмотрите все заявки

Поля таблицы:
- `first_name`, `last_name` - Имя и фамилия
- `company`, `position` - Компания и должность
- `email`, `phone` - Контакты
- `status` - Статус (pending/approved/rejected)
- `email_sent` - Отправлен ли email
- `created_at` - Дата регистрации

## Troubleshooting

### Email не приходят

1. Проверьте, что `RESEND_API_KEY` установлен в Supabase secrets
2. Проверьте логи Edge Function в Supabase Dashboard → Functions
3. Проверьте папку спам
4. Убедитесь, что домен отправителя верифицирован в Resend

### Ошибка при отправке формы

1. Откройте консоль браузера (F12)
2. Проверьте Network tab при отправке формы
3. Проверьте логи Edge Function в Supabase Dashboard

### Форма отправляется, но не сохраняется в БД

1. Проверьте RLS политики в таблице `registrations`
2. Убедитесь, что политика "Anyone can submit registration" активна
3. Проверьте логи Edge Function

## Дополнительные возможности

### Уведомления администратору

Добавьте в Edge Function отправку email администратору при новой регистрации:

```typescript
// После успешного сохранения в БД
await fetch("https://api.resend.com/emails", {
  // ... headers
  body: JSON.stringify({
    from: "IDRF Forum <noreply@yourdomain.com>",
    to: ["admin@yourdomain.com"],
    subject: "Новая регистрация на IDRF Forum",
    html: `
      <h2>Новая заявка</h2>
      <p><strong>Имя:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Компания:</strong> ${data.company}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `,
  }),
});
```

### Напоминание за день до мероприятия

Создайте отдельный Edge Function и настройте Cron job в Supabase для автоматической рассылки напоминаний.
