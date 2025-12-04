import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] px-6 md:px-12 py-24 bg-[#F9F9F9] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
            [Get In Touch]
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-6">
            Let's Create<br />Something Together
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Ready to transform your vision into reality? We'd love to hear about your project.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-4 bg-transparent border-b border-gray-300 focus:border-black outline-none transition-colors text-slate-900 placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-4 bg-transparent border-b border-gray-300 focus:border-black outline-none transition-colors text-slate-900 placeholder:text-gray-400"
            />
          </div>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-4 py-4 bg-transparent border-b border-gray-300 focus:border-black outline-none transition-colors text-slate-900 placeholder:text-gray-400 resize-none"
          />
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Send Message</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
