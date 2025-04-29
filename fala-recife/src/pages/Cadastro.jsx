function Cadastro() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Cadastro</h1>
        <form>
          <input type="text" placeholder="Nome" /><br/><br/>
          <input type="email" placeholder="E-mail" /><br/><br/>
          <input type="text" placeholder="Bairro" /><br/><br/>
          <select>
            <option value="">Tipo de usuário</option>
            <option value="morador">Morador</option>
            <option value="comerciante">Comerciante</option>
            <option value="estudante">Estudante</option>
          </select><br/><br/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  
  export default Cadastro;
  