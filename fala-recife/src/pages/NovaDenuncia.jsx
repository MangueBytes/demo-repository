function NovaDenuncia() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Nova Denúncia/Sugestão</h1>
        <form>
          <input type="text" placeholder="Título" /><br/><br/>
          <textarea placeholder="Descrição"></textarea><br/><br/>
          <input type="text" placeholder="Bairro" /><br/><br/>
          <input type="text" placeholder="Localização" /><br/><br/>
          <input type="file" /><br/><br/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default NovaDenuncia;
  