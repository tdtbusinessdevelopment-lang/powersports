import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../../animations/variants";
import contbg from "../../assets/contbg.png";
import contpic from "../../assets/contpic.png";

// Circle diameter and how far it hangs below the hero
const CIRCLE_SIZE = 260;
const HANG = 130; // px below the hero bottom

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      className="relative w-full overflow-visible z-10"
      style={{
        marginTop: "72px",
        height: "clamp(300px, 50vh, 420px)",
      }}
    >
      {/* ── Background image (subtle scale on load) ── */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={contbg}
          alt="Gym background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Text Content ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center md:text-left">
          <motion.h1
            variants={fadeUp}
            className="font-black text-white leading-[0.9] drop-shadow-xl uppercase"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 7.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 md:mt-6 text-white text-sm md:text-base font-medium leading-tight max-w-[320px] md:max-w-[380px] mx-auto md:mx-0"
          >
            Explore our wide range of high-quality steel products, designed to
            meet all your construction and industrial needs.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

