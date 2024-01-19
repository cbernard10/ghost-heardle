"use client";
import React from "react";
import Player from "./Player";
import InputForm from "./InputForm";
import Answers from "./Answers";
import { useState } from "react";
const gen = require("random-seed");

function Container() {
  const [answers, setAnswers] = useState([]);
  const songs: {
    url: string;
    title: string;
  }[] = [
    ["KEPYiXgJGLQ", "Imperium"],
    ["yt40jLz7TeQ", "Kaisarion"],
    ["iVWeky0WPbU", "Spillways"],
    ["1Df28_NCk6s", "Call Me Little Sunshine"],
    ["mfjfZrghj4I", "Hunter's Moon"],
    ["iF0kcLLzUc4", "Watcher in the Sky"],
    ["qUZXL7uZVRo", "Twenties"],
    ["3AD-KR-z1x8", "Darkness At The Heart Of My Love"],
    ["ni3IMbhLJ_k", "Griftwood"],
    ["OY8kAOv_Z6U", "Respite On The Spitalfields"],
    ["FxK3C7pXX4U", "Ashes"],
    ["6BhV3CxvcF0", "Rats"],
    ["gLnMZEyLJ6Q", "Faith"],
    ["YNOLfVAv_28", "See The Light"],
    ["5CWWukDu8qQ", "Miasma"],
    ["tjjH8b3NA8c", "Dance Macabre"],
    ["tMwmEcKVgtM", "Witch Image"],
    ["tP_Tz35iob4", "Helvetesfönster"],
    ["RL8Ct8dKmAk", "Life Eternal"],
    ["21yKfXzPQvk", "Spirit"],
    ["FP6wuNtP1NA", "From The Pinnacle To The Pit"],
    ["KOrXKiSy8ZY", "Cirice"],
    ["4CSFkjPm0A0", "He Is"],
    ["kC_bFsGUVyg", "Mummy Dust"],
    ["qS5-QmkKzJQ", "Majesty"],
    ["qPIy9U7T_CE", "Absolution"],
    ["k5mX3NkA7jM", "Mary On A Cross"],
    ["Db86lpidcz4", "Kiss the Go-Goat"],
    ["Wn-VdZ4LEKg", "Phantom Of The Opera"],
  ].map((song) => {
    return { url: song[0], title: song[1] };
  });

  const dayOfMonth = new Date().getDate() + 1;
  const rand = gen.create(dayOfMonth);
  const idx = rand(songs.length);
  const randomSong = songs[idx];

  console.log(idx, gen.create(dayOfMonth + 1)(songs.length));

  const timeArray = [1, 2, 4, 8, 12, 5000];

  return (
    <div className="flex flex-col mx-auto max-w-[500px] items-center justify-center gap-6 py-12 px-6">
      <Answers answers={answers} timeArray={timeArray} />
      <Player song={randomSong} answers={answers} timeArray={timeArray} />
      <InputForm
        songList={songs.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })}
        song={randomSong}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
}

export default Container;
