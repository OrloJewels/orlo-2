import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import Hero from './components/Hero';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
