import { motion } from "framer-motion";

function ObservationCard({ text, rotate }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotate: 0,
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="bg-[#fffaf4] p-5 sm:p-6 rounded-3xl shadow-xl border border-[#f1e7d8] max-w-sm"
      style={{ rotate }}
    >
      <p className="text-[#5b3a29] text-lg leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

export default ObservationCard;