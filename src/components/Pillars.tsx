import React from 'react'
import { Users, Shield, MapPin, CheckCircle2, AlertTriangle } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export const Pillars: React.FC = () => {
  const pillars = [
    {
      title: 'USER-CENTRED',
      desc: 'Dedicated exclusively to empowering current and prospective clean mobility users with factual knowledge and safety guidance.',
      icon: Users,
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
      badge: 'Core Identity'
    },
    {
      title: 'NON-PARTISAN',
      desc: 'An independent, neutral representative body bridging users, government policymakers, and commercial industry leaders.',
      icon: Shield,
      color: 'border-blue-500/30 text-blue-400 bg-blue-950/40',
      badge: 'Independence'
    },
    {
      title: 'ABUJA-BASED',
      desc: 'Strategically headquartered in the Federal Capital Territory (Abuja) for direct liaison with national transport agencies and ministries.',
      icon: MapPin,
      color: 'border-amber-500/30 text-amber-400 bg-amber-950/40',
      badge: 'Strategic Hub'
    },
    {
      title: 'OPEN MEMBERSHIP',
      desc: 'Inclusive to all stakeholders across Nigeria — from private car owners and commercial taxi drivers to fleet managers and technicians.',
      icon: CheckCircle2,
      color: 'border-purple-500/30 text-purple-400 bg-purple-950/40',
      badge: 'Inclusivity'
    },
  ]

  return (
    <section id="who-we-are" className="py-20 bg-slate-950/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              01 • Institutional Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Who We Are & What Drives Us
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              As clean mobility adoption accelerates in Nigeria, users face a common challenge: limited access to reliable information, safety protocols, and structured advocacy. <strong className="text-white">CEUF exists to close that gap.</strong>
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={idx * 100} direction="up">
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col justify-between relative group hover:-translate-y-1 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl border ${item.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Clarification Callout Card: What We Are NOT */}
        <ScrollReveal direction="up" delay={400}>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    What We Are NOT
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                    <strong className="text-slate-100">CEUF is NOT a vendor, financier, regulator, or political organization.</strong> We are a user-representative forum focused exclusively on informed, safe, and responsible clean-mobility adoption across Nigeria.
                  </p>
                </div>
              </div>

              <a
                href="#who-we-serve"
                className="shrink-0 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors border border-slate-700"
              >
                See Who We Serve →
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
