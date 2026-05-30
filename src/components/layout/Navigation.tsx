'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Offline Bundle', href: '/offline' },
  { label: 'Cloud Version', href: '/online' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'Contact', href: '/contact' },
];

const MORE_LINKS = [
  { label: 'Zambia Campaign', href: '/campaigns/zambia', flag: '🇿🇲' },
  { label: 'Zimbabwe Campaign', href: '/campaigns/zimbabwe', flag: '🇿🇼' },
  { label: 'About Us', href: '/about', flag: 'ℹ️' },
  { label: 'Documentation', href: '/docs', flag: '📖' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav 
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#07090E]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="SchoolFoundry Home">
          <div className="relative">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} alt="" width={36} height={36} className="h-9 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white transition-colors duration-300">
            School<span className="font-light text-primary group-hover:text-primary/80 transition-colors">Foundry</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] uppercase tracking-widest font-semibold">
          {NAV_LINKS.map(({ label, href }) => {
            const isAnchor = href.startsWith('/#');
            const isActive = pathname === '/' && isAnchor ? false : pathname === href;
            
            return (
              <Link 
                key={label} 
                href={href} 
                className={`relative transition-colors duration-300 hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#07090E] rounded-sm ${isActive ? 'text-primary' : 'text-white/90'}`}
              >
                {label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Dropdown */}
          <div className="relative group/dropdown">
            <button 
              onMouseEnter={() => setDropdownOpen(true)}
              className={`flex items-center gap-1.5 transition-colors duration-300 hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#07090E] rounded-sm ${MORE_LINKS.some(link => pathname === link.href) ? 'text-primary' : 'text-white/90'}`}
            >
              More <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              onMouseLeave={() => setDropdownOpen(false)}
              className={`absolute top-full right-0 pt-4 transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
            >
              <div className="bg-[#0A0D14] border border-white/10 rounded-2xl p-3 w-64 shadow-2xl backdrop-blur-xl overflow-hidden">
                {MORE_LINKS.map(({ label, href, flag }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-[11px] uppercase tracking-widest font-bold outline-none focus-visible:bg-white/5 focus-visible:text-primary ${pathname === href ? 'bg-primary/10 text-primary' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <span>{label}</span>
                    <span className="text-base grayscale group-hover:grayscale-0 transition-all">{flag}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            href="/#contact" 
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-[0_8px_20px_-6px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090E]"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className={`lg:hidden p-2.5 rounded-xl transition-all ${scrolled ? 'text-white bg-white/5 hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
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
            className="lg:hidden bg-[#0A0D14]/98 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`font-bold py-4 px-4 rounded-2xl transition-all text-lg border border-transparent ${pathname === href ? 'text-primary bg-white/5' : 'text-white/70 hover:text-primary hover:bg-white/5'}`}
                >
                  {label}
                </Link>
              ))}
              
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="px-4 text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-4">Explore More</p>
                {MORE_LINKS.map(({ label, href, flag }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`font-bold py-3 px-4 rounded-2xl transition-all text-base flex items-center justify-between ${pathname === href ? 'text-primary bg-white/5' : 'text-white/50 hover:text-primary'}`}
                >
                    <span>{label}</span>
                    <span>{flag}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="mt-6 bg-primary text-white px-6 py-4 rounded-2xl font-bold text-center hover:bg-primary/90 transition-all shadow-lg"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
