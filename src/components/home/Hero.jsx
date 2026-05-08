import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../../animations/variants';

// Asset Imports
import h1 from '../../assets/h1.png';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import h4 from '../../assets/h4.png';
import h5 from '../../assets/h5.png';

const PRODUCT_CARDS = [
  { id: 1, src: h1, alt: 'Pod 1' },
  { id: 2, src: h2, alt: 'Pod 2' },
  { id: 3, src: h3, alt: 'Pod Center' },
  { id: 4, src: h4, alt: 'Pod 4' },
  { id: 5, src: h5, alt: 'Pod 5' },
];

// Triple for seamless infinite loop
const MARQUEE_CARDS = [...PRODUCT_CARDS, ...PRODUCT_CARDS, ...PRODUCT_CARDS];

const CARD_W      = 220;  // base card width
const CARD_H      = 280;  // base card height
const CARD_MAX_H  = 370;  // tallest card height in px (when at center, scale ~1.3)
const OVERLAP     = 300;  // px cards reach UP into the hero bg
const EXTRA       = CARD_MAX_H - OVERLAP;

export default function Hero() {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const rafRef       = useRef(null);

  // Spotlight: scale each card based on its distance from container center
  useEffect(() => {
    const tick = () => {
      if (containerRef.current && trackRef.current) {
        const cRect   = containerRef.current.getBoundingClientRect();
        const centerX = cRect.left + cRect.width / 2;

        const cards = trackRef.current.querySelectorAll('[data-card]');
        cards.forEach((card) => {
          const r          = card.getBoundingClientRect();
          const cardCenter = r.left + r.width / 2;
          const dist       = Math.abs(cardCenter - centerX);
          const maxDist    = cRect.width * 0.55;                  // falloff radius
          const t          = Math.max(0, 1 - dist / maxDist);     // 1=center, 0=edge
          const scale      = 1 + t * 0.32;                        // max 1.32× at center
          card.style.transform     = `scale(${scale.toFixed(3)})`;
          card.style.zIndex        = Math.round(t * 20).toString();
          card.style.transformOrigin = 'bottom center';
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ marginTop: '72px' }}
    >
      <div className="hidden md:block" style={{ height: EXTRA }} />
      <div className="block md:hidden h-16" />

      {/* ── HERO BACKGROUND + TEXT ── */}
      <div className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px]">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
          alt="Fitness background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          style={{ paddingBottom: 'clamp(100px, 20vw, 360px)' }}
        >
          <motion.p variants={fadeUp} className="text-white/90 uppercase tracking-[0.2em] md:tracking-[0.28em] text-xs md:text-sm font-bold mb-3 md:mb-4 drop-shadow">
            Your Fitness Starts Here
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight md:leading-none drop-shadow-lg"
          >
            Keep Going And
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-red-600 leading-tight md:leading-none drop-shadow-lg mt-1"
          >
            Stay Motivated
          </motion.div>
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-6 md:mt-8 bg-red-600 text-white font-bold uppercase tracking-widest px-8 md:px-10 py-2.5 md:py-3 rounded-full text-xs md:text-sm shadow-lg hover:bg-red-700 transition-colors"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>

      {/* ── SPOTLIGHT MARQUEE CARDS ── */}
      <div
        ref={containerRef}
        className="absolute left-0 right-0 overflow-hidden"
        style={{ bottom: 0, height: 'clamp(200px, 40vw, 370px)', zIndex: 20 }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-30 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.7), transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-30 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.7), transparent)' }} />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex items-end w-max h-full pb-4"
          style={{ animation: 'heroMarquee 25s linear infinite', gap: 'clamp(24px, 5vw, 72px)' }}
        >
          {MARQUEE_CARDS.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              data-card
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: 'clamp(140px, 25vw, 220px)',
                height: 'clamp(180px, 32vw, 280px)',
                alignSelf: 'flex-end',
                willChange: 'transform',
                transition: 'transform 0.08s linear',
              }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover"
                loading={i < 5 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe for marquee */}
      <style>{`
        @keyframes heroMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}

