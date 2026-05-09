import { motion } from "framer-motion";

const lines = [
  "the kind where flowers don’t need occasions.",

  "the kind where someone remembers tiny things.",

  "the kind where someone survives your avoidant era.",

  "the kind where effort feels natural.",

  "the kind where someone says ‘chal chalte hain’ and means it.",

  "the kind where love feels yellow.",
];

function LoveSection() {
  return (
    <section className="min-h-screen bg-[#f4d35e] px-6 py-28 relative overflow-hidden">

      {/* floating doodles */}

      <div className="absolute top-20 left-10 text-5xl opacity-20">
        🌸
      </div>

      <div className="absolute bottom-20 right-10 text-4xl sm:text-5xl md:text-6xl opacity-20">
        🍫
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl handwritten text-[#5b3a29]"
        >
          the kind of love you believe in
        </motion.h2>

        <p className="mt-5 text-[#6b4633] text-lg">
          based on extensive repost analysis unfortunately.
        </p>

        <div className="mt-20 flex flex-col gap-10">

          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="bg-[#fff7dc] rounded-3xl px-8 py-7 shadow-xl"
            >
              <p className="text-2xl text-[#5b3a29] leading-relaxed">
                {line}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LoveSection;