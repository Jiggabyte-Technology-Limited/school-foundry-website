import React from 'react';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] flex items-center justify-center pt-20 text-[#1d1e1c] selection:bg-[#fee3b5] selection:text-[#fa5d00] tracking-[0.015em]">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-[#fee3b5] rounded-[20px] flex items-center justify-center mx-auto mb-8 border border-[#fa5d00]/20 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
            <Hammer className="w-10 h-10 text-[#fa5d00] animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#1d1e1c] mb-6 tracking-tight leading-[1.1]">
            Legal & POPIA
          </h1>
          <p className="text-xl text-[#615f5c] font-medium max-w-lg mx-auto leading-relaxed">
            We take data privacy seriously. Our legal terms and POPIA compliance documents are currently being refined by our legal team.
          </p>
          <div className="mt-12">
            <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] font-mono text-xs uppercase tracking-[0.25em] font-bold shadow-[rgba(0,0,0,0.05)_0px_1px_4px_0px]">
              Under Construction
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
