'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Flame, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Flame,
    title: `Deck Oven Tradition`,
    body: `Every pie goes into a deck oven fired to the exact temperature that gives New York crust its signature char and chew. No conveyor belts. No shortcuts.`,
  },
  {
    icon: BadgeCheck,
    title: `Ingredients That Matter`,
    body: `We use the same quality of ingredients the neighborhood has trusted for years. San Marzano-style tomatoes, whole-milk mozzarella, and fresh toppings every single day.`,
  },
  {
    icon: MapPin,
    title: `Pure New York`,
    body: `Joe\'s is not a chain and not a trend. It is a New York institution that earns its reputation one slice at a time, on a street corner where the city walks by.`,
  },
];

export default function FeatureSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-80px' });

  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h2 className="font-heading text-white text-4xl md:text-5xl font-bold uppercase leading-tight">
            The Corner That
            <br />
            <span className="text-brand-accent">Never Compromises</span>
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 30 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden aspect-[3/4] max-w-xs rounded-2xl shadow-xl"
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Joe's Pizza up close"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
              className="flex flex-col gap-4 pt-10"
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-2xl shadow-xl">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="A fresh Joe's Pizza pie"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={pillarsRef}
            initial="hidden"
            animate={pillarsInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col gap-10"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="font-body text-white/70 text-lg leading-relaxed"
            >
              When you step up to the counter at Joe&apos;s, you are not
              ordering from a menu engineered by a focus group. You are getting
              a slice that was made the same way today as it was the day this
              place opened. The recipe has not changed because it does not need
              to.
            </motion.p>

            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-11 h-11 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white text-lg font-bold uppercase tracking-wide mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading font-semibold text-sm tracking-widest uppercase px-7 py-3.5 rounded transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
