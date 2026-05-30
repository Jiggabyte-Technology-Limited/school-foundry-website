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

export default function CloudPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <div className={`fixed left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-blue-500 to-primary py-2.5 text-center transition-all duration-500 ease-in-out ${scrolled ? 'top-[80px] sm:top-[76px]' : 'top-[84px] sm:top-[96px]'}`}>
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-white text-sm font-bold">
          <Construction className="w-4 h-4" />
          <span>Cloud Version - Coming Soon</span>
          <span className="hidden sm:inline text-white/70 font-medium">· Join the waitlist to get early access</span>
        </div>
      </div>

      <div className="h-[110px] sm:h-[120px]" />

      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 font-mono text-[10px] uppercase tracking-widest w-fit">
                <Globe className="w-3.5 h-3.5" />
                Cloud Version
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                Any Device,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-500 to-primary">Zero Data Loss.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-white/50 mb-8 max-w-xl leading-relaxed font-medium">
                Manage your school from any device, anywhere. The cloud version will let you send messages to parents, receive payments, and keep records in one place.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-base hover:bg-blue-600 transition-all shadow-[0_20px_40px_-12px_rgba(59,130,246,0.4)]">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-base border border-white/10 transition-all backdrop-blur-md">
                  See Features
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <img
                src={asset("/online-cloud.jpg")}
                alt="SchoolFoundry Cloud - manage your school from any device"
                className="w-full rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/5"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Built for Southern Africa</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              What makes it <span className="text-blue-400">different.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Most school management systems are built for other markets. SchoolFoundry is designed for how schools in Zambia, Zimbabwe, and the region actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center mb-4">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
              </div>
              <p className="font-bold text-[15px] text-white mb-1">WhatsApp for Parents</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Parents do not need to download an app. They can send a message to your school's WhatsApp number, check balances, request statements, receive reminders, and even <strong className="text-white/70">pay fees directly via WhatsApp</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {['Automatic Replies', 'Payment Links', 'PDF Statements', 'Auto Reminders'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Local Payment Methods</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                EcoCash, Momo, M-Pesa, bank cards, and cash. Parents pay how they want, and the system keeps track.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {[
                  { src: asset('/ecocash-logo.png'), alt: 'EcoCash' },
                  { src: asset('/momo-logo.png'), alt: 'MTN MoMo' },
                  { src: asset('/mpesa-logo.png'), alt: 'M-Pesa' },
                ].map(({ src, alt }) => (
                  <div key={alt} className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                    <img src={src} alt={alt} className="h-4 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Simple Reports</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                See who has paid, who still owes, and which students need attention.
              </p>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Access From Any Device</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Desktop, laptop, tablet, or phone - the bursar can issue a receipt from the office while the principal checks records from home.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Everything you need</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              A better way,<br /><span className="text-blue-400">online.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Everything from the offline version plus shared records, gradebooks, attendance, and online access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Fees & Payments</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Accept mobile money, bank cards, WhatsApp payments, and cash receipts. Keep every payment in one place.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {[asset('/ecocash-logo.png'), asset('/momo-logo.png'), asset('/mpesa-logo.png')].map((src, i) => (
                  <div key={i} className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                    <img src={src} className="h-4 w-auto object-contain" alt="" />
                  </div>
                ))}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-500/10 text-blue-400 rounded px-2 py-1"><CreditCard className="w-3.5 h-3.5" />Bank Cards</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">WhatsApp Pay</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-white/5 text-white/60 rounded px-2 py-1"><Banknote className="w-3.5 h-3.5" />Cash</span>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Parent Help by WhatsApp</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Parents can ask questions, request statements, and pay fees through WhatsApp.
              </p>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Users className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Student Records</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">One clear record for each learner with attendance, grades, notes, and documents.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Admissions & Enrollment</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Simple applications, clear approvals, and a smooth start for new learners.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Calendar className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Attendance & Scheduling</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Daily tracking, automated timetable management, and absence alerts via WhatsApp.</p>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Gradebook & Reports</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Enter grades, follow progress, and send report cards via WhatsApp.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <MonitorSmartphone className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Staff & Teacher Portals</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Dedicated interfaces for managing materials, taking attendance, and entering grades.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Clear Reports</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Clear reports on collections, outstanding fees, student numbers, and progress. Ready when you need them.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Secure by Design</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Protected access, activity logs, and careful data handling. Your school's information stays safe.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">The plan</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Cloud <span className="text-blue-400">Roadmap.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              We're building the Cloud Version in phases. Each phase is designed to add real value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { phase: 'P1', title: 'Cloud Migration', body: 'Move existing Offline records to secure cloud infrastructure. Zero data loss, automatic backups, and access from any device.' },
              { phase: 'P2', title: 'Mobile Money & Cards', body: 'Accept EcoCash, Momo, M-Pesa, and bank card payments directly through the platform with automatic reconciliation.' },
              { phase: 'P3', title: 'WhatsApp Messages', body: 'WhatsApp messages for parents, fee payments through chat, payment reminders, and statement delivery.' },
              { phase: 'P4', title: 'Student Records & Gradebook', body: 'Complete student records with attendance tracking, gradebooks, report cards, and teacher/staff access.' },
            ].map(({ phase, title, body }) => (
              <div key={phase} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">{phase}</div>
                <p className="font-bold text-[15px] text-white mb-2">{title}</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Coming soon</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Get early access to the <span className="text-blue-400">Cloud Version.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center">
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
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[14px] text-white/80 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">The Cloud Version</h4>
              <p className="text-[13px] text-white/50 mb-6 max-w-sm leading-relaxed">
                We're building the next generation of school management for Southern Africa. Join the waitlist to be the first to know when it launches.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-base hover:bg-blue-600 transition-all shadow-[0_20px_40px_-12px_rgba(59,130,246,0.4)]"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
