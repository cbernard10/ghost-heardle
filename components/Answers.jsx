import React from "react";

function Answers({ answers }) {
  const n_answers = 5;
  const answersDisplay = [
    ...answers,
    ...Array(n_answers - answers.length).fill({ song: "", correct: null }),
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      {answersDisplay.map((answer, idx) => {
        return (
          <div
            key={idx}
            className="border-[1px] w-full h-12 flex items-center px-6"
            style={{
              borderColor: answer.correct === null ? "#222" : answer.correct
                ? "#0f0"
                : "#f00",
            }}
          >
            {answer.song}
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
