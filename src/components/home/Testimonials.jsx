import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jordan N.",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jordan N.",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Alex M.",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Sarah K.",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    id: 5,
    name: "Mike T.",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
  },
];

const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

// Alternating elevation — every 2nd card raised
const isElevated = (i) => i % 2 === 1;
const CARD_W = 320; // card width
const CARD_H = 220; // approximate card height
const ELEVATION = Math.round(CARD_H * 0.2); // 20% = ~44px

function StarRating() {
  return (
    <div className="flex gap-0.5 mt-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  // Spotlight Effect loop
  useEffect(() => {
    const tick = () => {
      if (containerRef.current && trackRef.current) {
        const cRect = containerRef.current.getBoundingClientRect();
        const centerX = cRect.left + cRect.width / 2;

        const cards = trackRef.current.querySelectorAll("[data-card]");
        cards.forEach((card, i) => {
          const r = card.getBoundingClientRect();
          const cardCenter = r.left + r.width / 2;
          const dist = Math.abs(cardCenter - centerX);
          const maxDist = cRect.width * 0.4; // tighter falloff radius
          const t = Math.max(0, 1 - dist / maxDist); // 1=center, 0=edge
          const scale = 1 + t * 0.22; // slightly more scale for impact
          
          const baseElevation = isElevated(i) ? -ELEVATION : 0;
          card.style.transform = `translateY(${baseElevation}px) scale(${scale.toFixed(3)})`;
          card.style.zIndex = Math.round(t * 20).toString();
          card.style.transformOrigin = "center center";
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      <style>{`
        @keyframes testimonialsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
        .t-track {
          animation: testimonialsMarquee 45s linear infinite;
        }
        .t-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <section id="testimonials" className="bg-white overflow-hidden py-8 md:py-0">
        {/* ── DARK HEADER BOX — only contains text, NOT the cards ── */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl text-center px-4 md:px-8 pt-10 md:pt-14 pb-48 md:pb-72"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #7f1d1d 100%)",
              minHeight: "450px",
              mdMinHeight: "588px",
            }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-white font-black text-3xl md:text-5xl uppercase tracking-wide mb-3"
            >
              What Others Say
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-xs md:text-sm max-w-lg mx-auto leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </motion.div>
        </div>

        {/* ── CARDS STRIP — pulled UP to overlap the dark box bottom ── */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ marginTop: "clamp(-300px, -35vw, -420px)", paddingBottom: "40px" }}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, white 10%, transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, white 10%, transparent)",
            }}
          />

          {/* Scrolling track — pause when hovering ANY card */}
          <div
            ref={trackRef}
            className={`t-track flex gap-8 md:gap-24 w-max px-4 md:px-8`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              alignItems: "center",
              paddingTop: `${ELEVATION + 80}px`,
              paddingBottom: "60px",
            }}
          >
            {MARQUEE_ITEMS.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                data-card
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex-shrink-0 bg-white rounded-2xl p-5 md:p-6 shadow-2xl cursor-default"
                style={{
                  width: "clamp(260px, 70vw, 320px)",
                  transition: "box-shadow 0.2s ease",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                  willChange: "transform",
                }}
              >
                <p className="text-gray-900 font-bold text-sm md:text-base">{t.name}</p>
                <div className="scale-75 md:scale-100 origin-left">
                  <StarRating />
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-4">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`rounded-full ${i === 0 ? "w-3 md:w-4 h-3 md:h-4 bg-red-600" : "w-2 md:w-3 h-2 md:h-3 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

