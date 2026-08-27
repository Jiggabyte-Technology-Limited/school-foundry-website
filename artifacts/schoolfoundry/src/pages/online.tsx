import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Bot,
  MessageSquare,
  CreditCard,
  Users,
  BarChart3,
  Calendar,
  ClipboardList,
  MonitorSmartphone,
  ShieldCheck,
  Banknote,
  ArrowRight,
  Sparkles,
  Zap,
  FileText,
  CircleDollarSign,
  CheckCircle2,
  Construction,
  Monitor,
  Map,
  AlertCircle,
  Send,
} from 'lucide-react';
import { asset } from '@/lib/asset';
import { getFormsApiUrl } from '@/lib/forms';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

type WaitlistFormState = 'idle' | 'loading' | 'success' | 'error';

export default function CloudPage() {
  const [scrolled, setScrolled] = useState(false);
  const [waitlistState, setWaitlistState] = useState<WaitlistFormState>('idle');
  const [waitlistError, setWaitlistError] = useState('');
  const [waitlistForm, setWaitlistForm] = useState({
    name: '',
    email: '',
    school: '',
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setWaitlistField = (field: keyof typeof waitlistForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setWaitlistForm((current) => ({ ...current, [field]: event.target.value }));

  const handleWaitlistSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setWaitlistState('loading');
    setWaitlistError('');

    try {
      const response = await fetch(getFormsApiUrl('/api/waitlist'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(waitlistForm),
      });

      const payload = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong');
      }

      setWaitlistForm({
        name: '',
        email: '',
        school: '',
      });
      setWaitlistState('success');
    } catch (error) {
      setWaitlistError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setWaitlistState('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden">

      {/* ── Stacked Pill Top Navbar — Layered Behind Main Nav ───────────── */}
      <div className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto w-full max-w-[1160px] bg-[#fa5d00] text-white rounded-full h-[52px] sm:h-[56px] px-6 sm:px-10 flex items-end pb-2 sm:pb-2.5 justify-between gap-4 shadow-[0_12px_28px_rgba(250,93,0,0.28)] border border-[#e05300] transform translate-y-[32px] sm:translate-y-[36px] transition-all duration-300 ${
            scrolled ? 'shadow-[0_14px_32px_rgba(250,93,0,0.35)]' : ''
          }`}
        >
          {/* Left indicator */}
          <div className="hidden md:flex items-center gap-2 text-white/90 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Cloud Federation</span>
          </div>

          {/* Center readable text */}
          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold text-white tracking-wide text-center">
            <Construction className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="font-bold">Cloud version coming soon</span>
            <span className="hidden sm:inline text-white/85 font-normal">· Multi-School &amp; District Oversight</span>
          </div>

          {/* Right action button */}
          <div className="flex items-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#fa5d00] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all"
            >
              Waitlist
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="h-[120px] sm:h-[135px]" />

      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(254,227,181,0.4),transparent_70%)] pointer-events-none blur-2xl" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] mb-6 font-mono text-[10px] uppercase tracking-widest font-bold w-fit shadow-xs">
                <Globe className="w-3.5 h-3.5 text-[#fa5d00]" />
                Cloud Version
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1e1c] mb-6 leading-[0.95]">
                Any Device,<br />
                <span className="text-[#fa5d00]">Zero Data Loss.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-[#615f5c] mb-8 max-w-xl leading-relaxed font-medium">
                Manage your school from any device, anywhere. The cloud version will let you send messages to parents, receive payments, and keep records in one place.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-base transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px]">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 bg-white hover:bg-[#fff8f1] text-[#1d1e1c] rounded-2xl font-semibold text-base border border-[#c0bbb6] shadow-sm hover:border-[#fa5d00] hover:text-[#fa5d00] transition-all">
                  See Features
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <img
                src={asset("/online-cloud.jpg")}
                alt="SchoolFoundry Cloud - manage your school from any device"
                className="w-full rounded-[20px] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] border border-[#d9d9d9]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">Built for Southern Africa</p>
            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1d1e1c] leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              What makes it <span className="text-[#fa5d00]">different.</span>
            </h3>
            <p className="text-[15px] text-[#615f5c] max-w-[520px] leading-[1.65]">
              Most school management systems are built for other markets. SchoolFoundry is designed for how schools in Zambia, Zimbabwe, and the region actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">WhatsApp for Parents</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Parents do not need to download an app. They can send a message to your school's WhatsApp number, check balances, request statements, receive reminders, and even <strong className="text-[#1d1e1c]">pay fees directly via WhatsApp</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {['Automatic Replies', 'Payment Links', 'PDF Statements', 'Auto Reminders'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#fee3b5] text-[#fa5d00] rounded-full px-2.5 py-1">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <CircleDollarSign className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Local Payment Methods</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                EcoCash, Momo, M-Pesa, bank cards, and cash. Parents pay how they want, and the system keeps track.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {[
                  { src: asset('/ecocash-logo.png'), alt: 'EcoCash' },
                  { src: asset('/momo-logo.png'), alt: 'MTN MoMo' },
                  { src: asset('/mpesa-logo.png'), alt: 'M-Pesa' },
                ].map(({ src, alt }) => (
                  <div key={alt} className="bg-white border border-[#d9d9d9] rounded-md px-2 py-1 flex items-center justify-center h-7 shadow-xs">
                    <img src={src} alt={alt} className="h-4 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Simple Reports</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                See who has paid, who still owes, and which students need attention.
              </p>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Access From Any Device</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Desktop, laptop, tablet, or phone - the bursar can issue a receipt from the office while the principal checks records from home.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Everything you need</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              A better way, <span className="text-[#fa5d00]">online.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Everything from the offline version plus shared records, gradebooks, attendance, and online access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Fees &amp; Payments</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Accept mobile money, bank cards, WhatsApp payments, and cash receipts. Keep every payment in one place.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {[asset('/ecocash-logo.png'), asset('/momo-logo.png'), asset('/mpesa-logo.png')].map((src, i) => (
                  <div key={i} className="bg-white border border-[#d9d9d9] rounded-md px-2 py-1 flex items-center justify-center h-7 shadow-xs">
                    <img src={src} className="h-4 w-auto object-contain" alt="" />
                  </div>
                ))}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#fee3b5] text-[#fa5d00] rounded-full px-2.5 py-1"><CreditCard className="w-3.5 h-3.5" />Bank Cards</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#fee3b5] text-[#fa5d00] rounded-full px-2.5 py-1">WhatsApp Pay</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#fff8f1] border border-[#d9d9d9] text-[#615f5c] rounded-full px-2.5 py-1"><Banknote className="w-3.5 h-3.5" />Cash</span>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Bot className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Parent Help by WhatsApp</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Parents can ask questions, request statements, and pay fees through WhatsApp.
              </p>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Student Records</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">One clear record for each learner with attendance, grades, notes, and documents.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Admissions &amp; Enrollment</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Simple applications, clear approvals, and a smooth start for new learners.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Calendar className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Attendance &amp; Scheduling</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Daily tracking, automated timetable management, and absence alerts via WhatsApp.</p>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Gradebook &amp; Reports</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Enter grades, follow progress, and send report cards via WhatsApp.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <MonitorSmartphone className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Staff &amp; Teacher Portals</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Dedicated interfaces for managing materials, taking attendance, and entering grades.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Clear Reports</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Clear reports on collections, outstanding fees, student numbers, and progress. Ready when you need them.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Secure by Design</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Protected access, activity logs, and careful data handling. Your school's information stays safe.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Map className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>The plan</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Cloud <span className="text-[#fa5d00]">Roadmap.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              We're building the Cloud Version in phases. Each phase is designed to add real value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { phase: 'P1', title: 'Cloud Migration', body: 'Move existing Offline records to secure cloud infrastructure. Zero data loss, automatic backups, and access from any device.' },
              { phase: 'P2', title: 'Mobile Money & Cards', body: 'Accept EcoCash, Momo, M-Pesa, and bank card payments directly through the platform with automatic reconciliation.' },
              { phase: 'P3', title: 'WhatsApp Messages', body: 'WhatsApp messages for parents, fee payments through chat, payment reminders, and statement delivery.' },
              { phase: 'P4', title: 'Student Records & Gradebook', body: 'Complete student records with attendance tracking, gradebooks, report cards, and teacher/staff access.' },
            ].map(({ phase, title, body }) => (
              <div key={phase} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] text-[#fa5d00] flex items-center justify-center font-bold text-lg mb-4">{phase}</div>
                <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">{title}</p>
                <p className="text-[14px] text-[#615f5c] leading-[1.6]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Globe className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Coming soon</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Get early access to the <span className="text-[#fa5d00]">Cloud Version.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Join education leaders piloting the federated cloud platform for multi-school and district administration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] flex flex-col justify-center">
              <div className="space-y-4">
                {[
                  'Everything in the Offline Bundle - plus more',
                  'WhatsApp communication for parents',
                  'Mobile money & card payments built in',
                  'Access from any device, anywhere',
                  'Clear reports for school leaders',
                  'Priority onboarding for early adopters',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#fa5d00] flex-shrink-0 mt-0.5" />
                    <p className="text-[14px] text-[#4a4a47] font-semibold">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#fee3b5] flex items-center justify-center flex-shrink-0 text-[#fa5d00]">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1d1e1c] mb-0.5">The Cloud Version</h4>
                  <p className="text-[13px] text-[#615f5c] leading-relaxed max-w-sm">
                    Join the waitlist to be first in line when the cloud platform launches.
                  </p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleWaitlistSubmit}>
                {waitlistState === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#fee3b5] border border-[#fa5d00]/30 text-[#fa5d00] text-sm text-left font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#fa5d00]" />
                    You are on the waitlist. We will contact you when early access opens.
                  </div>
                )}

                {waitlistState === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm text-left font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                    {waitlistError}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#615f5c] uppercase tracking-wider">Your Name</label>
                  <input
                    value={waitlistForm.name}
                    onChange={setWaitlistField('name')}
                    className="w-full bg-white border border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl px-4 focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all placeholder:text-[#8e8b87] text-sm"
                    placeholder="e.g. Themba Moyo"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#615f5c] uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    value={waitlistForm.email}
                    onChange={setWaitlistField('email')}
                    className="w-full bg-white border border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl px-4 focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all placeholder:text-[#8e8b87] text-sm"
                    placeholder="you@school.org"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#615f5c] uppercase tracking-wider">School Name</label>
                  <input
                    value={waitlistForm.school}
                    onChange={setWaitlistField('school')}
                    className="w-full bg-white border border-[#c0bbb6] text-[#1d1e1c] h-12 rounded-2xl px-4 focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all placeholder:text-[#8e8b87] text-sm"
                    placeholder="Optional"
                  />
                </div>

                <button
                  type="submit"
                  disabled={waitlistState === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-base transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] disabled:opacity-60 disabled:cursor-not-allowed w-full mt-2"
                >
                  {waitlistState === 'loading' ? (
                    <>
                      <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join the Waitlist
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
