import React from 'react'
import { Building2, Cpu, Users, Megaphone, Lightbulb, MessageSquare, Handshake, ShieldCheck } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export const Ecosystem: React.FC = () => {
  const activities = [
    {
      title: 'Public Education & Safety Campaigns',
      desc: 'Awareness campaigns on proper CNG cylinder inspection, pressure ratings, gas refilling guidelines, and high-voltage EV operating precautions.',
      icon: Megaphone
    },
    {
      title: 'Technical Knowledge Sessions',
      desc: 'Hands-on technical workshops co-hosted with certified engineers, automotive equipment original equipment manufacturers (OEMs), and safety agencies.',
      icon: Lightbulb
    },
    {
      title: 'Structured Feedback Channels',
      desc: 'Aggregating authentic real-world data from vehicle owners regarding gas pricing, station queues, conversion performance, and charging access.',
      icon: MessageSquare
    },
    {
      title: 'Facilitated Stakeholder Engagements',
      desc: 'Organizing courtesy visits, consultative dialogues, and technical roundtables between clean mobility users and key government regulators.',
      icon: Handshake
    },
    {
      title: 'Clean-Mobility Advocacy & Outreach',
      desc: 'Grassroots community outreach promoting environmental decarbonization, fuel subsidy mitigation, and sustainable green transit across states.',
      icon: ShieldCheck
    }
  ]

  return (
    <section id="what-we-do" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              03 • Ecosystem Bridge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              What We Do & Our Position in the Ecosystem
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              CEUF sits at the exact centre of Nigeria's clean-mobility ecosystem — providing a structured channel through which government policy, industry innovation, and actual user experience meet.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Ecosystem Diagram Box */}
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 lg:p-10 border border-slate-700/80 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-8">
              Nigeria Clean-Mobility Tripartite Integration Structure
            </h3>

            {/* Ecosystem Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
              
              {/* Government Node */}
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-blue-500/30 text-center hover:border-blue-500/60 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">GOVERNMENT</h4>
                <p className="text-xs text-blue-300 font-semibold mb-2">Policy & Regulation</p>
                <p className="text-xs text-slate-400">Ministries, Agencies (NADDC, PCNGi, Standards, Safety Regulators)</p>
              </div>

              {/* Central CEUF Hub Node */}
              <div className="bg-gradient-to-br from-emerald-950/80 to-blue-950/80 p-7 rounded-3xl border-2 border-emerald-500 text-center shadow-2xl shadow-emerald-950/50 relative transform hover:scale-[1.02] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-emerald-400/50 p-1 flex items-center justify-center mx-auto mb-3">
                  <img src="/images/logo.jpg" alt="CEUF Hub" className="w-full h-full object-contain rounded-xl" />
                </div>
                <h4 className="text-xl font-extrabold text-white mb-1 tracking-tight">CEUF HUB</h4>
                <p className="text-xs text-emerald-400 font-bold mb-2 uppercase tracking-wide">Structured User Representation</p>
                <p className="text-xs text-slate-300 font-medium">Verification • Knowledge Sharing • Policy Feedback</p>
              </div>

              {/* Industry Node */}
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-emerald-500/30 text-center hover:border-emerald-500/60 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">INDUSTRY</h4>
                <p className="text-xs text-emerald-300 font-semibold mb-2">Products & Services</p>
                <p className="text-xs text-slate-400">CNG Kit Importers, Installers, EV Manufacturers, Financiers</p>
              </div>

            </div>

            {/* Bottom Connecting End Users Node */}
            <div className="mt-8 pt-8 border-t border-slate-800 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="font-bold">END USERS:</span> Vehicle Owners, Drivers, Transport Operators & Mechanics
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6 max-w-2xl mx-auto italic">
              “CEUF gives businesses a credible route to informed users, and gives users access to legitimate products, services and opportunities — transparently and verifiably.”
            </p>

          </div>
        </ScrollReveal>

        {/* Key Core Activities List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-6">
            Core Activities & Technical Initiatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, idx) => {
              const Icon = act.icon
              return (
                <ScrollReveal key={act.title} delay={idx * 80} direction="up">
                  <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {act.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
