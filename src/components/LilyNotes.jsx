import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notes = [
  "you definitely pretend not to care while caring deeply.",

  "your reposts are basically encrypted diary entries.",

  "you seem like someone who heals through travelling.",

  "communication skills still under investigation.",

  "you romanticize life like it personally owes you a rom-com.",
];

function LilyNotes() {

  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <>
      {/* clickable lilies */}

      <div
        className="fixed bottom-20 left-6 text-4xl cursor-pointer z-40"
        onClick={() => setSelectedNote(notes[0])}
      >
        🌸
      </div>

      <div
        className="fixed top-32 right-6 text-5xl cursor-pointer z-40"
        onClick={() => setSelectedNote(notes[1])}
      >
        🌸
      </div>

      <div
        className="fixed top-[50%] left-4 text-3xl cursor-pointer z-40"
        onClick={() => setSelectedNote(notes[2])}
      >
        🌸
      </div>

      <div
        className="fixed bottom-40 right-8 text-4xl cursor-pointer z-40"
        onClick={() => setSelectedNote(notes[3])}
      >
        🌸
      </div>

      {/* popup */}

      <AnimatePresence>

        {selectedNote && (

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-6"
            onClick={() => setSelectedNote(null)}
          >

            <div className="bg-[#fffaf4] max-w-md rounded-3xl p-8 shadow-2xl text-center">

              <div className="text-5xl mb-4">
                🌸
              </div>

              <p className="text-[#5b3a29] text-2xl handwritten leading-relaxed">
                {selectedNote}
              </p>

              <button
                className="mt-8 px-6 py-3 rounded-full bg-[#5b3a29] text-[#fffaf4] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                understood unfortunately
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default LilyNotes;