'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Building2, User, Users, RefreshCw, Scale } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ServiceData {
  slug: string;
  title: string;
  description: string;
  items: { subtitle: string; text: string }[];
}

export function ServiceDetail({ service }: { service: ServiceData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio del messaggio');
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Si è verificato un errore');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/#servizi"
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai servizi
            </Link>
          </div>

          <div className="bg-brand-cream rounded-3xl p-8 md:p-12 mb-12 shadow-sm">
            <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mb-8">
              {service.slug === 'societa-e-aziende' && <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />}
              {service.slug === 'professionisti' && <User className="w-10 h-10 text-white" strokeWidth={1.5} />}
              {service.slug === 'enti-non-commerciali-e-privati' && <Users className="w-10 h-10 text-white" strokeWidth={1.5} />}
              {service.slug === 'operazioni-straordinarie' && <RefreshCw className="w-10 h-10 text-white" strokeWidth={1.5} />}
              {service.slug === 'riscossione-e-contenzioso-tributario' && <Scale className="w-10 h-10 text-white" strokeWidth={1.5} />}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6 font-semibold">
              {service.title}
            </h1>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-serif text-brand-navy mb-6">
              Cosa include questo servizio
            </h2>
            <div className="grid gap-6">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-brand-navy mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form correlato al servizio */}
          <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif mb-4">
                Richiedi Informazioni
              </h2>
              <p className="text-slate-300 font-light max-w-2xl mx-auto">
                Compila il form sottostante per richiedere una consulenza
                specifica per{" "}
                <span className="font-medium text-brand-gold">
                  {service.title}
                </span>
                . Il nostro team ti ricontatterà al più presto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {isSuccess && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg mb-6">
                  Messaggio inviato con successo! Ti ricontatteremo al più presto.
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    placeholder="mario@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                  placeholder="+39 000 0000000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all resize-none"
                  placeholder={`Vorrei richiedere maggiori informazioni sul servizio "${service.title}"...`}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-white font-medium px-8 py-4 rounded-lg hover:bg-[#a37e4c] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-slate-400 font-light mt-4">
                  Cliccando su &quot;Invia Richiesta&quot;, accetti il
                  trattamento dei dati personali in conformità alle normative
                  vigenti.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
