import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

export default function ProductHero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[350px] md:min-h-[500px] mt-[72px] overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=85" 
        alt="Gym Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-md text-white space-y-2 text-center md:text-left mx-auto md:mx-0"
        >
          <motion.p variants={fadeUp} className="text-xs md:text-sm font-semibold opacity-90">
            Rated capacity: 1 person
          </motion.p>
          <motion.p variants={fadeUp} className="text-xs md:text-sm font-semibold opacity-90">
            Overall dimension: 2000x1170x1850mm
          </motion.p>
          <motion.p variants={fadeUp} className="text-xs md:text-sm font-semibold opacity-90">
            Chamber weight: 400kg
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

