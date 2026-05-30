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
} from 'lucide-react';

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
  { end: 2, suffix: 's', label: 'Receipt print time', icon: Zap },
  { end: 0, prefix: '$', suffix: '', label: 'Internet required', icon: Globe },
  { end: 500, prefix: '$', suffix: '', label: 'Full deployment cost', icon: School },
  { end: 0, suffix: '', label: 'Monthly fees', icon: Receipt },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">About SchoolFoundry</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Supporting schools<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">across Southern Africa.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed">
              We build school management tools that work in the real world - with unreliable internet, limited budgets, and the tools schools already use every day.
            </motion.p>

            <motion.div variants={FADE_UP} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: School, label: 'Schools served', value: 'Growing' },
                { icon: Globe, label: 'Countries', value: '2' },
                { icon: Users, label: 'Zero internet needed', value: '100%' },
                { icon: Heart, label: 'Community built', value: 'Always' },
              ].map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="text-[11px] text-white/30 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              <p className="text-[15px] text-white/50 leading-[1.7]">
                Every school in Southern Africa - from capital cities to rural villages - deserves clear, reliable systems. No paper ledgers, no lost records, no guesswork.
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
              <p className="text-[15px] text-white/50 leading-[1.7]">
                Build affordable school management technology that any school can adopt - regardless of budget, internet access, or staff training. We deliver tools that simplify fees, student records, and parent communication using the platforms and payment methods communities already trust: WhatsApp, EcoCash, Momo, and M-Pesa.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

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
                <p className="text-[12px] sm:text-[13px] text-white/40 font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                src="/file-cabinet.jpg"
                alt="Overflowing file cabinet - the paper-based system SchoolFoundry replaces"
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
                The school had a computer. It even had a printer. But there was no internet, and every software solution they'd tried required a constant connection. The bursar had given up and gone back to paper.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8] mb-5">
                That afternoon, the idea for SchoolFoundry was born: <strong className="text-white/80">a system that works with zero internet, prints real receipts, and is simple enough for anyone to use on day one.</strong>
              </motion.p>
              <motion.p variants={FADE_UP} className="text-[15px] text-white/60 leading-[1.8]">
                We built the first version with real school feedback and have kept improving it from those conversations. Every feature comes from bursars, principals, and parents.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

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
              Empowering communities through <span className="text-primary">better education infrastructure.</span>
            </motion.h3>
            <motion.p variants={FADE_UP} className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              When a school runs well, the whole community benefits. Parents trust where their money goes. Teachers spend less time on admin. Students get the attention they deserve.
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
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Financial Transparency</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Every payment is recorded, every receipt is printed, and every balance is accurate. Parents can see exactly where their school fees go, which builds trust between schools and communities.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Accessible Technology</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Our system runs on any office computer. The offline version works without internet. The cloud version works on phones and tablets.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Built on the Ground</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Every feature in SchoolFoundry comes from real conversations with bursars, principals, teachers, and parents in the region. We listen first, then build.
              </p>
            </motion.div>

            <motion.div variants={CARD_FADE} className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Designed for the Region</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Multi-currency support, local payment methods, WhatsApp communication, and simple steps that match how Southern African schools actually work.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

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
                <img src="/logo.svg" alt="" className="h-10 w-auto" />
                <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
              </div>
              <p className="text-[15px] text-white/50 leading-[1.7] mb-6">
                We partner with donors, sponsors, NGOs, governments, and investors who want to improve school administration across Southern Africa.
              </p>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30">
                Lusaka, Zambia · Built for Southern Africa
              </p>
            </div>

            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-[17px] text-white mb-3">Interested in partnering?</p>
              <p className="text-[13px] text-white/50 mb-8 max-w-sm leading-relaxed">
                Learn how donors, NGOs, governments, and investors are helping us bring digital school management to every community.
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
