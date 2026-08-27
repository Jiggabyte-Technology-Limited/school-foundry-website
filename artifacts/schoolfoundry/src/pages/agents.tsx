import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Globe,
  Zap,
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

type AgentFormState = 'idle' | 'loading' | 'success' | 'error';

export default function AgentsPage() {
  const [agentState, setAgentState] = useState<AgentFormState>('idle');
  const [agentError, setAgentError] = useState('');
  const [agentForm, setAgentForm] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    experience: '',
  });

  const setAgentField = (field: keyof typeof agentForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setAgentForm((current) => ({ ...current, [field]: event.target.value }));

  const handleAgentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAgentState('loading');
    setAgentError('');

    try {
      const response = await fetch(getFormsApiUrl('/api/agent-application'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agentForm),
      });

      const payload = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong');
      }

      setAgentForm({
        name: '',
        email: '',
        phone: '',
        region: '',
        experience: '',
      });
      setAgentState('success');
    } catch (error) {
      setAgentError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setAgentState('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-[#fa5d00] font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-4 block">Become a Partner</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.95]">
              Build Your<br />
              <span className="text-[#fa5d00]">Passive Income</span>
              <br />as a School Foundry Agent
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#615f5c] font-medium leading-relaxed max-w-2xl mx-auto">
              Join our network of trusted agents across Zimbabwe and Zambia. Earn $100 per sale, plus recurring monthly commissions when schools transition to our Cloud Version.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">Why Become an Agent</p>
            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1d1e1c] leading-[1.1] mb-4 max-w-[600px] tracking-tight">
              The Agent <span className="text-[#fa5d00]">Advantage.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <DollarSign className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Immediate Commissions</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Earn $100 per Offline Bundle sale. Payments are processed immediately upon installation and school payment verification.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Recurring Revenue</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                When schools transition to the Cloud Version, you earn a monthly commission. Build passive income as your network grows.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Award className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Professional Support</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Access to branded materials, training, and a dedicated support team. You're not alone—we're building this together.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Briefcase className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Partner Kit</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Receive branded clothing, business cards, and professional materials to represent School Foundry with pride.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Globe className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Regional Expansion</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Start in your local area and expand as you grow. We're building a network across Zimbabwe and Zambia.
              </p>
            </div>

            <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                <Zap className="w-5 h-5" />
              </div>
              <p className="font-bold text-[16px] text-[#1d1e1c] mb-1">Easy to Get Started</p>
              <p className="text-[13px] text-[#615f5c] leading-[1.6]">
                Complete our training workshop, pass a demo test, and you're certified. No complex onboarding—just straightforward steps.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#fa5d00] mb-3">The Path Forward</p>
            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1d1e1c] leading-[1.1] mb-4 max-w-[600px] tracking-tight">
              How to Become <span className="text-[#fa5d00]">Certified.</span>
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Application & Call',
                desc: 'Submit your application. We\'ll have a brief call to explain the School Foundry vision and see if you\'re a good fit.'
              },
              {
                step: '2',
                title: 'Training Workshop',
                desc: 'Attend a comprehensive training session covering the product, trust-based sales techniques, and operational SOPs.'
              },
              {
                step: '3',
                title: 'Demo Test',
                desc: 'Pitch the School Foundry system to us as if we were a school. We\'ll provide feedback and ensure you\'re ready for the field.'
              },
              {
                step: '4',
                title: 'Certification & Launch',
                desc: 'Once approved, you\'re officially certified. Receive your Partner Kit and start approaching schools in your region.'
              },
            ].map(({ step, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex gap-6 items-start p-7 bg-white border border-[#c0bbb6]/40 rounded-[20px] shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fee3b5] flex items-center justify-center flex-shrink-0 font-bold text-[#fa5d00] text-lg font-mono">
                  {step}
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#1d1e1c] mb-2">{title}</h4>
                  <p className="text-[14px] text-[#615f5c] leading-[1.6]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-14 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-[28px] sm:text-[32px] font-bold text-[#1d1e1c] mb-4 tracking-tight">
                Ready to Join the Network?
              </h3>
              <p className="text-[15px] text-[#615f5c] mb-8 leading-[1.65]">
                Apply now to become a certified School Foundry agent. We're looking for passionate individuals who want to transform education in Southern Africa.
              </p>

              <form onSubmit={handleAgentSubmit} className="space-y-4 max-w-md mx-auto text-left">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#615f5c] block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Dube"
                    value={agentForm.name}
                    onChange={setAgentField('name')}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#c0bbb6] rounded-2xl text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#615f5c] block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={agentForm.email}
                    onChange={setAgentField('email')}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#c0bbb6] rounded-2xl text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#615f5c] block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+260 xxx xxx xxx"
                    value={agentForm.phone}
                    onChange={setAgentField('phone')}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#c0bbb6] rounded-2xl text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#615f5c] block mb-1.5">Your Region</label>
                  <select
                    value={agentForm.region}
                    onChange={setAgentField('region')}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#c0bbb6] rounded-2xl text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all text-sm"
                  >
                    <option value="">Select Your Region</option>
                    <option value="harare">Harare, Zimbabwe</option>
                    <option value="masvingo">Masvingo, Zimbabwe</option>
                    <option value="lusaka">Lusaka, Zambia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#615f5c] block mb-1.5">Experience &amp; Motivation</label>
                  <textarea
                    placeholder="Tell us about your experience and why you want to join School Foundry"
                    value={agentForm.experience}
                    onChange={setAgentField('experience')}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-[#c0bbb6] rounded-2xl text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all resize-none text-sm"
                  />
                </div>

                {agentState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-700 text-sm font-medium">{agentError}</p>
                  </div>
                )}

                {agentState === 'success' && (
                  <div className="p-4 bg-[#fee3b5] border border-[#fa5d00]/20 rounded-2xl">
                    <p className="text-[#fa5d00] text-sm font-semibold">Application submitted! We'll be in touch soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={agentState === 'loading'}
                  className="w-full px-8 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 text-base"
                >
                  {agentState === 'loading' ? 'Submitting...' : 'Apply Now'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
