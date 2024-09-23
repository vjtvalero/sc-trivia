import React from "react";

export default function QuestionBox({ points, color, openQuestion, answered }) {
  return (
    <div className={`box box-${color} clickable`} onClick={openQuestion}>
      <span>{answered ? '✓' : points}</span>
    </div>
  );
}
