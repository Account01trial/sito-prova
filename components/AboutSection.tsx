'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="studio" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4">
              Lo Studio
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
              Dott. Luca Vitiello
            </h3>
            
            <div className="space-y-4 text-slate-600 font-light text-base leading-relaxed text-balance">
              <p>
                Lo Studio Vitiello, fondato a Milano nel 1995 dal Dott. Luca Vitiello, rappresenta una realtà professionale consolidata nel panorama della consulenza tributaria, societaria e aziendale.
              </p>
              <p>
                Grazie a un&apos;esperienza maturata nel corso di oltre vent&apos;anni di attività, lo Studio ha sviluppato un approccio fondato su competenza, affidabilità e attenzione strategica alle esigenze del Cliente, offrendo soluzioni puntuali ed efficaci in ambito fiscale, contabile e societario.
              </p>
              <p>
                Lo Studio assiste piccole e medie imprese, gruppi societari, professionisti e persone fisiche, garantendo un supporto qualificato nella gestione degli adempimenti fiscali, della contabilità, della pianificazione patrimoniale e delle dinamiche aziendali più complesse.
              </p>
            </div>

            <div className="mt-12 border-t border-slate-100 pt-8 flex gap-12 sm:gap-24">
              <div>
                <p className="text-4xl font-serif text-brand-navy mb-2">30+</p>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Anni di Esperienza</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-navy mb-2">+1000</p>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Clienti Seguiti</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-navy hidden md:block" />
            <div className="absolute -top-6 -right-6 w-48 h-48 border border-brand-gold hidden md:block" />
            
            <div className="relative w-full h-full bg-slate-100 z-10 overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/vitiello.JPG"
                alt="Dott. Luca Vitiello"
                fill
                referrerPolicy="no-referrer"
                className="object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
