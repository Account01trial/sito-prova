'use client';

import { motion } from 'motion/react';

const team = [
  {
    name: 'Luca Vitiello',
    role: 'Dottore Commercialista',
    description: 'Responsabile consulenza fiscale, contabile e societaria.',
    initials: 'LV'
  },
  {
    name: 'Claudia Pagani',
    role: 'Ragioniera',
    description: 'Gestione contabilità e adempimenti fiscali.',
    initials: 'CP'
  },
  {
    name: 'Francesca Davina Francini',
    role: 'Ragioniera',
    description: 'Supporto amministrativo e pratiche contabili.',
    initials: 'FF'
  },
  {
    name: 'Carmela Comerci',
    role: 'Ragioniera',
    description: 'Gestione clienti e documentazione fiscale.',
    initials: 'CC'
  },
  {
    name: "Anna d'Apice",
    role: 'Team Member',
    description: 'Supporto operativo al team e attività amministrative.',
    initials: 'AA'
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
            >
              Il Nostro Team
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight"
            >
              Professionisti al <span className="italic">tuo fianco</span>.
            </motion.h3>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200/60 bg-white">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col p-8 border-b border-r border-slate-200/60 hover:bg-slate-50 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <h4 className="text-xl sm:text-2xl font-serif text-brand-navy mb-1 group-hover:text-brand-gold transition-colors duration-500">
                {member.name}
              </h4>
              <p className="text-brand-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
