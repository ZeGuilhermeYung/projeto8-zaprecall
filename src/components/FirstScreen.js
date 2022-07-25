import React from "react";

function DeckOption (props) {
  return (
    <option value={props.order - 1} >{props.order}. {props.name}</option>
  );
}

export default function FirstScreen (props) {

  const [selected, setSelected] = React.useState("");
  const [alertDeck, setAlertDeck] = React.useState("");
  const [targetNum, setTargetNum] = React.useState("");
  const [alertTarget, setAlertTarget] = React.useState("");

  const handleChangeDeck = event => {
    setSelected(event.target.value);
    setAlertDeck("");
  };

  const handleChangeTarget = event => {
    setTargetNum(event.target.value);
  };
  
  const handleBlurTarget = event => {
    setTargetNum(event.target.value);
    (targetNum < 1) ? setAlertTarget("A meta tem que ser pelo menos 1!") : setAlertTarget("");
  };

  function shuffle () {
    return Math.random() - 0.5;
  }

  function startGame() {
    if (selected !== "") {
      props.setDeck(props.decks[selected].qEa.sort(shuffle));
      props.setClassFirstScreen("first-screen hidden");
      props.setTotalQuestions(props.deck.length);
      props.setGameStarted(true);
    } else {
      setAlertDeck("Precisa escolher um deck!");
    }
  }

  return (
    <section className={props.classFirstScreen}>
      <img src="./assets/img/logo-zaprecall.png" alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" onChange={handleChangeDeck} required>
        <option value="" disabled hidden>Escolha seu deck</option>
        {props.decks.map((deck, index) => <DeckOption key={index} order={index + 1} name={deck.name} />)}
      </select>
      <h4>{alertDeck}</h4>
      <input type="number" placeholder="Digite sua meta de zaps..." onChange={handleChangeTarget} onBlur={handleBlurTarget} />
      <h4>{alertTarget}</h4>
      <input type="submit" value="Iniciar Recall!" onClick={startGame} />
    </section>
  );
}