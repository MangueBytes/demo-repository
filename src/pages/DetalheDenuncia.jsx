import { useParams } from "react-router-dom";

function DetalheDenuncia() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalhes da Denúncia ID: {id}</h1>
      <p>Descrição da denúncia</p>
      <div>
        <textarea placeholder="Comentar..."></textarea><br/><br/>
        <button>Comentar</button>
      </div>
      <br/>
      <button>Curtir</button>
      <button style={{ marginLeft: "10px" }}>Compartilhar</button>
    </div>
  );
}

export default DetalheDenuncia;
