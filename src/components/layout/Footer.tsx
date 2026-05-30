'use client';

import React from 'react';
import { Mail, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-[#030508] text-white/40 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mb-20">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group w-fit outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8 focus-visible:ring-offset-[#030508] rounded-sm">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} alt="" width={40} height={40} className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" />
              <span className="font-bold text-2xl tracking-tight text-white">School<span className="font-light text-primary group-hover:text-primary/80 transition-colors">Foundry</span></span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-sm text-base">
              Helping schools ditch the paperwork and run smoother. Built right here in Zambia, for schools that actually need tools that work.
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:info@jiggabyte.co.zm" className="flex items-center gap-3 hover:text-primary transition-colors duration-300 outline-none focus-visible:text-primary">
                <div className="p-2 rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                info@jiggabyte.co.zm
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                Lusaka, Zambia
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Platform</h4>
            <div className="flex flex-col gap-4 text-[13px] font-semibold">
              {[
                { label: 'Offline Bundle', href: '/offline' },
                { label: 'Cloud Version', href: '/online' },
                { label: 'About Us', href: '/about' },
                { label: 'Work With Us', href: '/work-with-us' },
                { label: 'Request Demo', href: '/#contact' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="hover:text-primary transition-all duration-300 flex items-center gap-2 group outline-none focus-visible:text-primary">
                  <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Regional</h4>
            <div className="flex flex-col gap-4 text-[13px] font-semibold">
              {[
                { label: 'Zambia Campaign', href: '/campaigns/zambia', flag: '🇿🇲' },
                { label: 'Zimbabwe Campaign', href: '/campaigns/zimbabwe', flag: '🇿🇼' },
                { label: 'Legal & POPIA', href: '/legal', flag: '⚖️' },
                { label: 'Documentation', href: '/docs', flag: '📖' },
              ].map(({ label, href, flag }) => (
                <Link key={label} href={href} className="hover:text-primary transition-all duration-300 flex items-center gap-2 group outline-none focus-visible:text-primary">
                  <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> 
                  <span className="flex-1">{label}</span>
                  <span className="text-xs grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">{flag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-white/20">
          <p>&copy; {new Date().getFullYear()} SchoolFoundry. Forging the Future.</p>
          <p>
            System by{' '}
            <span className="text-primary/60 hover:text-primary transition-colors duration-300 cursor-default">Jiggabyte Technology Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
