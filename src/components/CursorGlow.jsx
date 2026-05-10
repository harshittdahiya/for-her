import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      {/* glow */}

      <motion.div
        animate={{
          x: position.x - 75,
          y: position.y - 75,
        }}
        transition={{
          duration: 0,
        }}
        className="fixed top-0 left-0 z-[9999] w-[150px] h-[150px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,211,94,0.35) 0%, rgba(244,211,94,0.10) 45%, rgba(244,211,94,0) 75%)",
          filter: "blur(16px)",
        }}
      />

      {/* main cursor */}

      <motion.div
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          duration: 0,
        }}
        className="fixed top-0 left-0 z-[10000] w-3 h-3 rounded-full bg-[#f4d35e] pointer-events-none shadow-[0_0_18px_rgba(244,211,94,0.95)]"
      />
    </>
  );
}

export default CursorGlow;