'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Professionalità, competenza e disponibilità contraddistinguono lo Studio Vitiello. Un punto di riferimento affidabile per la gestione fiscale e societaria della nostra azienda, con un’assistenza sempre puntuale e orientata alle esigenze del cliente.",
    author: "Alessandro G.",
    role: "CEO, Tech Solutions S.p.A."
  },
  {
    quote: "Avere un team di consulenti che sa guardare oltre il mero adempimento fiscale è una rarità. Ci sentiamo sicuri e ben guidati in ogni scelta strategica.",
    author: "Marta F.",
    role: "Direttore Amministrativo, Design Hub S.r.l."
  },
  {
    quote: "Eccellenza assoluta. Risposte veloci, chiare e sempre mirate al risultato. Il Dott. Vitiello e il suo team sono un vero partner di business.",
    author: "Roberto B.",
    role: "Imprenditore"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-cream relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-black text-brand-navy/5 select-none pointer-events-none whitespace-nowrap">
        Trust
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
          >
            Dicono di Noi
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 relative border border-slate-200"
            >
              <Quote className="h-10 w-10 text-brand-gold/30 absolute right-6 top-6" />
              <p className="text-slate-600 font-light italic leading-relaxed mb-8 relative z-10 min-h-[120px]">
                &quot;{testi.quote}&quot;
              </p>
              <div className="border-t border-slate-200/50 pt-6">
                <p className="font-serif text-lg text-brand-navy mb-1">{testi.author}</p>
                <p className="text-brand-gold text-xs font-bold tracking-widest uppercase">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
