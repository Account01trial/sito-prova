'use client';

import { motion } from 'motion/react';
import { Search, PenTool, CheckCircle, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Analisi iniziale',
    description: 'Valutazione accurata della situazione patrimoniale, societaria e fiscale dell\'azienda per individuare criticita e opportunita.',
    icon: Search
  },
  {
    num: '02',
    title: 'Pianificazione',
    description: 'Elaborazione di un piano di intervento strategico su misura, volto all\'ottimizzazione fiscale e alla tutela del patrimonio.',
    icon: PenTool
  },
  {
    num: '03',
    title: 'Gestione Operativa',
    description: 'Attuazione delle pratiche contabili, fiscali e legali con l\'ausilio di processi altamente digitalizzati ed efficienti.',
    icon: CheckCircle
  },
  {
    num: '04',
    title: 'Monitoraggio',
    description: 'Controllo costante dei risultati, aggiornamento alle normative vigenti e reportistica continua per supportare le decisioni.',
    icon: TrendingUp
  }
];

export function WorkflowSection() {
  return (
    <section id="metodo" className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="md:w-1/3 sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
            >
              Metodologia
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6"
            >
              Il nostro approccio al lavoro.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 font-light text-lg leading-relaxed text-balance"
            >
              Un processo strutturato per garantire chiarezza, controllo e un percorso sicuro 
              verso gli obiettivi aziendali.
            </motion.p>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-10 md:pl-20"
                >
                  {/* Timeline Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[19px] md:left-[39px] top-14 bottom-[-48px] w-px bg-slate-800" />
                  )}
                  
                  {/* Node */}
                  <div className="absolute left-0 md:left-5 top-1 h-10 w-10 border-2 border-brand-gold bg-brand-navy rounded-full flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-brand-gold" />
                  </div>

                  <div className="bg-brand-navy-light p-8 rounded-sm hover:-translate-y-1 transition-transform border border-slate-800 hover:border-brand-gold/30">
                    <h4 className="text-xl font-serif mb-3 flex items-center">
                      <span className="text-brand-gold font-sans font-medium text-sm mr-4 tracking-widest">{step.num}</span>
                      {step.title}
                    </h4>
                    <p className="text-slate-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
