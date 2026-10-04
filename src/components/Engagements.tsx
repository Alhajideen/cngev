import React, { useState } from 'react'
import { Camera, ShieldAlert, CheckCircle2, X } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export const Engagements: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

  const engagements = [
    {
      title: 'Stakeholder Engagement Session',
      subtitle: 'Technical roundtables with industry partners',
      image: '/images/engagement-session.jpg',
      tag: 'Roundtable',
      description: 'Collaborative discussion bringing together clean mobility leaders, engineers, and user representatives to align on safety protocols and conversion quality.'
    },
    {
      title: 'CEUF Delegation — Courtesy Visit',
      subtitle: 'High-level executive courtesy visits',
      image: '/images/delegation-visit.jpg',
      tag: 'Courtesy Visit',
      description: 'Formal delegation meetings with key public sector officials, introducing CEUF institutional goals and end-user priorities.'
    },
    {
      title: 'Liaison Discussion with Industry Partner',
      subtitle: 'Strategic dialogue on user protection & kits',
      image: '/images/liaison-discussion.jpg',
      tag: 'Industry Liaison',
      description: 'Direct consultative sessions addressing equipment certification, transparent pricing structures, and technician training standards.'
    }
  ]

  const keyActivities = [
    'Courtesy visits and stakeholder recognition',
    'Structured liaison with industry & public-sector agencies',
    'User feedback and engagement sessions',
    'CNG safety sensitisation activities across states',
    'Policy and technical input submissions to regulators',
    'Clean-mobility community initiatives and workshops'
  ]

  return (
    <section id="engagements" className="py-20 bg-slate-950/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              04 • Field Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Stakeholder Engagement & Field Activities
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              CEUF maintains an active, ongoing liaison structure with government agencies, industry leaders, and technical partners — always representing vehicle end-users.
            </p>
          </div>
        </ScrollReveal>

        {/* Real Photo Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {engagements.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 100} direction="up">
              <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all group h-full flex flex-col justify-between">
                
                {/* Photo Header */}
                <div 
                  className="relative h-56 overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setActivePhoto(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-emerald-400 border border-slate-800">
                    {item.tag}
                  </span>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400/80 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Verified CEUF Event</span>
                    <button 
                      onClick={() => setActivePhoto(item.image)}
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      View Photo →
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Advisory Nature Disclaimer & Activities List */}
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Statement */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Advisory & Representative Scope</span>
                </div>
                
                <h3 className="text-xl font-bold text-white">
                  Institutional Scope of Engagement
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  CEUF's engagements are advisory and representative in nature. They do not constitute statutory authority or government endorsement beyond what is expressly granted.
                </p>
              </div>

              {/* Right Checklist */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyActivities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{act}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Photo Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={activePhoto} alt="Enlarged view" className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
