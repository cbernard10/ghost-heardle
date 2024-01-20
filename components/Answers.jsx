import React from "react";

function Answers({ answers }) {
  const n_answers = 5;
  const answersDisplay = [
    ...answers,
    ...Array(n_answers - answers.length).fill({ song: "", correct: null }),
  ];

  return (
    <div className="gap-2 w-full flex flex-col items-start justify-start ">
      {answersDisplay.map((answer, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-row items-center justify-start gap-2 w-full"
          >
            <div
              className="border-[1px] w-full h-12 flex items-center px-6"
              style={{
                borderColor:
                  answer.correct === null
                    ? "#222"
                    : answer.correct
                    ? "#0f0"
                    : "#f00",
              }}
            >
              {answer.song}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
