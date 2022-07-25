import React from "react";

export default function IconAnswered (props) {
  return (
    <div className="icons-answered">
      <ion-icon class={props.answered} name={props.answerIcon}></ion-icon>
    </div>
  );
}