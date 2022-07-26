import React from "react";
import logoZaprecall from "../../assets/img/logo-zaprecall.png";
import "./style.css";

function DeckOption (props) {
  return (
    <option value={props.order - 1} >{props.order}. {props.name}</option>
  );
}

export default function FirstScreen (props) {

  const [alertDeck, setAlertDeck] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const [alertTarget, setAlertTarget] = React.useState("");

  const handleChangeDeck = event => {
    setSelected(event.target.value);
    setAlertDeck("");
  };

  const handleChangeTarget = event => {
    props.setTargetRightAnsw(event.target.value);
  };
  
  const handleBlurTarget = event => {
    props.setTargetRightAnsw(event.target.value);
    (props.targetRightAnsw < 1 && props.targetRightAnsw !== "") ? setAlertTarget("A meta tem que ser pelo menos 1!") : setAlertTarget("");
  };

  function startGame() {
    if (selected !== "") {
      props.setDeck(props.decks[selected].qEa.sort(() => Math.random() - 0.5));
      props.setTotalQuestions(props.decks[selected].qEa.length);
      if (props.targetRightAnsw === "") {
        props.setTargetRightAnsw(props.decks[selected].qEa.length);
      }
      (props.targetRightAnsw > props.decks[selected].qEa.length) ? setAlertTarget(`Há somente ${props.decks[selected].qEa.length} perguntas`) : (props.targetRightAnsw < 1 && props.targetRightAnsw !== "") ? setAlertTarget("A meta tem que ser pelo menos 1!") : props.setGameStarted(true);
    } else {
      setAlertDeck("Precisa escolher um deck!");
    }
  }

  return (
    <section className="first-screen">
      <img src={logoZaprecall} alt="imagem de um raio amarelo com contornos vermelhos" />
      <h1>ZapRecall</h1>
      <select name="decks" defaultValue="" onChange={handleChangeDeck} required>
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