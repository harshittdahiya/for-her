// LilyNotes.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flowers = [
  {
    id: 1,
    note: "you type like you’re trying not to care too much.",
    position: "top-[22%] left-[8%]",
  },

  {
    id: 2,
    note: "yellow reminds me of you now unfortunately.",
    position: "top-[20%] right-[10%]",
  },

  {
    id: 3,
    note: "your communication skills are still deeply concerning btw.",
    position: "bottom-[18%] left-[12%]",
  },

  {
    id: 4,
    note: "you seem like someone who rewatches comfort movies.",
    position: "bottom-[20%] right-[10%]",
  },
];

function LilyNotes() {

  const [activeNote, setActiveNote] = useState(null);

  const [clickedFlowers, setClickedFlowers] = useState([]);

  const allOpened = clickedFlowers.length === flowers.length;

  const [showFinalMessage, setShowFinalMessage] = useState(true);

  useEffect(() => {

    if (allOpened) {

      const timer = setTimeout(() => {

        setShowFinalMessage(false);

      }, 7000);

      return () => clearTimeout(timer);

    }

  }, [allOpened]);

  const handleFlowerClick = (flower) => {

    setActiveNote(flower);

    setClickedFlowers((prev) => [...prev, flower.id]);

  };

  return (
    <>
      {/* flowers */}

      {flowers.map((flower, index) => (

        !clickedFlowers.includes(flower.id) && (

          <motion.div
            key={flower.id}

            whileTap={{
              scale: 0.88,
            }}

            initial={{ opacity: 0, scale: 0.8 }}

            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}

            transition={{
              duration: 2 + index,
              repeat: Infinity,
            }}

            onClick={() => handleFlowerClick(flower)}

            className={`absolute ${flower.position} z-30 cursor-pointer`}
          >

            <div className="relative">

              <div className="text-5xl drop-shadow-[0_0_25px_rgba(244,211,94,0.8)]">
                🌸
              </div>

              <p className="absolute -right-10 top-4 text-sm handwritten text-[#5b3a29] opacity-80 whitespace-nowrap">
                click me
              </p>

            </div>

          </motion.div>

        )

      ))}

      {/* popup */}

      <AnimatePresence>

        {activeNote && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            onClick={() => setActiveNote(null)}

            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-6"
          >

            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}

              transition={{ duration: 0.4 }}

              onClick={(e) => e.stopPropagation()}

              className="bg-[#fffaf4] border border-[#f1e7d8] shadow-2xl rounded-[32px] max-w-md w-full px-8 py-8 text-center relative"
            >

              <p className="text-[#5b3a29] handwritten text-3xl leading-relaxed">
                {activeNote.note}
              </p>

              <p className="mt-8 text-sm text-[#8f7a68] opacity-70">
                click anywhere to continue
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* final hidden message */}

      <AnimatePresence>

        {allOpened && !activeNote && showFinalMessage && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40"
          >

            <div className="bg-[#fffaf4]/80 backdrop-blur-md border border-[#f1e7d8] shadow-2xl rounded-full px-8 py-4">

              <p className="text-[#5b3a29] handwritten text-xl whitespace-nowrap">
                okay now stop pretending you weren’t curious enough to click all four.
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default LilyNotes;