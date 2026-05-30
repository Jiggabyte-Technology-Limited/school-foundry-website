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

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
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
      const base = import.meta.env.BASE_URL.replace(/\/$/, '');
      const res = await fetch(`${base}/api/contact`, {
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

  const inputClass = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all text-sm";

  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Contact Us</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Let's Start a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Conversation</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed">
              Whether you're ready to modernize your school's operations or just have questions, we're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            <div className="lg:col-span-3 bg-[#07090E] border border-white/10 rounded-2xl p-8 sm:p-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2">Send a Message</p>
              <h3 className="text-2xl font-black text-white mb-8 tracking-tight">We'd love to hear from you</h3>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-white/50 max-w-sm">We've received your message and will get back to you within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="mt-4 text-sm text-primary hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">Full Name *</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Jane Dube" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">Email Address *</label>
                      <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@yourschool.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">Phone / WhatsApp</label>
                      <input value={form.phone} onChange={set('phone')} placeholder="+260 xxx xxx xxx" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">School Name</label>
                      <input value={form.school} onChange={set('school')} placeholder="Munali Secondary School" className={inputClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-white/40 font-bold">Message *</label>
                    <textarea required value={form.message} onChange={set('message')} rows={5} placeholder="Tell us about your school and what you need..." className={`${inputClass} resize-none`} />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2"
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
              <div className="bg-[#07090E] border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</p>
                <a href="mailto:schoolfoundry@jiggabyte.co.zm" className="text-white font-bold hover:text-primary transition-colors text-sm break-all">
                  schoolfoundry@jiggabyte.co.zm
                </a>
                <p className="text-xs text-white/40 mt-1">Response within 24 hours</p>
              </div>

              {[
                { country: 'Zambia', number: ZAMBIA_NUMBER, display: ZAMBIA_DISPLAY },
                { country: 'Zimbabwe', number: ZIM_NUMBER, display: ZIM_DISPLAY },
              ].map(({ country, number, display }) => (
                <div key={country} className="bg-[#07090E] border border-white/10 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{country}</p>
                  <p className="text-white font-bold text-sm mb-3">{display}</p>
                  <div className="flex gap-2">
                    <a href={`tel:+${number}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-primary/10 hover:text-primary text-white/70 rounded-lg font-bold text-xs border border-white/10 transition-all">
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                    <a href={`https://wa.me/${number}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] text-white/70 rounded-lg font-bold text-xs border border-white/10 transition-all">
                      <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-[#07090E] border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Hours</p>
                <p className="text-white font-bold text-sm">Mon – Fri, 8AM – 5PM CAT</p>
                <div className="flex items-center gap-2 mt-3">
                  <Globe className="w-4 h-4 text-primary" />
                  <p className="text-xs text-white/40">Jiggabyte Technology Limited · Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Common Questions</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">Frequently Asked Questions</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
                <p className="font-bold text-[15px] text-white mb-2">{faq.question}</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 sm:p-16 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="flex items-center gap-3 flex-shrink-0">
              <img src="/logo.svg" alt="" className="h-12 w-auto" />
              <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg mb-1">Ready to move your school away from paper?</p>
              <p className="text-white/40 text-sm">Lusaka, Zambia · Built for Southern Africa</p>
            </div>
            <a href="mailto:schoolfoundry@jiggabyte.co.zm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg flex-shrink-0">
              <Mail className="w-4 h-4" />Email Us<ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
