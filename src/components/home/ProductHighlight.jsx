import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer } from "../../animations/variants";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";

// Proper barbell/dumbbell SVG matching reference icon
const DumbbellIcon = () => (
  <svg
    width="36"
    height="26"
    viewBox="0 0 36 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left outer plate */}
    <rect x="0" y="8" width="5" height="10" rx="2" fill="#E02020" />
    {/* Left inner collar */}
    <rect x="5" y="5" width="3.5" height="16" rx="1.5" fill="#E02020" />
    {/* Bar */}
    <rect x="8.5" y="11" width="19" height="4" rx="2" fill="#E02020" />
    {/* Right inner collar */}
    <rect x="27.5" y="5" width="3.5" height="16" rx="1.5" fill="#E02020" />
    {/* Right outer plate */}
    <rect x="31" y="8" width="5" height="10" rx="2" fill="#E02020" />
  </svg>
);

const SECTIONS = [
  {
    id: 1,
    image: d1,
    imageLeft: true,
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subs: [
      {
        title: "Sub",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Sub",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 2,
    image: d2,
    imgMaxHeight: 504,
    imageLeft: false,
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subs: [
      {
        title: "Sub",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Sub",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

export default function ProductHighlight() {
  return (
    <section id="product-highlight" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16 md:space-y-28">
        {SECTIONS.map((sec) => (
          <motion.div
            key={sec.id}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col ${sec.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
          >
            {/* ── PRODUCT IMAGE ── */}
            <motion.div
              variants={sec.imageLeft ? fadeLeft : fadeRight}
              className="w-full lg:w-[44%] flex-shrink-0"
            >
              <img
                src={sec.image}
                alt={`Product ${sec.id}`}
                className="w-full h-auto object-contain rounded-2xl md:rounded-3xl shadow-xl lg:shadow-none"
                style={{
                  maxHeight: "clamp(280px, 50vh, 504px)",
                }}
                loading="lazy"
              />
            </motion.div>

            {/* ── TEXT CONTENT ── */}
            <motion.div
              variants={sec.imageLeft ? fadeRight : fadeLeft}
              className="w-full lg:w-[56%]"
            >
              {/* Giant italic title — 2 lines exactly */}
              <h2
                className="font-black uppercase leading-tight mb-4 md:mb-5"
                style={{
                  fontSize: "clamp(1.5rem, 6vw, 2.4rem)",
                  fontStyle: "italic",
                }}
              >
                <span className="text-red-600">Powersports: </span>
                <span className="text-gray-900">The</span>
                <br className="hidden sm:block" />
                <span className="text-gray-900"> Fitness Specialist</span>
              </h2>

              {/* Intro paragraph */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 md:mb-8">
                {sec.intro}
              </p>

              {/* Sub bullet points */}
              <div className="space-y-6 md:space-y-7">
                {sec.subs.map((sub, i) => (
                  <div key={i}>
                    {/* Icon + Title row */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="scale-75 md:scale-100 origin-left">
                        <DumbbellIcon />
                      </div>
                      <span className="text-lg md:text-xl font-black text-gray-900">
                        {sub.title}
                      </span>
                    </div>
                    {/* Body text — indented to align with title */}
                    <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed pl-8 md:pl-[48px]">
                      {sub.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

