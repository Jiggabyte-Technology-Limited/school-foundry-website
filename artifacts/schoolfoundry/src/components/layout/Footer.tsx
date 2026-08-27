import React from 'react';
import { Mail, MapPin, ChevronRight, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { Link } from 'wouter';
import { asset } from '@/lib/asset';

const ZAMBIA_NUMBER = '260570326775';
const ZAMBIA_DISPLAY = '+260 570 326 775';
const ZIM_NUMBER = '27696372803';
const ZIM_DISPLAY = '+27 69 637 2803';

export default function Footer() {
  return (
    <footer className="bg-[#1d1e1c] text-[#8e8b87] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 mb-16">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit outline-none focus-visible:ring-2 focus-visible:ring-[#fa5d00] rounded-md">
              <img src={asset("/logo.svg")} alt="SchoolFoundry Logo" width={40} height={40} className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
              <span className="font-bold text-2xl tracking-tight text-white" style={{ letterSpacing: '0.015em' }}>
                School<span className="text-[#fa5d00] group-hover:text-[#fa5d00]/80 transition-colors">Foundry</span>
              </span>
            </Link>
            <p className="text-[#8e8b87] leading-relaxed mb-8 text-[15px] max-w-md" style={{ letterSpacing: '0.015em' }}>
              Open digital public infrastructure for educational equity and child safeguarding in Africa. Built in Lusaka, Zambia for schools across the continent.
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:schoolfoundry@jiggabyte.co.zm" className="flex items-center gap-3 text-[#c0bbb6] hover:text-[#fa5d00] transition-colors duration-200 outline-none focus-visible:text-[#fa5d00] w-fit">
                <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-[#fa5d00]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>schoolfoundry@jiggabyte.co.zm</span>
              </a>

              {[
                { label: 'Zambia', number: ZAMBIA_NUMBER, display: ZAMBIA_DISPLAY },
                { label: 'Zimbabwe', number: ZIM_NUMBER, display: ZIM_DISPLAY },
              ].map(({ label, number, display }) => (
                <div key={label} className="flex items-center gap-2 max-w-sm">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-[#fa5d00] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="flex-1 text-[#c0bbb6] text-sm">{label}: {display}</span>
                  <a
                    href={`tel:+${number}`}
                    title={`Call ${label}`}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-[#c0bbb6] hover:text-[#fa5d00] transition-colors"
                    aria-label={`Call ${display}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`WhatsApp ${label}`}
                    className="p-2 rounded-xl bg-white/10 hover:bg-[#fa5d00]/10 border border-white/10 text-[#c0bbb6] hover:text-[#fa5d00] transition-colors"
                    aria-label={`WhatsApp ${display}`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-3 text-[#8e8b87]">
                <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-[#fa5d00] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Lusaka, Zambia · Digital Public Good</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6">Platform &amp; Mission</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {[
                { label: 'Our Mission (DPG)', href: '/about' },
                { label: 'Offline Core (Free)', href: '/offline' },
                { label: 'Cloud Portal', href: '/online' },
                { label: 'Partner With Us', href: '/work-with-us' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-[#8e8b87] hover:text-[#fa5d00] transition-all duration-200 flex items-center gap-2 group outline-none focus-visible:text-[#fa5d00] py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#fa5d00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span style={{ letterSpacing: '0.015em' }}>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6">Regional</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {[
                { label: 'Zambia Campaign', href: '/campaigns/zambia', flag: '🇿🇲' },
                { label: 'Zimbabwe Campaign', href: '/campaigns/zimbabwe', flag: '🇿🇼' },
                { label: 'Legal & POPIA', href: '/legal', flag: '⚖️' },
              ].map(({ label, href, flag }) => (
                <Link key={label} href={href} className="text-[#8e8b87] hover:text-[#fa5d00] transition-all duration-200 flex items-center gap-2 group outline-none focus-visible:text-[#fa5d00] py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#fa5d00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="flex-1" style={{ letterSpacing: '0.015em' }}>{label}</span>
                  <span className="text-sm opacity-60 group-hover:opacity-100">{flag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-[#777571]" style={{ letterSpacing: '0.015em' }}>
          <p>&copy; {new Date().getFullYear()} SchoolFoundry. Core Offline Edition is an Open Source Digital Public Good (MIT).</p>
          <p>
            An Open Venture by{' '}
            <span className="text-[#fa5d00] hover:text-[#fa5d00]/80 transition-colors">Jiggabyte Technology Limited &amp; Banya Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
