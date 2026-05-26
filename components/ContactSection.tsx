'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Sede Legale e Operativa',
    value: 'Corso Lodi 5, 20135 Milano',
  },
  {
    icon: Phone,
    title: 'Recapito Telefonico',
    value: '025460782',
    link: 'tel:025460782',
  },
  {
    icon: Mail,
    title: 'Indirizzo Email',
    value: 'amministrazione@studiovitiellospa.com',
    link: 'mailto:amministrazione@studiovitiellospa.com',
  },
  {
    icon: Clock,
    title: 'Orari di Ricevimento',
    value: 'Lun - Gio: 09:00 - 13:00 / 14:00 - 18:00 | Ven: 09:00 - 13:00 / 14:00 - 16:00',
  }
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Si è verificato un errore durante l\'invio.');
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Si è verificato un errore durante l\'invio del messaggio.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Intestazione */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 mb-12 lg:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-4"
            >
              Richiedi Info
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight mb-8"
            >
              Parliamo del tuo progetto aziendale.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 font-light leading-relaxed mb-0 text-balance"
            >
              Compila il form per richiedere un appuntamento presso la nostra sede o una videocall preliminare gratuita. Il nostro team evaderà la richiesta in meno di 24 ore.
            </motion.p>
          </div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="order-2 lg:col-start-2 lg:row-span-2 mb-16 lg:mb-0 bg-brand-gray p-8 sm:p-12 border border-slate-200"
          >
             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Nome e Cognome</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy font-light"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="company" className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Azienda (Opzionale)</label>
                   <input 
                     type="text" 
                     id="company"
                     name="company"
                     className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy font-light"
                   />
                 </div>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy font-light"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Telefono</label>
                   <input 
                     type="tel" 
                     id="phone"
                     name="phone"
                     className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy font-light"
                     required
                   />
                 </div>
               </div>
               
               <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Messaggio / Esigenza</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy font-light resize-none"
                    required
                  ></textarea>
               </div>
               
               <div className="flex items-start">
                 <input type="checkbox" id="privacy" required className="mt-1 mr-3 border-slate-300 text-brand-gold focus:ring-brand-gold" />
                 <label htmlFor="privacy" className="text-xs text-slate-500 font-light leading-relaxed">
                   Dichiaro di aver letto la Privacy Policy e acconsento al trattamento dei miei dati personali ai sensi del GDPR.
                 </label>
               </div>
               
               {error && (
                 <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm">
                   {error}
                 </div>
               )}

               {isSuccess ? (
                 <div className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-200 text-green-700 text-center">
                   <CheckCircle2 className="h-10 w-10 text-green-500 mb-3" />
                   <p className="font-medium">Richiesta inviata con successo!</p>
                   <p className="text-sm mt-1 text-green-600">Il nostro team ti contatterà al più presto.</p>
                   <button 
                     type="button" 
                     onClick={() => setIsSuccess(false)}
                     className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors"
                   >
                     Invia un&apos;altra richiesta
                   </button>
                 </div>
               ) : (
                 <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-white text-sm font-medium uppercase tracking-widest py-4 hover:bg-brand-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                 >
                   {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                 </button>
               )}
             </form>
          </motion.div>

          {/* Informazioni di Contatto */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + (idx * 0.1) }}
                 className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <info.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-1">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="font-serif text-lg text-brand-navy hover:text-brand-gold transition-colors block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-serif text-lg text-brand-navy">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
