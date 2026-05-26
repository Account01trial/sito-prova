import { Building2, User, Users, RefreshCw, Scale } from 'lucide-react';

export const servicesData = [
  {
    slug: 'societa-e-aziende',
    icon: Building2,
    shortTitle: 'Società e Aziende',
    title: 'Società & Aziende',
    description: 'Affianchiamo imprese e società nella gestione fiscale, contabile e societaria, offrendo consulenza qualificata, assistenza continuativa e soluzioni concrete per ogni esigenza aziendale.',
    items: [
      {
        subtitle: 'Contabilità ordinaria e semplificata',
        text: 'gestione della contabilità aziendale con assistenza continuativa e piena conformità fiscale'
      },
      {
        subtitle: 'Bilancio d’esercizio',
        text: 'Predisposizione deposito del bilancio d’esercizio nel rispetto della normativa civilistica e fiscale.'
      },
      {
        subtitle: 'Consulenza fiscale e societaria',
        text: 'Analisi della struttura aziendale e supporto nelle scelte fiscali e organizzative per una gestione efficiente e conforme.'
      },
      {
        subtitle: 'Adempimenti IVA e dichiarativi',
        text: 'Gestione puntuale di liquidazioni IVA, dichiarazioni fiscali e adempimenti obbligatori periodici e annuali.'
      },
      {
        subtitle: 'Costituzione società',
        text: 'Assistenza completa nella costituzione della società, dalla scelta della forma giuridica alla predisposizione degli atti iniziali.'
      },
      {
        subtitle: 'Revisione Legale',
        text: 'Verifica indipendente dei bilanci e delle procedure contabili per garantire trasparenza, correttezza e conformità normativa.'
      }
    ]
  },
  {
    slug: 'professionisti',
    icon: User,
    shortTitle: 'Professionisti',
    title: 'Professionisti',
    description: 'Offriamo ai professionisti un’assistenza fiscale e amministrativa completa, finalizzata a semplificare la gestione della partita IVA e a garantire il corretto adempimento di tutti gli obblighi fiscali e contributivi.',
    items: [
      {
        subtitle: 'Gestione fiscale del professionista',
        text: 'Consulenza dedicata a liberi professionisti e partite IVA.'
      },
      {
        subtitle: 'Regime forfettario e ordinario',
        text: 'Valutazione e gestione del regime fiscale più conveniente.'
      },
      {
        subtitle: 'Dichiarazioni dei redditi',
        text: 'Predisposizione e invio delle dichiarazioni fiscali personali e professionali.'
      },
      {
        subtitle: 'Fatturazione elettronica e Sportello Cloud',
        text: 'Gestione delle fatture elettroniche e attivazione di uno sportello cloud per emissione e archiviazione digitale.'
      },
      {
        subtitle: 'Contributi previdenziali',
        text: 'Supporto per gestione INPS, casse professionali e scadenze contributive.'
      },
      {
        subtitle: 'Apertura Partita IVA',
        text: 'Assistenza completa per avvio attività e pratiche iniziali.'
      }
    ]
  },
  {
    slug: 'enti-non-commerciali-e-privati',
    icon: Users,
    shortTitle: 'Enti non commerciali & privati',
    title: 'Privati & Enti Non Commerciali',
    description: 'Offriamo assistenza fiscale qualificata a privati, associazioni ed enti non commerciali, con attenzione alle esigenze personali e alla corretta gestione degli obblighi fiscali.',
    items: [
      {
        subtitle: 'Dichiarazione dei redditi',
        text: 'Compilazione e trasmissione di 730, Modello Redditi e pratiche fiscali.'
      },
      {
        subtitle: 'IMU e tributi locali',
        text: 'Calcolo e gestione delle imposte sugli immobili e tributi comunali.'
      },
      {
        subtitle: 'Associazioni ed ETS',
        text: 'Consulenza fiscale e amministrativa per enti del terzo settore.'
      },
      {
        subtitle: 'Contratti di locazione',
        text: 'Registrazione, rinnovo e gestione fiscale dei contratti immobiliari.'
      },
      {
        subtitle: 'Assistenza fiscale continuativa',
        text: 'Supporto personalizzato per esigenze fiscali ordinarie e straordinarie.'
      }
    ]
  },
  {
    slug: 'operazioni-straordinarie',
    icon: RefreshCw,
    shortTitle: 'Operazioni straordinarie',
    title: 'Operazioni Straordinarie',
    description: 'Seguiamo imprese e soci nelle fasi più delicate dell’evoluzione aziendale, con consulenza specialistica nelle operazioni societarie straordinarie.',
    items: [
      {
        subtitle: 'Fusioni e scissioni',
        text: 'Assistenza tecnica e fiscale nelle operazioni di riorganizzazione societaria.'
      },
      {
        subtitle: 'Trasformazioni societarie',
        text: 'Supporto nel cambio di forma giuridica della società.'
      },
      {
        subtitle: 'Cessioni e acquisizioni',
        text: 'Consulenza strategica e fiscale nelle operazioni di compravendita aziendale.'
      },
      {
        subtitle: 'Conferimenti e rivalutazioni',
        text: 'Gestione fiscale di conferimenti, perizie e rivalutazioni patrimoniali.'
      },
      {
        subtitle: 'Patti tra soci e governance',
        text: 'Consulenza nella definizione degli assetti societari e decisionali.'
      }
    ]
  },
  {
    slug: 'riscossione-e-contenzioso-tributario',
    icon: Scale,
    shortTitle: 'Riscossione e contenzioso tributario',
    title: 'Riscossione & Contenzioso Tributario',
    description: 'Tuteliamo contribuenti, professionisti e imprese nei rapporti con Agenzia delle Entrate e Agenzia Entrate Riscossione, offrendo assistenza tempestiva e qualificata.',
    items: [
      {
        subtitle: 'Cartelle esattoriali e avvisi',
        text: 'Analisi e gestione di cartelle AdE e comunicazioni fiscali.'
      },
      {
        subtitle: 'Rateizzazioni e definizioni agevolate',
        text: 'Supporto per dilazioni di pagamento e procedure di regolarizzazione.'
      },
      {
        subtitle: 'Accertamenti fiscali',
        text: 'Consulenza e difesa durante verifiche e controlli tributari.'
      },
      {
        subtitle: 'Mediazione tributaria',
        text: 'Gestione stragiudiziale delle controversie con l’Amministrazione Finanziaria.'
      },
      {
        subtitle: 'Tutela del contribuente',
        text: 'Assistenza strategica per prevenire e risolvere criticità fiscali.'
      }
    ]
  }
];
