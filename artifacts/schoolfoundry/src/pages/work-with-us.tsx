import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Handshake,
  Building2,
  Landmark,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  School,
  Wifi,
  WifiOff,
  Users,
  DollarSign,
  Globe,
  BarChart3,
} from 'lucide-react';
import { asset } from '@/lib/asset';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const STATS = [
  { value: '450K+', label: 'Schools in Africa without electricity', icon: WifiOff },
  { value: '98M', label: 'Children out of school in Sub-Saharan Africa', icon: Users },
  { value: '$4.5B', label: 'Education aid to Sub-Saharan Africa (2021)', icon: DollarSign },
  { value: '70%+', label: 'Rural learners without reliable internet', icon: Wifi },
];

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Partnerships</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              The problem is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">massive.</span>
              {' '}So is the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-primary">opportunity.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
              Hundreds of thousands of schools across Southern Africa still run on paper ledgers and hand-written receipts. We are building the tools to change that, and we need partners who share the mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">The challenge</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[600px] tracking-tight">
              Why this <span className="text-primary">matters now.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[600px] leading-[1.65]">
              Education infrastructure in Sub-Saharan Africa is underfunded and overwhelmingly paper-based. These numbers represent real schools where bursars write receipts by hand, where student records sit in filing cabinets, and where a single fire or flood can erase years of data.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {STATS.map(({ value, label, icon: Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#07090E] p-6 sm:p-8 text-center cursor-default hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">{value}</p>
                <p className="text-[12px] sm:text-[13px] text-white/40 font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[11px] text-white/25 mt-4 text-right">
            Sources:{' '}
            <a href="https://www.unesco.org/gem-report/en/2022-out-school" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">UNESCO GEM Report 2022</a>,{' '}
            <a href="https://thedocs.worldbank.org/en/doc/70f42d39bab0a849b36b2de4208a35e1-0140022024/original/EFW2023-Africa-edition.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">World Bank EFW 2023</a>,{' '}
            <a href="https://www.gaid.org/publications/africa/nearly-100-million-children-in-africa-out-of-school-and-450-000-schools-without-electricity" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">GAID 2023</a>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#0B0D13] overflow-hidden">
              <img
                src={asset("/file-cabinet.jpg")}
                alt="Paper-based school filing systems in Southern Africa"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-4">The reality on the ground</p>
              <h3 className="text-[24px] sm:text-[28px] font-black text-white leading-[1.15] mb-6 tracking-tight">
                Paper ledgers. Lost receipts. Zero visibility.
              </h3>
              <div className="space-y-4 text-[14px] text-white/55 leading-[1.75]">
                <p>
                  In Zambia alone, the Ministry of Education oversees <strong className="text-white/80">over 12,000 schools</strong> - most of which still track student records, fee payments, and attendance in hand-written ledgers.
                </p>
                <p>
                  Zimbabwe faces similar challenges with <strong className="text-white/80">over 9,500 schools</strong> operating without standardized digital record-keeping. District offices rely on physical file submissions from individual schools, creating weeks-long delays in reporting.
                </p>
                <p>
                  <a href="https://thedocs.worldbank.org/en/doc/70f42d39bab0a849b36b2de4208a35e1-0140022024/original/EFW2023-Africa-edition.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 hover:decoration-white/50 transition-colors">Government spending on education</a> across Africa remains at <strong className="text-white/80">just 3.7% of GDP</strong> - below the recommended 4% benchmark. Aid to education in Sub-Saharan Africa <strong className="text-white/80">fell 23%</strong> from 2020 to 2021.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">How you can help</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 tracking-tight">
              Every partner <span className="text-primary">unlocks a school.</span>
            </h3>
            <p className="text-[15px] text-white/50 leading-[1.65]">
              A full SchoolFoundry setup - printer, paper, and software - starts at $500 ($400 without the printer) and gives one school a permanent digital system. Here is how different partners make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Donors & Sponsors</p>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                Fund the digital setup for schools that cannot afford it themselves. A $500 sponsorship covers the full bundle for one school. $400 if the school already has a printer.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-primary font-bold">
                <School className="w-3.5 h-3.5" />
                <span>$500 = 1 school set up</span>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">NGOs & Development Agencies</p>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                Use SchoolFoundry in your existing education programs. We provide the system, and you provide the reach. Deployments include training and clear impact reporting.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-primary font-bold">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Built-in impact metrics for donors</span>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Grant Funding</p>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                We target grants to cover setup costs for disadvantaged schools - schools that have the equipment but not the funds to move away from paper. If you manage an education or technology grant program, let's talk.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-primary font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>$4.5B in education aid flows to SSA yearly</span>
              </div>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Landmark className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Government & Public Sector</p>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                Deploy SchoolFoundry at district or national scale to bring clear visibility into school operations. It works in rural areas where internet is unreliable, making it suitable for large-scale rollouts.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-primary font-bold">
                <School className="w-3.5 h-3.5" />
                <span>Scalable from 10 schools to 10,000+</span>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Investors</p>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                African EdTech attracted over $200M in funding between 2019 and 2023, but most of it focused on urban, internet-connected markets. SchoolFoundry serves the offline majority. Built on real demand, not hype.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-primary font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>$200M+ invested in African EdTech (2019 to 2023)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#0B0D13] overflow-hidden">
              <img
                src={asset("/offline-bundle.jpg")}
                alt="SchoolFoundry deployment bundle - what $500 buys"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-4">Impact per dollar</p>
              <h3 className="text-[24px] sm:text-[28px] font-black text-white leading-[1.15] mb-2 tracking-tight">
                What <span className="text-primary">$500</span> does for a school.
              </h3>
              <p className="text-[13px] text-white/35 mb-6">$400 if the school already has a printer</p>
              <div className="space-y-5">
                {[
                  { stat: '1', desc: 'thermal receipt printer - no ink, ever' },
                  { stat: '10', desc: 'starter paper rolls for Day 1' },
                  { stat: '1', desc: 'lifetime software license - no monthly fees' },
                  { stat: '∞', desc: 'students tracked, receipts printed, reports generated' },
                  { stat: '2s', desc: 'to print a professional receipt' },
                  { stat: '0', desc: 'internet required to operate' },
                ].map(({ stat, desc }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-2xl font-black text-primary min-w-[48px] text-right">{stat}</span>
                    <p className="text-[14px] text-white/55 font-medium pt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Government partnership</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              A call to <span className="text-primary">Ministries of Education.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-7 sm:p-10 cursor-default">
              <p className="text-[15px] text-white/60 leading-[1.8] mb-6">
                Ministries of Education across Zambia, Zimbabwe, and the wider region face the same challenge: thousands of schools still run on paper-based systems with no clear view of student numbers, fee collection, or academic performance across districts or countries.
              </p>
              <p className="text-[15px] text-white/60 leading-[1.8] mb-6">
                <a href="https://thedocs.worldbank.org/en/doc/70f42d39bab0a849b36b2de4208a35e1-0140022024/original/EFW2023-Africa-edition.pdf" target="_blank" rel="noopener noreferrer" className="underline">UNESCO estimates</a> that <strong className="text-white/80">median annual education spending per capita in Africa has stagnated at around $100</strong> for the past decade. SchoolFoundry's one-time deployment cost of $500 per school ($400 without the printer) is designed to fit within these constrained budgets.
              </p>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                We're ready to work with your department to pilot, adapt, and roll out SchoolFoundry as part of your national school improvement plan.
              </p>
            </div>

            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <p className="font-bold text-[15px] text-white mb-6">What we bring to the table:</p>
              <div className="space-y-4">
                {[
                  'Offline-first system that works in rural and urban schools alike',
                  'Simple overview for district and national oversight',
                  'Secure, locally-hosted data with full audit trails',
                  'Mobile money payment integration for transparent fee collection',
                  'WhatsApp-based parent communication at zero cost to parents',
                  'Custom deployment packages for government-funded rollouts',
                  'Training and onboarding programs for school administrators',
                  'Built to grow from 10 schools to 10,000',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-white/60 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={asset("/logo.svg")} alt="" className="h-10 w-auto" />
                <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
              </div>
              <p className="text-[15px] text-white/50 leading-[1.7] mb-6">
                Whether you're a school looking to move away from paper, a donor wanting to sponsor a school, an NGO running education programs, or a government ministry planning national rollouts, we want to hear from you.
              </p>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30">
                Lusaka, Zambia · Built for Southern Africa
              </p>
            </div>

            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-[17px] text-white mb-3">Let's build together.</p>
              <p className="text-[13px] text-white/50 mb-8 max-w-sm leading-relaxed">
                Reach out to discuss partnerships, sponsorships, grants, or a simple product demo. We respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="mailto:info@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] flex-1"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/10 transition-all flex-1"
                >
                  Email Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
