import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SphereCanvas from '@/components/SpherCanvas';
import {
  Zap,
  Clock,
  Search,
  FolderX,
  Archive,
  LineChart,
  Printer,
  FileText,
  ListOrdered,
  ReceiptText,
  HardDrive,
  Mail,
  MapPin,
  ChevronRight,
  Target,
  Heart,
  Users,
  UserPlus,
  GraduationCap,
  School,
  CheckCircle,
  XCircle,
  BarChart3,
  Settings,
  Lock,
  Cpu,
  Database,
  Activity,
  BookMarked,
  Menu,
  X,
  Globe,
  Bot,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const SLIDE_LEFT = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'What is SMS?', href: '#what-is-sms' },
  { label: 'Choose Version', href: '#product-choice' },
  { label: 'About Us', href: '#about' },
];

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVersion, setActiveVersion] = useState('offline');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-foreground font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">

      {/* ── Navigation ─────────────────────────────────────── */}
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="SchoolFoundry Home">
            <div className="relative">
              <img src="/logo.svg" alt="" className="h-9 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
              School<span className="font-light text-primary group-hover:text-primary/80 transition-colors">Foundry</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest font-semibold">
            {NAV_LINKS.map(({ label, href }) => (
              <a 
                key={label} 
                href={href} 
                className={`relative transition-colors duration-300 hover:text-primary ${scrolled ? 'text-white/70' : 'text-white/90'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full`}
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-[0_8px_20px_-6px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden p-2.5 rounded-xl transition-all ${scrolled ? 'text-white bg-white/5 hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0A0D14]/98 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className="text-white/70 hover:text-primary font-bold py-4 px-4 rounded-2xl hover:bg-white/5 transition-all text-lg border border-transparent hover:border-white/5"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-6 bg-primary text-white px-6 py-4 rounded-2xl font-bold text-center hover:bg-primary/90 transition-all shadow-lg"
                >
                  Request a Demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#07090E] pt-20">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.04),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col justify-center">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping flex-shrink-0" />
                <span>Next-Gen School Operating System</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                {activeVersion === 'offline' ? 'Kicking Paper Out of ' : 'Connected '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-orange-600">
                  School Ops
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl leading-relaxed font-medium">
                {activeVersion === 'offline' 
                  ? "Move from dusty receipt books to a robust desktop environment that works 100% offline. No internet required—just raw productivity."
                  : "Experience the full power of a cloud-native SMS. Real-time sync, parent intelligence, and global access from any device."}
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-14">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] text-center min-w-[200px]"
                >
                  Request Demo
                </motion.a>
                <motion.a
                  href="#product-choice"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 transition-all text-center min-w-[200px] backdrop-blur-md"
                >
                  Explore Versions
                </motion.a>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  ['90%', 'Less Paper'],
                  ['1-Click', 'Backup'],
                  ['Auto', 'Reports'],
                ].map(([stat, label], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">{stat}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="w-[520px] h-[520px] relative">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full animate-pulse" />
                <SphereCanvas />
              </div>

              {/* Floating Cards with refined styles */}
              {[
                { icon: ReceiptText, title: 'Record + Print', text: 'Instant thermal receipts', pos: 'top-10 -left-10', delay: 1.0 },
                { icon: FileText, title: 'Analytics', text: 'Visual school-wide data', pos: 'top-[30%] -right-4', delay: 1.2 },
                { icon: Cpu, title: 'Core OS', text: 'Works on any Windows PC', pos: 'bottom-16 -left-6', delay: 1.4 },
                { icon: Database, title: 'Local Vault', text: 'Encryption by default', pos: 'bottom-[35%] -right-8', delay: 1.6 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`absolute ${card.pos} bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl cursor-default group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 mb-1.5 relative z-10">
                    <card.icon className="w-4 h-4 text-primary" />
                    <p className="text-white font-bold tracking-tight text-sm uppercase">{card.title}</p>
                  </div>
                  <p className="text-white/40 text-xs font-medium relative z-10">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What is an SMS? ────────────────────────────────── */}
      <section id="what-is-sms" className="py-24 sm:py-36 bg-[#07090E] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The OS for Modern Education</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 mb-8 leading-tight tracking-tighter">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">SchoolFoundry?</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed font-medium max-w-3xl mx-auto">
                We aren't just a billing tool. SchoolFoundry is a complete operating system for your school. From the first enrollment to the final grade report, we handle the data so you can focus on the students.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: 'Lifecycle Management',
                desc: 'Digital identity for every student. Track progress, attendance, and history from Grade 1 to Graduation.'
              },
              {
                icon: ReceiptText,
                title: 'Financial Integrity',
                desc: 'Eliminate receipt book fraud. Track every cent with automated ledger matching and instant audit trails.'
              },
              {
                icon: BarChart3,
                title: 'Operational Intelligence',
                desc: 'Real-time dashboards for Principals. Know your school’s financial and academic health in one click.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SCALE_IN}
                className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10 tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-base leading-relaxed font-medium relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Path Tabs ─────────────────────────────────── */}
      <section id="product-choice" className="py-20 sm:py-32 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5">Choose Your <span className="text-primary">Journey</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Whether you are starting offline or ready for the cloud, we have a version of SchoolFoundry built for you.</p>
          </motion.div>

          <Tabs value={activeVersion} onValueChange={setActiveVersion} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 p-1 h-16 rounded-2xl mb-16">
              <TabsTrigger value="offline" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-xl font-bold">
                SchoolFoundry - Offline
              </TabsTrigger>
              <TabsTrigger value="online" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-xl font-bold">
                SchoolFoundry - Online (Coming Soon)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="offline" className="space-y-24 outline-none">
              {/* Full Offline Landing Page Fragment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest">
                    The Deployment King
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-black mb-8 text-white leading-[1.1]">Zero Internet. <br/>Zero Excuses.</h3>
                  <p className="text-white/50 text-xl leading-relaxed mb-10 font-medium">
                    Designed for schools where the cloud is a dream, but efficiency is a necessity. SchoolFoundry Offline is a standalone powerhouse that captures the speed of digital without the fragility of the web.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {[
                      { icon: Printer, title: 'Hardware Included', text: 'Industrial thermal printer & starter rolls.' },
                      { icon: HardDrive, title: 'Local Vault', text: 'Encryption-at-rest on your office PC.' },
                      { icon: Zap, title: 'Instant Receipts', text: 'Professional printing in under 2s.' },
                      { icon: ListOrdered, title: 'SADC Ready', text: 'Multi-currency support (USD/ZMW/ZWG).' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm mb-0.5">{item.title}</p>
                          <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20" asChild>
                    <a href="#contact">Get Deployment Quote</a>
                  </Button>
                </motion.div>

                <div className="relative">
                  <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 overflow-hidden group backdrop-blur-3xl">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                      <Printer className="w-80 h-80" />
                    </div>
                    <h4 className="text-3xl font-bold mb-10 text-white">The Deployment Bundle</h4>
                    <div className="space-y-10 relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg shadow-primary/20">1</div>
                        <div>
                          <p className="text-xl font-bold mb-1.5 text-white">High-Speed Thermal Printer</p>
                          <p className="text-base text-white/40 leading-relaxed">Industrial grade. Zero ink required. Built for 24/7 high-volume receipting.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg shadow-primary/20">10</div>
                        <div>
                          <p className="text-xl font-bold mb-1.5 text-white">Starter Paper Rolls</p>
                          <p className="text-base text-white/40 leading-relaxed">Everything you need to start operating on Day 1. Standard 80mm refills.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl">
                          <CheckCircle className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-xl font-bold mb-1.5 text-white">Lifetime Core License</p>
                          <p className="text-base text-white/40 leading-relaxed">One-time payment. No hidden monthly fees. You own your school's data forever.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offline Features Grid (Condensed) */}
              <div className="pt-24 border-t border-white/5">
                <div className="text-center mb-16">
                  <h4 className="text-3xl font-bold text-white">Comprehensive School Ops</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: Users, title: 'Student Files' },
                    { icon: ReceiptText, title: 'Fee Accounting' },
                    { icon: FileText, title: 'Bulk Statements' },
                    { icon: XCircle, title: 'Defaulter Intel' },
                    { icon: CheckCircle, title: 'Cleared Logs' },
                    { icon: Activity, title: 'Staff Audit' },
                    { icon: Settings, title: 'Dynamic Tiers' },
                    { icon: Database, title: 'Secure Backup' },
                  ].map((f, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-300 group">
                      <f.icon className="w-10 h-10 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform" />
                      <p className="font-bold text-sm text-white/80">{f.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online" className="space-y-24 outline-none">
              {/* Full Online Landing Page Fragment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-mono text-[10px] uppercase tracking-widest">
                    The Cloud Horizon
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-black mb-8 text-white leading-[1.1]">Full School Intelligence, <br/>From Anywhere.</h3>
                  <p className="text-white/50 text-xl leading-relaxed mb-10 font-medium">
                    When you're ready to bridge the gap, SchoolFoundry Online unlocks the power of a fully connected campus. Multi-user coordination, automated parent engagement, and data-driven insights.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {[
                      { icon: Globe, title: 'Multi-User Sync', text: 'Coordination between Bursar, Principal, and Staff.' },
                      { icon: Mail, title: 'WhatsApp Alerts', text: 'Instant PDF statements sent to parents automatically.' },
                      { icon: UserPlus, title: 'Parent Intelligence', text: 'Self-service balance checks and reports.' },
                      { icon: Database, title: 'Live Backups', text: 'Automatic, secure offsite data redundancy.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm mb-0.5">{item.title}</p>
                          <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold border-white/10 hover:bg-white/5 text-white" asChild>
                    <a href="#contact">Join the Roadmap</a>
                  </Button>
                </motion.div>

                <div className="relative">
                  <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-12 overflow-hidden backdrop-blur-3xl group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                      <Bot className="w-80 h-80 text-primary" />
                    </div>
                    <h4 className="text-3xl font-bold mb-10 text-white">The Regional Roadmap</h4>
                    <div className="space-y-8 relative z-10">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">P1</div>
                        <div>
                          <p className="text-lg font-bold mb-1 text-white">Secure Cloud Migration</p>
                          <p className="text-sm text-white/40 leading-relaxed">Sync your local data to our regional servers for encrypted offsite redundancy.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">P2</div>
                        <div>
                          <p className="text-lg font-bold mb-1 text-white">Payment Rail Integration</p>
                          <p className="text-sm text-white/40 leading-relaxed">Auto-reconciliation for EcoCash, Airtel Money, and MTN. Match bank feeds to students in seconds.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">P3</div>
                        <div>
                          <p className="text-lg font-bold mb-1 text-white">The WhatsApp Gateway</p>
                          <p className="text-sm text-white/40 leading-relaxed">Parents request statements and receipts via a secure SchoolFoundry WhatsApp Bot.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 opacity-40">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 font-bold text-lg flex-shrink-0">P4</div>
                        <div>
                          <p className="text-lg font-bold mb-1 text-white">AI Bursar (Alpha)</p>
                          <p className="text-sm text-white/40 leading-relaxed">Predictive revenue forecasting and automated outlier detection for unpaid accounts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online Roadmap highlights */}
              <div className="pt-20 border-t border-white/5">
                <div className="text-center mb-12">
                  <h4 className="text-2xl font-bold">Planned Online Capabilities</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Bot, title: 'AI Assistant', desc: 'Predictive analytics' },
                    { icon: Code, title: 'Open API', desc: 'Integrate other apps' },
                    { icon: Globe, title: 'Parent Login', desc: 'Self-service' },
                    { icon: Zap, title: 'Instant Sync', desc: 'Real-time data' },
                  ].map((f, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center">
                      <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-bold text-sm mb-1">{f.title}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-14 sm:mb-20 max-w-3xl">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              {activeVersion === 'offline' ? 'Offline Capabilities' : 'Cloud Features'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3 mb-5">
              {activeVersion === 'offline' 
                ? 'Everything You Need, Locally' 
                : 'Unlocking the Power of the Cloud'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              {activeVersion === 'offline'
                ? 'SchoolFoundry Offline is purpose-built for reliability. Every feature below is included out of the box, ensuring your office never skips a beat, even without internet.'
                : 'SchoolFoundry Online brings your school into the future. Real-time data, parent engagement portals, and AI-driven insights accessible from any device.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeVersion === 'offline' ? (
              // Offline Features
              <>
                <div className="md:col-span-2 bg-foreground text-white rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full group-hover:bg-primary/15 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                      <Printer className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Thermal Receipt Printing</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                      Instant, inkless printing for every payment. Professional receipts handed to parents on the spot, with zero delay.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Local Database</h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Your data stays in your office. 100% private, 100% fast, and 100% yours.
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Staff Management</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Unlimited office staff accounts with individual access controls.</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white border border-border rounded-3xl p-8 relative overflow-hidden shadow-sm transition-all duration-300 group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FileText className="w-48 h-48 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Print Statements at Every Level</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      Generate and print account statements for any individual student, an entire grade, or the whole school in one click.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Online Features
              <>
                <div className="md:col-span-2 bg-primary text-white rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full group-hover:bg-white/15 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Any-Device Web Access</h3>
                    <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                      Bursars can record payments on a laptop while the Headmaster checks the financial dashboard from their phone at home.
                    </p>
                  </div>
                </div>
                <div className="bg-foreground text-white rounded-3xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">AI Bursar Assistant</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Ask your SMS questions like "What is the expected vs actual revenue for Term 1?" and get instant answers.
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Parent SMS Alerts</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Automatically notify parents via WhatsApp or SMS the moment a payment is recorded.</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white border border-border rounded-3xl p-8 relative overflow-hidden shadow-sm transition-all duration-300 group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Code className="w-48 h-48 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Open API for Extensions</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      Connect your school's bank feeds, website, or other educational tools directly to your financial core.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── Static Core Capabilities ───────────────────────── */}
          <div className="mt-20 pt-20 border-t border-border/10">
            <div className="text-center mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Core SMS Capabilities</h3>
              <p className="text-gray-500 max-w-2xl mx-auto">Standard features included in all versions of SchoolFoundry, providing a robust foundation for your school's administration.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: ListOrdered, label: 'Student Enrollment', desc: 'Manage new intakes and student files.' },
                { icon: ReceiptText, label: 'Invoicing', desc: 'Generate bills for terms and activities.' },
                { icon: Activity, label: 'Audit Trails', desc: 'Track every action for total accountability.' },
                { icon: UserPlus, label: 'Staff Management', desc: 'Control access levels for office staff.' },
                { icon: FileText, label: 'Statements', desc: 'Instant student and grade-level reports.' },
                { icon: GraduationCap, label: 'Grading History', desc: 'Track performance across years.' },
                { icon: Database, label: 'Secure Backups', desc: 'Never lose a single record again.' },
                { icon: Lock, label: 'Data Security', desc: 'Industry-standard encryption for records.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.label}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us ───────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_LEFT}>
                <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">About Us</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Built by People Who <span className="text-primary">Understand the Problem</span></h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                  SchoolFoundry is developed by <strong>Jiggabyte Technology Limited</strong>, a technology company based in Lusaka, Zambia. We build practical software for African institutions, tools that work in the real conditions schools face every day.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  We know that most schools in the region run on paper, deal with unreliable internet, and do not have an IT department. SchoolFoundry was designed with all of that in mind. A lightweight desktop app that works offline, is simple to use, and does not require ongoing subscriptions or technical support to maintain.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: MapPin, text: 'Based in Lusaka, Zambia. Serving schools across Southern Africa.' },
                    { icon: Target, text: 'Focused on practical tools that work without reliable internet.' },
                    { icon: Heart, text: 'Built with African school office staff in mind, from day one.' },
                  ].map(({ icon: Icon, text }, i) => (
                    <motion.div key={i} whileHover={{ x: 4 }} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_RIGHT}>
                <div className="bg-foreground rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-7">
                      <img src="/school-foundry/logo.svg" alt="SchoolFoundry" className="h-10 w-auto" />
                      <span className="text-xl sm:text-2xl font-bold text-white">School<span className="font-normal">Foundry</span></span>
                    </div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic">
                      "We wanted to build something that office staff at a rural Zambian school could pick up and use on day one, without training, without internet, and without a monthly bill."
                    </p>
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-primary font-bold">Jiggabyte Technology Limited</p>
                      <p className="text-gray-400 text-sm mt-1">Lusaka, Zambia</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ──────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 md:p-20 shadow-2xl flex flex-col md:flex-row gap-12 sm:gap-16 items-start md:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_LEFT} className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">Ready to Make School Fees Admin Easy?</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-7">Get in touch and we will walk you through exactly how SchoolFoundry works. No pressure, no commitment.</p>
              <div className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                {[
                  'One-off payment, no monthly subscription',
                  'Works offline. No internet needed.',
                  'Simple setup, no IT team required',
                  'Detailed documentation included',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_RIGHT} className="flex-1 w-full">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">School Name</label>
                    <Input data-testid="input-school-name" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="Riverside High School" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="bursar@school.co.zm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="+260 97 123 4567" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Approx. Student Count</label>
                    <Input data-testid="input-student-count" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="e.g. 500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">School Location (City)</label>
                    <Input data-testid="input-school-location" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="e.g. Lusaka" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Anything else we should know?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white min-h-[90px] resize-none" placeholder="What are you currently using to manage school fees? Any specific concerns?" />
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Button data-testid="button-submit-demo" className="w-full h-13 text-lg font-bold rounded-xl mt-3" size="lg">
                    Request a Demo
                  </Button>
                </motion.div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  We will show you exactly how SchoolFoundry works for your school.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#05080F] text-gray-400 pt-14 pb-8 border-t border-white/5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/school-foundry/logo.svg" alt="SchoolFoundry" className="h-10 w-auto" />
                <span className="font-bold text-xl tracking-tight text-white">School<span className="font-normal">Foundry</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5 max-w-xs text-sm">
                Forging a Stronger Financial Future for Schools. Simple, reliable school fees management software built for Southern African schools.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:info@jiggabyte.co.zm" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  info@jiggabyte.co.zm
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  Lusaka, Zambia
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigation</h4>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: 'Offline Bundle', href: '#offline' },
                  { label: 'Product Roadmap', href: '#roadmap' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Request a Demo', href: '#contact' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-primary" /> {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-primary" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} SchoolFoundry. All rights reserved.</p>
            <p>
              Developed by{' '}
              <span className="text-primary font-semibold">Jiggabyte Technology Limited</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
