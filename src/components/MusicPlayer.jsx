import { useRef, useState } from "react";
import { motion } from "framer-motion";

import song from "../assets/music/RakhloTumChupake.mp3";

function MusicPlayer() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {

    if (!playing) {

      try {

        audioRef.current.volume = 0.18;

        await audioRef.current.play();

        setPlaying(true);

      } catch (error) {

        console.log("Audio failed:", error);

      }

    } else {

      audioRef.current.pause();

      setPlaying(false);

    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
      </audio>

      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-[#fffaf4] border border-[#f1e7d8] shadow-2xl rounded-3xl px-5 py-4 flex items-center gap-4"
      >

        <div className="text-2xl text-[#5b3a29]">
          {playing ? "⏸️" : "▶️"}
        </div>

        <div className="text-left">

          <p className="text-[#5b3a29] text-sm handwritten">
            now playing
          </p>

          <p className="text-[#5b3a29] text-base font-medium">
            rakhlo tum chupake ♡
          </p>

        </div>

      </motion.button>
    </>
  );
}

export default MusicPlayer;