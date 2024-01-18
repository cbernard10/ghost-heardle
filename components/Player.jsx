"use client";
import React from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import { useState } from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

let videoElement = null;

function Player({ song, answers }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5000); // 10 minutes timer
  const expiryTimestamp = time;

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });


  const [isPaused, setIsPaused] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
    const time = new Date();
    if (answers.length > 0 && answers[answers.length - 1].correct) {
      time.setSeconds(5000);
    }
    time.setSeconds(time.getSeconds() + [1, 3, 4, 8, 12, 5000][answers.length]); // 1 sec timer
    restart(time);
  };

  useEffect(() => {
    if (videoElement && isReady) {
      if (!isRunning) {
        videoElement.target.pauseVideo();
        videoElement.target.seekTo(0);
      } else {
        videoElement.target.playVideo();
      }
    }
  }, [isRunning]);

  const _onReady = (event) => {
    videoElement = event;
    setIsReady(true);
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    },
  };

  return (
    <div className="outline-none relative">
      <div className="absolute left-[50%] top-[50%]">
        <YouTube videoId={song.url} opts={opts} onReady={_onReady} />
      </div>

      {isReady && (
        <button
          className="w-16 h-12 rounded-full font-medium bg-gradient-to-br from-blue-700 to-blue-900 text-white
            hover:from-blue-900 hover:to-blue-700 border-2 border-blue-900
          "
          onClick={togglePause}
        >
          Play
        </button>
      )}
    </div>
  );
}

export default Player;
