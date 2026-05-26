'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import milanBg from '@/src/assets/images/milan_city_background_1779117285749.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={milanBg}
          alt="Studio Vitiello Corporate Office Milan"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/60 via-transparent to-brand-navy/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium leading-tight mb-6"
          >
            Soluzioni <span className="italic text-brand-gold">fiscali</span> e societarie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Affianchiamo imprenditori e professionisti con consulenza strategica di alto livello, trasformando la complessità normativa in un vantaggio competitivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#servizi"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-white text-sm font-medium hover:bg-brand-gold-light transition-all duration-300 group"
            >
              I Nostri Servizi
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white text-sm font-medium hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              Richiedi Analisi Iniziale
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
