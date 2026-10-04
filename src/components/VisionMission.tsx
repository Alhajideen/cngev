import React from 'react'
import { Eye, Target, Award, BookOpen, ShieldAlert, Cpu, Handshake, Compass, MessageSquare, RefreshCw } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export const VisionMission: React.FC = () => {
  const objectives = [
    {
      title: 'Responsible Adoption',
      desc: 'Promoting safe, standardized CNG conversion and EV deployment across Nigeria.',
      icon: Award,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      title: 'User Education',
      desc: 'Empowering users with factual maintenance tips, refilling station guides, and battery care.',
      icon: BookOpen,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      title: 'Safety Awareness',
      desc: 'Conducting public sensitisation campaigns on gas cylinder pressure safety & high-voltage EV guidelines.',
      icon: ShieldAlert,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      title: 'Technical Knowledge Sharing',
      desc: 'Hosting technical sessions and workshops with accredited engineers and certified partners.',
      icon: Cpu,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    },
    {
      title: 'Stakeholder Engagement',
      desc: 'Facilitating courtesy visits, government policy discussions, and industry dialogues.',
      icon: Handshake,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/30'
    },
    {
      title: 'Access to Opportunities',
      desc: 'Connecting members to verified clean-mobility financing, products, and technical services.',
      icon: Compass,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    },
    {
      title: 'User Representation',
      desc: 'Providing a unified, structured voice for end-user feedback to government & equipment manufacturers.',
      icon: MessageSquare,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    },
    {
      title: 'Sustainable Ecosystem',
      desc: 'Supporting Nigeria\'s long-term energy transition and green transit economy.',
      icon: RefreshCw,
      color: 'text-green-400 bg-green-500/10 border-green-500/30'
    },
  ]

  return (
    <section id="vision-mission" className="py-20 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              02 • What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Our Vision, Mission & Strategic Objectives
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              CEUF provides the institutional foundation and user-centered direction needed for a safe, transparent clean mobility ecosystem in Nigeria.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 relative overflow-hidden group hover:border-emerald-500/60 transition-all h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Institutional Horizon
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      OUR VISION
                    </h3>
                  </div>
                </div>

                <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-4 my-4">
                  “A Nigeria where every CNG and EV user adopts clean mobility with confidence, safety, and full access to reliable information.”
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center justify-between">
                <span>Confidence • Safety • Information</span>
                <span>CEUF Vision 2026+</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-3xl p-8 border border-blue-500/30 relative overflow-hidden group hover:border-blue-500/60 transition-all h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                      Core Commitment
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      OUR MISSION
                    </h3>
                  </div>
                </div>

                <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-blue-500 pl-4 my-4">
                  “To unite, inform, and represent users of CNG and EV technology — building a trusted bridge between users, industry, and government.”
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-blue-400 font-semibold flex items-center justify-between">
                <span>Unite • Inform • Represent</span>
                <span>Trusted Bridge</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* 8 Objectives Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            8 Key Institutional Objectives
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {objectives.map((obj, i) => {
              const Icon = obj.icon
              return (
                <ScrollReveal key={obj.title} delay={i * 60} direction="up">
                  <div className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className={`p-2.5 rounded-xl border w-fit mb-4 ${obj.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {obj.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {obj.desc}
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
