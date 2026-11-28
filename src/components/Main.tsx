import { Route, Routes } from "react-router-dom";
import ConfigsPage from "../pagination/Configs";
import '../styles/Main.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="entregas" element={<Entregas />} />
        <Route path="recebimentos" element={<Recebimentos />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="configs" element={<Configs />} />

        <Route path="*" element={<p>Página não encontrada.</p>} />
      </Routes>
    </main>
  );
}

function Dashboard() {
  return <section className="page-content active">{/* HTML do #dashboard */}</section>;
}

function Produtos() {
  return <section className="page-content active">{/* HTML do #dashboard */}</section>;
}

function Entregas() {
  return <section className="page-content active">{/* HTML da página de usuários */}</section>;
}

function Recebimentos() {
  return <section className="page-content active">{/* HTML da página de relatórios */}</section>;
}

function Perfil() {
  return <section className="page-content active">{/* HTML da página de relatórios */}</section>;
}

function Configs() {
  return <section className="page-content active">
    <ConfigsPage />
  </section>;
}
