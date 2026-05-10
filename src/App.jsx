// App.jsx

import FloatingLilies from "./components/FloatingLilies";
import ObservationCard from "./components/ObservationCard";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PhotoWall from "./components/PhotoWall";
import LoveSection from "./components/LoveSection";
import Ending from "./components/Ending";
import LilyNotes from "./components/LilyNotes";
import MusicPlayer from "./components/MusicPlayer";
import LoadingScreen from "./components/LoadingScreen";
import MusicNotice from "./components/MusicNotice";
import CursorGlow from "./components/CursorGlow";

function App() {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const textX = useTransform(mouseX, [-500, 500], [-12, 12]);

  const textY = useTransform(mouseY, [-500, 500], [-12, 12]);

  const observations = [
    "you act nonchalant but your reposts expose you immediately.",

    "you definitely need random flowers for emotional stability.",

    "you seem like the type to say 'idc' while caring deeply.",

    "communication skills: concerning.",

    "you probably heal through street food, travelling, and pretending you're okay.",

    "you want someone who notices tiny things instead of just calling you pretty.",
  ];

  return (
    <main
      className="relative overflow-hidden bg-[#f8f3ea]"

      onMouseMove={(e) => {

        const { clientX, clientY } = e;

        mouseX.set(clientX - window.innerWidth / 2);

        mouseY.set(clientY - window.innerHeight / 2);

      }}
    >

      <LoadingScreen />

      <CursorGlow />

      <MusicNotice />

      {/* film grain */}

      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.035]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      ></div>

      {/* background glow */}

<motion.div

  style={{
    x: useTransform(mouseX, [-500, 500], [-30, 30]),
    y: useTransform(mouseY, [-500, 500], [-30, 30]),
  }}

  className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f4d35e] opacity-20 blur-[120px] rounded-full"
/>

<motion.div

  style={{
    x: useTransform(mouseX, [-500, 500], [30, -30]),
    y: useTransform(mouseY, [-500, 500], [30, -30]),
  }}

  className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d8b08c] opacity-20 blur-[120px] rounded-full"
/>

      {/* decorative sparkles */}

      <div className="fixed top-40 left-[20%] text-2xl opacity-20 animate-pulse z-0">
        ✦
      </div>

      <div className="fixed bottom-40 right-[25%] text-2xl opacity-20 animate-pulse z-0">
        ✧
      </div>

      <div className="fixed top-[60%] left-[10%] text-xl opacity-20 animate-pulse z-0">
        ⋆
      </div>

      {/* floating elements */}

      <FloatingLilies />

      <LilyNotes />

      <MusicPlayer />

      {/* HERO SECTION */}

      <section className="min-h-screen flex items-center justify-center px-6">

        <motion.div

          style={{
            x: textX,
            y: textY,
          }}

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

          className="relative z-10 text-center"
        >

          <p className="text-[#8b5e3c] text-2xl handwritten mb-4">
            observations.zip
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#5b3a29] leading-tight">
            for the girl <br />
            with concerning <br />
            communication skills
          </h1>

          <p className="mt-6 text-[#7a5c4d] text-lg max-w-2xl mx-auto leading-relaxed">
            who romanticizes life, survives on reposts,
            probably heals through street food,
            and definitely says “i’m fine” before reposting emotional devastation.
          </p>

          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}

            className="mt-10 px-8 py-4 rounded-full bg-[#5b3a29] text-[#fffaf4] text-lg hover:scale-105 hover:bg-[#6b4633] transition-all duration-300 ease-in-out shadow-xl"
          >
            enter carefully 🌸
          </button>

        </motion.div>

      </section>

      {/* OBSERVATIONS SECTION */}

      <section className="min-h-screen px-6 py-24 relative z-10">

        <div className="text-center mb-20">

          <h2 className="text-5xl handwritten text-[#5b3a29]">
            things i noticed about you
          </h2>

          <p className="mt-4 text-[#7a5c4d] text-lg">
            unfortunately i pay attention.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-10">

          {observations.map((item, index) => (
            <ObservationCard
              key={index}
              text={item}
              rotate={`${index % 2 === 0 ? "-" : ""}4deg`}
            />
          ))}

        </div>

      </section>

      <PhotoWall />

      <LoveSection />

      <Ending />

    </main>
  );
}

export default App;