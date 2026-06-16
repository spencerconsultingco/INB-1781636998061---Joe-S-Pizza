'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Joe's Pizza exterior on a New York street"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.62) 100%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-4"
        >
          New York, NY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight max-w-4xl"
        >
          Real New York
          <br />
          <span className="text-brand-accent">Pizza.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
          className="mt-6 text-white/80 font-body text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Crispy crust, rich sauce, and the kind of cheese pull that stops a
          street cold. This is Joe&apos;s. This is New York.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 hover:scale-105"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-heading font-medium text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 hover:bg-white/10"
          >
            See the Menu
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
