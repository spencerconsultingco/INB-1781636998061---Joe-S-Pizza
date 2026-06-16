'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-3">
            The Word on the Street
          </p>
          <h2 className="font-heading text-brand-primary text-4xl md:text-5xl font-bold uppercase leading-tight">
            Why New York Keeps
            <br />
            Coming Back
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden w-full aspect-[16/9] rounded-2xl shadow-xl"
          >
            <Image
              src="/images/gallery-4.jpg"
              alt="A hot, fresh Joe's Pizza pie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-secondary/10">
              <ThumbsUp size={28} className="text-brand-accent mb-5" />
              <h3 className="font-heading text-brand-primary text-xl font-bold uppercase mb-4">
                A New York Icon
              </h3>
              <p className="font-body text-brand-text/70 leading-relaxed">
                Joe&apos;s has been feeding New Yorkers the right way for years.
                A paper plate, a fold, and a slice that drips the way it is
                supposed to. The city has tried to move on more than once, and
                it always ends up back here.
              </p>
            </div>

            <div className="bg-brand-primary rounded-2xl p-8">
              <h3 className="font-heading text-white text-xl font-bold uppercase mb-4">
                Worth Every Block
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                People walk past three other pizza places to get here. That is
                not loyalty to a brand. That is loyalty to something that simply
                tastes better and has never pretended to be anything it is not.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading font-semibold text-sm tracking-widest uppercase px-6 py-3 rounded transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
