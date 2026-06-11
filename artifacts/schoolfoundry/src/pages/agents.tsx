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
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
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
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Become a Partner</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Build Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Passive Income</span>
              <br />as a School Foundry Agent
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
              Join our network of trusted agents across Zimbabwe and Zambia. Earn $100 per sale, plus recurring monthly commissions when schools transition to our Cloud Version.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Why Become an Agent</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[600px] tracking-tight">
              The Agent <span className="text-primary">Advantage.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Immediate Commissions</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Earn $100 per Offline Bundle sale. Payments are processed immediately upon installation and school payment verification.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Recurring Revenue</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                When schools transition to the Cloud Version, you earn a monthly commission. Build passive income as your network grows.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Professional Support</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Access to branded materials, training, and a dedicated support team. You're not alone—we're building this together.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Partner Kit</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Receive branded clothing, business cards, and professional materials to represent School Foundry with pride.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Regional Expansion</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Start in your local area and expand as you grow. We're building a network across Zimbabwe and Zambia.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Easy to Get Started</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Complete our training workshop, pass a demo test, and you're certified. No complex onboarding—just straightforward steps.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">The Path Forward</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[600px] tracking-tight">
              How to Become <span className="text-primary">Certified.</span>
            </h3>
          </div>

          <div className="space-y-6">
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
                className="flex gap-6 items-start p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-lg">
                  {step}
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-white mb-2">{title}</h4>
                  <p className="text-[14px] text-white/50 leading-[1.6]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/20 rounded-3xl p-12 sm:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-[28px] sm:text-[32px] font-black text-white mb-4 tracking-tight">
                Ready to Join the Network?
              </h3>
              <p className="text-[15px] text-white/60 mb-8 leading-[1.65]">
                Apply now to become a certified School Foundry agent. We're looking for passionate individuals who want to transform education in Southern Africa.
              </p>

              <form onSubmit={handleAgentSubmit} className="space-y-5 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={agentForm.name}
                  onChange={setAgentField('name')}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={agentForm.email}
                  onChange={setAgentField('email')}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={agentForm.phone}
                  onChange={setAgentField('phone')}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <select
                  value={agentForm.region}
                  onChange={setAgentField('region')}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="">Select Your Region</option>
                  <option value="harare">Harare, Zimbabwe</option>
                  <option value="masvingo">Masvingo, Zimbabwe</option>
                  <option value="lusaka">Lusaka, Zambia</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Tell us about your experience and why you want to join School Foundry"
                  value={agentForm.experience}
                  onChange={setAgentField('experience')}
                  required
                  rows={4}
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />

                {agentState === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-red-400 text-sm">{agentError}</p>
                  </div>
                )}

                {agentState === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="text-green-400 text-sm">Application submitted! We'll be in touch soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={agentState === 'loading'}
                  className="w-full px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
