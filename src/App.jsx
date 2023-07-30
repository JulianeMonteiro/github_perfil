import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  return (
    <>
      <div className="entradaUsuario">
        <label htmlFor="usuario">Digite o nome de usuário no github</label>
        <div className="user">
          <input
            type="text"
            id="usuario"
            onBlur={(e) => setNomeUsuario(e.target.value)}
          />
          <button>Pesquisar</button>
        </div>
      </div>

      {nomeUsuario.length > 2 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  );
}

export default App;
