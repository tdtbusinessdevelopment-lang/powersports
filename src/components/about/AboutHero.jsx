import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants';
import abtbg from '../../assets/abtbg.png';


export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative w-full"
      style={{ marginTop: '72px' }}
    >
      {/* ── 1. GYM BACKGROUND PHOTO ── */}
      <div className="relative w-full overflow-hidden h-[300px] md:h-[429px]">
        <img
          src={abtbg}
          alt="Gym background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: 'heroZoom 14s ease-in-out infinite alternate' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ── 2. BOXY RED CARD — centered, overlaps hero image bottom ── */}
      <div className="relative z-10 flex justify-center px-4 md:px-6 -mt-24 md:-mt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            maxWidth: '1200px',
            background: 'linear-gradient(to bottom, #E81E2B 0%, #000000 100%)',
          }}
          className="w-full text-center rounded-2xl md:rounded-3xl px-6 md:px-12 pt-12 md:pt-14 pb-48 md:pb-64"
        >

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-white font-black uppercase mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 8vw, 4.8rem)', letterSpacing: '-0.02em' }}
          >
            WHAT IS POWERSPORTS?
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-white/90 leading-relaxed mx-auto"
            style={{ fontSize: 'clamp(1rem, 4vw, 1.85rem)', maxWidth: '1000px' }}
          >
            <span className="text-yellow-300 font-semibold">Oxygen recovery chamber</span>{' '}
            increases the amount of oxygen delivered to the body by placing a person
            inside a pressurized environment. The combination of higher air pressure
            and oxygen-rich air allows oxygen to dissolve more efficiently into the
            bloodstream and reach tissues that normally receive limited oxygen.
          </motion.p>
        </motion.div>
      </div>

      {/* ── 3. VIDEO PLAYER CARD — overlaps the bottom of the red/black card ── */}
      <div
        className="relative z-20 flex justify-center px-4 md:px-6 -mt-36 md:-mt-48"
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[60%] lg:w-[1000px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center aspect-video max-h-[300px] md:max-h-[450px]"
        >
          <button
            id="about-play-btn"
            className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg"
            aria-label="Play video"
          >
            <svg
              className="w-5 h-5 md:w-7 md:h-7 text-gray-700 ml-1 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom spacing so next section isn't jammed */}
      <div className="h-8 md:h-10 bg-white" />

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}

