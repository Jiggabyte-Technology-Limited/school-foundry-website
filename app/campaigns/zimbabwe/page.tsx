'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, ArrowLeft, Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ZimbabweCampaignPage() {
  return (
    <div className="min-h-screen bg-[#07090E] flex flex-col items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-2xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-primary/20 shadow-2xl shadow-primary/5">
            <Hammer className="w-10 h-10 text-primary animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Globe className="w-3.5 h-3.5" />
            <span>Expanding to Zimbabwe</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            Coming Soon to <br/>
            <span className="text-primary">Zimbabwe</span>
          </h1>

          <p className="text-xl text-white/50 font-medium mb-8 leading-relaxed">
            We are currently finalizing our local integrations and compliance for the Zimbabwean market. We&apos;ll be launching our specialized school management solutions very soon.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm">
            <a
              href="tel:+27696372803"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              <div className="p-1.5 rounded-lg bg-white/5">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              Zimbabwe: +27 69 637 2803
            </a>
            <a
              href="mailto:info@jiggabyte.co.zm"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              <div className="p-1.5 rounded-lg bg-white/5">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              info@jiggabyte.co.zm
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <span className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] font-black">
          Under Construction
        </span>
      </div>
    </div>
  );
}
