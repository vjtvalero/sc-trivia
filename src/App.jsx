import { useState } from "react";
import "./App.css";
import QuestionModal from "./components/QuestionModal";
import TableHead from "./components/TableHead";
import QuestionBox from "./components/QuestionBox";

import * as QUESTIONS from "./assets/questions.json";
import * as ANSWERS from "./assets/answers.json";
const POINTS = ["200", "400", "600", "800", "1000"];
const COLORS = ["yellow", "blue", "lightpink", "purple", "pink", "green"];

function App() {
  const [modalAttr, setModalAttr] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openQuestion = (color, points, question) => {
    setModalAttr({
      color,
      points,
      question,
      close: () => setModalOpen(false),
      markAnswered: () => {
        markAnswered(color, points);
        setModalOpen(false);
      },
    });
    setModalOpen(true);
  };

  const isAnswered = (color, points) => {
    const lsAnswered = JSON.parse(localStorage.getItem("answered")) || ANSWERS;
    return Boolean(lsAnswered[color][points]);
  };

  const markAnswered = (color, points) => {
    const lsAnswered = JSON.parse(localStorage.getItem("answered")) || ANSWERS;
    lsAnswered[color][points] = 1;
    localStorage.setItem("answered", JSON.stringify(lsAnswered));
  };

  return (
    <>
      <QuestionModal {...modalAttr} isOpen={modalOpen} />

      <div className="title">
        <h1 className="lobster-regular">Trivia Game</h1>
      </div>
      <div>
        <table cellSpacing="20" className="table">
          <TableHead />
          <tbody>
            {POINTS.map((points, key) => (
              <tr key={key}>
                {COLORS.map((color, key) => (
                  <td key={key}>
                    <QuestionBox
                      color={color}
                      points={points}
                      openQuestion={() =>
                        openQuestion(color, points, QUESTIONS[color][points])
                      }
                      answered={isAnswered(color, points)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
