import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AgenticCommerceForum from './pages/events/AgenticCommerceForum';
import AiContentAutomationWebinar from './pages/events/AiContentAutomationWebinar';
import DigitalRetailAnalyticsMeetup from './pages/events/DigitalRetailAnalyticsMeetup';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/events/agentic-commerce-forum', element: <AgenticCommerceForum /> },
      { path: '/events/ai-content-automation-webinar', element: <AiContentAutomationWebinar /> },
      { path: '/events/digital-retail-analytics-meetup', element: <DigitalRetailAnalyticsMeetup /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
