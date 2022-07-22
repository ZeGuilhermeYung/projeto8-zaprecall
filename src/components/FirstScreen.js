import React, { useState } from "react";

function DeckOption (props) {
  return (
    <option value={props.order - 1} >{props.order}. {props.name}</option>
  );
}

export default function FirstScreen (props) {

  const [classFirstScreen, setClassFirstScreen] = useState("first-screen");

  function selectDeck () {
    props.setDeck(props.decks[document.querySelector("select").value]);
    setClassFirstScreen("first-screen hidden");
    console.log(props.deck);
  }

  return (
    <section className={classFirstScreen}>
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <h3>{props.deck.name}</h3>
      <select name="decks" defaultValue="" required>
        <option value="" disabled hidden>Escolha seu deck</option>
        {props.decks.map((bolinha, index) => <DeckOption key={index} order={index + 1} name={bolinha.name} />)}
      </select>
      <input type="number" placeholder="Digite sua meta de zaps..." />
      <input type="submit" value="Iniciar Recall!" onClick={selectDeck} />
    </section>
  );
}