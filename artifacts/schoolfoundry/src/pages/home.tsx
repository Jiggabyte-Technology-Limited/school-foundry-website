import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import DatabaseSphere from '@/components/DatabaseSphere';
import {
  Printer,
  FileText,
  ReceiptText,
  Users,
  BarChart3,
  Cpu,
  Database,
  Globe,
  ArrowRight,
  MonitorSmartphone,
  Info,
  Calendar,
  CreditCard,
  ClipboardList,
  Monitor,
  ShieldCheck,
  WifiOff,
  Banknote,
  AlertCircle,
  CheckCircle2,
  Send,
  Heart,
  Handshake,
  Download,
  School,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';
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

type DemoFormState = 'idle' | 'loading' | 'success' | 'error';

function ScrollSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [32, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.15], [6, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.section ref={ref} id={id} className={className} style={{ opacity, y, scale, filter }}>
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [demoState, setDemoState] = useState<DemoFormState>('idle');
  const [demoError, setDemoError] = useState('');
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: '',
  });

  const setDemoField = (field: keyof typeof demoForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDemoForm((current) => ({ ...current, [field]: event.target.value }));

  const handleDemoSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDemoState('loading');
    setDemoError('');

    try {
      const response = await fetch(getFormsApiUrl('/api/demo'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoForm),
      });

      const payload = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong');
      }

      setDemoForm({
        name: '',
        email: '',
        phone: '',
        school: '',
        message: '',
      });
      setDemoState('success');
    } catch (error) {
      setDemoError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setDemoState('error');
    }
  };

  return (
    <div className="selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#07090E] pt-24">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.04),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col justify-center">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>DIGITAL PUBLIC GOOD • SDG 4 & SDG 10 • UNICEF ALIGNED</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                No Child Locked Out. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-orange-600">
                  No School Left Blind.
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed font-medium">
                Millions of African learners on government bursaries, CDF grants, and scholarships risk classroom exclusion due to paper chaos and delayed disbursements. School Foundry is the free, 100% offline software that shields vulnerable students, eliminates fee disputes, and gives schools sovereign financial records.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-14">
                <motion.a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-base transition-all shadow-[0_20px_40px_-12px_rgba(16,185,129,0.4)] text-center flex items-center justify-center gap-2.5 min-w-[200px]"
                >
                  <Download className="w-5 h-5" /> Download Free Software (.exe)
                </motion.a>
                <motion.a
                  href="/work-with-us"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-base border border-white/10 transition-all text-center min-w-[180px] backdrop-blur-md flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-primary" /> Partner With Our Mission
                </motion.a>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                {[
                  ['100%', 'Offline Sovereignty', 'Zero WiFi Needed'],
                  ['0 Days', 'Exclusion for Sponsored', 'CDF & Bursary Protected'],
                  ['Free Core', 'Digital Public Good', 'MIT Open License'],
                ].map(([stat, title, subtitle], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">{stat}</span>
                    <span className="text-[11px] uppercase tracking-wider text-primary font-bold mt-1">{title}</span>
                    <span className="text-[10px] text-white/40 font-medium hidden sm:inline">{subtitle}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="w-[600px] h-[600px] relative">
                <DatabaseSphere />
              </div>

              {[
                { icon: ShieldCheck, title: 'Child Safeguarding', text: 'Automatic CDF bursary protection', pos: 'top-0 left-1/2 -translate-x-1/2 translate-y-4', delay: 1.0, floatDelay: '0s' },
                { icon: ReceiptText, title: '2s Thermal Receipts', text: 'Tamper-proof proof of payment', pos: 'top-1/2 -right-6 -translate-y-1/2', delay: 1.2, floatDelay: '3s' },
                { icon: Cpu, title: '100% Offline Core', text: 'Works on any Windows PC', pos: 'bottom-0 left-1/2 -translate-x-1/2 -translate-y-4', delay: 1.4, floatDelay: '4.5s' },
                { icon: Database, title: 'Sovereign Local Vault', text: 'Local SQLite, zero cloud dependency', pos: 'top-1/2 -left-6 -translate-y-1/2', delay: 1.6, floatDelay: '1.5s' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.8, ease: 'easeOut' }}
                  className={`absolute ${card.pos} cursor-default group`}
                  style={{ animation: `float 6s ease-in-out ${card.floatDelay} infinite` }}
                >
                  <div className="bg-[rgba(20,20,22,0.7)] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-[rgba(30,30,33,0.9)] hover:border-primary/30 hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-1">
                      <card.icon className="w-4 h-4 text-primary" />
                      <p className="text-gray-100 font-bold tracking-wide text-xs uppercase">{card.title}</p>
                    </div>
                    <p className="text-gray-400 text-xs font-medium pl-7">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Crisis / The Real Problem Section */}
      <ScrollSection id="the-crisis" className="py-16 sm:py-24 bg-[#07090E] relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">The Crisis Behind the Gate</p>
            <h3 className="text-[32px] sm:text-[42px] font-black text-white leading-[1.1] mb-4 max-w-[650px] tracking-tight">
              Why paper ledgers are hurting <span className="text-primary">African learners.</span>
            </h3>
            <p className="text-[16px] text-white/60 max-w-[650px] leading-[1.7]">
              National Free Education Policies and Constituency Development Fund (CDF) bursaries were created to unlock opportunity. But at the school gate, paper accounting breaks the promise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">Accidental Exclusion</p>
              <p className="text-[14px] text-white/50 leading-[1.7]">
                When government CDF grants or NGO disbursements take weeks to clear, bursars cannot easily verify who is sponsored. Deserving children are sent home and miss vital instruction.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <WifiOff className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">The Internet Dependency Trap</p>
              <p className="text-[14px] text-white/50 leading-[1.7]">
                Most modern school software requires constant, high-speed WiFi. During frequent power cuts and rural network outages, administrators are forced back to fragile paper receipt books.
              </p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <ReceiptText className="w-5 h-5 text-orange-400" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">Cash & Receipt Disputes</p>
              <p className="text-[14px] text-white/50 leading-[1.7]">
                Handwritten paper receipts get lost, faded, or disputed. Parents are left without tamper-proof proof of payment, destroying trust between schools and their communities.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* The 4 Pillars of Digital Public Infrastructure */}
      <ScrollSection id="pillars" className="py-16 sm:py-24 bg-[#0B0D13] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-14">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Our Core Architecture</p>
            <h3 className="text-[32px] sm:text-[42px] font-black text-white leading-[1.1] mb-4 max-w-[550px] tracking-tight">
              Open digital infrastructure built for <span className="text-primary">ground reality.</span>
            </h3>
            <p className="text-[16px] text-white/60 max-w-[550px] leading-[1.7]">
              School Foundry is engineered to work reliably on any standard office computer without internet, vendor lock-in, or monthly subscription burdens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="font-bold text-[16px] text-white mb-2">Child Safeguarding Engine</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                Protects learners on CDF bursaries, government grants, CAMFED, and UNICEF scholarships. Automatically shields sponsored children from fee lockouts and exam disqualification.
              </p>
            </div>

            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <WifiOff className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-[16px] text-white mb-2">100% Offline Sovereignty</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                Embedded SQLite database stored locally on the school computer. Functions continuously during load-shedding and network blackouts with zero cloud reliance.
              </p>
            </div>

            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Printer className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-[16px] text-white mb-2">2-Second Thermal Receipts</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                Instant printing with unique receipt numbers and audit trails. Ink-free thermal technology that ends paper disputes and gives parents verifiable payment receipts.
              </p>
            </div>

            <div className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors p-8 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-[16px] text-white mb-2">Digital Public Good (MIT)</p>
              <p className="text-[13px] text-white/50 leading-[1.7]">
                The desktop application is completely free and open-source under the MIT license. No proprietary lock-in, no per-student tax, and no forced recurring software fees.
              </p>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* Two Tiers: Offline Core & Cloud Vision */}
      <ScrollSection id="tiers" className="py-16 sm:py-24 bg-[#07090E] relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Modular Architecture</p>
            <h3 className="text-[32px] sm:text-[42px] font-black text-white leading-[1.1] mb-4 max-w-[550px] tracking-tight">
              From standalone classroom PCs to <span className="text-primary">district-wide sync.</span>
            </h3>
            <p className="text-[16px] text-white/60 max-w-[550px] leading-[1.7]">
              Whether a school operates in a remote valley without cellular coverage or requires district-level cloud aggregation, School Foundry adapts seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-8 sm:p-12 flex flex-col justify-between cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                    Available Now • 100% Free Core
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-black text-white mb-3">School Foundry Offline Edition</h4>
                <p className="text-[14px] text-white/60 leading-[1.7] mb-6">
                  Complete school management running directly on Windows computers. Student registration, fee balancing, child safeguarding, thermal receipt printing, Excel imports, and Friday 1-click disaster recovery backups.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    '100% free open-source software (MIT)',
                    'Zero internet dependency to operate',
                    'Direct thermal printer support (USB/ESC-POS)',
                    'Automatic CDF and scholarship child protection',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/70 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download .exe
                </a>
                <Link
                  href="/offline"
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm border border-white/10 transition-all flex items-center gap-2"
                >
                  Explore Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B0D13] p-8 sm:p-12 flex flex-col justify-between cursor-default">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                    In Development • Cloud Federation
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-2xl font-black text-white mb-3">School Foundry Cloud Portal</h4>
                <p className="text-[14px] text-white/60 leading-[1.7] mb-6">
                  For education boards, donor networks, and district councils. Syncs offline school records to provide aggregated bursary tracking, multi-school performance insights, and mobile money reconciliations.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Multi-school district dashboard for education ministries',
                    'Live CDF grant absorption & audit tracking',
                    'Mobile money & WhatsApp parent statement delivery',
                    'Seamless sync with offline desktop instances',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/70 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link
                  href="/online"
                  className="px-6 py-3.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-xl font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  Join Cloud Waitlist <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* How People & Partners Can Help Section */}
      <ScrollSection id="how-to-help" className="py-16 sm:py-24 bg-[#0B0D13] relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Collective Impact</p>
            <h3 className="text-[32px] sm:text-[42px] font-black text-white leading-[1.1] mb-4 tracking-tight">
              How you can help <span className="text-primary">achieve this mission.</span>
            </h3>
            <p className="text-[15px] text-white/50 leading-[1.65]">
              Ending academic exclusion and digitizing 100,000+ African schools requires collaboration across educators, donors, NGOs, and public institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-8 cursor-default hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <School className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">Schools & Educators</p>
              <p className="text-[14px] text-white/50 leading-[1.7] mb-6">
                Download and deploy the free desktop software. Eliminate manual receipt books, safeguard your subsidized learners, and run your school office with total confidence.
              </p>
              <a
                href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline"
              >
                Get Free Software <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#07090E] p-8 cursor-default hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Heart className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">Donors & Sponsors</p>
              <p className="text-[14px] text-white/50 leading-[1.7] mb-6">
                Sponsor a $500 Deployment Bundle (printer + paper rolls + setup assistance) to permanently transition a disadvantaged community or rural school off paper ledgers.
              </p>
              <Link
                href="/work-with-us"
                className="text-xs text-emerald-400 font-bold inline-flex items-center gap-1 hover:underline"
              >
                Sponsor a School Bundle <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#07090E] p-8 cursor-default hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Handshake className="w-5 h-5 text-blue-400" />
              </div>
              <p className="font-bold text-[17px] text-white mb-2">NGOs & CDF Committees</p>
              <p className="text-[14px] text-white/50 leading-[1.7] mb-6">
                Partner with us to deploy digital public infrastructure across your entire constituency or scholarship network, ensuring real-time auditability and zero exclusion.
              </p>
              <Link
                href="/work-with-us"
                className="text-xs text-blue-400 font-bold inline-flex items-center gap-1 hover:underline"
              >
                Institutional Partnerships <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* Connect / Inquire Form Section */}
      <ScrollSection id="contact" className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Connect With Our Team</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[550px] tracking-tight">
              Let's build educational equity <span className="text-primary">together.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[550px] leading-[1.65]">
              Whether you are a school leader seeking guidance, a donor wanting to sponsor a deployment, or an education agency exploring district partnerships, we want to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <img src={asset("/logo.svg")} alt="SchoolFoundry" className="w-10 h-10" />
                <div>
                  <p className="text-white font-bold text-[18px] leading-tight">SchoolFoundry</p>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-widest">Digital Public Infrastructure</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  '100% Free open-source software (MIT)',
                  'Offline-first: Works seamlessly with zero internet',
                  'Child Safeguarding Engine protecting vulnerable learners',
                  'Instant 2-second thermal receipts that end payment disputes',
                  'Built in Lusaka, Zambia for schools across Africa',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70 font-semibold text-[14px]">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-white/5">
                <p className="text-white/40 text-[13px] leading-[1.7]">
                  Questions or partnership proposals? Reach out to <strong className="text-white">schoolfoundry@jiggabyte.co.zm</strong> or submit the inquiry form.
                </p>
              </div>
            </div>

            <div className="bg-[#0B0D13] p-8 sm:p-12">
              <form className="space-y-5" onSubmit={handleDemoSubmit}>
                {demoState === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    Thank you. We have received your message and will reply within 24 hours.
                  </div>
                )}

                {demoState === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {demoError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Your Organization / School</label>
                    <Input
                      data-testid="input-school-name"
                      value={demoForm.school}
                      onChange={setDemoField('school')}
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15"
                      placeholder="e.g. Lusaka Community School / NGO"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Contact Name</label>
                    <Input
                      data-testid="input-your-name"
                      value={demoForm.name}
                      onChange={setDemoField('name')}
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15"
                      placeholder="e.g. Jane Mwamba"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <Input
                      data-testid="input-email"
                      type="email"
                      value={demoForm.email}
                      onChange={setDemoField('email')}
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15"
                      placeholder="jane@organization.org"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Phone / WhatsApp</label>
                    <Input
                      data-testid="input-phone"
                      value={demoForm.phone}
                      onChange={setDemoField('phone')}
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15"
                      placeholder="+260 / +27 / +263..."
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">How can we collaborate?</label>
                  <Textarea
                    data-testid="textarea-school-info"
                    value={demoForm.message}
                    onChange={setDemoField('message')}
                    className="bg-white/5 border-white/10 text-white min-h-[100px] rounded-xl focus:border-primary transition-all resize-none placeholder:text-white/15"
                    placeholder="Tell us about your school, sponsorship program, or inquiry..."
                  />
                </div>
                <Button
                  data-testid="button-submit-demo"
                  type="submit"
                  disabled={demoState === 'loading'}
                  className="w-full h-14 text-base font-bold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {demoState === 'loading' ? (
                    <>
                      <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
