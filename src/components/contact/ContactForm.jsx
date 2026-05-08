import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

export default function ContactForm() {
  const [form, setForm] = useState({ email: '', name: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent! We will get back to you soon.');
    setForm({ email: '', name: '', message: '' });
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-1 w-full min-w-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl"
      style={{
        background: 'linear-gradient(to bottom, #6b0000 0%, #b91c1c 60%, #991b1b 100%)',
        minHeight: '500px',
        mdMinHeight: '588px',
      }}
    >
      <div className="p-6 md:p-10 h-full flex flex-col">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            variants={fadeUp}
            className="text-white font-black text-2xl md:text-3xl mb-2"
          >
            Get In Touch !
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed max-w-xs"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </motion.p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 flex-1">
          {/* Email */}
          <motion.input
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 text-sm px-6 py-3.5 rounded-full outline-none focus:border-white focus:bg-white/15 transition-all shadow-inner"
            whileFocus={{ scale: 1.01 }}
          />

          {/* Name */}
          <motion.input
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 text-sm px-6 py-3.5 rounded-full outline-none focus:border-white focus:bg-white/15 transition-all shadow-inner"
            whileFocus={{ scale: 1.01 }}
          />

          {/* Message */}
          <motion.textarea
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            rows={5}
            className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 text-sm px-6 py-4 rounded-2xl md:rounded-[2rem] outline-none focus:border-white focus:bg-white/15 transition-all resize-none shadow-inner"
            whileFocus={{ scale: 1.01 }}
          />

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 w-full sm:w-auto self-start bg-white text-red-700 font-black text-xs md:text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            SEND MESSAGE
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

