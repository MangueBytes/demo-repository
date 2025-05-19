import { useState } from "react";
import Header from "../components/Header";
import "../styles/NovaDenuncia.css";
import MapPage from "./MapPage";

function NovaDenuncia() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    endereco: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // impede recarregamento da página

    const conteudo = `
Título: ${formData.titulo}
Descrição: ${formData.descricao}
Categoria: ${formData.categoria}
Endereço: ${formData.endereco}
    `.trim();

    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "denuncia.txt";
    link.click();

    URL.revokeObjectURL(url); // limpa o objeto de memória
  };

  return (
    <>
      <Header />
      <div className="denuncia-container">
        <div className="denuncia-box">
          <h2>Registrar Nova Denúncia</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="titulo"
              placeholder="Título da denúncia"
              value={formData.titulo}
              onChange={handleChange}
              required
            />

            <textarea
              name="descricao"
              placeholder="Descreva o problema..."
              rows="4"
              value={formData.descricao}
              onChange={handleChange}
              required
            ></textarea>

            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="lixo">Lixo</option>
              <option value="buraco">Buraco</option>
              <option value="outro">Outro</option>
            </select>

            <input
              type="text"
              name="endereco"
              placeholder="Endereço do problema"
              value={formData.endereco}
              onChange={handleChange}
              required
            />

            <MapPage endereco={formData.endereco} />

            <input type="file" />

            <button type="submit">Enviar Denúncia</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NovaDenuncia;
