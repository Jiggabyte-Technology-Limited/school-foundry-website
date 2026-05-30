'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Printer,
  HardDrive,
  Zap,
  Shield,
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
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-8 font-mono text-[10px] uppercase tracking-widest">
                <WifiOff className="w-3 h-3" />
                Offline Version
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.95]">
                No Internet?<br />
                <span className="text-primary">No Problem.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl leading-relaxed font-medium">
                Built for schools that need a dependable system on the office computer. SchoolFoundry Offline keeps working when the internet is unavailable, so your team can record fees, print receipts, and manage student records without interruption.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] text-center"
                >
                  Get a Quote
                </a>
                <a
                  href="#whats-included"
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 transition-all text-center backdrop-blur-md"
                >
                  See What&apos;s Included
                </a>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/offline-bundle.jpg`}
                alt="SchoolFoundry Offline Version, laptop, receipt printer, and paper rolls"
                className="w-full h-auto object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── What You Get - The Bundle ───────────────────── */}
      <section className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Everything in one box</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              The Deployment<br /><span className="text-primary">Bundle.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              One purchase. Everything you need to get started from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Thermal Printer - wide */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors cursor-default">
              <div className="w-full h-48 sm:h-56 bg-[#0B0D13] overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bundle-printer.jpg`} alt="High-Speed Thermal Printer" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Printer className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">High-Speed Thermal Printer</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">
                  No ink required, ever. Built to handle your busiest registration days. Prints professional receipts in under <strong className="text-white/70">2 seconds</strong>.
                </p>
              </div>
            </div>

            {/* Paper Rolls */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors cursor-default">
              <div className="w-full h-48 sm:h-56 bg-[#0B0D13] overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bundle-paper.jpg`} alt="10 Thermal Paper Rolls" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Receipt className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">10 Starter Paper Rolls</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">
                  Standard 80×80mm thermal rolls. Everything you need to start printing on Day 1.
                </p>
              </div>
            </div>

            {/* Software + License - wide */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors cursor-default">
              <div className="w-full h-48 sm:h-56 bg-[#0B0D13] overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/welcome-school-foundry.png`} alt="SchoolFoundry Software with Lifetime License" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">SchoolFoundry Software + Lifetime License</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">
                  Full school management system installed and ready to use on your office computer. One-time payment, no monthly fees. Includes learner tracking, fee management, reporting, and receipt printing.
                </p>
              </div>
            </div>

            {/* Lifetime License */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-[18px] h-[18px] text-emerald-500" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Lifetime License</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                One-time payment. You own your records forever. No hidden monthly fees, no subscriptions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────── */}
      <section id="whats-included" className="py-16 sm:py-24 bg-[#0B0D13]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Built for offline schools</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Features that work<br /><span className="text-primary">without WiFi.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              The offline version runs on your machine. No cloud dependency, and no downtime when the network drops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* 100% Offline */}
            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <WifiOff className="w-[18px] h-[18px] text-emerald-500" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">100% Offline</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Works without any internet connection. Every feature stays available locally.</p>
            </div>

            {/* Student Tracking */}
            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Tracking</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">A digital identity for every child. Track finances, print statements, manage fees and more.</p>
            </div>

            {/* Finance & Payments */}
            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Finance & Payments</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Generate invoices, track arrears, and generate <strong className="text-white/70">receipts for cash payments</strong> instantly.</p>
              <span className="inline-block text-[10px] font-bold bg-orange-500/10 text-orange-500 rounded px-2 py-0.5 border border-orange-500/20 mt-3">Cash only</span>
            </div>

            {/* Receipt Printing - wide */}
            <div className="sm:col-span-2 bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Lightning Fast Receipts</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Print professional thermal receipts in under 2 seconds. No ink, no cartridges, just fast, clean prints every time.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Admissions & Enrollment</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Simple applications and clear approvals to manage new student intake.</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Security & User Management</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Configurable roles and permissions. Your records never leave your school premises.</p>
            </div>

            {/* Local Storage + Reporting - wide bottom */}
            <div className="sm:col-span-2 bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Database className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Secure Local Storage</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">All data stays on your office computer. Safe, private, and always accessible.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Reporting & Analytics</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Get quick answers on collections, outstanding fees, and payment trends. Every decision backed by clear numbers.</p>
                </div>
              </div>
            </div>

            {/* Multi-Currency */}
            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Banknote className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Multi-Currency Support</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Built for Southern Africa. USD, ZMW, and ZWG support comes standard.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Offline- ────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Built for reality</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Why go<br /><span className="text-primary">offline-</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">No internet required</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Many Southern African schools operate in areas with unreliable or no internet. SchoolFoundry Offline works perfectly in those conditions.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">Total data privacy</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Your school&apos;s financial and student data never leaves your premises. No third-party servers, no data mining, no risk.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">One-time cost</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">No monthly fees or subscriptions. Pay once and the system is yours forever. Built for schools with tight budgets.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">Instant receipts</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Parents and guardians get a professional printed receipt the moment they pay. No more &quot;I paid but there&apos;s no proof&quot; disputes.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0B0D13]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left - info */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col justify-center">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-4">Ready to go offline-</p>
              <h3 className="text-[28px] sm:text-[34px] font-black text-white leading-[1.1] mb-4 tracking-tight">
                Get your school<br /><span className="text-primary">ready today.</span>
              </h3>
              <p className="text-[15px] text-white/50 leading-[1.65] mb-8">
                No complicated tech talk, no pressure, and definitely no commitment. Let&apos;s chat about what your school needs.
              </p>

              <div className="space-y-4">
                {[
                  'One-off payment, no monthly bills',
                  'Works completely offline',
                  'Includes printer + paper rolls',
                  'Simple setup, no special training required',
                  'Friendly guides included',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-[13px] text-white/70">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - action */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center items-center text-center">
              <Package className="w-12 h-12 text-primary mb-6" />
              <h4 className="text-2xl font-bold text-white mb-3">The Offline Version</h4>
              <p className="text-[13px] text-white/50 leading-[1.6] mb-8 max-w-sm">
                High-speed thermal printer, 10 starter paper rolls, lifetime software license, and full support to get you running.
              </p>
              <a
                href="/#contact"
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] inline-flex items-center gap-2"
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
