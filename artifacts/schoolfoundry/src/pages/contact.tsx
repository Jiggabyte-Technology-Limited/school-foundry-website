import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
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

const ZAMBIA_NUMBER = '260570326775';
const ZAMBIA_DISPLAY = '+260 570 326 775';
const ZIM_NUMBER = '27696372803';
const ZIM_DISPLAY = '+27 69 637 2803';

const FAQS = [
  { question: 'How quickly do you respond?', answer: 'We aim to respond to all inquiries within 24 hours during business days.' },
  { question: 'Do you offer support in both Zambia and Zimbabwe?', answer: 'Yes, we provide full support and implementation services in both countries.' },
  { question: 'Can I schedule a demo?', answer: "Absolutely! Fill in the form or call us and we'll arrange a personalized demonstration at your convenience." },
  { question: 'What are your business hours?', answer: 'We operate Monday to Friday, 8:00 AM to 5:00 PM Central Africa Time (CAT).' },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', message: '' });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');
    try {
      const res = await fetch(getFormsApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setFormState('success');
      setForm({ name: '', email: '', phone: '', school: '', message: '' });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setFormState('error');
    }
  };

  const inputClass = "w-full bg-white border border-[#c0bbb6] rounded-2xl px-4 py-3 text-[#1d1e1c] placeholder:text-[#8e8b87] focus:outline-none focus:border-[#fa5d00] focus:ring-2 focus:ring-[#fa5d00]/20 transition-all text-sm";

  return (
    <div className="min-h-screen bg-[#fff8f1] text-[#1d1e1c] tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#fff8f1]">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(250,93,0,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(254,227,181,0.4),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-[#fa5d00] font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-4 block">Contact Us</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.95]">
              Let's Start a<br />
              <span className="text-[#fa5d00]">Conversation</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#615f5c] font-medium leading-relaxed">
              Whether you're ready to modernize your school's operations or just have questions, we're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            <div className="lg:col-span-3 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 sm:p-10 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#fa5d00] mb-2">Send a Message</p>
              <h3 className="text-2xl font-bold text-[#1d1e1c] mb-8 tracking-tight">We'd love to hear from you</h3>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#fee3b5] flex items-center justify-center mb-2 text-[#fa5d00]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1d1e1c]">Message Sent!</h4>
                  <p className="text-[#615f5c] max-w-sm">We've received your message and will get back to you within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="mt-4 text-sm font-semibold text-[#fa5d00] hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#615f5c] font-bold">Full Name *</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Jane Dube" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#615f5c] font-bold">Email Address *</label>
                      <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@yourschool.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#615f5c] font-bold">Phone / WhatsApp</label>
                      <input value={form.phone} onChange={set('phone')} placeholder="+260 xxx xxx xxx" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#615f5c] font-bold">School Name</label>
                      <input value={form.school} onChange={set('school')} placeholder="Munali Secondary School" className={inputClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-[#615f5c] font-bold">Message *</label>
                    <textarea required value={form.message} onChange={set('message')} rows={5} placeholder="Tell us about your school and what you need..." className={`${inputClass} resize-none`} />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-2xl font-semibold text-sm transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {formState === 'loading' ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#8e8b87] font-bold mb-1">Email</p>
                <a href="mailto:schoolfoundry@jiggabyte.co.zm" className="text-[#1d1e1c] font-bold hover:text-[#fa5d00] transition-colors text-sm break-all">
                  schoolfoundry@jiggabyte.co.zm
                </a>
                <p className="text-xs text-[#8e8b87] mt-1">Response within 24 hours</p>
              </div>

              {[
                { country: 'Zambia', number: ZAMBIA_NUMBER, display: ZAMBIA_DISPLAY },
                { country: 'Zimbabwe', number: ZIM_NUMBER, display: ZIM_DISPLAY },
              ].map(({ country, number, display }) => (
                <div key={country} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                  <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8e8b87] font-bold mb-1">{country}</p>
                  <p className="text-[#1d1e1c] font-bold text-sm mb-3">{display}</p>
                  <div className="flex gap-2">
                    <a href={`tel:+${number}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#fff8f1] hover:bg-[#fee3b5] hover:text-[#fa5d00] text-[#1d1e1c] rounded-xl font-semibold text-xs border border-[#c0bbb6] shadow-xs transition-all">
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                    <a href={`https://wa.me/${number}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#fee3b5] hover:bg-[#fed390] text-[#fa5d00] rounded-xl font-semibold text-xs border border-[#fa5d00]/20 transition-all">
                      <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="w-10 h-10 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-4 text-[#fa5d00]">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#8e8b87] font-bold mb-1">Hours</p>
                <p className="text-[#1d1e1c] font-bold text-sm">Mon – Fri, 8AM – 5PM CAT</p>
                <div className="flex items-center gap-2 mt-3">
                  <Globe className="w-4 h-4 text-[#fa5d00]" />
                  <p className="text-xs text-[#8e8b87]">Jiggabyte Technology Limited · Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] text-xs font-bold uppercase tracking-widest mb-4">
              <Globe className="w-3.5 h-3.5 text-[#fa5d00]" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1e1c] leading-[1.1] mb-5 tracking-tight">
              Frequently Asked <span className="text-[#fa5d00]">Questions.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#615f5c] leading-[1.7]">
              Everything you need to know about deploying School Foundry at your institution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-7 cursor-default shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all">
                <p className="font-bold text-[16px] text-[#1d1e1c] mb-2">{faq.question}</p>
                <p className="text-[14px] text-[#615f5c] leading-[1.6]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#fff8f1] border-t border-[#d9d9d9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-[#c0bbb6]/40 rounded-[24px] p-12 sm:p-16 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
            <div className="flex items-center gap-3 flex-shrink-0">
              <img src={asset("/logo.svg")} alt="" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-[#1d1e1c] tracking-tight">School<span className="text-[#fa5d00]">Foundry</span></span>
            </div>
            <div className="flex-1">
              <p className="text-[#1d1e1c] font-bold text-lg mb-1">Ready to move your school away from paper?</p>
              <p className="text-[#8e8b87] text-sm">Lusaka, Zambia · Built for Southern Africa</p>
            </div>
            <a href="mailto:schoolfoundry@jiggabyte.co.zm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fa5d00] hover:bg-[#e05300] text-white rounded-full font-semibold transition-all shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px] flex-shrink-0">
              <Mail className="w-4 h-4" />Email Us<ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
