import { motion } from "framer-motion";

function Ending() {
  return (
    <section className="min-h-screen bg-[#1f1612] flex items-center justify-center px-6 relative overflow-hidden">

      {/* warm glow */}

      <div className="absolute w-[400px] h-[400px] bg-[#f4d35e] opacity-10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >

        <div className="text-7xl mb-10">
          🌸
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl handwritten text-[#fff7dc] leading-tight">
          anyway...
        </h2>

        <p className="mt-10 text-[#f8f3ea] text-2xl leading-relaxed">
          i think you’re the kind of person
          worth noticing carefully.
        </p>

        <p className="mt-8 text-[#cbb9a8] text-lg">
          even if your communication skills are still deeply concerning.
        </p>

        <button className="mt-14 px-8 py-4 rounded-full bg-[#f4d35e] text-[#1f1612] text-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl">
          reply with something other than hbu
        </button>

        <p className="mt-10 text-[#8f7a68] text-sm opacity-40">
          p.s. you’d probably overthink this website instead of admitting you liked it.
        </p>

      </motion.div>

    </section>
  );
}

export default Ending;