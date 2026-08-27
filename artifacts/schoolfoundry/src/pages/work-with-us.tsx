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
  ShieldCheck,
} from 'lucide-react';
import { asset } from '@/lib/asset';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const STATS = [
  { value: '450K+', label: 'Schools in Africa without reliable grid power', icon: WifiOff },
  { value: '98M', label: 'Children out of school in Sub-Saharan Africa', icon: Users },
  { value: '$4.5B', label: 'Annual education aid to Sub-Saharan Africa', icon: DollarSign },
  { value: '70%+', label: 'Rural learners without stable internet', icon: Wifi },
];

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fa5d00]" /> Institutional Partnerships • SDG 4 &amp; SDG 10
            </motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.95]">
              The challenge is <span className="text-[#fa5d00]">massive.</span><br />
              So is the <span className="text-[#fa5d00]">impact.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#615f5c] font-medium leading-relaxed max-w-2xl mx-auto">
              Millions of African learners enrolled under government free education policies and CDF bursaries are vulnerable to classroom lockouts due to delayed grant disbursements and paper chaos. We are building the open digital public infrastructure to guarantee child safeguarding across every classroom.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>The humanitarian &amp; systemic challenge</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Why digital infrastructure <span className="text-[#fa5d00]">matters right now.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Education in Sub-Saharan Africa is held back by fragile manual bookkeeping. When grant payments from CDF committees or ministries are delayed, bursars cannot verify who is sponsored versus who is in arrears. Students are sent home, teachers lose instruction time, and funds remain untraceable.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 sm:p-8 text-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fee3b5] flex items-center justify-center mx-auto mb-4 text-[#fa5d00]">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1d1e1c] mb-2 tracking-tight font-mono">{value}</p>
                <p className="text-[12px] sm:text-[13px] text-[#615f5c] font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[11px] text-[#8e8b87] mt-4 text-right">
            Sources:{' '}
            <a href="https://www.unesco.org/gem-report/en/2022-out-school" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1d1e1c] transition-colors">UNESCO GEM Report 2022</a>,{' '}
            <a href="https://thedocs.worldbank.org/en/doc/70f42d39bab0a849b36b2de4208a35e1-0140022024/original/EFW2023-Africa-edition.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1d1e1c] transition-colors">World Bank EFW 2023</a>,{' '}
            <a href="https://www.gaid.org/publications/africa/nearly-100-million-children-in-africa-out-of-school-and-450-000-schools-without-electricity" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1d1e1c] transition-colors">GAID 2023</a>
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            <div className="bg-white rounded-[20px] overflow-hidden border border-[#d9d9d9] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <img
                src={asset("/new-work-with-us.png")}
                alt="School administrator working through receipt books and records"
                className="w-full h-full object-cover min-h-[340px]"
              />
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 flex flex-col justify-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                <School className="w-3.5 h-3.5 text-[#fa5d00]" />
                <span>The reality on the ground</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1e1c] leading-[1.15] mb-6 tracking-tight">
                Paper ledgers. Lost receipts. Zero visibility.
              </h3>
              <div className="space-y-4 text-[14px] text-[#615f5c] leading-[1.75]">
                <p>
                  In Zambia alone, the Ministry of Education oversees <strong className="text-[#1d1e1c]">over 13,900 schools</strong>. While national Free Education Policies have expanded access, school bursars are overwhelmed by paper ledgers, unable to reconcile CDF disbursements with individual learner accounts.
                </p>
                <p>
                  Zimbabwe faces similar challenges with <strong className="text-[#1d1e1c]">over 9,500 schools</strong> managing multi-currency cash flows (USD and ZWG) alongside BEAM bursary programs without standardized offline software.
                </p>
                <p>
                  School Foundry bridges this exact gap: <strong className="text-[#1d1e1c]">100% offline software</strong> that gives schools instant accounting and gives donors audit-ready impact proof.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Handshake className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Partnership Models</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              How partners <span className="text-[#fa5d00]">transform schools.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              A complete School Foundry Deployment Bundle ($500 with thermal printer and paper rolls, or $400 software-only) permanently equips one school with modern, offline financial infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Heart className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Donors &amp; Philanthropists</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6] mb-4">
                Sponsor hardware and setup for community and rural schools. A $500 grant covers a high-speed thermal printer, lifetime software license, and child safeguarding for up to 1,000 learners per school.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#fa5d00] font-bold">
                <School className="w-3.5 h-3.5" />
                <span>$500 = 1 school permanently equipped</span>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Handshake className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">NGOs &amp; UNICEF Programs</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6] mb-4">
                Integrate School Foundry into educational access, child protection, and CAMFED/UNICEF bursary initiatives. Programmatic anti-exclusion ensures sponsored children are never barred from classrooms.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#fa5d00] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SDG 4 &amp; SDG 10 Compliance Guaranteed</span>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">CDF &amp; Education Grants</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6] mb-4">
                Constituency Development Fund committees can deploy School Foundry across all constituency schools to track bursary utilization, prevent duplicate payments, and audit educational allocations.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#fa5d00] font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>Transparent Public Fund Oversight</span>
              </div>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Landmark className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Government &amp; Ministries of Education</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6] mb-4">
                Deploy School Foundry as national digital public infrastructure across district school networks. Offline-first architecture works in the most remote provinces without requiring multimillion-dollar connectivity overhauls.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#fa5d00] font-bold">
                <School className="w-3.5 h-3.5" />
                <span>Scalable from 10 to 15,000+ schools</span>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Social Impact Investors</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6] mb-4">
                Support the expansion of sustainable, locally grounded EdTech serving the offline majority across Sub-Saharan Africa. High-velocity community adoption with strong network effects.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#fa5d00] font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Sustainable Frontier EdTech</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="bg-white rounded-[20px] overflow-hidden border border-[#d9d9d9] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <img
                src={asset("/offline-bundle.jpg")}
                alt="SchoolFoundry deployment bundle - what $500 buys"
                className="w-full h-full object-cover min-h-[340px]"
              />
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 flex flex-col justify-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">Impact per dollar</p>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1d1e1c] leading-[1.15] mb-1 tracking-tight">
                What <span className="text-[#fa5d00]">$500</span> unlocks for a school.
              </h3>
              <p className="text-[13px] text-[#8e8b87] mb-6 font-medium">$400 if the school already has a printer</p>
              <div className="space-y-4">
                {[
                  { stat: '1', desc: 'high-speed thermal receipt printer (ink-free forever)' },
                  { stat: '10', desc: 'starter paper rolls for immediate Day 1 operation' },
                  { stat: '1', desc: 'lifetime software license with zero monthly vendor fees' },
                  { stat: '🛡️', desc: '100% child safeguarding protection for sponsored learners' },
                  { stat: '2s', desc: 'to print tamper-evident payment proof for parents' },
                  { stat: '0', desc: 'internet dependency to run daily operations' },
                ].map(({ stat, desc }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-[#fa5d00] min-w-[48px] text-right font-mono">{stat}</span>
                    <p className="text-[14px] text-[#4a4a47] font-medium pt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Landmark className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>National scale &amp; ministries</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              A call to <span className="text-[#fa5d00]">Ministries of Education.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Deploying sovereign educational public goods that modernize classroom accounting without requiring multimillion-dollar connectivity budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <p className="text-[15px] text-[#615f5c] leading-[1.8] mb-6">
                Ministries of Education across Zambia, Zimbabwe, and the wider region face the same challenge: thousands of schools still run on paper-based systems with no clear view of student numbers, fee collection, or academic performance across districts or countries.
              </p>
              <p className="text-[15px] text-[#615f5c] leading-[1.8] mb-6">
                <a href="https://thedocs.worldbank.org/en/doc/70f42d39bab0a849b36b2de4208a35e1-0140022024/original/EFW2023-Africa-edition.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#fa5d00] transition-colors">UNESCO estimates</a> that <strong className="text-[#1d1e1c]">median annual education spending per capita in Africa has stagnated at around $100</strong> for the past decade. SchoolFoundry's one-time deployment cost of $500 per school ($400 without the printer) is designed to fit within these constrained budgets.
              </p>
              <p className="text-[15px] text-[#615f5c] leading-[1.8]">
                We're ready to work with your department to pilot, adapt, and roll out SchoolFoundry as part of your national school improvement plan.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 flex flex-col justify-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-6">What we bring to the table:</p>
              <div className="space-y-3.5">
                {[
                  'Offline-first system that works in rural and urban schools alike',
                  'Child Safeguarding Engine protecting CDF and bursary students from exclusion',
                  'Secure, locally-hosted data with full audit trails',
                  'Mobile money payment integration (Airtel, MTN, EcoCash, M-Pesa)',
                  'WhatsApp-based parent communication at zero cost to parents',
                  'Custom deployment packages for government and donor-funded rollouts',
                  'Training and onboarding programs for school administrators',
                  'Built to grow from 10 schools to 15,000+',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#fa5d00] flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-[#4a4a47] font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">

            <div className="flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={asset("/logo.svg")} alt="" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-[#1d1e1c] tracking-tight">School<span className="text-[#fa5d00]">Foundry</span></span>
              </div>
              <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6">
                Whether you're a school looking to move away from paper, a donor wanting to sponsor a school, an NGO running education programs, or a government ministry planning national rollouts, we want to hear from you.
              </p>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#8e8b87]">
                Lusaka, Zambia · Digital Public Good
              </p>
            </div>

            <div className="bg-[#fff8f1] border border-[#d9d9d9] rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-xs">
              <p className="font-bold text-[18px] text-[#1d1e1c] mb-2">Let's build together.</p>
              <p className="text-[13px] text-[#615f5c] mb-8 max-w-sm leading-relaxed">
                Reach out to discuss partnerships, sponsorships, grants, or a simple product demo. We respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="mailto:schoolfoundry@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-full font-semibold text-sm transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] flex-1"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:schoolfoundry@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-[#fff8f1] text-[#1d1e1c] rounded-full font-semibold text-sm border border-[#c0bbb6] hover:border-[#fa5d00] hover:text-[#fa5d00] shadow-xs transition-all flex-1"
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
