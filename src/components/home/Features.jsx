import { motion } from "framer-motion";
import { staggerContainer, scaleIn, fadeUp } from "../../animations/variants";

const FEATURES = [
  {
    id: 1,
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
      </svg>
    ),
    title: "Exceptional Service",
    desc: "Our team is dedicated to providing you with the best experience and personalized support.",
  },
  {
    id: 2,
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Get your equipment delivered quickly and safely, right to your doorstep.",
  },
  {
    id: 3,
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
    title: "Competitive Pricing",
    desc: "Quality fitness equipment at prices that fit every budget, without compromise.",
  },
  {
    id: 4,
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: "Quality Products",
    desc: "Every product is rigorously tested and certified for performance and durability.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.id}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:shadow-lg transition-shadow bg-gray-50 md:bg-transparent"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-md shadow-red-200">
                {f.icon}
              </div>
              <h3 className="text-base md:text-sm font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm md:text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

