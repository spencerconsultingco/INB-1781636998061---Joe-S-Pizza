import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Joe's Pizza Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="font-heading text-white text-lg font-bold tracking-widest uppercase">
                Joe&apos;s Pizza
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed">
              Authentic New York pizza made the right way. One slice at a time.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm font-bold tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: `Menu`, href: '#services' },
                { label: `Our Story`, href: '#feature' },
                { label: `Reviews`, href: '#testimonials' },
                { label: `Contact`, href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-white/50 text-sm hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm font-bold tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9046390628"
                className="flex items-center gap-3 group"
              >
                <Phone size={15} className="text-brand-accent flex-shrink-0" />
                <span className="font-body text-white/50 text-sm group-hover:text-white transition-colors">
                  (904) 639-0628
                </span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query_place_id=ChIJ8Q2WSpJZwokRQz-bYYgEskM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MapPin size={15} className="text-brand-accent flex-shrink-0" />
                <span className="font-body text-white/50 text-sm group-hover:text-white transition-colors">
                  New York, NY
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Joe&apos;s Pizza. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/30 text-xs hover:text-white/60 transition-colors"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
