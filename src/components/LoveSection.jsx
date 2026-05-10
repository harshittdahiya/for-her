import { motion } from "framer-motion";

const loveTypes = [
  "the kind where flowers don’t need occasions.",
  "the kind where someone remembers tiny things.",
  "the kind where someone survives your avoidant era.",
  "the kind where effort feels natural.",
];

function LoveSection() {
  return (
    <section className="min-h-screen bg-[#f4d35e] py-28 px-6 relative overflow-hidden">

      {/* background glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fff7dc]/30 blur-[140px] rounded-full"></div>

      {/* heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >

        <h2 className="text-5xl sm:text-6xl handwritten text-[#5b3a29] leading-tight">
          the kind of love you believe in
        </h2>

        <p className="mt-6 text-[#6b4f3f] text-xl">
          based on extensive repost analysis unfortunately.
        </p>

      </motion.div>

      {/* cards */}

      <div className="mt-24 max-w-5xl mx-auto space-y-12 relative z-10">

        {loveTypes.map((text, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}

            whileHover={{
              scale: 1.02,
            }}

            className="bg-[#fffaf4] rounded-[32px] px-8 py-10 shadow-2xl text-center"
          >

            <p className="text-[#5b3a29] text-2xl sm:text-4xl leading-relaxed">
              {text}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default LoveSection;