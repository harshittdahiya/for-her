import { motion } from "framer-motion";

const lilies = Array.from({ length: 18 }, (_, index) => ({
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 10,
  size: Math.random() * 20 + 20,
  duration: Math.random() * 10 + 10,
}));

function FloatingLilies() {
  return (
    <>
      {lilies.map((lily, index) => (
        <motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ["0vh", "120vh"],
            opacity: [0, 0.8, 0],
            rotate: [0, 20, -20, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: lily.duration,
            repeat: Infinity,
            delay: lily.delay,
            ease: "linear",
          }}
          className="fixed top-0 pointer-events-none z-0"
          style={{
            left: lily.left,
            fontSize: `${lily.size}px`,
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}

export default FloatingLilies;