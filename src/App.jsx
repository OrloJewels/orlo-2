import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import Hero from './components/Hero';
import LegalPage from './components/LegalPage';
import Contact from './components/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/offer-terms" element={<LegalPage type="terms" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
