import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SecretFlower() {

  const [opened, setOpened] = useState(false);

  return (
    <div className="absolute top-[68%] left-[12%] z-30">

      <AnimatePresence>

        {!opened && (

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            className="relative cursor-pointer"
            onClick={() => setOpened(true)}
          >

            <div className="text-5xl drop-shadow-[0_0_25px_rgba(244,211,94,0.8)]">
              🌸
            </div>

            <p className="absolute -right-16 top-4 text-sm handwritten text-[#5b3a29] whitespace-nowrap opacity-70">
              click me
            </p>

          </motion.div>

        )}

      </AnimatePresence>

      <AnimatePresence>

        {opened && (

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-16 left-0 bg-[#fffaf4] border border-[#f1e7d8] shadow-2xl rounded-3xl px-6 py-5 w-[260px]"
          >

            <p className="text-[#5b3a29] handwritten text-2xl leading-relaxed">
              you seem like someone who pretends not to care about things
              while caring about them deeply.
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default SecretFlower;