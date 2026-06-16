'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Utensils, Flame, Coffee } from 'lucide-react';

const menuCategories = [
  {
    icon: Flame,
    title: `Classic Pies`,
    description:
      'New York style thin crust pies built on a foundation of hand-crushed tomato sauce and whole-milk mozzarella. Baked in a screaming hot deck oven until the crust blisters and the cheese runs gold.',
  },
  {
    icon: Utensils,
    title: `Slices`,
    description:
      'The iconic New York experience. Grab a perfectly foldable slice fresh from the oven. Cheese, pepperoni, or whatever&apos;s hot. Reheated the right way, never cold.',
  },
  {
    icon: Coffee,
    title: `Drinks and Sides`,
    description:
      'Cold cans, classic sodas, and sides that round out the meal. Simple, honest, and exactly what you want alongside a proper New York slice.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const priceRef = useRef(null);
  const priceInView = useInView(priceRef, { once: true, margin: '-80px' });

  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-3">
            What We Serve
          </p>
          <h2 className="font-heading text-brand-primary text-4xl md:text-5xl font-bold uppercase leading-tight">
            The Menu
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-brand-text/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            No gimmicks. No truffle oil. Just the best pizza you can get on a
            New York street corner, made the way it has always been made.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {menuCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brand-secondary/10 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-brand-primary text-xl font-bold uppercase tracking-wide">
                  {cat.title}
                </h3>
                <p
                  className="font-body text-brand-text/70 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={undefined}
                >
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={priceRef}
            initial={{ opacity: 0, y: 30 }}
            animate={priceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-3">
              Full Pricing
            </p>
            <h3 className="font-heading text-brand-primary text-3xl font-bold uppercase mb-6">
              Our Price List
            </h3>
            <p className="font-body text-brand-text/70 mb-8 leading-relaxed">
              Honest prices. No service fees, no surprises. Walk in, point at
              what you want, and eat well without emptying your wallet.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading font-semibold text-sm tracking-widest uppercase px-7 py-3.5 rounded transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            ref={priceRef}
            initial={{ opacity: 0, y: 30 }}
            animate={priceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-4"
          >
            <div className="relative overflow-hidden w-full">
              <Image
                src="/images/price-list.jpg"
                alt="Joe's Pizza price list"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={galleryRef}
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl w-full aspect-[16/9] shadow-lg">
            <Image
              src="/images/gallery-1.jpg"
              alt="Inside Joe's Pizza"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
