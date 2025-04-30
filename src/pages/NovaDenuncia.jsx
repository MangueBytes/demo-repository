// src/pages/NovaDenuncia.jsx
import Header from "../components/Header";
import "../styles/NovaDenuncia.css";

function NovaDenuncia() {
  return (
    <>
      <Header />
      <div className="denuncia-container">
        <div className="denuncia-box">
          <h2>Registrar Nova Denúncia</h2>
          <form>
            <input type="text" placeholder="Título da denúncia" required />
            <textarea placeholder="Descreva o problema..." rows="4" required></textarea>
            
            <select required>
              <option value="">Selecione uma categoria</option>
              <option value="buraco">Buraco na rua</option>
              <option value="iluminacao">Problema de iluminação</option>
              <option value="lixo">Acúmulo de lixo</option>
              <option value="outro">Outro</option>
            </select>

            <input type="text" placeholder="Endereço do problema" required />
            <input type="file" accept="image/*" />

            <button type="submit" className="btn-darkblue">Enviar Denúncia</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NovaDenuncia;
