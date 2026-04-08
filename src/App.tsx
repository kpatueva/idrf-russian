import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AgenticCommerceForum from './pages/events/AgenticCommerceForum';
import AiContentAutomationWebinar from './pages/events/AiContentAutomationWebinar';
import DigitalRetailAnalyticsMeetup from './pages/events/DigitalRetailAnalyticsMeetup';
import MeetupThankYou from './pages/events/MeetupThankYou';
import WebinarThankYou from './pages/events/WebinarThankYou';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/agentic-commerce-forum" element={<AgenticCommerceForum />} />
          <Route path="/events/ai-content-automation-webinar" element={<AiContentAutomationWebinar />} />
          <Route path="/events/digital-retail-analytics-meetup" element={<DigitalRetailAnalyticsMeetup />} />
          <Route path="/events/meetup-thank-you" element={<MeetupThankYou />} />
          <Route path="/events/webinar-thank-you" element={<WebinarThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
