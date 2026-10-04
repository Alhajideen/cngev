import React from 'react'
import { 
  Users, 
  Eye, 
  BookOpen, 
  Handshake, 
  MessageSquare, 
  LineChart, 
  Presentation, 
  Megaphone,
  ShieldCheck,
  ArrowUpRight,
  Sparkles
} from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const Partnerships: React.FC = () => {
  const partnerValues = [
    { title: 'Access to Potential Customers', icon: Users, desc: 'Direct connection to active & prospective CNG & EV vehicle owners looking for verified products.' },
    { title: 'Product Awareness', icon: Eye, desc: 'High visibility for genuine conversion kits, charging stations, and clean transit solutions.' },
    { title: 'User Education', icon: BookOpen, desc: 'Co-branding educational materials to build consumer trust and safe equipment usage.' },
    { title: 'Stakeholder Engagement', icon: Handshake, desc: 'Access to structured roundtables with transport operators, fleet owners, and regulators.' },
    { title: 'Feedback from Real Users', icon: MessageSquare, desc: 'Authentic end-user reviews, performance metrics, and post-conversion feedback.' },
    { title: 'Market Intelligence', icon: LineChart, desc: 'Insights into user adoption trends, refilling challenges, and regional demand shifts.' },
    { title: 'Product Demonstrations', icon: Presentation, desc: 'Facilitated physical & virtual demonstration sessions for new equipment & EV models.' },
    { title: 'Structured Community Outreach', icon: Megaphone, desc: 'Organized community sessions across transport hubs, commercial parks, and tech hubs.' },
    { title: 'Clean-Mobility Campaigns', icon: Sparkles, desc: 'Joint national advocacy campaigns driving clean energy transit adoption in Nigeria.' }
  ]

  const principles = [
    {
      num: '01',
      title: 'No Automatic Endorsements',
      desc: 'CEUF does not automatically endorse every commercial proposal. Partnership proposals are subject to strict verification, transparency, and objective alignment.'
    },
    {
      num: '02',
      title: 'Credibility & Safety Assessment',
      desc: 'Every partnership is evaluated for equipment safety standards, technical credibility, and genuine value to clean-mobility users.'
    },
    {
      num: '03',
      title: 'Independence & Member Trust',
      desc: 'CEUF\'s institutional independence and the uncompromised trust of our user community guide every single partnership decision.'
    }
  ]

  return (
    <section id="partnerships" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              05 • Corporate Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              What We Bring to Corporate & Industry Partners
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              CEUF provides structured access to Nigeria's growing clean-mobility user base, while promoting responsible information, transparency, and user protection.
            </p>
          </div>
        </ScrollReveal>

        {/* Current Opportunity Banner */}
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 lg:p-10 border border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-blue-950/60 mb-16 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CURRENT PARTNERSHIP OPPORTUNITY 2026</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Open for Structured Corporate & Infrastructure Partnerships
                </h3>
                <blockquote className="text-slate-200 text-base italic border-l-2 border-emerald-400 pl-3">
                  “CEUF is open to structured partnerships with credible businesses providing CNG and EV products, infrastructure, financing, technical services and other solutions that support responsible clean-mobility adoption.”
                </blockquote>
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 btn-primary-gradient px-8 py-4 rounded-2xl text-sm font-extrabold text-white flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>
          </div>
        </ScrollReveal>

        {/* 9 Value Proposition Cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            9 Strategic Advantages for CEUF Partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <ScrollReveal key={val.title} delay={idx * 50} direction="up">
                  <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* 3 Partnership Principles */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800">
          <h3 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>CEUF Partnership Principles</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 relative">
                <span className="text-3xl font-black text-slate-700 absolute top-4 right-4">
                  {p.num}
                </span>
                <h4 className="text-base font-bold text-emerald-400 mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
