import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, type Variants } from 'framer-motion';
import {
  Printer,
  FileText,
  ReceiptText,
  Users,
  BarChart3,
  Cpu,
  Database,
  Globe,
  ArrowRight,
  MonitorSmartphone,
  Info,
  Calendar,
  CreditCard,
  ClipboardList,
  Monitor,
  ShieldCheck,
  WifiOff,
  Banknote,
  AlertCircle,
  CheckCircle2,
  Send,
  Heart,
  Handshake,
  Download,
  School,
  Sparkles,
  HardDrive,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';
import { asset } from '@/lib/asset';
import { getFormsApiUrl } from '@/lib/forms';

// ── Hero-31 Specific Motion Variants ──────────────────────────────────
const wordContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: 12, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 18, stiffness: 130 },
  },
};

const bodyVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.75 },
  },
};

const bodyItemVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 26, stiffness: 100, mass: 1 },
  },
};

const logosContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 1.1 },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 140 },
  },
};

type DemoFormState = 'idle' | 'loading' | 'success' | 'error';

function ScrollSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [32, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.15], [6, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.section ref={ref} id={id} className={className} style={{ opacity, y, scale, filter }}>
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [demoState, setDemoState] = useState<DemoFormState>('idle');
  const [demoError, setDemoError] = useState('');
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: '',
  });

  const setDemoField = (field: keyof typeof demoForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDemoForm((current) => ({ ...current, [field]: event.target.value }));

  const handleDemoSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDemoState('loading');
    setDemoError('');

    try {
      const response = await fetch(getFormsApiUrl('/api/demo'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoForm),
      });

      const payload = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong');
      }

      setDemoForm({
        name: '',
        email: '',
        phone: '',
        school: '',
        message: '',
      });
      setDemoState('success');
    } catch (error) {
      setDemoError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setDemoState('error');
    }
  };

  const line1Words = ['No', 'Child', 'Locked', 'Out.'];
  const line2Words = ['No', 'School', 'Left', 'Blind.'];

  return (
    <div className="bg-[#fff8f1] text-[#1d1e1c] selection:bg-[#fa5d00]/20 selection:text-[#fa5d00] overflow-x-hidden">

      {/* ── Hero Section — Hero-31 Layout & Kinetic Motion ───────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white antialiased selection:bg-white/20 flex flex-col justify-between pt-28 pb-10 sm:pt-36 sm:pb-12"
      >
        {/* Background Image from hero-31 */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src={asset("/hero-31-bg.avif")}
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-between px-6 sm:px-8 md:px-12 w-full">
          
          {/* Main Hero Copy Container with 3D perspective — Centered */}
          <div className="mt-8 sm:mt-12 mx-auto flex max-w-3xl flex-col items-center text-center gap-6" style={{ perspective: '800px' }}>
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#fee3b5] text-xs font-semibold uppercase tracking-widest self-center backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#fa5d00]" />
              <span>Digital Public Good · SDG 4 &amp; SDG 10 · UNICEF Aligned</span>
            </motion.div>

            {/* Word-by-word 3D Animated Title — Centered */}
            <motion.h1
              variants={wordContainerVariants}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-white leading-[1.05] text-center"
              style={{ textWrap: 'balance' }}
            >
              <span className="block mb-1 sm:mb-2">
                {line1Words.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="mr-[0.25em] inline-block last:mr-0">
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-[#fa5d00]">
                {line2Words.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="mr-[0.25em] inline-block last:mr-0">
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Staggered Subtitle & CTAs — Centered */}
            <motion.div
              variants={bodyVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center text-center gap-6 w-full"
            >
              <motion.p
                variants={bodyItemVariants}
                className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-white/85 max-w-2xl mx-auto text-center"
                style={{ textWrap: 'pretty', letterSpacing: '0.015em' }}
              >
                Millions of African learners on government bursaries, CDF grants, and scholarships risk classroom exclusion due to paper chaos. School Foundry is the free, 100% offline software that shields vulnerable students and gives schools sovereign financial records.
              </motion.p>

              {/* Centered CTAs */}
              <motion.div variants={bodyItemVariants} className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group shadow-[inset_0_2px_0px_rgba(255,255,255,1),inset_0_-2px_0px_rgba(0,0,0,0.2)] bg-white hover:bg-neutral-100 flex h-14 items-center gap-3 px-8 text-base font-semibold text-black rounded-full transition-transform active:scale-[0.96]"
                >
                  <Download className="h-5 w-5 text-[#fa5d00]" />
                  Download Free (.exe)
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/work-with-us"
                  className="flex h-14 items-center gap-2.5 px-7 text-base font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 rounded-full transition-all backdrop-blur-sm active:scale-[0.96]"
                >
                  <Heart className="h-5 w-5 text-[#fa5d00]" />
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Strip from Hero-31 — Scale in one by one, Centered */}
          <motion.div
            variants={logosContainerVariants}
            initial="hidden"
            animate="show"
            className="mt-14 sm:mt-20 flex flex-col gap-6 pt-8 border-t border-white/15 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-14 text-center"
          >
            <motion.span variants={logoItemVariants} className="shrink-0 text-xs sm:text-sm font-bold tracking-wider text-white/50 uppercase">
              SOVEREIGN ARCHITECTURE
            </motion.span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
              {[
                { icon: WifiOff, name: '100% Offline SQLite', weight: 'font-semibold' },
                { icon: ShieldCheck, name: 'Child Safeguarding', weight: 'font-semibold' },
                { icon: Printer, name: '2-Sec Thermal Receipts', weight: 'font-semibold' },
                { icon: Banknote, name: 'Zero Per-Student Fee', weight: 'font-semibold' },
                { icon: Heart, name: 'MIT Open Source', weight: 'font-semibold' },
              ].map(({ icon: Icon, name, weight }) => (
                <motion.div key={name} variants={logoItemVariants} className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                  <Icon className="h-4 sm:h-5 w-4 sm:w-5 text-[#fa5d00]" />
                  <span className={`text-xs sm:text-sm text-white ${weight}`}>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: The Crisis / The Real Problem (Asymmetric Visual Split) ── */}
      <ScrollSection id="the-crisis" className="py-20 sm:py-28 bg-[#fff8f1] relative border-t border-[#d9d9d9]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Centered Section Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>The Crisis Behind the Gate</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Why paper ledgers are hurting <span className="text-[#fa5d00]">African learners.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
              National Free Education Policies and Constituency Development Fund (CDF) bursaries were created to unlock opportunity. But at the school gate, paper accounting breaks the promise.
            </p>
          </div>

          {/* Bespoke Asymmetric Visual Layout: Interactive Artifact + Highlighted Crisis Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Visual Simulation: The Paper Ledger Failure Reality (5 Columns) */}
            <div className="lg:col-span-5 bg-[#1d1e1c] text-white rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-[rgba(0,0,0,0.15)_0px_12px_32px_0px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fa5d00]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-mono text-white/70">Paper Ledger Vulnerability</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono font-bold">DISPUTED</span>
                </div>

                {/* Simulated Disputed Paper Receipt & Ledger Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5 space-y-3 font-mono text-xs text-white/80">
                  <div className="flex justify-between text-white/50 text-[11px]">
                    <span>RECORD #LUS-2024-884</span>
                    <span>TERM 2 FEES</span>
                  </div>
                  <div className="pt-2 border-t border-dashed border-white/15">
                    <p className="text-white font-bold text-sm">Learner: Mwansa Phiri (Grade 9)</p>
                    <p className="text-[#fee3b5]">Status: CDF Bursary Sponsored</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-300 text-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>ALERT:</strong> Grant disbursement delayed 4 weeks. Paper receipt unverified at gate. Child sent home.</span>
                  </div>
                </div>

                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  When accounting depends on paper books, bursars cannot instantly cross-verify CDF allocations, creating false payment disputes that lock children out of class.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Average Exclusion Loss:</span>
                <strong className="text-[#fa5d00] font-mono text-sm">18 to 25 School Days</strong>
              </div>
            </div>

            {/* Right Side: 3 Styled Asymmetric Crisis Items (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              
              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.18)_4px_4px_20px_0px] hover:border-[#fa5d00]/40 transition-all flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5]/60 flex items-center justify-center shrink-0 text-[#fa5d00]">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#1d1e1c] mb-2" style={{ letterSpacing: '0.015em' }}>
                    Accidental Exclusion
                  </h4>
                  <p className="text-[14px] text-[#615f5c] leading-[1.65]" style={{ letterSpacing: '0.015em' }}>
                    When government CDF grants or NGO disbursements take weeks to clear, bursars cannot easily verify who is sponsored. Deserving children are sent home and miss vital instruction.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.18)_4px_4px_20px_0px] hover:border-[#fa5d00]/40 transition-all flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5]/60 flex items-center justify-center shrink-0 text-[#fa5d00]">
                  <WifiOff className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#1d1e1c] mb-2" style={{ letterSpacing: '0.015em' }}>
                    The Internet Dependency Trap
                  </h4>
                  <p className="text-[14px] text-[#615f5c] leading-[1.65]" style={{ letterSpacing: '0.015em' }}>
                    Most modern school software requires constant, high-speed WiFi. During frequent power cuts and rural network outages, administrators are forced back to fragile paper receipt books.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.18)_4px_4px_20px_0px] hover:border-[#fa5d00]/40 transition-all flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5]/60 flex items-center justify-center shrink-0 text-[#fa5d00]">
                  <ReceiptText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] text-[#1d1e1c] mb-2" style={{ letterSpacing: '0.015em' }}>
                    Cash &amp; Receipt Disputes
                  </h4>
                  <p className="text-[14px] text-[#615f5c] leading-[1.65]" style={{ letterSpacing: '0.015em' }}>
                    Handwritten paper receipts get lost, faded, or disputed. Parents are left without tamper-proof proof of payment, destroying trust between schools and their communities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollSection>

      {/* ── Section 2: The 4 Pillars of Digital Public Infrastructure (Bento Showcase) ── */}
      <ScrollSection id="pillars" className="py-20 sm:py-28 bg-[#fff8f1] relative overflow-hidden border-t border-[#d9d9d9]">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* Centered Section Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Our Core Architecture</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Open digital infrastructure built for <span className="text-[#fa5d00]">ground reality.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
              School Foundry is engineered to work reliably on any standard office computer without internet, vendor lock-in, or monthly subscription burdens.
            </p>
          </div>

          {/* Bento Visual Grid (2 Large Spotlight Cards + 2 Specialized Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7">

            {/* Pillar 1 Spotlight: Child Safeguarding Engine (7 Cols) */}
            <div className="md:col-span-7 bg-white rounded-[24px] p-8 sm:p-10 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center text-[#fa5d00]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#fee3b5] text-[#fa5d00] font-mono text-xs font-bold uppercase tracking-wider">
                    SDG 4 &amp; 10 ALIGNED
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  Child Safeguarding Engine
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Protects learners on CDF bursaries, government grants, CAMFED, and UNICEF scholarships. Automatically shields sponsored children from fee lockouts and exam disqualification.
                </p>
              </div>

              {/* Visual Safeguard Mockup UI */}
              <div className="p-4 rounded-xl bg-[#fff8f1] border border-[#fa5d00]/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fa5d00] text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1d1e1c]">Grace Chileshe · Grade 10</p>
                    <p className="text-[11px] text-[#fa5d00] font-medium">CDF Sponsored · Lockout Immune</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                  SHIELD ACTIVE
                </span>
              </div>
            </div>

            {/* Pillar 2 Spotlight: 100% Offline Sovereignty (5 Cols) */}
            <div className="md:col-span-5 bg-white rounded-[24px] p-8 sm:p-10 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center text-[#fa5d00]">
                    <WifiOff className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 text-[#1d1e1c] font-mono text-xs font-bold uppercase tracking-wider">
                    ZERO WIFI
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  100% Offline Sovereignty
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Embedded SQLite database stored locally on the school computer. Functions continuously during load-shedding and network blackouts with zero cloud reliance.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900 text-white font-mono text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-[#fa5d00]" />
                  <span>schoolfoundry.db</span>
                </span>
                <span className="text-emerald-400 text-[11px]">LOCAL DISK 100%</span>
              </div>
            </div>

            {/* Pillar 3 Spotlight: 2-Second Thermal Receipts (5 Cols) */}
            <div className="md:col-span-5 bg-white rounded-[24px] p-8 sm:p-10 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center text-[#fa5d00]">
                    <Printer className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#fee3b5] text-[#fa5d00] font-mono text-xs font-bold uppercase tracking-wider">
                    2 SECONDS
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  2-Second Thermal Receipts
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Instant printing with unique receipt numbers and audit trails. Ink-free thermal technology that ends paper disputes and gives parents verifiable payment receipts.
                </p>
              </div>

              {/* Simulated Mini Thermal Paper Receipt */}
              <div className="p-3 rounded-lg bg-[#fff8f1] border border-dashed border-[#c0bbb6] text-center font-mono text-[11px] text-[#1d1e1c]">
                <p className="font-bold uppercase tracking-wider">★ OFFICIAL SCHOOL RECEIPT ★</p>
                <p className="text-[#615f5c]">RC-2024-0982 · VERIFIED ✓</p>
              </div>
            </div>

            {/* Pillar 4 Spotlight: Digital Public Good (MIT) (7 Cols) */}
            <div className="md:col-span-7 bg-white rounded-[24px] p-8 sm:p-10 border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center text-[#fa5d00]">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#fee3b5] text-[#fa5d00] font-mono text-xs font-bold uppercase tracking-wider">
                    MIT OPEN SOURCE
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  Digital Public Good (MIT)
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  The desktop application is completely free and open-source under the MIT license. No proprietary lock-in, no per-student tax, and no forced recurring software fees.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#d9d9d9] text-center text-xs">
                <div className="p-2 rounded-lg bg-[#fff8f1]"><strong className="text-[#fa5d00] block">$0</strong> Software Cost</div>
                <div className="p-2 rounded-lg bg-[#fff8f1]"><strong className="text-[#fa5d00] block">MIT</strong> License</div>
                <div className="p-2 rounded-lg bg-[#fff8f1]"><strong className="text-[#fa5d00] block">100%</strong> Open Core</div>
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ── Section 3: Modular Architecture (Two Tiers) ───────────────── */}
      <ScrollSection id="tiers" className="py-20 sm:py-28 bg-[#fff8f1] relative border-t border-[#d9d9d9]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Centered Section Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Modular Architecture</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              From standalone classroom PCs to <span className="text-[#fa5d00]">district-wide sync.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
              Whether a school operates in a remote valley without cellular coverage or requires district-level cloud aggregation, School Foundry adapts seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

            {/* Offline Edition Card */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] border border-[#c0bbb6]/40 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest">
                    Available Now • 100% Free Core
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5]/50 flex items-center justify-center text-[#fa5d00]">
                    <Printer className="w-5 h-5" />
                  </div>
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  School Foundry Offline Edition
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Complete school management running directly on Windows computers. Student registration, fee balancing, child safeguarding, thermal receipt printing, Excel imports, and Friday 1-click disaster recovery backups.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    '100% free open-source software (MIT)',
                    'Zero internet dependency to operate',
                    'Direct thermal printer support (USB/ESC-POS)',
                    'Automatic CDF and scholarship child protection',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#615f5c] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#fee3b5]/60 flex items-center justify-center text-[#fa5d00] text-xs font-bold shrink-0">✓</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-[#d9d9d9]">
                <a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-full px-6 py-3.5 font-semibold text-sm shadow-[rgba(0,0,0,0.15)_0px_2px_8px_0px] transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download .exe
                </a>
                <Link
                  href="/offline"
                  className="border border-[#1d1e1c] text-[#1d1e1c] hover:bg-[#1d1e1c] hover:text-white rounded-full px-6 py-3.5 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  Explore Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Cloud Portal Card */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] border border-[#fa5d00]/30 flex flex-col justify-between transition-all relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#fee3b5]/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5]/60 border border-[#fa5d00]/30 text-[#fa5d00] text-xs font-bold uppercase tracking-widest">
                    In Development • Cloud Federation
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5]/50 flex items-center justify-center text-[#fa5d00]">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>
                  School Foundry Cloud Portal
                </h4>
                <p className="text-[15px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  For education boards, donor networks, and district councils. Syncs offline school records to provide aggregated bursary tracking, multi-school performance insights, and mobile money reconciliations.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Multi-school district dashboard for education ministries',
                    'Live CDF grant absorption & audit tracking',
                    'Mobile money & WhatsApp parent statement delivery',
                    'Seamless sync with offline desktop instances',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#615f5c] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#fee3b5]/60 flex items-center justify-center text-[#fa5d00] text-xs font-bold shrink-0">✓</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-[#d9d9d9]">
                <Link
                  href="/online"
                  className="bg-[#1d1e1c] hover:bg-[#fa5d00] text-white rounded-full px-7 py-3.5 font-semibold text-sm shadow-[rgba(0,0,0,0.15)_0px_2px_8px_0px] transition-all inline-flex items-center gap-2"
                >
                  Join Cloud Waitlist <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ── Section 4: How People & Partners Can Help (Tiered Action Cards) ── */}
      <ScrollSection id="how-to-help" className="py-20 sm:py-28 bg-[#fff8f1] relative border-t border-[#d9d9d9]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Centered Section Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Heart className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Collective Impact</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              How you can help <span className="text-[#fa5d00]">achieve this mission.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
              Ending academic exclusion and digitizing 100,000+ African schools requires collaboration across educators, donors, NGOs, and public institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">

            {/* Educator Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-[rgba(250,166,0,0.20)_4px_4px_24px_0px] border border-[#c0bbb6]/40 flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center mb-6 text-[#fa5d00]">
                  <School className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa5d00] block mb-2">FOR PRINCIPALS</span>
                <h4 className="font-bold text-xl text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>Schools &amp; Educators</h4>
                <p className="text-[14px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Download and deploy the free desktop software. Eliminate manual receipt books, safeguard your subsidized learners, and run your school office with total confidence.
                </p>
              </div>
              <a
                href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-neutral-100 hover:bg-[#1d1e1c] hover:text-white text-[#1d1e1c] text-xs font-bold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider"
              >
                Get Free Software <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Donor Spotlight Card (Featured with Amber Border) */}
            <div className="bg-white rounded-[24px] p-8 shadow-[rgba(250,166,0,0.30)_6px_6px_32px_0px] border-2 border-[#fa5d00] flex flex-col justify-between transition-all relative overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-[#fa5d00] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                SPONSOR A SCHOOL
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fa5d00] text-white flex items-center justify-center mb-6 shadow-md">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa5d00] block mb-2">COMMUNITY IMPACT</span>
                <h4 className="font-bold text-xl text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>Donors &amp; Sponsors</h4>
                <p className="text-[14px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Sponsor a $500 Deployment Bundle (printer + paper rolls + setup assistance) to permanently transition a disadvantaged community or rural school off paper ledgers.
                </p>
              </div>
              <Link
                href="/work-with-us"
                className="w-full py-3.5 px-4 rounded-full bg-[#fa5d00] hover:bg-[#e05300] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider shadow-md"
              >
                Sponsor a School Bundle <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* NGO & CDF Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-[rgba(250,166,0,0.20)_4px_4px_24px_0px] border border-[#c0bbb6]/40 flex flex-col justify-between transition-all hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center mb-6 text-[#fa5d00]">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa5d00] block mb-2">DISTRICT SCALE</span>
                <h4 className="font-bold text-xl text-[#1d1e1c] mb-3" style={{ letterSpacing: '0.015em' }}>NGOs &amp; CDF Committees</h4>
                <p className="text-[14px] text-[#615f5c] leading-[1.7] mb-6" style={{ letterSpacing: '0.015em' }}>
                  Partner with us to deploy digital public infrastructure across your entire constituency or scholarship network, ensuring real-time auditability and zero exclusion.
                </p>
              </div>
              <Link
                href="/work-with-us"
                className="w-full py-3 px-4 rounded-full bg-neutral-100 hover:bg-[#1d1e1c] hover:text-white text-[#1d1e1c] text-xs font-bold flex items-center justify-center gap-1.5 transition-all uppercase tracking-wider"
              >
                Institutional Partnerships <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ── Section 5: Connect / Inquire Form Section ─────────────────── */}
      <ScrollSection id="contact" className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Centered Section Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Send className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Connect With Our Team</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Let's build educational equity <span className="text-[#fa5d00]">together.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
              Whether you are a school leader seeking guidance, a donor wanting to sponsor a deployment, or an education agency exploring district partnerships, we want to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left Info Card */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 flex flex-col justify-center shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] border border-[#c0bbb6]/40">
              <div className="flex items-center gap-3 mb-8">
                <img src={asset("/logo.svg")} alt="SchoolFoundry" className="w-10 h-10" />
                <div>
                  <p className="text-[#1d1e1c] font-bold text-[19px] leading-tight" style={{ letterSpacing: '0.015em' }}>SchoolFoundry</p>
                  <p className="text-[#fa5d00] text-[11px] font-bold uppercase tracking-widest">Digital Public Infrastructure</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  '100% Free open-source software (MIT)',
                  'Offline-first: Works seamlessly with zero internet',
                  'Child Safeguarding Engine protecting vulnerable learners',
                  'Instant 2-second thermal receipts that end payment disputes',
                  'Built in Lusaka, Zambia for schools across Africa',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#615f5c] font-semibold text-[14px]" style={{ letterSpacing: '0.015em' }}>
                    <div className="w-6 h-6 rounded-full bg-[#fee3b5]/60 flex items-center justify-center text-[#fa5d00] text-xs font-bold shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-[#d9d9d9]">
                <p className="text-[#615f5c] text-[13px] leading-[1.7]" style={{ letterSpacing: '0.015em' }}>
                  Questions or partnership proposals? Reach out to <strong className="text-[#1d1e1c]">schoolfoundry@jiggabyte.co.zm</strong> or submit the inquiry form.
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.22)_6px_6px_28px_0px] border border-[#c0bbb6]/40">
              <form className="space-y-5" onSubmit={handleDemoSubmit}>
                {demoState === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#fee3b5]/40 border border-[#fa5d00]/30 text-[#fa5d00] text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#fa5d00]" />
                    Thank you. We have received your message and will reply within 24 hours.
                  </div>
                )}

                {demoState === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                    {demoError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#8e8b87] uppercase tracking-wider">Your Organization / School</label>
                    <Input
                      data-testid="input-school-name"
                      value={demoForm.school}
                      onChange={setDemoField('school')}
                      className="bg-white border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fa5d00] focus:ring-offset-2 transition-all placeholder:text-[#8e8b87]"
                      placeholder="e.g. Lusaka Community School / NGO"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#8e8b87] uppercase tracking-wider">Contact Name</label>
                    <Input
                      data-testid="input-your-name"
                      value={demoForm.name}
                      onChange={setDemoField('name')}
                      className="bg-white border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fa5d00] focus:ring-offset-2 transition-all placeholder:text-[#8e8b87]"
                      placeholder="e.g. Jane Mwamba"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#8e8b87] uppercase tracking-wider">Email Address</label>
                    <Input
                      data-testid="input-email"
                      type="email"
                      value={demoForm.email}
                      onChange={setDemoField('email')}
                      className="bg-white border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fa5d00] focus:ring-offset-2 transition-all placeholder:text-[#8e8b87]"
                      placeholder="jane@organization.org"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#8e8b87] uppercase tracking-wider">Phone / WhatsApp</label>
                    <Input
                      data-testid="input-phone"
                      value={demoForm.phone}
                      onChange={setDemoField('phone')}
                      className="bg-white border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fa5d00] focus:ring-offset-2 transition-all placeholder:text-[#8e8b87]"
                      placeholder="+260 / +27 / +263..."
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#8e8b87] uppercase tracking-wider">How can we collaborate?</label>
                  <Textarea
                    data-testid="textarea-school-info"
                    value={demoForm.message}
                    onChange={setDemoField('message')}
                    className="bg-white border-[#c0bbb6] text-[#1d1e1c] min-h-[100px] rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#fa5d00] focus:ring-offset-2 transition-all resize-none placeholder:text-[#8e8b87] py-3.5 px-5"
                    placeholder="Tell us about your school, sponsorship program, or inquiry..."
                  />
                </div>
                <Button
                  data-testid="button-submit-demo"
                  type="submit"
                  disabled={demoState === 'loading'}
                  className="w-full h-14 text-base font-bold rounded-full bg-[#fa5d00] text-white hover:bg-[#e05300] shadow-[rgba(0,0,0,0.15)_0px_2px_8px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {demoState === 'loading' ? (
                    <>
                      <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
