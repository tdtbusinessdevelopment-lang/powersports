import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export default function ProductFilters() {
  return (
    <section className="bg-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {/* Search Bar Container */}
          <div className="relative w-full border border-gray-200 rounded-lg p-2.5 md:p-3 flex items-center bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-gray-600 text-sm placeholder:text-gray-300 px-2"
            />
            <button className="bg-red-600 p-2 rounded-lg text-white hover:opacity-90 transition-opacity flex-shrink-0">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-400 text-xs md:text-sm font-medium">
            Below is the list of our available PowerSports Products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

