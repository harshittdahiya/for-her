import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import song1 from "../assets/music/RakhloTumChupake.mp3";
import song2 from "../assets/music/Fakira.mp3";
import song3 from "../assets/music/Zaalima.mp3";

const songs = [
  {
    title: "rakhlo tum chupake ♡",
    file: song1,
    start: 0,
  },

  {
    title: "fakira ♡",
    file: song2,
    start: 82,
  },

  {
    title: "zaalima ♡",
    file: song3,
    start: 0,
  },
];

function MusicPlayer() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(0);

  const [progress, setProgress] = useState(0);

  /* song change */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = songs[currentSong].start;

    if (playing) {
      fadeIn();
    }

  }, [currentSong]);

  /* progress */

  useEffect(() => {

    const audio = audioRef.current;

    const updateProgress = () => {

      if (audio.duration) {

        setProgress(
          (audio.currentTime / audio.duration) * 100
        );

      }

    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };

  }, []);

  /* fade in */

  const fadeIn = async () => {

    const audio = audioRef.current;

    audio.volume = 0;

    await audio.play();

    let vol = 0;

    const interval = setInterval(() => {

      vol += 0.008;

      if (vol >= 0.18) {

        vol = 0.18;

        clearInterval(interval);

      }

      audio.volume = vol;

    }, 70);

  };

  /* fade out */

  const fadeOut = () => {

    const audio = audioRef.current;

    let vol = audio.volume;

    const interval = setInterval(() => {

      vol -= 0.008;

      if (vol <= 0.01) {

        audio.volume = 0;

        clearInterval(interval);

        setTimeout(() => {
          audio.pause();
        }, 120);

        return;

      }

      audio.volume = vol;

    }, 70);

  };

  /* play pause */

  const toggleMusic = async () => {

    if (!playing) {

      await fadeIn();

      setPlaying(true);

    } else {

      fadeOut();

      setPlaying(false);

    }

  };

  /* next */

  const nextSong = () => {

    const next =
      currentSong === songs.length - 1
        ? 0
        : currentSong + 1;

    setCurrentSong(next);

  };

  /* prev */

  const prevSong = () => {

    const prev =
      currentSong === 0
        ? songs.length - 1
        : currentSong - 1;

    setCurrentSong(prev);

  };

  /* seek */

  const handleSeek = (e) => {

    const audio = audioRef.current;

    const value = e.target.value;

    audio.currentTime =
      (value / 100) * audio.duration;

    setProgress(value);

  };

  return (
    <>
      <audio
        ref={audioRef}
        src={songs[currentSong].file}
        loop
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

        className="fixed bottom-4 right-4 z-[999]
        bg-[#fffaf4]/80 backdrop-blur-xl
        border border-[#f1e7d8]
        shadow-[0_8px_40px_rgba(0,0,0,0.12)]
        rounded-[28px]
        px-3 py-3 sm:px-4 sm:py-4
        w-[200px] sm:w-[270px]"
      >

        {/* top */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[#8f7a68] text-[10px] sm:text-sm handwritten">
              now playing
            </p>

            <p className="text-[#5b3a29] text-sm sm:text-base mt-1 font-medium leading-tight">
              {songs[currentSong].title}
            </p>

          </div>

          <div className="text-xl sm:text-2xl">
            🎧
          </div>

        </div>

        {/* seek */}

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}

          className="w-full mt-3 sm:mt-5 accent-[#f4d35e]"
        />

        {/* controls */}

        <div className="flex items-center justify-center gap-4 mt-3 sm:mt-4">

          <motion.button
            whileTap={{
              scale: 0.88,
            }}

            onClick={prevSong}

            className="text-lg sm:text-xl text-[#5b3a29] hover:scale-110 transition"
          >
            ⏮
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.88,
            }}

            onClick={toggleMusic}

            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full
            bg-[#f4d35e]
            flex items-center justify-center
            text-lg sm:text-xl text-[#1f1612]
            shadow-xl
            hover:scale-110 transition"
          >
            {playing ? "⏸" : "▶"}
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.88,
            }}

            onClick={nextSong}

            className="text-lg sm:text-xl text-[#5b3a29] hover:scale-110 transition"
          >
            ⏭
          </motion.button>

        </div>

      </motion.div>
    </>
  );
}

export default MusicPlayer;