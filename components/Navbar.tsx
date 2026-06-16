'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: `Menu`, href: '#services' },
  { label: `Our Story`, href: '#feature' },
  { label: `Reviews`, href: '#testimonials' },
  { label: `Find Us`, href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'services', 'feature', 'testimonials', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative overflow-hidden w-16 h-16 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Joe's Pizza Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain flex-shrink-0"
              />
            </div>
            <span className="font-heading text-xl font-bold text-white tracking-widest uppercase">
              Joe&apos;s Pizza
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-heading text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-accent'
                      : 'text-white/80 hover:text-brand-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="block h-0.5 bg-brand-accent mt-0.5 rounded-full" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-heading text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 hover:scale-105"
            >
              Order Now
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-heading text-sm font-medium tracking-widest uppercase py-3 px-2 border-b border-white/10 transition-colors duration-200 ${
                    isActive ? 'text-brand-accent' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 bg-brand-accent text-white font-heading text-sm font-semibold tracking-widest uppercase px-5 py-3 rounded text-center"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
