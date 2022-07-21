import React from "react";

function DeckOption (props) {
  return (
    <option value={props.order - 1} >{props.order}. {props.name}</option>
  );
}

export default function FirstScreen (props) {

  //const [selected, setSelected] = useState("laranja");

  function selectDeck () {
    props.setDeck(props.decks[document.querySelector("select").value]);
  }

  return (
    <section className="first-screen">
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" required>
        <option value="" disabled hidden >Escolha seu deck</option>
        {props.decks.map((bolinha, index) => <DeckOption key={index} order={index + 1} name={bolinha.name} />)}
      </select>
      <input type="number" placeholder="Digite sua meta de zaps..." />
      <input type="submit" value="Iniciar Recall!" onClick={selectDeck} />
    </section>
  );
}