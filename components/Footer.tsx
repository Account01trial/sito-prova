'use client';

import Link from 'next/link';
import { Linkedin, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'cookie' | null>(null);

  const getModalContent = () => {
    if (modalType === 'privacy') {
      return {
        title: 'Privacy Policy',
        content: `La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione di questo sito, in riferimento al trattamento dei dati personali degli utenti che lo consultano. Il trattamento si basa sempre su principi di liceità e correttezza in ottemperanza a tutte le vigenti normative applicabili. Le informazioni verranno divulgate o trattate con un livello di dettaglio proporzionale a ciascuna tematica specifica e senza finalità di profilazione a fini di marketing da parte di terze parti senza esplicito consenso.`
      };
    }
    if (modalType === 'cookie') {
      return {
        title: 'Cookie Policy',
        content: `Questo sito web non utilizza cookie di alcun tipo, né tecnici né di profilazione, e non raccoglie dati di navigazione tramite cookie o tecnologie simili.`
      };
    }
    return null;
  };

  const modalData = getModalContent();

  return (
    <>
      <footer className="bg-brand-navy-light text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Studio<span className="text-brand-gold">Vitiello</span>
                </span>
              </Link>
              <p className="font-light text-sm leading-relaxed mb-6">
                Consulenza strategica per imprese, professionisti e crescita aziendale. Affianchiamo l&apos;imprenditore nel tortuoso mondo della burocrazia fino al raggiungimento degli obiettivi.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Links Rapidi */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6 border-b border-slate-800 pb-2 inline-block">
                Area Clienti
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link href="#studio" className="hover:text-brand-gold transition-colors">Il nostro Studio</Link></li>
                <li><Link href="#servizi" className="hover:text-brand-gold transition-colors">Servizi Professionali</Link></li>
                <li><Link href="#team" className="hover:text-brand-gold transition-colors">Il Team</Link></li>
              </ul>
            </div>
            
            {/* Servizi Main */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6 border-b border-slate-800 pb-2 inline-block">
                Servizi Top
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link href="#servizi" className="hover:text-brand-gold transition-colors">Consulenza Fiscale</Link></li>
                <li><Link href="#servizi" className="hover:text-brand-gold transition-colors">Assistenza in contenzioso</Link></li>
                <li><Link href="#servizi" className="hover:text-brand-gold transition-colors">Operazioni societarie</Link></li>
                <li><Link href="#servizi" className="hover:text-brand-gold transition-colors">Apertura startup</Link></li>
              </ul>
            </div>

            {/* Legal info */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6 border-b border-slate-800 pb-2 inline-block">
                Info Legali
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li>P.IVA 08977550964</li>
                <li>
                  <a href="https://www.odcec.mi.it/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                    Ordine dei Dottori Commercialisti di Milano
                  </a>
                </li>
                <li><button onClick={() => setModalType('privacy')} className="hover:text-brand-gold transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => setModalType('cookie')} className="hover:text-brand-gold transition-colors text-left">Cookie Policy</button></li>
              </ul>
            </div>

          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800 text-xs font-light flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p>© {new Date().getFullYear()} Studio Tributario Luca Vitiello & C. Spa - Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0">Progettato per l&apos;eccellenza aziendale.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modalType && modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setModalType(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="text-xl font-serif text-brand-navy font-semibold">{modalData.title}</h3>
                <button 
                  onClick={() => setModalType(null)}
                  className="text-slate-400 hover:text-brand-navy transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 text-slate-600 text-sm leading-relaxed font-light">
                <p>{modalData.content}</p>
              </div>
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button 
                  onClick={() => setModalType(null)}
                  className="bg-brand-navy text-white px-6 py-2 rounded font-medium text-sm hover:bg-brand-navy-light transition-colors"
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
