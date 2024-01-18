"use client";
import React from "react";
import Player from "./Player";
import InputForm from "./InputForm";
import Answers from "./Answers";
import { useState } from "react";

function Container() {
  const [answers, setAnswers] = useState([]);
  const songs = [
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
    ["leUKmlDGHiI", "Pro Memoria"],
    ["tMwmEcKVgtM", "Witch Image"],
    ["tP_Tz35iob4", "Helvetesfönster"],
    ["RL8Ct8dKmAk", "Life Eternal"],


].map((song) => {
    return { url: song[0], title: song[1] };
  });

  const dayOfMonth = new Date().getDate() + 1;
  const idx = dayOfMonth % songs.length;
  const randomSong = songs[idx];

  return (
    <div className="flex flex-col mx-auto max-w-[500px] items-center justify-center gap-6 py-12">
      <Answers answers={answers} />
      <Player song={randomSong} answers={answers} />
      <InputForm
        songList={songs}
        song={randomSong}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
}

export default Container;
