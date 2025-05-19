import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';
import NovaDenuncia from './pages/NovaDenuncia';
import DetalheDenuncia from './pages/DetalheDenuncia';
import RegistrarDenuncia from "./pages/RegistrarDenuncia";
import Perfil from './pages/Perfil';
import { Sobre } from './pages/Sobre';
import { ComoFunciona } from './pages/como-funciona';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nova-denuncia" element={<NovaDenuncia />} />
        <Route path="/detalhe-denuncia/:id" element={<DetalheDenuncia />} />
        <Route path="/registrar" element={<RegistrarDenuncia />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
