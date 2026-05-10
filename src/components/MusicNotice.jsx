import { motion } from "framer-motion";

function MusicNotice() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        duration: 1.2,
        delay: 5,
      }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#1f1612]/30 backdrop-blur-md"
    >

      <div className="relative w-full h-full flex items-center justify-center">

        {/* text */}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-center px-6"
        >

          <p className="text-[#fff7dc] text-3xl sm:text-5xl handwritten drop-shadow-2xl">
            music makes this
          </p>

          <p className="text-[#f4d35e] text-4xl sm:text-6xl handwritten mt-2 drop-shadow-2xl leading-tight">
            42% more cinematic btw
          </p>

          <p className="text-[#f8f3ea] text-lg sm:text-xl mt-6 handwritten opacity-80">
            click play and enjoy ♡
          </p>

        </motion.div>

        {/* curved arrow */}

        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="absolute bottom-28 right-20 sm:right-28 text-[80px] sm:text-[120px] rotate-[15deg] text-[#f4d35e]"
        >
          ↷
        </motion.div>

      </div>
    </motion.div>
  );
}

export default MusicNotice;