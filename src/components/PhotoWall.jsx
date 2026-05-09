import { motion } from "framer-motion";

import photo1 from "../assets/photos/photo1.jpeg";
import photo2 from "../assets/photos/photo2.jpeg";
import photo3 from "../assets/photos/photo3.jpeg";
import photo4 from "../assets/photos/photo4.jpeg";
import photo5 from "../assets/photos/photo5.jpeg";

const photos = [
  {
    image: photo1,
    caption: "you definitely say ‘chal chalte hain’ and mean it.",
    rotate: "-3deg",
  },
  {
    image: photo2,
    caption: "you look like someone who still believes in soft things.",
    rotate: "4deg",
  },
  {
    image: photo3,
    caption: "communication skills still concerning btw.",
    rotate: "-5deg",
  },
  {
    image: photo4,
    caption: "these eyes definitely get away with everything.",
    rotate: "3deg",
  },
  {
    image: photo5,
    caption: "i think people are easier to understand once you imagine them as children first.",
    rotate: "-2deg",
  },
];

function PhotoWall() {
  return (
    <section className="min-h-screen px-6 py-28 relative z-10">

      <div className="text-center mb-20">

        <h2 className="text-5xl handwritten text-[#5b3a29]">
          photo evidence
        </h2>

        <p className="mt-4 text-[#7a5c4d] text-lg">
          unfortunately you are very scrapbook-able.
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-14">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#fffaf4] p-4 rounded-3xl shadow-2xl max-w-xs relative"
            style={{ rotate: photo.rotate }}
          >

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f4d35e] w-20 h-6 rounded-full opacity-80"></div>

            <img
              src={photo.image}
              alt=""
              className="rounded-2xl object-cover w-full h-[320px] sm:h-[380px] hover:brightness-105 transition-all duration-500"
            />

            <p className="mt-5 text-[#5b3a29] text-lg handwritten text-center leading-relaxed">
              {photo.caption}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default PhotoWall;