'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Gestite anche l'apertura di nuove Partite IVA o la costituzione di società?",
    answer: "Assolutamente sì. Affianchiamo start-up e nuovi imprenditori in ogni fase, dall'analisi di fattibilità alla scelta della forma giuridica più conveniente, fino a tutti gli adempimenti burocratici e notarili."
  },
  {
    question: "Offrite assistenza in caso di accertamenti fiscali?",
    answer: "Sì, forniamo supporto completo in fase di contraddittorio ed accertamento. Abbiamo un team specializzato in contenzioso tributario per difendere la tua azienda in ogni grado di giudizio."
  },
  {
    question: "Come viene gestita la contabilità mensile?",
    answer: "Utilizziamo piattaforme gestionali in cloud per condividere in tempo reale fatture e documenti. In questo modo riduciamo il tempo speso per lo scambio di carte e forniamo reportistica rapida e sempre aggiornata."
  },
  {
    question: "Fornite consulenza continuativa?",
    answer: "Il nostro metodo si basa proprio sull'assistenza continuativa (advisory). Non ci sentiamo solo \"per le tasse\", ma programmiamo incontri periodici per analizzare i numeri e pianificare il futuro."
  },
  {
    question: "I vostri servizi sono adatti a piccole e medie imprese?",
    answer: "Le PMI sono il cuore del nostro tessuto economico e il nostro focus principale. Scaliamo il nostro intervento sulle specifiche necessità, che siate un'azienda familiare o una grande realtà in espansione."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
          >
            Domande Frequenti
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight"
          >
            Siamo qui per chiarire ogni <span className="italic">dettaglio</span>.
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border bg-white transition-colors duration-300",
                  isOpen ? "border-brand-gold/50 shadow-md" : "border-slate-200 hover:border-brand-gold/30"
                )}
              >
                <button
                  className="w-full text-left px-6 py-6 font-serif text-lg text-brand-navy flex justify-between items-center focus:outline-hidden"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="pr-8">{faq.question}</span>
                  <span className={cn(
                    "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors",
                    isOpen ? "bg-brand-navy text-white" : "bg-slate-100 text-brand-navy"
                  )}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
