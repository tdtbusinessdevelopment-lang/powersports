import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';
import prod8 from '../../assets/i1.png';

export default function CTA() {
  return (
    <section id="cta" className="relative w-full overflow-hidden flex flex-col h-[480px] md:h-[540px]">
      
      {/* ── TOP SECTION (White/Gray Gradient) ── */}
      <div className="flex-1 bg-white relative">
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(255,255,255,0) 100%)' 
          }} 
        />
      </div>

      {/* ── BOTTOM SECTION (Black) ── */}
      <div className="h-[42%] bg-black relative flex items-center">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 flex justify-center md:justify-end relative">
          
          {/* Quotes Icon (Hidden on very small screens or moved) */}
          <div className="absolute -top-10 md:-top-12 right-4 md:right-12 text-white select-none">
             <div className="text-white text-6xl md:text-8xl font-serif leading-none opacity-100">”</div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-right pt-4 z-10"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-white font-bold leading-tight max-w-2xl px-4 md:px-0"
              style={{ fontSize: 'clamp(1.5rem, 6vw, 2.8rem)' }}
            >
              Don't let the weekend become <br className="hidden sm:block" />
              your weak end. Get fit today.
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* ── FLOATING KETTLEBELL IMAGE ── */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-[5%] sm:left-[12%] bottom-[5%] md:bottom-[10%] z-20 w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px] opacity-40 md:opacity-100"
      >
        <img 
          src={prod8} 
          alt="Kettlebell" 
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* Subtle "O..." watermark */}
      <div className="absolute right-4 md:right-8 bottom-24 md:bottom-32 text-white/10 text-lg md:text-xl font-bold select-none pointer-events-none">
        O...
      </div>

    </section>
  );
}

