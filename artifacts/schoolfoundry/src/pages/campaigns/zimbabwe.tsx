import React from 'react';
import { motion } from 'framer-motion';
import {
  Map,
  Monitor,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Mail,
  Phone,
  School,
  Users,
  ExternalLink,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ZIM_NUMBER = '27696372803';
const ZIM_DISPLAY = '+27 69 637 2803';

export default function ZimbabweCampaignPage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] pt-32 pb-24 tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden text-[#1d1e1c]">

      <div className="max-w-[1200px] mx-auto px-6 relative">

        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] pointer-events-none text-[#fa5d00] opacity-5 blur-sm overflow-hidden">
          <div className="transform rotate-12 scale-150">
            <Globe className="w-full h-full" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-8">

          <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#c0bbb6]/40 text-[#fa5d00] mb-8 font-mono text-[10px] uppercase tracking-widest shadow-xs">
              <span className="text-lg">🇿🇼</span>
              <span className="border-l border-[#d9d9d9] pl-3 font-semibold text-[#615f5c]">Source: MoPSE 2024 Statistics Report</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.9]">
              Powering <span className="text-[#fa5d00]">11,371</span> <br/>
              Zimbabwean Schools.
            </h1>
            <p className="text-xl text-[#615f5c] max-w-xl font-medium leading-relaxed mb-10">
              Managing multi-currency fees (USD &amp; ZWG) and BEAM bursary allocations with paper books creates administrative overload. School Foundry delivers 100% offline software to shield subsidized learners and balance accounts with total clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-semibold bg-[#fa5d00] hover:bg-[#e05300] text-white shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px] hover:shadow-[rgba(250,166,0,0.35)_0px_4px_16px_0px]" asChild>
                <Link href="/contact">Request a Private Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 w-full max-w-[500px] mx-auto">
              <img
                src="https://flagcdn.com/zw.svg"
                alt="Flag of Zimbabwe"
                className="w-full h-auto shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] rounded-[20px] overflow-hidden border border-[#d9d9d9]"
              />
            </div>
            <div className="absolute inset-0 bg-[#fa5d00]/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fee3b5]/30 blur-[120px] rounded-full -z-20" />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            {
              label: 'Total Schools',
              value: '11,371',
              sub: 'Primary & Secondary',
              icon: School,
              color: 'text-[#fa5d00]',
              desc: 'Over 8,000 primary and 3,357 secondary schools across 10 provinces.'
            },
            {
              label: 'BEAM Safeguarding',
              value: '100%',
              sub: 'Bursary Shield Active',
              icon: ShieldCheck,
              color: 'text-[#fa5d00]',
              desc: 'Sponsored learners are shielded from fee lockouts and never excluded from exams.'
            },
            {
              label: 'Multi-Currency',
              value: 'USD & ZWG',
              sub: 'Dual Ledger Support',
              icon: TrendingUp,
              color: 'text-[#fa5d00]',
              desc: 'Automatic currency isolation and conversion for transparent collections.'
            },
            {
              label: 'Rural Schools',
              value: '73%',
              sub: 'Of Primary Schools',
              icon: Map,
              color: 'text-[#fa5d00]',
              desc: 'The offline bundle delivers zero-downtime operations without needing WiFi.'
            }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-8 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fee3b5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8e8b87] mb-2">{stat.label}</p>
              <h3 className="text-4xl font-bold text-[#1d1e1c] mb-2 tracking-tight font-mono">{stat.value}</h3>
              <p className={`${stat.color} font-bold text-sm mb-4`}>{stat.sub}</p>
              <p className="text-[#615f5c] text-xs leading-relaxed font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 p-8 rounded-[20px] bg-white border border-[#c0bbb6]/40 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px] flex flex-col md:flex-row items-center gap-8 group hover:shadow-[rgba(250,166,0,0.35)_8px_6px_32px_0px] transition-all"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#fee3b5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-[#fa5d00]">
            <FileText className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-[#1d1e1c] mb-1">MoPSE Annual Statistical Report 2024</h4>
            <p className="text-[#615f5c] text-sm font-medium">Ministry of Primary and Secondary Education. Access the full report for national school statistics.</p>
          </div>
          <Button variant="outline" className="rounded-2xl border-[#c0bbb6] text-[#1d1e1c] hover:bg-[#fff8f1] hover:border-[#fa5d00] hover:text-[#fa5d00] gap-2 flex-shrink-0" asChild>
            <a href="https://www.mopse.co.zw/sites/default/files/publications/Annual%20Statistical%20Report%202024.pdf" target="_blank" rel="noopener noreferrer">
              Open Report <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-tight">
              Provincial school <br/>
              <span className="text-[#fa5d00] text-3xl sm:text-4xl uppercase tracking-widest">distribution</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#fee3b5] text-[#fa5d00]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1d1e1c]">Manicaland Province</h4>
                </div>
                <p className="text-[#615f5c] leading-relaxed font-medium text-sm">
                  Leads the nation with <strong>1,735 schools</strong> (1,259 primary, 476 secondary). The eastern highlands region has extensive school networks requiring modern fee management.
                </p>
              </div>
              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#fee3b5] text-[#fa5d00]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1d1e1c]">Urban Centers</h4>
                </div>
                <p className="text-[#615f5c] leading-relaxed font-medium text-sm">
                  Harare and Bulawayo have the lowest number of schools but highest demand for cloud-based parent communication and digital payment tracking.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-10 sm:p-12 relative overflow-hidden shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-[#fa5d00]">
              <Award className="w-64 h-64" />
            </div>
            <h4 className="text-3xl font-bold mb-8 text-[#1d1e1c] tracking-tight">Top Provinces</h4>
            <div className="space-y-6 relative z-10">
              {[
                { label: 'Manicaland', value: '1,735 Schools' },
                { label: 'Mashonaland Central', value: '46,861 OOSC' },
                { label: 'Harare Metro', value: 'Urban Demand' },
                { label: 'Bulawayo', value: 'Lowest OOSC' },
              ].map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-[#d9d9d9] pb-3 group">
                  <p className="text-[#615f5c] font-semibold group-hover:text-[#fa5d00] transition-colors">{label}</p>
                  <p className="text-[#1d1e1c] font-mono font-bold text-xl">{value}</p>
                </div>
              ))}
              <div className="pt-4">
                <p className="text-sm text-[#fa5d00] font-bold italic">"Modern fee tracking keeps learners enrolled by reducing payment friction."</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 bg-white border border-[#c0bbb6]/40 rounded-[20px] p-10 sm:p-14 relative overflow-hidden shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fee3b5] border border-[#fa5d00]/20 text-[#fa5d00] mb-6 font-mono text-[10px] uppercase tracking-widest font-bold">
                <Zap className="w-3.5 h-3.5 text-[#fa5d00]" />
                <span>Offline-First Design</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1e1c] mb-6 tracking-tight">Built for Rural Zimbabwe</h3>
              <p className="text-[#615f5c] leading-relaxed font-medium mb-6">
                With <strong>73% of primary learners in rural schools</strong>, connectivity remains a challenge. Our Offline Bundle works without internet — perfect for schools in Mashonaland East, Masvingo, and beyond.
              </p>
              <ul className="space-y-4 text-[#615f5c]">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#fee3b5] text-[#fa5d00] mt-0.5"><Monitor className="w-4 h-4" /></div>
                  <span className="text-sm font-medium">No internet required — thermal printer setup works standalone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#fee3b5] text-[#fa5d00] mt-0.5"><Map className="w-4 h-4" /></div>
                  <span className="text-sm font-medium">Multi-currency support for ZWL, USD, and ZAR transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#fee3b5] text-[#fa5d00] mt-0.5"><Users className="w-4 h-4" /></div>
                  <span className="text-sm font-medium">Instant receipts reduce "I paid but there's no proof" disputes</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#fff8f1] rounded-[20px] p-8 border border-[#d9d9d9]">
              <h4 className="text-xl font-bold text-[#1d1e1c] mb-6">Why Offline Works for Zimbabwe</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#d9d9d9]">
                  <span className="text-[#615f5c] font-medium">Rural Primary Learners</span>
                  <span className="text-[#fa5d00] font-bold text-xl">73%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#d9d9d9]">
                  <span className="text-[#615f5c] font-medium">Out-of-School (Lower Secondary)</span>
                  <span className="text-[#fa5d00] font-bold text-xl">37%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#d9d9d9]">
                  <span className="text-[#615f5c] font-medium">Schools in Rural Areas</span>
                  <span className="text-[#fa5d00] font-bold text-xl">Majority</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-12 sm:p-16 text-center relative overflow-hidden shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
        >
          <h3 className="text-3xl sm:text-5xl font-bold text-[#1d1e1c] mb-6 tracking-tight text-balance">Ready to modernize your Zimbabwean school's fee collection?</h3>
          <p className="text-lg sm:text-xl text-[#615f5c] max-w-2xl mx-auto mb-8 font-medium">
            Whether you're in Harare's urban core or a rural school in Manicaland, we have the right solution for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#fff8f1] text-[#1d1e1c] rounded-2xl font-bold border border-[#c0bbb6] shadow-xs">
              <Phone className="w-4 h-4 text-[#fa5d00]" />
              Zimbabwe: {ZIM_DISPLAY}
              <a href={`tel:+${ZIM_NUMBER}`} className="ml-1 p-1 rounded hover:bg-[#fee3b5] hover:text-[#fa5d00] transition-colors" title="Call"><Phone className="w-3.5 h-3.5" /></a>
              <a href={`https://wa.me/${ZIM_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-[#fee3b5] hover:text-[#fa5d00] transition-colors" title="WhatsApp"><WhatsAppIcon className="w-3.5 h-3.5" /></a>
            </div>
            <a href="mailto:schoolfoundry@jiggabyte.co.zm"
              className="flex items-center gap-2 px-6 py-3 bg-[#fff8f1] hover:bg-[#fee3b5] text-[#1d1e1c] rounded-2xl font-bold transition-all border border-[#c0bbb6] shadow-xs">
              <Mail className="w-4 h-4 text-[#fa5d00]" />
              schoolfoundry@jiggabyte.co.zm
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button size="lg" className="rounded-2xl px-8 h-14 text-base font-semibold bg-[#fa5d00] hover:bg-[#e05300] text-white shadow-[rgba(0,0,0,0.2)_0px_1px_4px_0px]" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 h-14 text-base font-semibold border-[#c0bbb6] text-[#1d1e1c] hover:bg-[#fff8f1] hover:border-[#fa5d00] hover:text-[#fa5d00]" asChild>
              <Link href="/online">See the Online Cloud</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 h-14 text-base font-semibold border-[#c0bbb6] text-[#1d1e1c] hover:bg-[#fff8f1] hover:border-[#fa5d00] hover:text-[#fa5d00]" asChild>
              <Link href="/offline">Explore Offline Bundle</Link>
            </Button>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-[11px] uppercase tracking-[0.2em] font-bold text-[#8e8b87]">
          Source:{' '}
          <a href="https://www.mopse.co.zw/sites/default/files/publications/Annual%20Statistical%20Report%202024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#fa5d00] transition-colors underline underline-offset-4">
            Ministry of Primary and Secondary Education — Annual Statistical Report 2024
          </a>
        </p>

      </div>
    </div>
  );
}
