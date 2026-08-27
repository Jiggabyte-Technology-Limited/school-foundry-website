import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { asset } from '@/lib/asset';

const NAV_LINKS = [
  { label: 'Our Mission', href: '/about' },
  { label: 'Offline App', href: '/offline' },
  { label: 'Cloud Portal', href: '/online' },
];

const MORE_LINKS = [
  { label: 'Zambia Campaign', href: '/campaigns/zambia', flag: '🇿🇲' },
  { label: 'Zimbabwe Campaign', href: '/campaigns/zimbabwe', flag: '🇿🇼' },
  { label: 'Agents & Partners', href: '/agents', flag: '🤝' },
  { label: 'Legal & POPIA', href: '/legal', flag: '⚖️' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pathname] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-[1160px] bg-white border border-[#c0bbb6]/40 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_12px_36px_rgba(0,0,0,0.1)] border-[#c0bbb6]/60'
            : 'shadow-[0_6px_24px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="SchoolFoundry Home">
              <div className="relative">
                <img src={asset("/logo.svg")} alt="" width={28} height={28} className="h-7 sm:h-8 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#1d1e1c] flex items-center" style={{ letterSpacing: '0.015em' }}>
                School<span className="text-[#fa5d00]">Foundry</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-[#4a4a47]">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`transition-colors duration-200 hover:text-[#1d1e1c] py-1 ${
                    isActive ? 'text-[#fa5d00] font-semibold' : 'text-[#4a4a47]'
                  }`}
                  style={{ letterSpacing: '0.015em' }}
                >
                  {label}
                </Link>
              );
            })}

            {/* Dropdown Menu */}
            <div className="relative group/dropdown">
              <button
                onClick={() => setDropdownOpen(o => !o)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1 py-1 transition-colors duration-200 hover:text-[#1d1e1c] outline-none ${
                  MORE_LINKS.some(link => pathname === link.href) ? 'text-[#fa5d00] font-semibold' : 'text-[#4a4a47]'
                }`}
                style={{ letterSpacing: '0.015em' }}
              >
                Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white border border-[#c0bbb6]/40 rounded-[20px] p-2 w-60 shadow-[0_12px_32px_rgba(0,0,0,0.12)] overflow-hidden">
                  {MORE_LINKS.map(({ label, href, flag }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all text-[13px] font-medium ${
                        pathname === href
                          ? 'bg-[#fee3b5] text-[#fa5d00] font-semibold'
                          : 'text-[#615f5c] hover:text-[#1d1e1c] hover:bg-[#fff8f1]'
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-base">{flag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Buttons & GitHub Link */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* GitHub Source Code Icon Link */}
            <a
              href="https://github.com/Jiggabyte-Technology-Limited/school-foundry"
              target="_blank"
              rel="noopener noreferrer"
              title="View source code on GitHub"
              aria-label="View source code on GitHub"
              className="w-9 h-9 rounded-full border border-[#c0bbb6]/50 flex items-center justify-center text-[#1d1e1c] hover:text-[#fa5d00] hover:border-[#fa5d00] hover:bg-[#fee3b5]/30 transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <Link
              href="/contact"
              className={`text-[14px] font-medium transition-colors px-2.5 py-1.5 ${
                pathname === '/contact' ? 'text-[#fa5d00] font-semibold' : 'text-[#4a4a47] hover:text-[#1d1e1c]'
              }`}
              style={{ letterSpacing: '0.015em' }}
            >
              Contact
            </Link>

            <Link
              href="/work-with-us"
              className="border border-[#1d1e1c] text-[#1d1e1c] hover:bg-[#1d1e1c] hover:text-white px-4 py-2 rounded-full font-semibold text-[13px] transition-all"
              style={{ letterSpacing: '0.015em' }}
            >
              Partner with us
            </Link>

            <a
              href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1e1c] hover:bg-[#fa5d00] text-white px-4.5 py-2 rounded-full font-semibold text-[13px] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center gap-1.5"
              style={{ letterSpacing: '0.015em' }}
            >
              <Download className="w-3.5 h-3.5" />
              Download Free
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://github.com/Jiggabyte-Technology-Limited/school-foundry/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1e1c] text-white px-3.5 py-1.5 rounded-full font-semibold text-xs transition-all"
            >
              Download
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="p-2 rounded-full text-[#1d1e1c] hover:bg-[#fff8f1] transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#d9d9d9] mt-3 pt-3 overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-2">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`font-semibold py-2.5 px-4 rounded-xl transition-all text-sm ${
                    pathname === '/' ? 'text-[#fa5d00] bg-[#fee3b5]' : 'text-[#1d1e1c] hover:bg-[#fff8f1]'
                  }`}
                >
                  Home
                </Link>
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={`font-semibold py-2.5 px-4 rounded-xl transition-all text-sm ${
                      pathname === href ? 'text-[#fa5d00] bg-[#fee3b5]' : 'text-[#1d1e1c] hover:bg-[#fff8f1]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <div className="pt-2 pb-1 border-t border-[#d9d9d9] my-1">
                  <p className="px-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8e8b87] mb-2">Campaigns & Resources</p>
                  {MORE_LINKS.map(({ label, href, flag }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className={`font-semibold py-2 px-4 rounded-xl transition-all text-xs flex items-center justify-between ${
                        pathname === href ? 'text-[#fa5d00] bg-[#fee3b5]' : 'text-[#615f5c] hover:bg-[#fff8f1]'
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-sm">{flag}</span>
                    </Link>
                  ))}
                </div>

                <a
                  href="https://github.com/Jiggabyte-Technology-Limited/school-foundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold py-2.5 px-4 rounded-xl transition-all text-sm text-[#1d1e1c] hover:bg-[#fff8f1] flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Source Code
                  </span>
                  <span className="text-[11px] font-mono text-[#8e8b87] bg-neutral-100 px-2 py-0.5 rounded">GitHub</span>
                </a>

                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#d9d9d9]">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="border border-[#1d1e1c] text-[#1d1e1c] px-4 py-2.5 rounded-full font-semibold text-xs text-center hover:bg-[#1d1e1c] hover:text-white transition-all"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/work-with-us"
                    onClick={closeMenu}
                    className="bg-[#1d1e1c] text-white px-4 py-2.5 rounded-full font-semibold text-xs text-center hover:bg-[#fa5d00] transition-all"
                  >
                    Partner with us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
