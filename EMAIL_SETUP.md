
4. ✅ Интеграция с Zapier webhook для дополнительной автоматизации

## Интеграция с Zapier

Форма автоматически отправляет данные в Zapier webhook параллельно с сохранением в Supabase. Это позволяет настроить дополнительные автоматизации.

### Настройка Zapier webhook

1. **Создайте Zap в Zapier:**
   - Перейдите на [zapier.com](https://zapier.com)
   - Создайте новый Zap
   - Выберите триггер **Webhooks by Zapier** → **Catch Hook**

2. **Получите webhook URL:**
   - Zapier предоставит вам уникальный webhook URL
   - Скопируйте этот URL (например: `https://hooks.zapier.com/hooks/catch/123456/abcdef/`)

3. **Добавьте URL в проект:**
   - Откройте файл `.env`
   - Замените `YOUR_ZAPIER_WEBHOOK_URL_HERE` на ваш webhook URL:
     ```
     VITE_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/123456/abcdef/
     ```

4. **Протестируйте:**
   - Отправьте форму на сайте
   - В Zapier вы увидите тестовый запрос с данными формы
   - Нажмите "Test & Continue"

5. **Настройте действия:**
   - Добавьте нужные действия в Zap (например: отправка в Google Sheets, CRM, email-маркетинг и т.д.)
   - Используйте данные из webhook: `firstName`, `lastName`, `company`, `position`, `email`, `phone`

### Примеры использования Zapier

**Отправка в Google Sheets:**
- Action: Google Sheets → Create Spreadsheet Row
- Маппинг полей из webhook в колонки таблицы

**Отправка в CRM (HubSpot, Salesforce):**
- Action: HubSpot → Create Contact
- Автоматическое создание контакта из данных формы

**Email-маркетинг (Mailchimp, SendGrid):**
- Action: Mailchimp → Add/Update Subscriber
- Добавление в список рассылки

**Уведомления в Slack/Telegram:**
- Action: Slack → Send Channel Message
- Моментальное уведомление команды о новой регистрации

### Важно

- Zapier webhook работает параллельно с основной системой
- Если Zapier недоступен, форма все равно сохранится в Supabase
- Ошибки Zapier не блокируют отправку формы
- Все данные формы отправляются в Zapier в формате JSON: `{firstName, lastName, company, position, email, phone}`