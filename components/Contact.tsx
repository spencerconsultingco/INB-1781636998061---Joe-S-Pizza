'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: ``, email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-heading text-brand-accent text-sm tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-white text-4xl md:text-5xl font-bold uppercase leading-tight">
            Find Us. Feed Yourself.
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-heading text-white text-2xl font-bold uppercase mb-2">
                Joe&apos;s Pizza
              </h3>
              <p className="font-body text-white/60 leading-relaxed">
                A New York slice shop doing things the right way. Walk in,
                grab a slice, and taste what the fuss is about.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="tel:9046390628"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/40 transition-colors">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-heading text-white/50 text-xs tracking-widest uppercase">Phone</p>
                  <p className="font-body text-white font-medium">(904) 639-0628</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query_place_id=ChIJ8Q2WSpJZwokRQz-bYYgEskM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/40 transition-colors">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-heading text-white/50 text-xs tracking-widest uppercase">Location</p>
                  <p className="font-body text-white font-medium">New York, NY</p>
                  <p className="font-body text-brand-accent text-sm hover:underline">View on Google Maps</p>
                </div>
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-heading text-white text-base font-bold uppercase tracking-wide mb-3">
                Ready for a Slice?
              </h4>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Walk in any time we are open. No reservation needed for a slice.
                For larger orders or catering inquiries, reach out via the form
                and we will get back to you quickly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-6">
                <CheckCircle size={56} className="text-brand-accent" />
                <h3 className="font-heading text-white text-2xl font-bold uppercase">
                  Message Received
                </h3>
                <p className="font-body text-white/70 max-w-sm leading-relaxed">
                  Thank you! We will be in touch shortly. In the meantime, stop
                  by for a slice.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="font-heading text-white/70 text-xs tracking-widest uppercase block mb-2">
                    Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-brand-accent text-xs mt-1 font-body">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="font-heading text-white/70 text-xs tracking-widest uppercase block mb-2">
                    Email <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-brand-accent text-xs mt-1 font-body">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="font-heading text-white/70 text-xs tracking-widest uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="(optional)"
                  />
                </div>

                <div>
                  <label className="font-heading text-white/70 text-xs tracking-widest uppercase block mb-2">
                    Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Large order, catering question, or just want to say hello..."
                  />
                  {errors.message && (
                    <p className="text-brand-accent text-xs mt-1 font-body">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading font-semibold text-sm tracking-widest uppercase px-7 py-4 rounded transition-all duration-200 hover:scale-105 mt-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
