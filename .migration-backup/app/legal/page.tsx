'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#07090E] flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
            <Hammer className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter">Legal & POPIA</h1>
          <p className="text-xl text-white/50 font-medium max-w-lg mx-auto leading-relaxed">
            We take data privacy seriously. Our legal terms and POPIA compliance documents are currently being refined by our legal team.
          </p>
          <div className="mt-12">
            <span className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono text-xs uppercase tracking-[0.3em]">
              Under Construction
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
