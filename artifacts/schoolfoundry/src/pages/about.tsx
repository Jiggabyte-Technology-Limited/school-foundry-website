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
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const CARD_FADE = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
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
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Digital Public Good • SDG 4 & SDG 10 • UNICEF Aligned
            </motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Digital Public Infrastructure for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-orange-500">Every African School.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/60 font-medium leading-relaxed">
              We build open-source, offline-first educational infrastructure designed to protect vulnerable children from academic exclusion, eliminate cash disputes, and give schools sovereign financial records that survive power cuts and internet blackouts.
            </motion.p>

            <motion.div variants={FADE_UP} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: School, label: 'SDG 4 (Quality Education)', value: 'Aligned' },
                { icon: Shield, label: 'SDG 10 (Reduced Inequalities)', value: 'Active' },
                { icon: Users, label: 'Offline Resilience', value: '100%' },
                { icon: Heart, label: 'Digital Public Good (MIT)', value: 'Free Core' },
              ].map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="text-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="text-[11px] text-white/40 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-12"
          >
            <motion.p variants={FADE_UP} className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Why we exist</motion.p>
            <motion.h3 variants={FADE_UP} className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Vision & <span className="text-primary">Mission.</span>
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={CARD_FADE}
              className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 sm:p-10 cursor-default group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[17px] text-white mb-3">Our Vision</p>
              <p className="text-[15px] text-white/60 leading-[1.7]">
                An Africa where <strong className="text-white">no child is ever locked out of class or barred from exams</strong> due to administrative delays in government grants, CDF bursaries, or lost paperwork. Every school—from Lusaka to rural districts—deserves sovereign, transparent systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={CARD_FADE}
              className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 sm:p-10 cursor-default group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[17px] text-white mb-3">Our Mission</p>
              <p className="text-[15px] text-white/60 leading-[1.7]">
                Provide free, open-source, offline-first digital public infrastructure that simplifies school accounting, shields vulnerable learners, and generates instant proof of payment. We bridge grassroots school realities with regional mobile money (Airtel, MTN, EcoCash, M-Pesa) and national grant disbursement tracking.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {IMPACT_STATS.map(({ end, suffix, prefix, label, icon: Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#07090E] p-6 sm:p-8 text-center cursor-default hover:bg-white/[0.03] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter end={end} suffix={suffix} prefix={prefix || ''} />
                </p>
                <p className="text-[12px] sm:text-[13px] text-white/50 font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-12"
          >
            <motion.p variants={FADE_UP} className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">How it started</motion.p>
            <motion.h3 variants={FADE_UP} className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Born from a <span className="text-primary">real problem.</span>
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#0B0D13] overflow-hidden"
            >
              <img
                src={asset("/new-about-us.png")}
                alt="School staff working through paper receipt books and records"
                className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default"
            >
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8] mb-5">
                It started with a simple visit. One of our founders walked into a primary school on the outskirts of Lusaka to help set up their accounting. What they found was a bursar hunched over a stack of handwritten receipt books, cross-referencing fees against a paper register while parents queued outside in the heat.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8] mb-5">
                The school had a computer. It even had a printer. But there was no internet, and every software solution they'd tried required a constant connection. In the confusion, students whose Constituency Development Fund (CDF) grants were delayed were being mistakenly sent home.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8] mb-5">
                That afternoon, the mission for SchoolFoundry was born: <strong className="text-white">a 100% offline system that shields sponsored learners, prints real receipts in 2 seconds, and is simple enough for anyone to use on day one.</strong>
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8]">
                We built SchoolFoundry as an open-source Digital Public Good under the MIT License, ensuring every African school has free, sovereign access to modern financial tools.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={STAGGER}
            className="mb-12"
          >
            <motion.p variants={FADE_UP} className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Our impact</motion.p>
            <motion.h3 variants={FADE_UP} className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Empowering communities through <span className="text-primary">educational equity.</span>
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              When a school runs with transparent digital records, the whole community thrives. Subsidized learners stay in class, parents trust fee transactions, and teachers focus on teaching.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
          >

            <motion.div variants={CARD_FADE} className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-[18px] h-[18px] text-emerald-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Child Safeguarding & Anti-Exclusion</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Learners on government bursaries (CDF, Free Education Policy), NGO sponsorships (CAMFED, UNICEF), or school scholarships are automatically protected. The system ensures no subsidized child is placed on fee lockout lists or excluded from exams.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">100% Offline Sovereignty</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                No internet required. Embedded SQLite database file stored securely on the school's office computer. Completely immune to cloud downtime and network blackouts.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Receipt className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Financial Transparency</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Every cash payment, mobile money transfer, and bank slip generates an instant 2-second thermal receipt. Eliminates fee disputes and ensures parents have official proof.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Designed for African Reality</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Built with multi-currency support (ZMW Kwacha, USD, ZWG), term rollover automation, Excel bulk imports, and 1-click Friday USB disaster recovery backups.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Partner Callout */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
          >

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={asset("/logo.svg")} alt="" className="h-10 w-auto" />
                <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
              </div>
              <p className="text-[15px] text-white/60 leading-[1.7] mb-6">
                We partner with educational donors, CDF committees, NGOs (CAMFED, UNICEF), governments, and social investors to deploy digital public infrastructure across 100,000+ African schools.
              </p>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/40">
                Lusaka, Zambia · Digital Public Good
              </p>
            </div>

            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-[17px] text-white mb-3">Partner with our mission</p>
              <p className="text-[13px] text-white/50 mb-8 max-w-sm leading-relaxed">
                Learn how sponsors and education agencies fund deployment bundles and safeguard thousands of vulnerable learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="/work-with-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 flex-1"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/10 transition-all hover:-translate-y-0.5 flex-1"
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
