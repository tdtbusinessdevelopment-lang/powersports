import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';
import bgchamber from '../../assets/backgrounds/bgchamber.png';
import beautybg from '../../assets/backgrounds/beautybg.png';

export default function ProductHero({ activeCategory = 'chamber' }) {
  const isBeauty = activeCategory === 'beauty';
  const title1 = "Power";
  const title2 = isBeauty ? "Beauty" : "Chamber";
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[350px] md:min-h-[500px] mt-[72px] overflow-hidden flex items-center transition-all duration-500">
      {/* Background Image */}
      <img
        src={isBeauty ? beautybg : bgchamber} 
        alt={isBeauty ? "Power Beauty Background" : "Power Chamber Background"}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex items-center h-full"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
            <span className="text-white">{title1}</span> <span className="text-red-600">{title2}</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

