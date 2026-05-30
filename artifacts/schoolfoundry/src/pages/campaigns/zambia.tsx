import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Monitor,
  Zap,
  Map,
  Globe,
  ArrowRight,
  TrendingUp,
  Award,
  FileText,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ZambiaFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" className="w-full h-auto shadow-2xl rounded-sm overflow-hidden border border-white/10">
    <rect width="9" height="6" fill="#198A00"/>
    <rect x="6" y="3" width="1" height="3" fill="#DE2010"/>
    <rect x="7" y="3" width="1" height="3" fill="#000000"/>
    <rect x="8" y="3" width="1" height="3" fill="#EF7D00"/>
    <path d="M7.5 1.2c-.1 0-.3.1-.4.2l-.2.3c-.1.2-.1.4 0 .6.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.1-.4 0-.6-.1-.2-.2-.3-.4-.5zm.1.8c-.1 0-.2-.1-.2-.2s.1-.2.2-.2.2.1.2.2-.1.2-.2.2zM6.8 2.2c.1-.1.2-.2.4-.2.2 0 .4.1.5.2.1.1.2.3.2.5 0 .2-.1.4-.2.5-.1.1-.3.2-.5.2-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5 0-.2.1-.4.3-.5zm.7.8c.1 0 .2-.1.2-.2s-.1-.2-.2-.2-.2.1-.2.2.1.2.2.2z" fill="#EF7D00"/>
    <path d="M6.2 1.5s.5-.3 1.3-.3 1.3.3 1.3.3l.2.5s-.8-.2-1.5-.2-1.5.2-1.5.2l.2-.5z" fill="#EF7D00"/>
    <path d="M6.5 1.8s.3-.2.8-.2.8.2.8.2l.1.3s-.4-.1-.9-.1-.9.1-.9.1l.1-.3z" fill="#EF7D00"/>
  </svg>
);

const ZambiaMapSilhouette = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M55.7,11.2l-3.2,4.4l-4.9,0.3l-1.7,1l-5.1,0.1L36.4,23l-12.4,5.5l-1.1,4.9l1.4,7l6.5,3.7l4.3-0.3l2.2-4.8l-0.1-2.2l-5.1-2.5l-0.3-5.4l4.4-0.2l1.1,1.8l12.1,5.2l0.4-4l5.7-0.2L55.7,11.2z M85,15.5l-1.5,1.2l-2.1,1.1l-1.8,1.4l-2.1,1.6l-1.7,2.1l-1.8,2.4l-1.5,2.7l-1.8,2.9l-1.3,3.2l-1.4,3.4l-1.1,3.7l-1.2,3.9l-0.8,4.1l-0.9,4.4l-0.6,4.6l-0.6,4.8l-0.3,5.1l-0.3,5.3l-0.1,5.5l0.1,5.7l0.1,5.9l0.3,6.1l0.5,6.3l0.6,6.6l0.8,6.8l1,7.1l1.1,7.3l1.2,7.6l1.4,7.8l1.6,8l1.8,8.2l1.9,8.5l2.1,8.7l2.2,9l2.4,9.2z" />
  </svg>
);

export default function ZambiaCampaignPage() {
  return (
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24 selection:bg-primary/30 selection:text-white overflow-x-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative">

        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] pointer-events-none text-[#198A00] opacity-5 blur-sm overflow-hidden">
          <div className="transform rotate-12 scale-150">
            <ZambiaMapSilhouette />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40 py-12">

          <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest group hover:bg-white/10 transition-all">
              <span className="text-lg">🇿🇲</span>
              <span className="border-l border-white/10 pl-3">Source: Ministry of Education 2025 Bulletin</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Empowering <span className="text-[#EF7D00]">13,987</span> <br/>
              Zambian Schools.
            </h1>
            <p className="text-xl text-white/50 max-w-xl font-medium leading-relaxed mb-10">
              The latest Ministry of Education Bulletin confirms a massive shift: Zambia's classrooms are ready.
              We provide the software that powers this digital progress.
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
              <ZambiaFlag />
            </div>
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-20 animate-pulse" />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              label: 'Total Schools',
              value: '13,987',
              sub: 'Primary & Secondary',
              icon: Map,
              color: 'text-primary',
              desc: 'A massive network of 11,728 Primary and 2,259 Secondary schools nationwide.'
            },
            {
              label: 'Digital Devices',
              value: '53,001',
              sub: 'Computers & Tablets',
              icon: Monitor,
              color: 'text-primary',
              desc: 'Over 35,000 desktops and 11,000 laptops are already in Zambian school offices.'
            },
            {
              label: 'Powered Schools',
              value: '9,160+',
              sub: 'Grid, Solar & Generator',
              icon: Zap,
              color: 'text-primary',
              desc: 'Thousands of schools have the infrastructure to support modern management tools.'
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
            <h4 className="text-xl font-bold text-white mb-1">Official Education Statistics Bulletin 2025</h4>
            <p className="text-white/40 text-sm font-medium">Verified by the Ministry of Education. Access the full report for in-depth regional data.</p>
          </div>
          <Button variant="outline" className="rounded-xl border-white/10 hover:bg-white/5 gap-2" asChild>
            <a href="https://www.edu.gov.zm/wp-content/uploads/2026/03/2025-ESB-.pdf" target="_blank" rel="noopener noreferrer">
              Open Bulletin <ExternalLink className="w-4 h-4" />
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
              Bridging the gap between <br/>
              <span className="text-primary text-3xl sm:text-4xl uppercase tracking-widest opacity-80">Rural & Urban</span>
            </h2>
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#198A00]/10 border border-[#198A00]/20">
                    <Globe className="w-5 h-5 text-[#198A00]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">The Urban Demand</h4>
                </div>
                <p className="text-white/50 leading-relaxed font-medium">
                  With 3,523 Urban schools (led by Lusaka and Copperbelt), the need for <strong>Online Cloud</strong> sync and parent communication via WhatsApp has never been higher.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#EF7D00]/10 border border-[#EF7D00]/20">
                    <TrendingUp className="w-5 h-5 text-[#EF7D00]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">The Rural Potential</h4>
                </div>
                <p className="text-white/50 leading-relaxed font-medium">
                  Zambia's 7,995 Rural and 2,469 Remote schools are no longer "left behind." With our <strong>Offline Bundle</strong>, a school in Muchinga or Luapula can run a professional office with zero internet.
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
            <h4 className="text-3xl font-black mb-10 text-white tracking-tight">2025 Regional Target</h4>
            <div className="space-y-8 relative z-10">
              {[
                { label: 'Lusaka Province', value: '1,524 Schools' },
                { label: 'Copperbelt Province', value: '1,472 Schools' },
                { label: 'Southern Province', value: '1,831 Schools' },
                { label: 'Western Province', value: '1,611 Schools' },
              ].map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4 group">
                  <p className="text-white/40 font-bold group-hover:text-white transition-colors">{label}</p>
                  <p className="text-white font-mono font-black text-xl">{value}</p>
                </div>
              ))}
              <div className="pt-6">
                <p className="text-sm text-primary font-bold italic">"Clear school records are now essential for strong regional education."</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-24 h-full flex opacity-10 pointer-events-none">
            <div className="flex-1 bg-[#198A00]" />
            <div className="w-4 bg-[#DE2010]" />
            <div className="w-4 bg-black" />
            <div className="w-4 bg-[#EF7D00]" />
          </div>

          <h3 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tighter text-balance">Ready to move your Zambian school away from paper?</h3>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-8 font-medium">
            Join the 2025 Digital Transformation wave. Whether you need a local thermal printer bundle or a cloud-based SMS, we have the Zambian solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-sm">
            <a
              href="tel:+260570326775"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              <Phone className="w-4 h-4 text-primary" />
              Zambia: +260 570 326 775
            </a>
            <a
              href="mailto:info@jiggabyte.co.zm"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              <Mail className="w-4 h-4 text-primary" />
              info@jiggabyte.co.zm
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
          Source: Ministry of Education - Education Statistics Bulletin 2025
        </p>

      </div>
    </div>
  );
}
