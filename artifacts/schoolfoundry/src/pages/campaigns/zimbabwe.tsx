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
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24 selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative">

        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] pointer-events-none text-[#006633] opacity-5 blur-sm overflow-hidden">
          <div className="transform rotate-12 scale-150">
            <Globe className="w-full h-full" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40 py-12">

          <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
              <span className="text-lg">🇿🇼</span>
              <span className="border-l border-white/10 pl-3">Source: MoPSE 2024 Statistics Report</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Powering <span className="text-[#FCD116]">11,371</span> <br/>
              Zimbabwean Schools.
            </h1>
            <p className="text-xl text-white/50 max-w-xl font-medium leading-relaxed mb-10">
              Zimbabwe's education network is expanding fast. From Harare to Manicaland, schools are modernizing how they manage fees, records, and parent communication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20" asChild>
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
                className="w-full h-auto shadow-2xl rounded-sm overflow-hidden border border-white/10"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-20 animate-pulse" />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              label: 'Total Schools',
              value: '11,371',
              sub: 'Primary & Secondary',
              icon: School,
              color: 'text-[#FCD116]',
              desc: 'Over 8,000 primary and 3,357 secondary schools across 10 provinces serving millions of learners.'
            },
            {
              label: 'New Schools Built',
              value: '2,873',
              sub: 'Since 2020',
              icon: TrendingUp,
              color: 'text-primary',
              desc: 'Massive infrastructure investment — nearly 3,000 new schools constructed between 2020 and 2024.'
            },
            {
              label: 'Rural Schools',
              value: '73%',
              sub: 'Of Primary Schools',
              icon: Map,
              color: 'text-[#006633]',
              desc: 'The majority of primary learners attend rural schools — perfect for our Offline Bundle solution.'
            }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-2">{stat.label}</p>
              <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</h3>
              <p className={`${stat.color} font-bold text-sm mb-6`}>{stat.sub}</p>
              <p className="text-white/40 text-sm leading-relaxed font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-8 group hover:bg-white/[0.04] transition-all"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-1">MoPSE Annual Statistical Report 2024</h4>
            <p className="text-white/40 text-sm font-medium">Ministry of Primary and Secondary Education. Access the full report for national school statistics.</p>
          </div>
          <Button variant="outline" className="rounded-xl border-white/10 hover:bg-white/5 gap-2 flex-shrink-0" asChild>
            <a href="https://www.mopse.co.zw/sites/default/files/publications/Annual%20Statistical%20Report%202024.pdf" target="_blank" rel="noopener noreferrer">
              Open Report <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              Provincial school <br/>
              <span className="text-primary text-3xl sm:text-4xl uppercase tracking-widest opacity-80">distribution</span>
            </h2>
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#006633]/10 border border-[#006633]/20">
                    <Users className="w-5 h-5 text-[#006633]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Manicaland Province</h4>
                </div>
                <p className="text-white/50 leading-relaxed font-medium">
                  Leads the nation with <strong>1,735 schools</strong> (1,259 primary, 476 secondary). The eastern highlands region has extensive school networks requiring modern fee management.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#FCD116]/10 border border-[#FCD116]/20">
                    <Globe className="w-5 h-5 text-[#FCD116]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Urban Centers</h4>
                </div>
                <p className="text-white/50 leading-relaxed font-medium">
                  Harare and Bulawayo have the lowest number of schools but highest demand for cloud-based parent communication and digital payment tracking.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/10 rounded-[3rem] p-12 relative overflow-hidden backdrop-blur-3xl"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Award className="w-64 h-64 text-primary" />
            </div>
            <h4 className="text-3xl font-black mb-10 text-white tracking-tight">Top Provinces</h4>
            <div className="space-y-8 relative z-10">
              {[
                { label: 'Manicaland', value: '1,735 Schools' },
                { label: 'Mashonaland Central', value: '46,861 OOSC' },
                { label: 'Harare Metro', value: 'Urban Demand' },
                { label: 'Bulawayo', value: 'Lowest OOSC' },
              ].map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4 group">
                  <p className="text-white/40 font-bold group-hover:text-white transition-colors">{label}</p>
                  <p className="text-white font-mono font-black text-xl">{value}</p>
                </div>
              ))}
              <div className="pt-6">
                <p className="text-sm text-primary font-bold italic">"Modern fee tracking keeps learners enrolled by reducing payment friction."</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006633]/10 border border-[#006633]/20 text-[#006633] mb-6 font-mono text-[10px] uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>Offline-First Design</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tighter">Built for Rural Zimbabwe</h3>
              <p className="text-white/50 leading-relaxed font-medium mb-6">
                With <strong>73% of primary learners in rural schools</strong>, connectivity remains a challenge. Our Offline Bundle works without internet — perfect for schools in Mashonaland East, Masvingo, and beyond.
              </p>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/10 mt-1"><Monitor className="w-4 h-4 text-primary" /></div>
                  <span>No internet required — thermal printer setup works standalone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/10 mt-1"><Map className="w-4 h-4 text-primary" /></div>
                  <span>Multi-currency support for ZWL, USD, and ZAR transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-primary/10 mt-1"><Users className="w-4 h-4 text-primary" /></div>
                  <span>Instant receipts reduce "I paid but there's no proof" disputes</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0A0D14] rounded-2xl p-8 border border-white/5">
              <h4 className="text-xl font-bold text-white mb-6">Why Offline Works for Zimbabwe</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/50 font-medium">Rural Primary Learners</span>
                  <span className="text-[#006633] font-bold text-xl">73%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/50 font-medium">Out-of-School (Lower Secondary)</span>
                  <span className="text-primary font-bold text-xl">37%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-white/50 font-medium">Schools in Rural Areas</span>
                  <span className="text-[#FCD116] font-bold text-xl">Majority</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-24 h-full flex opacity-10 pointer-events-none">
            <div className="flex-1 bg-[#006633]" />
            <div className="w-4 bg-white" />
            <div className="w-4 bg-[#CE1126]" />
            <div className="w-4 bg-black" />
            <div className="w-4 bg-[#FCD116]" />
          </div>

          <h3 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tighter text-balance">Ready to modernize your Zimbabwean school's fee collection?</h3>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-8 font-medium">
            Whether you're in Harare's urban core or a rural school in Manicaland, we have the right solution for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-sm">
            <div className="flex items-center gap-2 px-5 py-3 bg-white/5 text-white rounded-xl font-bold border border-white/10">
              <Phone className="w-4 h-4 text-primary" />
              Zimbabwe: {ZIM_DISPLAY}
              <a href={`tel:+${ZIM_NUMBER}`} className="ml-1 p-1 rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Call"><Phone className="w-3.5 h-3.5" /></a>
              <a href={`https://wa.me/${ZIM_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors" title="WhatsApp"><WhatsAppIcon className="w-3.5 h-3.5" /></a>
            </div>
            <a href="mailto:schoolfoundry@jiggabyte.co.zm"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10">
              <Mail className="w-4 h-4 text-primary" />
              schoolfoundry@jiggabyte.co.zm
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold border-white/10 hover:bg-white/5" asChild>
              <Link href="/online">See the Online Cloud</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold border-white/10 hover:bg-white/5" asChild>
              <Link href="/offline">Explore Offline Bundle</Link>
            </Button>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
          Source:{' '}
          <a href="https://www.mopse.co.zw/sites/default/files/publications/Annual%20Statistical%20Report%202024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4">
            Ministry of Primary and Secondary Education — Annual Statistical Report 2024
          </a>
        </p>

      </div>
    </div>
  );
}
