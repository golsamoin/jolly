import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Senior from './pages/Senior';
import Caretaker from './pages/Caretaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/senior" element={<Senior />} />
        <Route path="/caretaker" element={<Caretaker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
