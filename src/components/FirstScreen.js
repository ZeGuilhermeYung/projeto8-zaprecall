import React, { useState } from "react";

function DeckOption (props) {
  return (
    <option value={props.order - 1} >{props.order}. {props.name}</option>
  );
}

export default function FirstScreen (props) {

  const [selected, setSelected] = useState("");
  const [classFirstScreen, setClassFirstScreen] = useState("first-screen");
  const [alertDeck, setAlertDeck] = useState("");

  const handleChange = event => {
    setSelected(event.target.value);
    setAlertDeck("");
  };

  function startGame() {
    if (selected !== "") {
      props.setDeck(props.decks[selected]);
      setClassFirstScreen("first-screen hidden");
    } else {
      setAlertDeck("Precisa escolher um deck!");
    }
  }

  return (
    <section className={classFirstScreen}>
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" value={selected} onChange={handleChange} required>
        <option value="" disabled hidden>Escolha seu deck</option>
        {props.decks.map((bolinha, index) => <DeckOption key={index} order={index + 1} name={bolinha.name} />)}
      </select>
      <h4>{alertDeck}</h4>
      <input type="number" placeholder="Digite sua meta de zaps..." />
      <input type="submit" value="Iniciar Recall!" onClick={startGame} />
    </section>
  );
}