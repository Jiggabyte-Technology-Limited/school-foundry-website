'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  ArrowRight,
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@jiggabyte.co.zm',
    href: 'mailto:info@jiggabyte.co.zm',
    description: 'We respond within 24 hours',
    color: 'primary',
  },
  {
    icon: Phone,
    label: 'Zimbabwe',
    value: '+27 69 637 2803',
    href: 'tel:+27696372803',
    description: 'Available Mon-Fri, 8AM-5PM CAT',
    color: 'primary',
  },
  {
    icon: Phone,
    label: 'Zambia',
    value: '+260 570 326 775',
    href: 'tel:+260570326775',
    description: 'Available Mon-Fri, 8AM-5PM CAT',
    color: 'primary',
  },
];

const FAQS = [
  {
    question: 'How quickly do you respond?',
    answer: 'We aim to respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'Do you offer support in both Zambia and Zimbabwe?',
    answer: 'Yes, we provide full support and implementation services in both countries.',
  },
  {
    question: 'Can I schedule a demo?',
    answer: 'Absolutely! Reach out via email or phone, and we\'ll arrange a personalized demonstration at your convenience.',
  },
  {
    question: 'What are your business hours?',
    reply: 'We operate Monday to Friday, 8:00 AM to 5:00 PM Central Africa Time (CAT).',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
              Contact Us
            </motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Let's Start a<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Conversation</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed">
              Whether you're ready to modernize your school's operations or just have questions, we're here to help. Reach out through any of the channels below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Get in Touch</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              We'd love to hear from you
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {CONTACT_METHODS.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 sm:p-10 cursor-default group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">{method.label}</p>
                <p className="text-xl font-bold text-white mb-3 break-all">{method.value}</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left - Info */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-[28px] font-black text-white mb-4 tracking-tight">
                Our Office
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8] mb-6">
                SchoolFoundry is developed by Jiggabyte Technology Limited, based in Lusaka, Zambia. We serve schools across Southern Africa with a focus on Zambia and Zimbabwe.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm">Jiggabyte Technology Limited</p>
                    <p className="text-white/50 text-sm">Lusaka, Zambia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm">Business Hours</p>
                    <p className="text-white/50 text-sm">Monday – Friday, 8:00 AM – 5:00 PM CAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Prefer WhatsApp?</h4>
              <p className="text-[13px] text-white/50 mb-6 max-w-sm leading-relaxed">
                Reach out via WhatsApp for quick questions or to schedule a demo. We're active on both Zambian and Zimbabwean numbers.
              </p>
              <a
                href="https://wa.me/260570326775"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-base hover:bg-[#25D366]/90 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Common Questions</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
                <p className="font-bold text-[15px] text-white mb-2">{faq.question}</p>
                <p className="text-[13px] text-white/50 leading-[1.6]">{faq.answer || faq.reply}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} alt="" className="h-10 w-auto" />
                <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
              </div>
              <p className="text-[15px] text-white/50 leading-[1.7] mb-4">
                Ready to move your school away from paper? Reach out today and let's discuss how SchoolFoundry can help streamline your operations.
              </p>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30">
                Lusaka, Zambia · Built for Southern Africa
              </p>
            </div>

            {/* Right - CTA */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-[17px] text-white mb-3">Ready to get started?</p>
              <p className="text-[13px] text-white/50 mb-8 max-w-sm leading-relaxed">
                Choose the best way to reach us, and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="mailto:info@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg flex-1"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href="tel:+260570326775"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/10 transition-all flex-1"
                >
                  Call Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
