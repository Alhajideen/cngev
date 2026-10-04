import React, { useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is the CNG & EV Users Forum (CEUF)?',
      a: 'CEUF is a non-partisan, user-centred stakeholder platform uniting current and prospective users of Compressed Natural Gas (CNG) and Electric Vehicles (EV) across Nigeria. We connect users to factual information, safety protocols, and a unified voice.'
    },
    {
      q: 'Is CEUF a vendor, financier, or government regulator?',
      a: 'No. CEUF is not a vendor, financier, regulator, or political organization. We are an independent, user-representative body dedicated to ensuring informed, safe, and transparent clean-mobility adoption.'
    },
    {
      q: 'How does CEUF protect users during CNG conversion?',
      a: 'CEUF provides safety sensitisation campaigns, verified technical checklists, and co-hosts knowledge sessions with accredited conversion engineers to ensure users avoid uncertified equipment.'
    },
    {
      q: 'Who can become a member of CEUF?',
      a: 'Membership is open to everyone across Nigeria — including private car owners, prospective buyers, commercial drivers, transport operators, mechanics, fleet managers, and clean energy enthusiasts.'
    },
    {
      q: 'How can corporate partners and equipment suppliers collaborate with CEUF?',
      a: 'CEUF welcomes structured partnerships with verified businesses offering CNG and EV products, refilling infrastructure, financing, or technical services. Partnerships are subject to transparency and user-safety checks.'
    },
    {
      q: 'How do I contact CEUF or submit feedback?',
      a: 'You can submit inquiries or join the forum directly via our official Contact Form or reach out via email at info@cngevusersforum.org.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Learn more about CEUF's role, membership, and clean mobility guidance in Nigeria.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <ScrollReveal key={faq.q} delay={index * 40} direction="up">
                <div 
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'bg-slate-900 border-emerald-500/50 shadow-xl' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-400 bg-slate-800/80' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Extra Contact Box */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Have a specific question or partnership proposal?</h4>
              <p className="text-xs text-slate-400">Reach out to our leadership team via the official contact form.</p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shrink-0"
            >
              <span>JOIN CLEAN MOBILITY TRANSITION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
