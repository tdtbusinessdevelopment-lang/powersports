import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer } from "../../animations/variants";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";

/* ─── Each PRODUCT_BLOCK has 2 rows:
   Row 1 → [text LEFT]  [image RIGHT]   (Why heading + intro)
   Row 2 → [image LEFT] [text RIGHT]    (Build for Performance heading + para)
────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "oxygen",
    whyHeading: "Why  Oxygen Recovery Chamber",
    whyIntro:
      'The oxygen recovery chamber developed by the company marks the entry of health technology into the era of "precision anti-aging". The product solves the pain points of traditional equipment, redefines the future healthy lifestyle, and provides a scientific solution for human beings to delay aging and enhance vitality.',
    whyImage: i1,
    buildHeading: "Build for Performance",
    buildBody:
      "Built for lasting performance and ease of use, oxygen recovery chamber combines premium materials with advanced technology. Its streamlines, portable design lets you set up quickly at home or on the move, delivering uncompromised cold therapy benefits wherever you are.",
    buildImage: i2,
    bg: "bg-white",
  },
  {
    id: "sauna",
    whyHeading: "Why  Power Sauna",
    whyIntro:
      "A mild hyperbaric oxygen chamber known to enhance oxygen to give you safety, helping the body recover faster, stay active and function more efficiently.",
    whyImage: i3,
    buildHeading: "Build for Performance",
    buildBody:
      "Built for lasting performance and ease of use, oxygen recovery chamber combines premium materials with advanced technology. No compromise, portable ecosystem you set up instantly at home or on the move, delivering an oxygen boost and therapy for life when you need it.",
    buildImage: d2,
    bg: "bg-gray-50",
  },
];

export default function AboutContent() {
  return (
    <section id="about-content">
      {PRODUCTS.map((p) => (
        <div key={p.id} className={p.bg}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* ══ ROW 1 — Why heading + intro (LEFT)  |  Image (RIGHT) ══ */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col lg:flex-row items-center justify-between pt-12 md:pt-20 pb-8 md:pb-16 gap-8 lg:gap-0"
            >
              {/* LEFT: Why text */}
              <motion.div variants={fadeLeft} className="w-full lg:w-[55%] text-center lg:text-left">
                <h2
                  className="font-black italic text-red-600 leading-tight mb-4 md:mb-5"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 2.75rem)" }}
                >
                  {p.whyHeading}
                </h2>
                <p className="text-gray-600 text-base md:text-[20px] leading-relaxed">
                  {p.whyIntro}
                </p>
              </motion.div>

              {/* RIGHT: Image */}
              <motion.div
                variants={fadeRight}
                className="w-full lg:w-[35%] flex justify-center"
              >
                <img
                  src={p.whyImage}
                  alt={p.whyHeading}
                  className="w-full h-auto object-contain max-h-[300px] md:max-h-[600px]"
                  style={{
                    maxWidth: "800px",
                    transform: "none", // Remove potential overflow transforms
                  }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* ══ ROW 2 — Image (LEFT)  |  Build for Performance (RIGHT) ══ */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col lg:flex-row items-center justify-between pb-12 md:pb-20 pt-8 md:pt-16 gap-8 lg:gap-0"
            >
              {/* LEFT: Image (First on mobile to keep flow interesting or swap order) */}
              <motion.div
                variants={fadeLeft}
                className="w-full lg:w-[35%] flex justify-center order-2 lg:order-1"
              >
                <img
                  src={p.buildImage}
                  alt="Build for Performance"
                  className="w-full h-auto object-contain max-h-[300px] md:max-h-[600px]"
                  style={{ maxWidth: "800px" }}
                  loading="lazy"
                />
              </motion.div>

              {/* RIGHT: Build for Performance text */}
              <motion.div
                variants={fadeRight}
                className="w-full lg:w-[55%] text-center lg:text-left order-1 lg:order-2"
              >
                <h2
                  className="font-black text-red-600 leading-tight mb-4 md:mb-5"
                  style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}
                >
                  {p.buildHeading}
                </h2>
                <p className="text-gray-500 text-base md:text-[20px] leading-relaxed">
                  {p.buildBody}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}

