import { useState } from "react";
import Header from "../components/Header";
import "../styles/NovaDenuncia.css";
import MapPage from "./MapPage";

function NovaDenuncia() {
  const [endereco, setEndereco] = useState("");

  return (
    <>
      <Header />
      <div className="denuncia-container">
        <div className="denuncia-box">
          <h2>Registrar Nova Denúncia</h2>
          <form>
            <input
              type="text"
              placeholder="Título da denúncia"
              required
            />

            <textarea
              placeholder="Descreva o problema..."
              rows="4"
              required
            ></textarea>

            <select required>
              <option value="">Selecione uma categoria</option>
              <option value="lixo">Lixo</option>
              <option value="buraco">Buraco</option>
              <option value="outro">Outro</option>
            </select>

            <input
              type="text"
              placeholder="Endereço do problema"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />

            {/* Mapa vinculado ao endereço */}
            <MapPage endereco={endereco} />

            <input type="file" />
            <button type="submit">Enviar Denúncia</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NovaDenuncia;
