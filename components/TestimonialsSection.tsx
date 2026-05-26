'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Collaboriamo con lo Studio Vitiello da diverso tempo e hanno sempre gestito la nostra contabilità con grande precisione. Apprezziamo molto la loro chiarezza nello spiegare anche le dinamiche fiscali più complesse e la tempestività con cui rispondono alle nostre richieste.",
    author: "Matteo R.",
    role: "Titolare, Tech Solutions"
  },
  {
    quote: "Ho girato diversi studi prima di trovare loro. Finalmente dei professionisti che parlano chiaro, senza usare termini incomprensibili, e che ti avvisano in anticipo sulle scadenze. Mi trovo benissimo.",
    author: "Giulia L.",
    role: "Libera Professionista"
  },
  {
    quote: "Il supporto dello Studio Vitiello è stato fondamentale nella fase di avvio della mia azienda. Hanno gestito gli iter burocratici con grande precisione, sollevandomi da ogni preoccupazione. Poter fare affidamento su professionisti così competenti e disponibili rappresenta una vera risorsa.",
    author: "Davide S.",
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
