import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Solutions } from './pages/Solutions';
import { WhaleScanner } from './pages/WhaleScanner';
import { GoPaySol } from './pages/GoPaySol';
import { Contact } from './pages/Contact';
import { LegalDisclaimer } from './pages/LegalDisclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SecurityNotice } from './pages/SecurityNotice';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/company" element={<Company />} />
      <Route path="/labs/whalescanner" element={<WhaleScanner />} />
      <Route path="/labs/gopaysol" element={<GoPaySol />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-notice" element={<SecurityNotice />} />
      
      {/* Redirects for old routes */}
      <Route path="/products" element={<Navigate to="/solutions" replace />} />
      <Route path="/products/whalescanner" element={<Navigate to="/labs/whalescanner" replace />} />
      <Route path="/products/gopaysol" element={<Navigate to="/labs/gopaysol" replace />} />
      <Route path="/about" element={<Navigate to="/company" replace />} />
      <Route path="/services" element={<Navigate to="/solutions" replace />} />
    </Routes>
  );
}

export default App;
