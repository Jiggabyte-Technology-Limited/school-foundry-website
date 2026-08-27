import React from 'react';
import { motion } from 'framer-motion';
import {
  Printer,
  HardDrive,
  Zap,
  Shield,
  ShieldCheck,
  WifiOff,
  Users,
  CreditCard,
  Banknote,
  FileText,
  BarChart3,
  Database,
  CheckCircle,
  ArrowRight,
  Package,
  Receipt,
  Monitor,
  Download,
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

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00]">

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(254,227,181,0.5),transparent_70%)] pointer-events-none blur-2xl" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] mb-8 font-mono text-[10px] uppercase tracking-widest font-bold">
                <WifiOff className="w-3.5 h-3.5 text-[#fa5d00]" />
                Offline Version
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1d1e1c] mb-6 tracking-tight leading-[0.95]">
                No Internet?<br />
                <span className="text-[#fa5d00]">No Problem.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#615f5c] mb-10 max-w-xl leading-relaxed font-medium">
                Built for schools that need a dependable system on the office computer. SchoolFoundry Offline keeps working when the internet is unavailable, so your team can record fees, protect scholarship students from exclusion, and print receipts without interruption.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-4">
                <a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4.5 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-base transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] text-center flex items-center justify-center gap-2.5"
                >
                  <Download className="w-5 h-5" /> Download Free (.exe)
                </a>
                <a
                  href="/#contact"
                  className="px-8 py-4.5 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-base transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] text-center"
                >
                  Get Hardware Bundle
                </a>
                <a
                  href="#whats-included"
                  className="px-8 py-4.5 bg-white hover:bg-[#fff8f1] text-[#1d1e1c] rounded-2xl font-semibold text-base border border-[#c0bbb6] shadow-sm hover:border-[#fa5d00] hover:text-[#fa5d00] transition-all text-center"
                >
                  See What's Included
                </a>
              </motion.div>
              <motion.p variants={FADE_UP} className="text-xs text-[#8e8b87] font-mono mb-8">
                Windows 10 / 11 (64-bit) • 100% Free & Open Source Core (MIT) • Works Completely Offline
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-[20px] overflow-hidden border border-[#d9d9d9] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] bg-white"
            >
              <img
                src={asset("/offline-bundle.jpg")}
                alt="SchoolFoundry Offline Version, laptop, receipt printer, and paper rolls"
                className="w-full h-auto object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section id="whats-included" className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Package className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Everything in one box</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              The Deployment <span className="text-[#fa5d00]">Bundle.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              One purchase. Everything you need to get started from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] overflow-hidden group cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-full h-48 sm:h-56 bg-[#fee3b5]/20 overflow-hidden">
                <img src={asset("/bundle-printer.jpg")} alt="High-Speed Thermal Printer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                  <Printer className="w-5 h-5" />
                </div>
                <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">High-Speed Thermal Printer</p>
                <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                  No ink required, ever. Built to handle your busiest registration days. Prints professional receipts in under <strong className="text-[#1d1e1c]">2 seconds</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] overflow-hidden group cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-full h-48 sm:h-56 bg-[#fee3b5]/20 overflow-hidden">
                <img src={asset("/bundle-paper.jpg")} alt="10 Thermal Paper Rolls" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                  <Receipt className="w-5 h-5" />
                </div>
                <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">10 Starter Paper Rolls</p>
                <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                  Standard 80mm thermal rolls. Everything you need to start printing on Day 1.
                </p>
              </div>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] overflow-hidden group cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-full h-48 sm:h-56 bg-[#fee3b5]/20 overflow-hidden">
                <img src={asset("/welcome-school-foundry.png")} alt="SchoolFoundry Software with Lifetime License" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                  <Monitor className="w-5 h-5" />
                </div>
                <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">SchoolFoundry Software + Lifetime License</p>
                <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                  Full school management system installed and ready to use on your office computer. One-time payment, no monthly fees. Includes learner tracking, fee management, reporting, and receipt printing.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Lifetime License</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                One-time payment. You own your records forever. No hidden monthly fees, no subscriptions.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="whats-included" className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">Built for offline schools</p>
            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1d1e1c] leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Features that work<br /><span className="text-[#fa5d00]">without WiFi.</span>
            </h3>
            <p className="text-[15px] text-[#615f5c] max-w-[480px] leading-[1.65]">
              The offline version runs on your machine. No cloud dependency, and no downtime when the network drops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <WifiOff className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">100% Offline</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Works without any internet connection. Every feature stays available locally.</p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Student Tracking</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">A digital identity for every child. Track finances, print statements, manage fees and more.</p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Child Safeguarding (SDG 4 &amp; 10)</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Track students on CDF bursaries, government grants, CAMFED, and UNICEF scholarships. Subsidized learners are protected from fee lockouts and never excluded from classes.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Finance &amp; Payments</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Generate invoices, track arrears, and generate <strong className="text-[#1d1e1c]">receipts for cash payments</strong> instantly.</p>
              <span className="inline-block text-[10px] font-bold bg-[#fee3b5] text-[#fa5d00] rounded-full px-2.5 py-0.5 border border-[#fa5d00]/20 mt-3">Cash only</span>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Lightning Fast Receipts</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Print professional thermal receipts in under 2 seconds. No ink, no cartridges, just fast, clean prints every time.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Admissions &amp; Enrollment</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Simple applications and clear approvals to manage new student intake.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Shield className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Security &amp; User Management</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Configurable roles and permissions. Your records never leave your school premises.</p>
            </div>

            <div className="sm:col-span-2 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <Database className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Secure Local Storage</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">All data stays on your office computer. Safe, private, and always accessible.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Reporting &amp; Analytics</p>
                  <p className="text-[13px] text-[#615f5c] leading-[1.6]">Get quick answers on collections, outstanding fees, and payment trends.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Banknote className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Multi-Currency Support</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">Built for Southern Africa. USD, ZMW, and ZWG support comes standard.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Built for reality</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Why go <span className="text-[#fa5d00]">offline?</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Proven advantages of local-first school software engineered for Southern African power and connectivity realities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'No internet required', body: "Many Southern African schools operate in areas with unreliable or no internet. SchoolFoundry Offline works perfectly in those conditions." },
              { title: 'Total data privacy', body: "Your school's financial and student data never leaves your premises. No third-party servers, no data mining, no risk." },
              { title: 'One-time cost', body: "No monthly fees or subscriptions. Pay once and the system is yours forever. Built for schools with tight budgets." },
              { title: 'Instant receipts', body: "Parents and guardians get a professional printed receipt the moment they pay. No more 'I paid but there's no proof' disputes." },
            ].map(({ title, body }, idx) => (
              <div key={idx} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all cursor-default">
                <p className="font-bold text-[17px] text-[#1d1e1c] mb-2">{title}</p>
                <p className="text-[14px] text-[#615f5c] leading-[1.6]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] flex flex-col justify-center">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">Ready to go offline?</p>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-[#1d1e1c] leading-[1.1] mb-4 tracking-tight">
                Get your school<br /><span className="text-[#fa5d00]">ready today.</span>
              </h3>
              <p className="text-[15px] text-[#615f5c] leading-[1.65] mb-8">
                No complicated tech talk, no pressure, and definitely no commitment. Let's chat about what your school needs.
              </p>

              <div className="space-y-3.5">
                {[
                  'One-off payment, no monthly bills',
                  'Works completely offline',
                  'Includes printer + paper rolls',
                  'Simple setup, no special training required',
                  'Friendly guides included',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#fa5d00] flex-shrink-0" />
                    <span className="text-[14px] text-[#4a4a47] font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#fa5d00]/30 rounded-[20px] p-8 sm:p-12 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fee3b5]/40 via-transparent to-transparent pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-[#fee3b5] flex items-center justify-center text-[#fa5d00] mb-6 shadow-sm relative z-10">
                <Package className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#1d1e1c] mb-3 relative z-10">The Offline Version</h4>
              <p className="text-[14px] text-[#615f5c] leading-[1.6] mb-8 max-w-sm relative z-10">
                High-speed thermal printer, 10 starter paper rolls, lifetime software license, and full support to get you running.
              </p>
              <a
                href="/#contact"
                className="px-10 py-4.5 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-base transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] inline-flex items-center gap-2 relative z-10"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
