import React from 'react'
import { UserCheck, ShieldCheck, Mail, Phone, Globe, MapPin, Share2, ArrowUpRight, Send } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const LeadershipContact: React.FC = () => {
  const leaders = [
    {
      name: 'UZOGARA IKEDI FELIX',
      role: 'Coordinator',
      desc: 'Leading strategic institutional engagement, stakeholder liaison, and user representation across Nigeria.',
      icon: UserCheck,
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40'
    },
    {
      name: 'BARRISTER BRIGHT OSATO',
      role: 'Secretary / Legal Counsel',
      desc: 'Overseeing legal governance, partnership verification compliance, institutional transparency, and secretariat affairs.',
      icon: ShieldCheck,
      color: 'border-blue-500/30 text-blue-400 bg-blue-950/40'
    }
  ]

  const channels = [
    { label: 'Official Email', val: 'info@cngevusersforum.org', icon: Mail, href: 'mailto:info@cngevusersforum.org' },
    { label: 'Direct Helpline', val: '+234 911 555 0054', icon: Phone, href: 'tel:+2349115550054' },
    { label: 'Official Portal', val: 'www.cngevusersforum.org', icon: Globe, href: 'https://www.cngevusersforum.org' },
    { label: 'Headquarters', val: 'Abuja, Federal Capital Territory, Nigeria', icon: MapPin, href: '#' }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950/90 relative border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              07 • Governance & Outreach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Leadership & Official Channels
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Get in touch with the CNG & EV Users Forum executive office for membership, stakeholder engagements, and partnership inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Leadership Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => {
            const Icon = leader.icon
            return (
              <ScrollReveal key={leader.name} delay={idx * 100} direction="up">
                <div className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/40 transition-all h-full flex flex-col justify-between relative group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl border ${leader.color}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                        {leader.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      {leader.role} • CEUF Leadership
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Executive Officer</span>
                    <span className="text-emerald-400 font-semibold">Abuja HQ</span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Big Contact Banner & Channels */}
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Form CTA Callout */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold">
                  <Send className="w-3.5 h-3.5" />
                  <span>Direct Communication Portal</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Have Questions or Want to Join CEUF?
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Submit your inquiry, feedback, or partnership request through our secure Google Form. Our secretariat will respond promptly.
                </p>

                <div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-gradient px-8 py-4 rounded-2xl text-sm font-extrabold text-white inline-flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform group"
                  >
                    <span>JOIN CLEAN MOBILITY TRANSITION</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Channels Info */}
              <div className="lg:col-span-6 space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                  Official Contact Channels
                </h4>

                {channels.map((ch) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 block">
                          {ch.label}
                        </span>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                          {ch.val}
                        </span>
                      </div>
                    </a>
                  )
                })}

                <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-blue-400" />
                    Social Handles: @cngevusersforum
                  </span>
                  <span className="text-emerald-400 font-semibold">Facebook • X • Instagram</span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
