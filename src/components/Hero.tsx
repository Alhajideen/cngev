import React, { useState } from 'react'
import { ArrowUpRight, Shield, Users, MapPin, CheckCircle, ChevronRight, Info, Zap, Flame } from 'lucide-react'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cng' | 'ev'>('cng')

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Official Institutional Profile • CEUF Nigeria</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Uniting Users. <br />
              <span className="text-gradient-brand">Driving Clean Energy Mobility.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              The <strong className="text-white font-semibold">CNG & EV Users Forum (CEUF)</strong> is Nigeria's premier user-centred stakeholder platform uniting vehicle owners, transport operators, drivers, technicians, and clean mobility enthusiasts.
            </p>

            {/* 4 Core Pillars Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-300">
                <Users className="w-3.5 h-3.5" />
                <span>USER-CENTRED</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/50 text-xs font-semibold text-blue-300">
                <Shield className="w-3.5 h-3.5" />
                <span>NON-PARTISAN</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>ABUJA-BASED</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>OPEN MEMBERSHIP</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary-gradient px-8 py-3.5 rounded-2xl text-sm font-extrabold text-white flex items-center justify-center gap-2 shadow-xl group"
              >
                <span>JOIN CLEAN MOBILITY TRANSITION</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#who-we-are"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Read Profile</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Disclaimer / What We Are Not */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2 max-w-xl mx-auto lg:mx-0">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Independent Representation:</strong> CEUF is not a vendor, financier, regulator, or political entity. We exist solely to represent and guide clean-mobility users safely and transparently.
              </span>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-slate-700/80 shadow-2xl group">
              
              {/* Main Clean Mobility Showcase Image */}
              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="CNG and Electric Vehicles Clean Mobility in Nigeria" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating Badge Top Left */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 flex items-center gap-2">
                  <img src="/images/logo.jpg" alt="Logo" className="w-5 h-5 rounded object-contain" />
                  <span className="text-xs font-bold text-white">CEUF Nigeria</span>
                </div>

                {/* Interactive CNG vs EV Switcher Card at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300">Clean Energy Tech Focus:</span>
                    <div className="flex gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setActiveTab('cng')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors flex items-center gap-1 ${activeTab === 'cng' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        <Flame className="w-3 h-3 text-amber-300" />
                        <span>CNG</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('ev')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors flex items-center gap-1 ${activeTab === 'ev' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        <Zap className="w-3 h-3 text-cyan-300" />
                        <span>EV</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-snug">
                    {activeTab === 'cng' ? (
                      <span className="text-emerald-300">
                        🔥 <strong>Compressed Natural Gas (CNG):</strong> Drastically reduces fuel costs, offers cleaner emissions for transit buses & private vehicles across Nigeria.
                      </span>
                    ) : (
                      <span className="text-blue-300">
                        ⚡ <strong>Electric Vehicles (EV):</strong> Zero-tailpipe emission mobility, charging infrastructure development, and low operating costs for modern fleets.
                      </span>
                    )}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
