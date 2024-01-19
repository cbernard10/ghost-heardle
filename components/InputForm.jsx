"use client";
import React from "react";
import { useState } from "react";
import Select from "react-select";

function InputForm({ songList, song, answers, setAnswers }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = songList.sort().map((song) => {
    return { value: song.title, label: song.title };
  });

  const handleChange = (selectedOption) => {
    console.log(selectedOption, answers);
    setSelectedOption(selectedOption);
  };

  const handleClick = () => {
    console.log(selectedOption, answers);
    console.log([
      ...answers,
      {
        song: selectedOption.value,
        correct: selectedOption.value === song.title,
      },
    ]);
    if (answers.length < 5) {
      setAnswers([
        ...answers,
        {
          song: selectedOption.value,
          correct: selectedOption.value === song.title,
        },
      ]);
    }
  };

  return (
    <>
      {answers[answers.length - 1] && answers[answers.length - 1].correct ? (
        <p className="text-xl">
          Well played!
        </p>
      ) : answers.length >= 5 ? (
        <p>Today&apos;s song was {song.title}</p>
      ) : (
        <div className="w-full h-auto outline-none flex flex-col gap-4">
          <div className="w-full">
            <Select
              placeholder="Search"
              defaultValue={selectedOption}
              onChange={(opt) => handleChange(opt)}
              options={options}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  width: "100%",
                  height: "50px",
                  borderRadius: "0rem",
                  backgroundColor: "var(--color-neutral-800)",
                  color: "var(--color-neutral-100)",
                  border: "2px solid #222",
                  flex: "1",
                  outline: "none",
                  "&:hover": {
                    borderColor: "#a00",
                  },
                }),
                menu: (provided, state) => ({
                  ...provided,
                  backgroundColor: "var(--color-neutral-800)",
                  color: "var(--color-neutral-100)",
                  outline: "none",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? "#000" : "#000",
                  "&:hover": {
                    backgroundColor: "#a00",
                  },
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  color: "var(--color-neutral-100)",
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  color: "#666",
                }),
                input: (provided, state) => ({
                  ...provided,
                  color: "#eee",
                  cursor: "text",
                }),
              }}
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <button
              className="px-6 border-orange-700 border-2 rounded-lg font-semibold flex-1"
              onClick={() =>
                setAnswers([
                  ...answers,
                  {
                    song: "Skipped",
                    correct: null,
                  },
                ])
              }
            >
              Skip
            </button>
            <button
              className="px-6 py-4 bg-orange-700 rounded-lg font-semibold flex-1"
              onClick={handleClick}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default InputForm;
