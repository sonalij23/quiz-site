import React, { useState } from "react";
import "./QuestionCard.css";

const questions = [
  {
    q: "Which is the smallest ocean in the world?",
    options: [
      { id: 0, text: "Indian", isCorrect: false },
      { id: 1, text: "Pacific", isCorrect: false },
      { id: 2, text: "AtLantic", isCorrect: false },
      { id: 3, text: "Arctic", isCorrect: true },
    ],
  },
  {
    q: "Which country gifted the 'Statue of Liberty' to USA in 1886?",
    options: [
      { id: 0, text: "France", isCorrect: true },
      { id: 1, text: "Canada", isCorrect: false },
      { id: 2, text: "Brazil", isCorrect: false },
      { id: 3, text: "England", isCorrect: false },
    ],
  },
  {
    q: "Which continent has the highest number of countries?",
    options: [
      { id: 0, text: "Asia", isCorrect: false },
      { id: 1, text: "Europe", isCorrect: false },
      { id: 2, text: "NorthAmerica", isCorrect: false },
      { id: 3, text: "Africa", isCorrect: true },
    ],
  },
  {
    q: "Which one is the first country to launch artificial satellite?",
    options: [
      { id: 0, text: "USA", isCorrect: false },
      { id: 1, text: "USSR", isCorrect: true },
      { id: 2, text: "China", isCorrect: false },
      { id: 3, text: "Germany", isCorrect: false },
    ],
  },
  {
    q: "Which country in the world is almost covered by desert?",
    options: [
      { id: 0, text: "Oman", isCorrect: false },
      { id: 1, text: "Djibouti", isCorrect: true },
      { id: 2, text: "Jordan", isCorrect: false },
      { id: 3, text: "Egypt", isCorrect: false },
    ],
  },
];

function QuestionCard() {
  const [result, setResult] = useState(false);
  const [questionNum, setQuetionNum] = useState(0);
  const [score, setScore] = useState(0);

  const answer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionNum + 1 < questions.length) {
      setQuetionNum(questionNum + 1);
    } else {
      setResult(true);
    }
  };

  return (
    <div className="card">
      <div className="content">
        <h1>General Knowledge Quiz</h1>

        {result ? (
          <div className="result">
            <h1>Your Final Score</h1>
            <h2>{score}</h2>
          </div>
        ) : (
          <div>
            <h2>{questions[questionNum].q}</h2>

            <div className="options">
              <ul>
                {questions[questionNum].options.map((option) => {
                  return (
                    <div className="list">
                      <li
                        onClick={() => {
                          answer(option.isCorrect);
                        }}
                        key={option.id}
                      >
                        {option.text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
