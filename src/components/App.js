import React from "react";
import FirstScreen from "./FirstScreen.js";
import GameScreen from "./GameScreen.js";

export default function App() {

  const initial = {
    name:"Princípios de React",
    qEa: [
      {
        question:"O que é JSX?",
        answer:"Uma extensão de linguagem do JavaScript"
      },
      {
        question:"O React é ____________",
        answer:"uma biblioteca JavaScript para construção de interfaces"
      },
      {
        question:"Componentes devem iniciar com _____________",
        answer:"letra maiúscula"
      },
      {
        question:"Podemos colocar ________________ dentro do JSX",
        answer:"expressões"
      },
      {
        question:"O ReactDOM nos ajuda ________________",
        answer:"interagindo com a DOM para colocar componentes React na mesma"
      },
      {
        question:"Usamos o npm para ____________________",
        answer:"gerenciar os pacotes necessários e suas dependências"
      },
      {
        question:"Usamos props para ____________________",
        answer:"passar diferentes informações para componentes"
      },
      {
        question:"Usamos estado (state) para ______________________",
        answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
      }       
    ]
  };

  const decks = [
    {
      name:"Princípios de React",
      qEa: [
        {
          question:"O que é JSX?",
          answer:"Uma extensão de linguagem do JavaScript"
        },
        {
          question:"O React é ____________",
          answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        {
          question:"Componentes devem iniciar com _____________",
          answer:"letra maiúscula"
        },
        {
          question:"Podemos colocar ________________ dentro do JSX",
          answer:"expressões"
        },
        {
          question:"O ReactDOM nos ajuda ________________",
          answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
          question:"Usamos o npm para ____________________",
          answer:"gerenciar os pacotes necessários e suas dependências"
        },
        {
          question:"Usamos props para ____________________",
          answer:"passar diferentes informações para componentes"
        },
        {
          question:"Usamos estado (state) para ______________________",
          answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }       
      ]
    },
    {
      name:"Trivia de Copas do Mundo",
      qEa: [
        {
          question:"Quem venceu a Copa de 1930?",
          answer:"Uruguai"
        },
        {
          question:"Quem é o maior artilheiro de todas as Copas? Quantos gols ele marcou?",
          answer:"Miroslav Klose, da seleção alemã, marcou 16 gols em todas as Copas que disputou"
        },
        {
          question:"Qual o jogador mais velho a marcar gols em Copas? Quantos anos ele tinha?",
          answer:"Roger Milla, da seleção de Camarões, tinha 42 anos à época"
        },
        {
          question:"Qual seleção é a maior campeã em Copas do Mundo?",
          answer:"Brasil"
        },
        {
          question:"Qual o atleta com mais títulos de Copas do Mundo? Quantas ele conquistou?",
          answer:"Edson Arantes do Nascimento, o Pelé, com 3 títulos (1958, 1962 e 1970)"
        },
        {
          question:"Depois do Egito, na edição de 1934, qual edição teve a participação de uma seleção africana disputando uma Copa do Mundo? Qual foi a seleção?",
          answer:"Copa de 1970. Seleção de Marrocos"
        },
        {
          question:"Quantas Copas do Mundo, a final foi decidida nos pênaltis? Quais foram as edições?",
          answer:"Duas vezes, em 1994 (Brasil x Itália) e em 2006 (Itália x França)"
        },
        {
          question:"Como é nomeado, em espanhol, o famos gol com a mão marcado por Diego Armando Maradona contra a Inglaterra?",
          answer:"La mano de Dios"
        }       
      ]
    }
  ];

  const [deck, setDeck] = React.useState(initial);
  const [classFirstScreen, setClassFirstScreen] = React.useState("first-screen");
  const [totalQuestions, setTotalQuestions] = React.useState(0);

  return (
    <div>
      <FirstScreen classFirstScreen={classFirstScreen} setClassFirstScreen={setClassFirstScreen} decks={decks} deck={deck} setDeck={setDeck} totalQuestions={totalQuestions} setTotalQuestions={setTotalQuestions} />
      <GameScreen classFirstScreen={classFirstScreen} setClassFirstScreen={setClassFirstScreen} decks={decks} deck={deck} setDeck={setDeck} totalQuestions={totalQuestions} setTotalQuestions={setTotalQuestions} />
    </div>
  );
}