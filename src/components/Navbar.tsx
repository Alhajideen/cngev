import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Engagements', href: '#engagements' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Calculator', href: '#calculator' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shadow-lg group-hover:border-green-500/50 transition-colors overflow-hidden">
              <img 
                src="/images/logo.jpg" 
                alt="CNG & EV Users Forum Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                CEUF <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">CNG & EV</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 hidden sm:block">
                CNG & EV Users Forum Nigeria
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-lg shadow-emerald-900/20 group whitespace-nowrap"
            >
              <span>JOIN CLEAN MOBILITY TRANSITION</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient px-3 py-1.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1 shrink-0 whitespace-nowrap"
            >
              <span>JOIN CLEAN MOBILITY TRANSITION</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-card rounded-2xl border border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-800/80">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary-gradient py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg"
              >
                <span>JOIN CLEAN MOBILITY TRANSITION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
