import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../../animations/variants';

// Social icon SVG paths
const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'TikTok',
    href: '#',
    path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.95a8.27 8.27 0 004.83 1.54V7.05a4.85 4.85 0 01-1.07-.36z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'Pinterest',
    href: '#',
    path: 'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
];

// Bonifacio Global City, Taguig — correct Philippines coordinates
// lat: 14.5513, lon: 121.0497  →  bbox lon_min,lat_min,lon_max,lat_max
const MAP_FALLBACK =
  'https://www.openstreetmap.org/export/embed.html?bbox=121.0390%2C14.5440%2C121.0590%2C14.5580&layer=mapnik&marker=14.5513%2C121.0497';

export default function ContactLocation() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-1 w-full min-w-0 flex flex-col gap-8 text-center md:text-left"
    >
      {/* Location Block */}
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-black text-red-600 mb-3"
        >
          Our Location
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-sm mx-auto md:mx-0"
        >
          Visit us at our showroom to explore our bath products in person and
          get personalized assistance from our team. We're easy to find and
          always happy to help you out.
        </motion.p>

        {/* Embedded Map */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video md:aspect-auto md:h-[360px]"
        >
          <iframe
            title="PowerSports Location"
            src={MAP_FALLBACK}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* Social Media Block */}
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-black text-red-600 mb-4"
        >
          Social Media
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-4"
        >
          {SOCIAL.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              variants={{
                hidden: { opacity: 0, scale: 0.6 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: i * 0.08, duration: 0.35, ease: 'easeOut' },
                },
              }}
              whileHover={{ scale: 1.18 }}
              whileTap={{ scale: 0.93 }}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d={s.path} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

