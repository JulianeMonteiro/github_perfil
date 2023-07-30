import { useState, useEffect } from "react";

const Formulario = (props) => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setmateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  //mount
  //update
  //onmount

  useEffect(() => {
    console.log("O componente iniciou");

    return () => {
      console.log("O componente foi desmontado (finalizado)");
    };
  }, []);

  useEffect(() => {
    console.log("O estado mudou");
  }, [props.nome]);

  useEffect(() => {
    console.log("A matéria mudou");
  }, [materiaA, materiaB, materiaC]);

  const alteraNome = (evento) => {
    //setNome(evento.target.value);
    setNome((estadoAnterior) => {
      console.log(estadoAnterior);
      //console.log(estadoAnterior);
      return evento.target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, você foi reprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input type="text" placeholder="Seu nome" onchange={alteraNome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(evento) => setmateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
