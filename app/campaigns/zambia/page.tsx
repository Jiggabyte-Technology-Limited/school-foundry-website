'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
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
import Link from 'next/link';

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
    <path d="M55.7,11.2l-3.2,4.4l-4.9,0.3l-1.7,1l-5.1,0.1L36.4,23l-12.4,5.5l-1.1,4.9l1.4,7l6.5,3.7l4.3-0.3l2.2-4.8l-0.1-2.2l-5.1-2.5l-0.3-5.4l4.4-0.2l1.1,1.8l12.1,5.2l0.4-4l5.7-0.2L55.7,11.2z M85,15.5l-1.5,1.2l-2.1,1.1l-1.8,1.4l-2.1,1.6l-1.7,2.1l-1.8,2.4l-1.5,2.7l-1.8,2.9l-1.3,3.2l-1.4,3.4l-1.1,3.7l-1.2,3.9l-0.8,4.1l-0.9,4.4l-0.6,4.6l-0.6,4.8l-0.3,5.1l-0.3,5.3l-0.1,5.5l0.1,5.7l0.1,5.9l0.3,6.1l0.5,6.3l0.6,6.6l0.8,6.8l1,7.1l1.1,7.3l1.2,7.6l1.4,7.8l1.6,8l1.8,8.2l1.9,8.5l2.1,8.7l2.2,9l2.4,9.2l2.6,9.4l2.7,9.7l2.9,9.9l3,10.2l3.2,10.4l3.3,10.7l3.5,10.9l3.6,11.1l3.8,11.3l3.9,11.6l4.1,11.8l4.2,12.1l4.4,12.3l4.5,12.5l4.7,12.7l4.8,13l4.9,13.2l5.1,13.4l5.2,13.6l5.4,13.8l5.5,14.1l5.6,14.3l5.8,14.5l5.9,14.7l6,14.9l6.2,15.2l6.3,15.4l6.4,15.6l6.6,15.8l6.7,16.1l6.8,16.3l7,16.5l7.1,16.7l7.2,16.9l7.4,17.1l7.5,17.4l7.6,17.6l7.7,17.8l7.9,18l8,18.2l8.1,18.5l8.3,18.7l8.4,18.9l8.5,19.1l8.6,19.4l8.8,19.6l8.9,19.8l9,20l9.1,20.2l9.3,20.4l9.4,20.6l9.5,20.8l9.6,21.1l9.7,21.3l9.9,21.5l10,21.7l10.1,21.9l10.2,22.1l10.3,22.3l10.5,22.6l10.6,22.8l10.7,23l10.8,23.2l10.9,23.4l11.1,23.6l11.2,23.8l11.3,24.1l11.4,24.3l11.5,24.5l11.6,24.7l11.7,24.9l11.9,25.1l12,25.3l12.1,25.5l12.2,25.7l12.3,25.9l12.4,26.1l12.5,26.3l12.6,26.5l12.7,26.7l12.8,27l13,27.2l13.1,27.4l13.2,27.6l13.3,27.8l13.4,28l13.5,28.2l13.6,28.4l13.7,28.6l13.8,28.8l13.9,29.1l14.1,29.3l14.2,29.5l14.3,29.7l14.4,29.9l14.5,30.1l14.6,30.3l14.7,30.5l14.8,30.7l14.9,31l15.1,31.2l15.2,31.4l15.3,31.6l15.4,31.8l15.5,32l15.6,32.2l15.7,32.4l15.8,32.6l15.9,32.8l16.1,33l16.2,33.2l16.3,33.5l16.4,33.7l16.5,33.9l16.6,34.1l16.7,34.3l16.8,34.5l16.9,34.7l17,34.9l17.1,35.1l17.2,35.3l17.3,35.5l17.4,35.7l17.5,35.9l17.6,36.1l17.7,36.4l17.8,36.6l17.9,36.8l18,37l18.1,37.2l18.2,37.4l18.3,37.6l18.4,37.8l18.5,38l18.6,38.2l18.7,38.4l18.8,38.6l18.9,38.8l19,39l19.1,39.2l19.2,39.4l19.3,39.6l19.4,39.8l19.5,40.1l19.6,40.3l19.7,40.5l19.8,40.7l19.9,40.9l20,41.1l20.1,41.3l20.2,41.5l20.3,41.7l20.4,41.9l20.5,42.1l20.6,42.3l20.7,42.5l20.8,42.7l20.9,42.9l21,43.1l21.1,43.3l21.2,43.5l21.3,43.7l21.4,43.9l21.5,44.1l21.6,44.3l21.7,44.5l21.8,44.7l21.9,44.9l22,45.2l22.1,45.4l22.2,45.6l22.3,45.8l22.4,46l22.5,46.2l22.6,46.4l22.7,46.6l22.8,46.8l22.9,47.1l23,47.3l23.1,47.5l23.2,47.7l23.3,47.9l23.4,48.1l23.5,48.3l23.6,48.5l23.7,48.7l23.8,48.9l23.9,49.1l24,49.3l24.1,49.5l24.2,49.7l24.3,49.9l24.4,50.1l24.5,50.3l24.6,50.5l24.7,50.7l24.8,50.9l24.9,51.1l25,51.3l25.1,51.5l25.2,51.7l25.3,52l25.4,52.2l25.5,52.4l25.6,52.6l25.7,52.8l25.8,53l25.9,53.2l26,53.4l26.1,53.6l26.2,53.8l26.3,54l26.4,54.2l26.5,54.4l26.6,54.6l26.7,54.8l26.8,55l26.9,55.2l27,55.4l27.1,55.6l27.2,55.8l27.3,56l27.4,56.2l27.5,56.4l27.6,56.6l27.7,56.8l27.8,57.1l27.9,57.3l28,57.5l28.1,57.7l28.2,57.9l28.3,58.1l28.4,58.3l28.5,58.5l28.6,58.7l28.7,58.9l28.8,59.1l28.9,59.3l29.1,59.5l29.2,59.7l29.3,59.9l29.4,60.1l29.5,60.3l29.6,60.5l29.7,60.7l29.8,60.9l29.9,61.1l30,61.3l30.1,61.5l30.2,61.7l30.3,61.9l30.4,62.1l30.5,62.3l30.6,62.5l30.7,62.7l30.8,62.9l30.9,63.1l31,63.4l31.1,63.6l31.2,63.8l31.3,64l31.4,64.2l31.5,64.4l31.6,64.6l31.7,64.8l31.8,65l31.9,65.2l32,65.4l32.1,65.6l32.2,65.8l32.3,66l32.4,66.2l32.5,66.4l32.6,66.6l32.7,66.8l32.8,67l32.9,67.2l33,67.4l33.1,67.6l33.2,67.8l33.3,68l33.4,68.2l33.5,68.4l33.6,68.6l33.7,68.8l33.8,69l33.9,69.2l34,69.4l34.1,69.6l34.2,69.8l34.3,70l34.4,70.2l34.5,70.4l34.6,70.6l34.7,70.8l34.8,71l34.9,71.2l35,71.4l35.1,71.6l35.2,71.8l35.3,72l35.4,72.3l35.5,72.5l35.6,72.7l35.7,72.9l35.8,73.1l35.9,73.3l36,73.5l36.1,73.7l36.2,73.9l36.3,74.1l36.4,74.3l36.5,74.5l36.6,74.7l36.7,74.9l36.8,75.1l36.9,75.3l37,75.5l37.1,75.7l37.2,75.9l37.3,76.1l37.4,76.3l37.5,76.5l37.6,76.7l37.7,76.9l37.8,77.1l37.9,77.3l38,77.5l38.1,77.7l38.2,77.9l38.3,78.1l38.4,78.3l38.5,78.5l38.6,78.7l38.7,78.9l38.8,79.1l38.9,79.3l39,79.5l39.1,79.7l39.2,79.9l39.3,80.1l39.4,80.3l39.5,80.5l39.6,80.7l39.7,80.9l39.8,81.1l39.9,81.3l40,81.5l40.1,81.7l40.2,81.9l40.3,82.1l40.4,82.3l40.5,82.5l40.6,82.7l40.7,82.9l40.8,83.1l40.9,83.3l41,83.5l41.1,83.7l41.2,83.9l41.3,84.1l41.4,84.3l41.5,84.5l41.6,84.7l41.7,84.9l41.8,85.1l41.9,85.3l42,85.5l42.1,85.7l42.2,85.9l42.3,86.1l42.4,86.3l42.5,86.5l42.6,86.7l42.7,86.9l42.8,87.1l42.9,87.3l43,87.5l43.1,87.7l43.2,87.9l43.3,88.1l43.4,88.3l43.5,88.5l43.6,88.7l43.7,88.9l43.8,89.1l43.9,89.3l44,89.5l44.1,89.7l44.2,89.9l44.3,90.1l44.4,90.3l44.5,90.5l44.6,90.7l44.7,90.9l44.8,91.1l44.9,91.3l45,91.5l45.1,91.7l45.2,91.9l45.3,92.1l45.4,92.3l45.5,92.5l45.6,92.7l45.7,92.9l45.8,93.1l45.9,93.3l46,93.5l46.1,93.7l46.2,93.9l46.3,94.1l46.4,94.3l46.5,94.5l46.6,94.7l46.7,94.9l46.8,95.1l46.9,95.3l47,95.5l47.1,95.7l47.2,95.9l47.3,96.1l47.4,96.3l47.5,96.5l47.6,96.7l47.7,96.9l47.8,97.1l47.9,97.3l48,97.5l48.1,97.7l48.2,97.9l48.3,98.1l48.4,98.3l48.5,98.5l48.6,98.7l48.7,98.9l48.8,99.1l48.9,99.3l49,99.5l49.1,99.7l49.2,99.9l49.3,100.1l49.4,100.3l49.5,100.5l49.6,100.7l49.7,100.9l49.8,101.1l49.9,101.3l50,101.5l50.1,101.7l50.2,101.9l50.3,102.1l50.4,102.3l50.5,102.5l50.6,102.7l50.7,102.9l50.8,103.1l50.9,103.3l51,103.5l51.1,103.7l51.2,103.9l51.3,104.1l51.4,104.3l51.5,104.5l51.6,104.7l51.7,104.9l51.8,105.1l51.9,105.3l52,105.5l52.1,105.7l52.2,105.9l52.3,106.1l52.4,106.3l52.5,106.5l52.6,106.7l52.7,106.9l52.8,107.1l52.9,107.3l53,107.5l53.1,107.7l53.2,107.9l53.3,108.1l53.4,108.3l53.5,108.5l53.6,108.7l53.7,108.9l53.8,109.1l53.9,109.3l54,109.5l54.1,109.7l54.2,109.9l54.3,110.1l54.4,110.3l54.5,110.5l54.6,110.7l54.7,110.9l54.8,111.1l54.9,111.3l55,111.5l55.1,111.7l55.2,111.9l55.3,112.1l55.4,112.3l55.5,112.5l55.6,112.7l55.7,112.9l55.8,113.1l55.9,113.3l56,113.5l56.1,113.7l56.2,113.9l56.3,114.1l56.4,114.3l56.5,114.5l56.6,114.7l56.7,114.9l56.8,115.1l56.9,115.3l57,115.5l57.1,115.7l57.2,115.9l57.3,116.1l57.4,116.3l57.5,116.5l57.6,116.7l57.7,116.9l57.8,117.1l57.9,117.3l58,117.5l58.1,117.7l58.2,117.9l58.3,118.1l58.4,118.3l58.5,118.5l58.6,118.7l58.7,118.9l58.8,119.1l58.9,119.3l59,119.5l59.1,119.7l59.2,119.9l59.3,120.1l59.4,120.3l59.5,120.5l59.6,120.7l59.7,120.9l59.8,121.1l59.9,121.3l60,121.5l60.1,121.7l60.2,121.9l60.3,122.1l60.4,122.3l60.5,122.5l60.6,122.7l60.7,122.9l60.8,123.1l60.9,123.3l61,123.5l61.1,123.7l61.2,123.9l61.3,124.1l61.4,124.3l61.5,124.5l61.6,124.7l61.7,124.9l61.8,125.1l61.9,125.3l62,125.5l62.1,125.7l62.2,125.9l62.3,126.1l62.4,126.3l62.5,126.5l62.6,126.7l62.7,126.9l62.8,127.1l62.9,127.3l63,127.5l63.1,127.7l63.2,127.9l63.3,128.1l63.4,128.3l63.5,128.5l63.6,128.7l63.7,128.9l63.8,129.1l63.9,129.3l64,129.5l64.1,129.7l64.2,129.9l64.3,130.1l64.4,130.3l64.5,130.5l64.6,130.7l64.7,130.9l64.8,131.1l64.9,131.3l65,131.5l65.1,131.7l65.2,131.9l65.3,132.1l65.4,132.3l65.5,132.5l65.6,132.7l65.7,132.9l65.8,133.1l65.9,133.3l66,133.5l66.1,133.7l66.2,133.9l66.3,134.1l66.4,134.3l66.5,134.5l66.6,134.7l66.7,134.9l66.8,135.1l66.9,135.3l67,135.5l67.1,135.7l67.2,135.9l67.3,136.1l67.4,136.3l67.5,136.5l67.6,136.7l67.7,136.9l67.8,137.1l67.9,137.3l68,137.5l68.1,137.7l68.2,137.9l68.3,138.1l68.4,138.3l68.5,138.5l68.6,138.7l68.7,138.9l68.8,139.1l68.9,139.3l69,139.5l69.1,139.7l69.2,139.9l69.3,140.1l69.4,140.3l69.5,140.5l69.6,140.7l69.7,140.9l69.8,141.1l69.9,141.3l70,141.5l70.1,141.7l70.2,141.9l70.3,142.1l70.4,142.3l70.5,142.5l70.6,142.7l70.7,142.9l70.8,143.1l70.9,143.3l71,143.5l71.1,143.7l71.2,143.9l71.3,144.1l71.4,144.3l71.5,144.5l71.6,144.7l71.7,144.9l71.8,145.1l71.9,145.3l72,145.5l72.1,145.7l72.2,145.9l72.3,146.1l72.4,146.3l72.5,146.5l72.6,146.7l72.7,146.9l72.8,147.1l72.9,147.3l73,147.5l73.1,147.7l73.2,147.9l73.3,148.1l73.4,148.3l73.5,148.5l73.6,148.7l73.7,148.9l73.8,149.1l73.9,149.3l74,149.5l74.1,149.7l74.2,149.9l74.3,150.1l74.4,150.3l74.5,150.5l74.6,150.7l74.7,150.9l74.8,151.1l74.9,151.3l75,151.5l75.1,151.7l75.2,151.9l75.3,152.1l75.4,152.3l75.5,152.5l75.6,152.7l75.7,152.9l75.8,153.1l75.9,153.3l76,153.5l76.1,153.7l76.2,153.9l76.3,154.1l76.4,154.3l76.5,154.5l76.6,154.7l76.7,154.9l76.8,155.1l76.9,155.3l77,155.5l77.1,155.7l77.2,155.9l77.3,156.1l77.4,156.3l77.5,156.5l77.6,156.7l77.7,156.9l77.8,157.1l77.9,157.3l78,157.5l78.1,157.7l78.2,157.9l78.3,158.1l78.4,158.3l78.5,158.5l78.6,158.7l78.7,158.9l78.8,159.1l78.9,159.3l79,159.5l79.1,159.7l79.2,159.9l79.3,160.1l79.4,160.3l79.5,160.5l79.6,160.7l79.7,160.9l79.8,161.1l79.9,161.3l80,161.5l80.1,161.7l80.2,161.9l80.3,162.1l80.4,162.3l80.5,162.5l80.6,162.7l80.7,162.9l80.8,163.1l80.9,163.4l81.2,158.3l81.6,153l81.9,147.8l82.3,142.5l82.6,137.3l83,132l83.3,126.8l83.7,121.5l84,116.3l84.4,111l84.7,105.8l85.1,100.5" />
  </svg>
);

export default function ZambiaCampaignPage() {
  return (
    <div className="min-h-screen bg-[#07090E] pt-32 pb-24 selection:bg-primary/30 selection:text-white overflow-x-hidden">
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        
        {/* Background Map Silhouette */}
        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] pointer-events-none text-[#198A00] opacity-5 blur-sm overflow-hidden">
          <div className="transform rotate-12 scale-150">
            <ZambiaMapSilhouette />
          </div>
        </div>

        {/* ── Hero Section ───────────────────────────────────── */}
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
              The latest Ministry of Education Bulletin confirms a massive shift: Zambia’s classrooms are ready. 
              We provide the software that powers this digital progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-2xl px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20" asChild>
                <Link href="/#contact">Request a Private Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 w-full max-w-[500px] mx-auto">
              <ZambiaFlag />
            </div>
            {/* Glow effects */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-20 animate-pulse" />
          </motion.div>

        </div>

        {/* ── The Big Picture Stats ───────────────────────────── */}
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

        {/* ── Bulletin Link Section ──────────────────────────── */}
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

        {/* ── Rural vs Urban Transformation ───────────────────── */}
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
                  Zambia’s 7,995 Rural and 2,469 Remote schools are no longer "left behind." With our <strong>Offline Bundle</strong>, a school in Muchinga or Luapula can run a professional office with zero internet.
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
              <div className="flex justify-between items-end border-b border-white/5 pb-4 group">
                <p className="text-white/40 font-bold group-hover:text-white transition-colors">Lusaka Province</p>
                <p className="text-white font-mono font-black text-xl">1,524 Schools</p>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4 group">
                <p className="text-white/40 font-bold group-hover:text-white transition-colors">Copperbelt Province</p>
                <p className="text-white font-mono font-black text-xl">1,472 Schools</p>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4 group">
                <p className="text-white/40 font-bold group-hover:text-white transition-colors">Southern Province</p>
                <p className="text-white font-mono font-black text-xl">1,831 Schools</p>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4 group">
                <p className="text-white/40 font-bold group-hover:text-white transition-colors">Western Province</p>
                <p className="text-white font-mono font-black text-xl">1,611 Schools</p>
              </div>
              <div className="pt-6">
                <p className="text-sm text-primary font-bold italic">"Clear school records are now essential for strong regional education."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Conclusion / CTA ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-16 text-center relative overflow-hidden group"
        >
          {/* Zambian Flag Accent in CTA */}
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

          {/* Contact Information */}
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

        {/* Data Source Citation */}
        <p className="text-center mt-12 text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
          Source: Ministry of Education - Education Statistics Bulletin 2025
        </p>

      </div>
    </div>
  );
}
