import React, { useState } from 'react'
import { 
  Car, 
  Sparkles, 
  Zap, 
  Bus, 
  Wrench, 
  Truck, 
  Leaf, 
  Users2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { GOOGLE_FORM_URL } from '../constants'

export const WhoWeServe: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>(0)

  const groups = [
    {
      title: 'CNG Vehicle Owners',
      category: 'CNG Community',
      icon: Car,
      color: 'from-emerald-500 to-green-600',
      description: 'Current owners of CNG-converted or factory-fitted gas vehicles seeking maintenance guidance, reliable gas refilling station updates, and safety standards.',
      benefits: ['Access to certified CNG conversion workshops', 'Safety inspection checklists & maintenance guides', 'Direct platform to voice refilling station experiences']
    },
    {
      title: 'Prospective CNG Users',
      category: 'Future Adopters',
      icon: Sparkles,
      color: 'from-green-500 to-teal-600',
      description: 'Drivers and vehicle owners planning to convert their petrol/diesel vehicles to CNG who require transparent cost-benefit advice and safety verification.',
      benefits: ['Unbiased cost savings analysis', 'Verified conversion kit safety guides', 'Community reviews on reliable installers']
    },
    {
      title: 'EV Owners & Prospective Users',
      category: 'Electric Mobility',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Pioneers driving or planning to purchase battery electric vehicles (BEV, PHEV) in Nigeria needing charging network insights and battery health tips.',
      benefits: ['Nigeria EV charging location maps', 'Home & commercial charging setup advice', 'Battery life optimization techniques']
    },
    {
      title: 'Transport Operators & Drivers',
      category: 'Commercial Transit',
      icon: Bus,
      color: 'from-indigo-500 to-blue-600',
      description: 'Public transport unions, taxi operators, ride-hailing drivers, and mini-bus drivers transitioning to low-cost gas and electric transit.',
      benefits: ['Drastic reduction in daily operating fuel costs', 'Priority group access to government clean transit incentives', 'Peer-to-peer driver safety networks']
    },
    {
      title: 'Technicians & Conversion Specialists',
      category: 'Technical Workforce',
      icon: Wrench,
      color: 'from-amber-500 to-orange-600',
      description: 'Automotive mechanics, engineers, and technicians seeking upskilling, official safety certifications, and industry partnership engagements.',
      benefits: ['Technical knowledge sessions with certified partners', 'Recognition within CEUF accredited directory', 'Safety awareness workshops']
    },
    {
      title: 'Fleet Owners & Logistics Operators',
      category: 'Enterprise Fleets',
      icon: Truck,
      color: 'from-purple-500 to-indigo-600',
      description: 'Corporate logistics managers, delivery services, and institutional fleet managers seeking sustainable fleet conversion strategies and ROI metrics.',
      benefits: ['Corporate clean mobility transition roadmaps', 'Direct liaison with equipment suppliers', 'Market intelligence & fleet analytics']
    },
    {
      title: 'Clean-Mobility Enthusiasts',
      category: 'Advocates',
      icon: Leaf,
      color: 'from-emerald-400 to-cyan-500',
      description: 'Environmental advocates, policy researchers, and tech enthusiasts passionate about green energy transition and carbon reduction in transport.',
      benefits: ['Involvement in national clean-mobility campaigns', 'Access to industry whitepapers and policy updates', 'Community networking events']
    },
    {
      title: 'Industry & Policy Stakeholders',
      category: 'Ecosystem Partners',
      icon: Users2,
      color: 'from-slate-400 to-slate-600',
      description: 'Government agencies, CNG equipment importers, EV charging vendors, and financiers seeking authentic feedback from actual vehicle end-users.',
      benefits: ['Direct channel to verified end-user feedback', 'Product demonstration platforms', 'Structured advisory engagements']
    }
  ]

  return (
    <section id="who-we-serve" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Target Communities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Who We Serve Across Nigeria
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              CEUF is built for everyone in Nigeria's clean mobility value chain — from individual car owners to commercial transit fleets and technical experts.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left List / Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {groups.map((group, index) => {
              const Icon = group.icon
              const isSelected = selectedGroup === index
              return (
                <ScrollReveal key={group.title} delay={index * 50} direction="left">
                  <button
                    onClick={() => setSelectedGroup(index)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-900 border-emerald-500/60 shadow-xl shadow-emerald-950/30 translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {group.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {group.category}
                        </span>
                      </div>
                    </div>

                    <div className={`w-2 h-2 rounded-full transition-all ${isSelected ? 'bg-emerald-400 scale-125' : 'bg-slate-700 group-hover:bg-slate-500'}`} />
                  </button>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Right Active Detail Showcase Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="glass-card rounded-3xl p-8 border border-slate-700/80 relative overflow-hidden shadow-2xl">
                
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-6">
                  {React.createElement(groups[selectedGroup].icon, {
                    className: "w-10 h-10 text-emerald-400 p-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
                  })}
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {groups[selectedGroup].category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {groups[selectedGroup].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {groups[selectedGroup].description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Value & Benefits Provided by CEUF:
                  </h5>
                  {groups[selectedGroup].benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 text-sm text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Are you in this category?</span>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-gradient px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2"
                  >
                    <span>Join CEUF Network</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  )
}
