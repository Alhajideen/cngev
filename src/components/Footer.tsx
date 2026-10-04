import React from 'react'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shadow-lg">
                <img src="/images/logo.jpg" alt="CEUF Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight block">
                  CNG & EV USERS FORUM (CEUF)
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">
                  Uniting users. Driving clean energy mobility.
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              The premier non-partisan, user-centred platform uniting CNG and EV vehicle owners, operators, technicians, and industry partners across Nigeria.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Headquartered in Abuja, Nigeria</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#who-we-are" className="hover:text-emerald-400 transition-colors">Who We Are & Pillars</a></li>
              <li><a href="#who-we-serve" className="hover:text-emerald-400 transition-colors">Target Communities</a></li>
              <li><a href="#vision-mission" className="hover:text-emerald-400 transition-colors">Vision & Mission</a></li>
              <li><a href="#what-we-do" className="hover:text-emerald-400 transition-colors">What We Do & Ecosystem</a></li>
              <li><a href="#engagements" className="hover:text-emerald-400 transition-colors">Stakeholder Engagements</a></li>
              <li><a href="#partnerships" className="hover:text-emerald-400 transition-colors">Corporate Partnerships</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Savings Calculator</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact & CTA Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact & Portal
            </h4>
            <p className="text-xs text-slate-400">
              Need assistance or want to join our user representative network?
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient px-5 py-3 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <span>JOIN CLEAN MOBILITY TRANSITION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="pt-2 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>info@cngevusersforum.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+234 911 555 0054</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} CNG & EV Users Forum (CEUF) Nigeria. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>User-Centred • Non-Partisan • Abuja-Based</span>
          </div>
        </div>

      </div>

      {/* Floating Sticky Contact CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-gradient p-3.5 rounded-full text-white font-extrabold shadow-2xl flex items-center gap-2 hover:scale-105 transition-all group"
          title="JOIN CLEAN MOBILITY TRANSITION"
        >
          <span className="hidden sm:inline text-xs pl-1">JOIN CLEAN MOBILITY TRANSITION</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  )
}
