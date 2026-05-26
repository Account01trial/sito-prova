'use client';

import { motion } from 'motion/react';
import { servicesData } from '@/lib/servicesData';
import Link from 'next/link';

function ServiceCard({ service }: { service: typeof servicesData[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-8 group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-gold/20 flex flex-col h-full rounded-2xl"
    >
      <div className="w-16 h-16 bg-brand-navy shadow-inner flex items-center justify-center mb-8 rounded-xl group-hover:bg-brand-gold transition-colors duration-500">
        <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
      </div>
      <h4 className="text-2xl font-serif text-brand-navy mb-4 font-semibold group-hover:text-brand-gold transition-colors">
        {service.shortTitle}
      </h4>
      <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <Link 
          href={`/servizi/${service.slug}`}
          className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-white border border-brand-navy/20 text-brand-navy text-sm font-medium tracking-wide rounded hover:bg-slate-50 hover:border-brand-navy transition-all duration-300"
        >
          Maggiori informazioni
        </Link>
        <Link 
          href="#contatti"
          className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-brand-navy text-white text-sm font-medium tracking-wide rounded hover:bg-brand-gold hover:shadow-md transition-all duration-300"
        >
          Richiedi consulenza
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="servizi" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
          >
            Aree di Intervento
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight"
          >
            I nostri servizi professionali.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

