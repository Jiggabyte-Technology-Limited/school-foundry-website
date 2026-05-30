import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import DatabaseSphere from '@/components/DatabaseSphere';
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
  Bot,
  MonitorSmartphone,
  Info,
  Calendar,
  CreditCard,
  ClipboardList,
  Monitor,
  ShieldCheck,
  WifiOff,
  Banknote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';
import { asset } from '@/lib/asset';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

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
  return (
    <div className="selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#07090E] pt-20">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.04),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col justify-center">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping flex-shrink-0" />
                <span>OFFLINE VERSION AVAILABLE NOW</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                Your School, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-orange-600">
                  Modernized.
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl leading-relaxed font-medium">
                SchoolFoundry helps you manage fees, receipts, and student records on your office computer, even when the internet is unreliable.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-14">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] text-center min-w-[200px]"
                >
                  Request Demo
                </motion.a>
                <motion.a
                  href="#journeys"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 transition-all text-center min-w-[200px] backdrop-blur-md"
                >
                  Explore Versions
                </motion.a>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  ['100%', 'Offline'],
                  ['Easy to Use', 'For Everyone'],
                  ['Smart', 'Analytics'],
                ].map(([stat, label], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">{stat}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="w-[600px] h-[600px] relative">
                <DatabaseSphere />
              </div>

              {[
                { icon: ReceiptText, title: 'Record + Print', text: 'Instant thermal receipts', pos: 'top-0 left-1/2 -translate-x-1/2 translate-y-4', delay: 1.0, floatDelay: '0s' },
                { icon: FileText, title: 'Analytics', text: 'Visual school-wide data', pos: 'top-1/2 -right-6 -translate-y-1/2', delay: 1.2, floatDelay: '3s' },
                { icon: Cpu, title: 'Office Computer', text: 'Works on any Windows PC', pos: 'bottom-0 left-1/2 -translate-x-1/2 -translate-y-4', delay: 1.4, floatDelay: '4.5s' },
                { icon: Database, title: 'Local Vault', text: 'Encryption by default', pos: 'top-1/2 -left-6 -translate-y-1/2', delay: 1.6, floatDelay: '1.5s' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.8, ease: 'easeOut' }}
                  className={`absolute ${card.pos} cursor-default group`}
                  style={{ animation: `float 6s ease-in-out ${card.floatDelay} infinite` }}
                >
                  <div className="bg-[rgba(20,20,22,0.5)] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,30,33,0.7)] hover:border-primary/20 hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-1">
                      <card.icon className="w-4 h-4 text-primary" />
                      <p className="text-gray-100 font-bold tracking-wide text-sm uppercase">{card.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm font-medium pl-7">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollSection id="what-is-sms" className="py-16 sm:py-24 bg-[#07090E] relative">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">School Management, Simplified</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              What is <span className="text-primary">SchoolFoundry?</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Your school's record and fee management partner. Simple tools for fees, receipts, records, and daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            <div className="md:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Tracking</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">A digital identity for every child so you can track balances, issue statements, and keep student records organized without paper files.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ReceiptText className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Payment Tracking That Works</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Say goodbye to manual cash books and missing receipts. Every payment is recorded and ready for reporting whenever you need it.</p>
            </div>

            <div className="md:col-span-3 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Lead with Financial Confidence</p>
              <p className="text-[13px] text-white/50 leading-[1.6] max-w-2xl">Get a clear view of collections, outstanding fees, and payment trends. Every decision is backed by the latest information.</p>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection id="journeys" className="py-16 sm:py-24 bg-[#0B0D13] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Two versions, one mission</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Pick the Right Fit <span className="text-primary">For Your School</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              Every school is different. Whether you are running without reliable internet or you are ready to go fully online, there is a version of SchoolFoundry made for exactly where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <Link href="/offline" className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors cursor-pointer group block">
              <div className="w-full h-80 bg-white/5 overflow-hidden">
                <img src={asset("/offline-bundle.jpg")} alt="Thermal receipt printer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Printer className="w-[18px] h-[18px] text-white" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">The Offline Bundle</p>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  No internet? No problem. Built for schools that need a dependable system, the offline version stores information on your office computer and prints receipts quickly.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">
                  See the Offline Version <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            <Link href="/online" className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors cursor-pointer group block">
              <div className="w-full h-80 bg-white/5 overflow-hidden">
                <img src={asset("/online-cloud.jpg")} alt="Laptop and phone on desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-[18px] h-[18px] text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-[15px] text-white">Cloud Version</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Coming Soon</span>
                </div>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  Manage your school from any device. Our cloud version will add shared records, gradebooks, attendance, and payments.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">
                  Explore the Cloud <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">What's included</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Tools that actually<br /><span className="text-primary">get work done.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[420px] leading-[1.65]">
              The offline version gives you the essential tools you need. The cloud version will add access from any device, shared records, and parent access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Finance & Payments</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Complete financial control. Generate invoices, track arrears, and accept fee payments directly via <strong className="text-white/70">Bank Cards</strong> or <strong className="text-white/70">Mobile Money</strong>. Generates <strong className="text-white/70">receipts for cash payments</strong> instantly.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {[asset('/ecocash-logo.png'), asset('/momo-logo.png'), asset('/mpesa-logo.png')].map((src, i) => (
                  <div key={i} className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-10">
                    <img src={src} className="h-6 w-auto object-contain" alt="" />
                  </div>
                ))}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-500/10 text-blue-500 rounded px-2 py-1">
                  <CreditCard className="w-3.5 h-3.5" />Bank Cards
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-white/5 text-white/60 rounded px-2 py-1">
                  <Banknote className="w-3.5 h-3.5" />Cash Receipts
                </span>
              </div>
              <span className="inline-block text-[10px] font-bold bg-orange-500/10 text-orange-500 rounded px-2 py-0.5 border border-orange-500/20 mt-3">Limited in Offline Alpha</span>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Parent Help by WhatsApp</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Parents can ask for account statements, pay fees, and receive updates through WhatsApp.</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
                  WhatsApp
                </span>
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <WifiOff className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">100% Offline</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Works without any internet connection. Every feature runs locally on your machine, with no cloud dependency.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Admissions & Enrollment</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Simple applications, clear approvals, and a smooth start for new learners.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Security & User Management</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Configurable roles and permissions to ensure data privacy and system security.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Records</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Centralized profiles storing academic records, attendance history, behavioral data, and documentation.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Attendance & Scheduling</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Easy daily tracking and automated timetable management for classes, staff, and exams.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Gradebook & Reporting</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Digital recording of grades, progress tracking, and automated report card generation.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Staff & Teacher Portals</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Dedicated interfaces for managing materials, taking attendance, and entering grades.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Reporting & Analytics</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Real-time data reporting to support decision-making for leadership teams.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

          </div>

          <div className="mt-6 px-5 py-4 bg-white/[0.03] rounded-xl flex items-center gap-4 text-[13px] text-white/50">
            <Info className="w-4 h-4 text-primary flex-shrink-0" />
            <span><strong className="text-white/70 font-medium">Full Suite:</strong> Student records, admissions, attendance, gradebook, finance, and staff/parent access are included. Payments supported via WhatsApp, bank cards, M-Pesa, EcoCash, and Momo.</span>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection id="contact" className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Get in touch</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Ready to start your school's <span className="text-primary">new chapter?</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              Let's have a chat and show you exactly how SchoolFoundry works. No complicated tech talk, no pressure, and definitely no commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <img src={asset("/logo.svg")} alt="SchoolFoundry" className="w-10 h-10" />
                <div>
                  <p className="text-white font-bold text-[16px] leading-tight">SchoolFoundry</p>
                  <p className="text-white/40 text-[11px]">School Management System</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  'One-off payment, no monthly bills',
                  'Works offline. No internet? No problem.',
                  'Simple setup, no special training required',
                  'Friendly guides included to help you along',
                  'Trusted by schools across Southern Africa',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70 font-bold text-[14px]">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-white/30 text-[12px] leading-[1.6]">Have questions? Reach out and our team will walk you through everything, from setup to your first receipt print.</p>
              </div>
            </div>

            <div className="bg-[#07090E] p-7 sm:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">School Name</label>
                    <Input data-testid="input-school-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="e.g. Riverside High School" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="e.g. Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="bursar@yourschool.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="Best number to reach you on" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">How can we help?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-white/5 border-white/10 text-white min-h-[100px] rounded-xl focus:border-primary transition-all resize-none placeholder:text-white/15" placeholder="Tell us a little about your school, how many students do you have?" />
                </div>
                <Button data-testid="button-submit-demo" className="w-full h-14 text-base font-bold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                  Request a Friendly Demo
                </Button>
              </form>
            </div>

          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
