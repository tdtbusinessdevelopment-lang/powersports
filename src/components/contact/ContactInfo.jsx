import { motion } from 'framer-motion';
import { fadeUp, fadeRight, staggerContainer } from '../../animations/variants';
import contpic from '../../assets/contpic.png';

// Amount the circle hangs down from the hero — must match ContactHero's HANG value
const CIRCLE_HANG = 130;
const CIRCLE_SIZE = 260;

const INFO_ITEMS = [
  {
    id: 'phone',
    label: '0917 708 3801',
    icon: (
      // Phone with signal waves — outline/stroke style matching reference
      <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A1.5 1.5 0 014.5 4h.879a1.5 1.5 0 011.414.99l.812 2.03a1.5 1.5 0 01-.34 1.64l-.812.812a11.065 11.065 0 005.07 5.07l.813-.813a1.5 1.5 0 011.64-.34l2.03.813a1.5 1.5 0 01.99 1.413V19.5a1.5 1.5 0 01-1.5 1.5C10.26 21 3 13.74 3 5.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 7a2.5 2.5 0 012.5 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 3A6.5 6.5 0 0121 9.5" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'powerbath.ph@gmail.com',
    icon: (
      <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: 'address',
    label: '11th Avenue Bonifacio Global City, Taguig',
    icon: (
      <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      className="relative w-full bg-white"
      style={{ paddingBottom: '3rem', zIndex: 30 }}
    >
      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-stretch lg:min-h-[648px]">

        {/* ── LEFT: Contact info text (white background) ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 px-4 md:px-8 pb-12 md:pb-28 pt-10 md:pt-20 text-center lg:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="font-black text-red-600 mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            Contact Information
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-700 text-sm md:text-lg lg:text-xl leading-relaxed mb-10 md:mb-12 mx-auto lg:mx-0 max-w-2xl"
          >
            If you have questions about our products or need help choosing the
            right bath essentials, we're here to assist you. Reach out anytime
            and our team will get back to you as soon as possible.
          </motion.p>

          {/* 3 info items — responsive grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
          >
            {INFO_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-red-600 text-xs md:text-sm font-bold leading-snug max-w-[200px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Gym image ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          
          className="flex-shrink-0 w-full lg:w-[40%] lg:-mt-20 xl:-mt-60 z-50 mb-8 lg:mb-0"
        >
          <div
            className="w-full h-full overflow-hidden shadow-2xl rounded-2xl md:rounded-[40px] lg:rounded-[60px_60px_0_0] aspect-[16/9] lg:aspect-[4/5]"
          >
            <img
              src={contpic}
              alt="Contact Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

