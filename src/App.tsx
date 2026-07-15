import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import CreditImpot from './pages/CreditImpot';
import AvanceImmediate from './pages/AvanceImmediate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/credit-impot" element={<CreditImpot />} />
        <Route path="/avance-immediate" element={<AvanceImmediate />} />
      </Routes>
    </Router>
  );
}

export default App;