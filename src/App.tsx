import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { WhaleScanner } from './pages/WhaleScanner';
import { GoPaySol } from './pages/GoPaySol';
import { Services } from './pages/Services';
import { Labs } from './pages/Labs';
import { Roadmap } from './pages/Roadmap';
import { Contact } from './pages/Contact';
import { LegalDisclaimer } from './pages/LegalDisclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SecurityNotice } from './pages/SecurityNotice';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/whalescanner" element={<WhaleScanner />} />
      <Route path="/products/gopaysol" element={<GoPaySol />} />
      <Route path="/services" element={<Services />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-notice" element={<SecurityNotice />} />
    </Routes>
  );
}

export default App;
