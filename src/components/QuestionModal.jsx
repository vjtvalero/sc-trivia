import React from "react";
import Timer from "./Timer";

export default function QuestionModal({
  isOpen,
  color,
  points,
  question,
  close,
  markAnswered,
}) {
  return (
    <div
      id="question-modal"
      className={`box box-${color} ${!isOpen ? "hidden" : ""}`}
    >
      <div id="question">
        <h1 id="question-title">{points}</h1>
        <p>{question}</p>
        <h1>
          <Timer initSeconds={10} timerOn={isOpen} />
        </h1>
      </div>
      <button onClick={markAnswered}>✓</button>
      <button onClick={close}>✗</button>
    </div>
  );
}
