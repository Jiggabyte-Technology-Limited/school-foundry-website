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
  Phone,
  ShieldCheck,
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ZAMBIA_NUMBER = '260570326775';
const ZAMBIA_DISPLAY = '+260 570 326 775';

const ZambiaMapSilhouette = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M55.7,11.2l-3.2,4.4l-4.9,0.3l-1.7,1l-5.1,0.1L36.4,23l-12.4,5.5l-1.1,4.9l1.4,7l6.5,3.7l4.3-0.3l2.2-4.8l-0.1-2.2l-5.1-2.5l-0.3-5.4l4.4-0.2l1.1,1.8l12.1,5.2l0.4-4l5.7-0.2L55.7,11.2z" />
  </svg>
);

export default function ZambiaCampaignPage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] pt-32 pb-24 tracking-[0.015em] selection:bg-[#fee3b5] selection:text-[#fa5d00] overflow-x-hidden text-[#1d1e1c]">

      <div className="max-w-[1200px] mx-auto px-6 relative">

        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] pointer-events-none text-[#fa5d00] opacity-5 blur-sm overflow-hidden">
          <div className="transform rotate-12 scale-150">
            <ZambiaMapSilhouette />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-8">

          <motion.div initial="hidden" animate="visible" variants={FADE_UP}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#c0bbb6]/40 text-[#fa5d00] mb-8 font-mono text-[10px] uppercase tracking-widest shadow-xs">
              <span className="text-lg">🇿🇲</span>
              <span className="border-l border-[#d9d9d9] pl-3 font-semibold text-[#615f5c]">Source: Ministry of Education 2025 Bulletin</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#1d1e1c] mb-8 tracking-tight leading-[0.9]">
              Empowering <span className="text-[#fa5d00]">13,987</span> <br/>
              Zambian Schools.
            </h1>
            <p className="text-xl text-[#615f5c] max-w-xl font-medium leading-relaxed mb-10">
              Under Zambia's Free Education Policy and expanded CDF bursaries, classroom enrollments have surged. School Foundry delivers the 100% offline infrastructure to safeguard sponsored learners and manage school finances with zero internet dependency.
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
                src="https://flagcdn.com/zm.svg"
                alt="Flag of Zambia"
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
              value: '13,987',
              sub: 'Primary & Secondary',
              icon: Map,
              color: 'text-[#fa5d00]',
              desc: 'A network of 11,728 Primary and 2,259 Secondary schools nationwide.'
            },
            {
              label: 'Digital Devices',
              value: '53,001',
              sub: 'Computers & Tablets',
              icon: Monitor,
              color: 'text-[#fa5d00]',
              desc: 'Over 35,000 desktops and 11,000 laptops in school offices.'
            },
            {
              label: 'Child Safeguarding',
              value: '100%',
              sub: 'CDF & Bursary Shield',
              icon: ShieldCheck,
              color: 'text-[#fa5d00]',
              desc: 'Guaranteed protection for sponsored learners from fee lockouts and exam exclusion.'
            },
            {
              label: 'Powered Schools',
              value: '9,160+',
              sub: 'Grid, Solar & Gen',
              icon: Zap,
              color: 'text-[#fa5d00]',
              desc: 'Ready for 100% offline standalone desktop accounting.'
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
            <h4 className="text-xl font-bold text-[#1d1e1c] mb-1">Official Education Statistics Bulletin 2025</h4>
            <p className="text-[#615f5c] text-sm font-medium">Verified by the Ministry of Education. Access the full report for in-depth regional data.</p>
          </div>
          <Button variant="outline" className="rounded-2xl border-[#c0bbb6] text-[#1d1e1c] hover:bg-[#fff8f1] hover:border-[#fa5d00] hover:text-[#fa5d00] gap-2 flex-shrink-0" asChild>
            <a href="https://www.edu.gov.zm/wp-content/uploads/2026/03/2025-ESB-.pdf" target="_blank" rel="noopener noreferrer">
              Open Bulletin <ExternalLink className="w-4 h-4" />
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
              Bridging the gap between <br/>
              <span className="text-[#fa5d00] text-3xl sm:text-4xl uppercase tracking-widest">Rural &amp; Urban</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#fee3b5] text-[#fa5d00]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1d1e1c]">The Urban Demand</h4>
                </div>
                <p className="text-[#615f5c] leading-relaxed font-medium text-sm">
                  With 3,523 Urban schools (led by Lusaka and Copperbelt), the need for <strong>Online Cloud</strong> sync and parent communication via WhatsApp has never been higher.
                </p>
              </div>
              <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-6 shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#fee3b5] text-[#fa5d00]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1d1e1c]">The Rural Potential</h4>
                </div>
                <p className="text-[#615f5c] leading-relaxed font-medium text-sm">
                  Zambia's 7,995 Rural and 2,469 Remote schools are no longer "left behind." With our <strong>Offline Bundle</strong>, a school in Muchinga or Luapula can run a professional office with zero internet.
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
            <h4 className="text-3xl font-bold mb-8 text-[#1d1e1c] tracking-tight">2025 Regional Target</h4>
            <div className="space-y-6 relative z-10">
              {[
                { label: 'Lusaka Province', value: '1,524 Schools' },
                { label: 'Copperbelt Province', value: '1,472 Schools' },
                { label: 'Southern Province', value: '1,831 Schools' },
                { label: 'Western Province', value: '1,611 Schools' },
              ].map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-[#d9d9d9] pb-3 group">
                  <p className="text-[#615f5c] font-semibold group-hover:text-[#fa5d00] transition-colors">{label}</p>
                  <p className="text-[#1d1e1c] font-mono font-bold text-xl">{value}</p>
                </div>
              ))}
              <div className="pt-4">
                <p className="text-sm text-[#fa5d00] font-bold italic">"Clear school records are now essential for strong regional education."</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-12 sm:p-16 text-center relative overflow-hidden shadow-[rgba(250,166,0,0.25)_6px_4px_24px_0px]"
        >
          <h3 className="text-3xl sm:text-5xl font-bold text-[#1d1e1c] mb-6 tracking-tight text-balance">Ready to move your Zambian school away from paper?</h3>
          <p className="text-lg sm:text-xl text-[#615f5c] max-w-2xl mx-auto mb-8 font-medium">
            Join the 2025 Digital Transformation wave. Whether you need a local thermal printer bundle or a cloud-based SMS, we have the Zambian solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#fff8f1] text-[#1d1e1c] rounded-2xl font-bold border border-[#c0bbb6] shadow-xs">
              <Phone className="w-4 h-4 text-[#fa5d00]" />
              Zambia: {ZAMBIA_DISPLAY}
              <a href={`tel:+${ZAMBIA_NUMBER}`} className="ml-1 p-1 rounded hover:bg-[#fee3b5] hover:text-[#fa5d00] transition-colors" title="Call"><Phone className="w-3.5 h-3.5" /></a>
              <a href={`https://wa.me/${ZAMBIA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-[#fee3b5] hover:text-[#fa5d00] transition-colors" title="WhatsApp"><WhatsAppIcon className="w-3.5 h-3.5" /></a>
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
          <a href="https://www.edu.gov.zm/wp-content/uploads/2026/03/2025-ESB-.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#fa5d00] transition-colors underline underline-offset-4">
            Ministry of Education — Education Statistics Bulletin 2025
          </a>
        </p>

      </div>
    </div>
  );
}
