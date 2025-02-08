"use client";

import { useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const playMusic = () => {
      if (audio) {
        audio.muted = false; // Unmute before playing
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Autoplay blocked, waiting for user interaction...");
          });
      }
    };

    // Try to autoplay when the page loads
    playMusic();

    // Add a user interaction event listener (in case autoplay is blocked)
    const handleUserInteraction = () => {
      playMusic();
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-yellow-500 text-black text-3xl p-2 rounded-full shadow-xl"
      >
        {isPlaying ? <GoUnmute /> : <GoMute />}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music/super-mario-theme-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
