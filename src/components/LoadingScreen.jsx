import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 1.8,
      }}
      className="fixed inset-0 bg-[#f8f3ea] z-[999] flex flex-col items-center justify-center"
    >

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="text-6xl"
      >
        🌸
      </motion.div>

      <p className="mt-6 text-[#5b3a29] text-2xl handwritten">
        loading observations...
      </p>

    </motion.div>
  );
}

export default LoadingScreen;