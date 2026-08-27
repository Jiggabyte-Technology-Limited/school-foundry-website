import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Heart,
  Target,
  ArrowRight,
  MapPin,
  Shield,
  MessageSquare,
  Zap,
  Users,
  Receipt,
  School,
  ShieldCheck,
  CheckCircle2,
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

const SCALE_IN = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

const CARD_FADE = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

function AnimatedCounter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const IMPACT_STATS = [
  { end: 100, suffix: '%', label: 'Offline Resilience (Zero WiFi)', icon: Globe },
  { end: 0, suffix: ' Days', label: 'Exclusion for Sponsored Children', icon: ShieldCheck },
  { end: 2, suffix: 's', label: 'Tamper-Evident Receipt Time', icon: Zap },
  { end: 100, suffix: '%', label: 'Open Source Digital Public Good', icon: School },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(254,227,181,0.4),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fa5d00]" /> Digital Public Good • SDG 4 &amp; SDG 10 • UNICEF Aligned
            </motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.95]">
              Digital Public Infrastructure for <br />
              <span className="text-[#fa5d00]">Every African School.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#615f5c] font-medium leading-relaxed">
              We build open-source, offline-first educational infrastructure designed to protect vulnerable children from academic exclusion, eliminate cash disputes, and give schools sovereign financial records that survive power cuts and internet blackouts.
            </motion.p>

            <motion.div variants={FADE_UP} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: School, label: 'SDG 4 (Quality Education)', value: 'Aligned' },
                { icon: Shield, label: 'SDG 10 (Reduced Inequalities)', value: 'Active' },
                { icon: Users, label: 'Offline Resilience', value: '100%' },
                { icon: Heart, label: 'Digital Public Good (MIT)', value: 'Free Core' },
              ].map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="text-center bg-white border border-[#c0bbb6]/40 rounded-[20px] p-4 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
                  <Icon className="w-5 h-5 text-[#fa5d00] mx-auto mb-2" />
                  <p className="text-lg font-bold text-[#1d1e1c]">{value}</p>
                  <p className="text-[11px] text-[#8e8b87] font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Target className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Why we exist</span>
            </motion.div>
            <motion.h3 variants={FADE_UP} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Vision &amp; <span className="text-[#fa5d00]">Mission.</span>
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Eliminating systemic friction at the school gate through sovereign, open digital public infrastructure.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={CARD_FADE}
              className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <Target className="w-5 h-5" />
              </div>
              <p className="font-bold text-[18px] text-[#1d1e1c] mb-3">Our Vision</p>
              <p className="text-[15px] text-[#615f5c] leading-[1.7]">
                An Africa where <strong className="text-[#1d1e1c]">no child is ever locked out of class or barred from exams</strong> due to administrative delays in government grants, CDF bursaries, or lost paperwork. Every school—from Lusaka to rural districts—deserves sovereign, transparent systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={CARD_FADE}
              className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5" />
              </div>
              <p className="font-bold text-[18px] text-[#1d1e1c] mb-3">Our Mission</p>
              <p className="text-[15px] text-[#615f5c] leading-[1.7]">
                Provide free, open-source, offline-first digital public infrastructure that simplifies school accounting, shields vulnerable learners, and generates instant proof of payment. We bridge grassroots school realities with regional mobile money (Airtel, MTN, EcoCash, M-Pesa) and national grant disbursement tracking.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map(({ end, suffix, label, icon: Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 sm:p-8 text-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fee3b5] flex items-center justify-center mx-auto mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1d1e1c] mb-2 tracking-tight font-mono">
                  <AnimatedCounter end={end} suffix={suffix} />
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#615f5c] font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <School className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>How it started</span>
            </motion.div>
            <motion.h3 variants={FADE_UP} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Born from a <span className="text-[#fa5d00]">real problem.</span>
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              The direct experience of seeing vulnerable learners sent home due to lost paper ledgers.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[20px] overflow-hidden border border-[#d9d9d9] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
            >
              <img
                src={asset("/new-about-us.png")}
                alt="School staff working through paper receipt books and records"
                className="w-full h-full object-cover min-h-[340px] hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 flex flex-col justify-center cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
            >
              <motion.p variants={FADE_UP} className="text-[15px] text-[#615f5c] leading-[1.8] mb-4">
                It started with a simple visit. One of our founders walked into a primary school on the outskirts of Lusaka to help set up their accounting. What they found was a bursar hunched over a stack of handwritten receipt books, cross-referencing fees against a paper register while parents queued outside in the heat.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-[#615f5c] leading-[1.8] mb-4">
                The school had a computer. It even had a printer. But there was no internet, and every software solution they'd tried required a constant connection. In the confusion, students whose Constituency Development Fund (CDF) grants were delayed were being mistakenly sent home.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-[#615f5c] leading-[1.8] mb-4">
                That afternoon, the mission for SchoolFoundry was born: <strong className="text-[#1d1e1c]">a 100% offline system that shields sponsored learners, prints real receipts in 2 seconds, and is simple enough for anyone to use on day one.</strong>
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-[#615f5c] leading-[1.8]">
                We built SchoolFoundry as an open-source Digital Public Good under the MIT License, ensuring every African school has free, sovereign access to modern financial tools.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Our impact</span>
            </motion.div>
            <motion.h3 variants={FADE_UP} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Empowering communities through <span className="text-[#fa5d00]">educational equity.</span>
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              When a school runs with transparent digital records, the whole community thrives. Subsidized learners stay in class, parents trust fee transactions, and teachers focus on teaching.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >

            <motion.div variants={CARD_FADE} className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">Child Safeguarding &amp; Anti-Exclusion</p>
              <p className="text-[14px] text-[#615f5c] leading-[1.6]">
                Learners on government bursaries (CDF, Free Education Policy), NGO sponsorships (CAMFED, UNICEF), or school scholarships are automatically protected. The system ensures no subsidized child is placed on fee lockout lists or excluded from exams.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-5 h-5" />
              </div>
              <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">100% Offline Sovereignty</p>
              <p className="text-[14px] text-[#615f5c] leading-[1.6]">
                No internet required. Embedded SQLite database file stored securely on the school's office computer. Completely immune to cloud downtime and network blackouts.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <Receipt className="w-5 h-5" />
              </div>
              <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">Financial Transparency</p>
              <p className="text-[14px] text-[#615f5c] leading-[1.6]">
                Every cash payment, mobile money transfer, and bank slip generates an instant 2-second thermal receipt. Eliminates fee disputes and ensures parents have official proof.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default group shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00] group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">Designed for African Reality</p>
              <p className="text-[14px] text-[#615f5c] leading-[1.6]">
                Built with multi-currency support (ZMW Kwacha, USD, ZWG), term rollover automation, Excel bulk imports, and 1-click Friday USB disaster recovery backups.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Partner Callout */}
      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
          >

            <div className="flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={asset("/logo.svg")} alt="" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-[#1d1e1c] tracking-tight">School<span className="text-[#fa5d00]">Foundry</span></span>
              </div>
              <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6">
                We partner with educational donors, CDF committees, NGOs (CAMFED, UNICEF), governments, and social investors to deploy digital public infrastructure across 100,000+ African schools.
              </p>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#8e8b87]">
                Lusaka, Zambia · Digital Public Good
              </p>
            </div>

            <div className="bg-[#fff8f1] border border-[#d9d9d9] rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-xs">
              <p className="font-bold text-[18px] text-[#1d1e1c] mb-2">Partner with our mission</p>
              <p className="text-[13px] text-[#615f5c] mb-8 max-w-sm leading-relaxed">
                Learn how sponsors and education agencies fund deployment bundles and safeguard thousands of vulnerable learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="/work-with-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-sm transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] hover:-translate-y-0.5 flex-1"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-[#fff8f1] text-[#1d1e1c] rounded-2xl font-semibold text-sm border border-[#c0bbb6] hover:border-[#fa5d00] hover:text-[#fa5d00] transition-all hover:-translate-y-0.5 flex-1"
                >
                  Contact Us
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
