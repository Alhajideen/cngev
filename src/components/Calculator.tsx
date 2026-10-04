import React, { useState } from 'react'
import { Flame, Zap, ArrowUpRight, TrendingDown, Leaf, Info } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1JnZEWxZveprm-f6d5irWZaQZT_nm_C3vrj-gN57TeEU/edit"

export const Calculator: React.FC = () => {
  const [dailyKm, setDailyKm] = useState<number>(60)
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'bus'>('sedan')
  const [techChoice, setTechChoice] = useState<'cng' | 'ev'>('cng')

  const petrolPriceLitre = 1100
  const cngPriceM3 = 230
  const evPriceKwh = 120

  const consumptionPer100Km = {
    sedan: { petrol: 9, cng: 8, ev: 16 },
    suv: { petrol: 13, cng: 11, ev: 22 },
    bus: { petrol: 22, cng: 19, ev: 35 }
  }

  const monthlyKm = dailyKm * 30
  const currentFuel = consumptionPer100Km[vehicleType].petrol
  const monthlyPetrolCost = (monthlyKm / 100) * currentFuel * petrolPriceLitre

  let monthlyCleanCost = 0
  let monthlySavings = 0
  let co2ReductionKg = 0

  if (techChoice === 'cng') {
    const cngNeeded = (monthlyKm / 100) * consumptionPer100Km[vehicleType].cng
    monthlyCleanCost = cngNeeded * cngPriceM3
    monthlySavings = monthlyPetrolCost - monthlyCleanCost
    co2ReductionKg = (monthlyKm * 0.14)
  } else {
    const kwhNeeded = (monthlyKm / 100) * consumptionPer100Km[vehicleType].ev
    monthlyCleanCost = kwhNeeded * evPriceKwh
    monthlySavings = monthlyPetrolCost - monthlyCleanCost
    co2ReductionKg = (monthlyKm * 0.20)
  }

  const yearlySavings = monthlySavings * 12
  const savingsPercent = Math.round((monthlySavings / monthlyPetrolCost) * 100)

  return (
    <section id="calculator" className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Interactive Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">
              CNG & EV Fuel Savings & Impact Calculator
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Estimate your monthly and annual fuel savings when switching from Petrol/Diesel to CNG or EV in Nigeria.
            </p>
          </div>
        </ScrollReveal>

        {/* Calculator Widget */}
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/80 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Controls */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* 1. Technology Choice */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    1. Select Clean Mobility Tech:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setTechChoice('cng')}
                      className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                        techChoice === 'cng'
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/40'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Flame className="w-4 h-4 text-amber-300" />
                      <span>CNG (Natural Gas)</span>
                    </button>

                    <button
                      onClick={() => setTechChoice('ev')}
                      className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                        techChoice === 'ev'
                          ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Zap className="w-4 h-4 text-cyan-300" />
                      <span>EV (Electric Vehicle)</span>
                    </button>
                  </div>
                </div>

                {/* 2. Vehicle Type */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    2. Select Vehicle Category:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'sedan', label: 'Saloon / Sedan' },
                      { id: 'suv', label: 'SUV / Pickup' },
                      { id: 'bus', label: 'Commercial Bus' }
                    ].map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVehicleType(v.id as any)}
                        className={`p-2.5 rounded-xl border text-[11px] font-semibold transition-all ${
                          vehicleType === v.id
                            ? 'bg-slate-800 border-emerald-500 text-emerald-400'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Daily Driving Distance */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      3. Average Daily Distance:
                    </label>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {dailyKm} km / day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={dailyKm}
                    onChange={(e) => setDailyKm(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>10 km (City)</span>
                    <span>150 km (Transit)</span>
                    <span>300 km (Interstate)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Based on average Nigerian market fuel pricing (~₦1,100/L petrol vs ~₦230/m³ CNG / ~₦120/kWh electricity).
                  </span>
                </div>

              </div>

              {/* Right Output Panel */}
              <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Estimated Cost Reduction
                  </span>
                  
                  <div className="mt-2 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ~₦{monthlySavings.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                    </span>
                    <span className="text-xs text-slate-400 ml-2">/ month saved</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30 mb-6">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>Save {savingsPercent}% compared to Petrol!</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800/80">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Monthly Petrol/Diesel Cost:</span>
                      <span className="font-mono text-slate-300">₦{monthlyPetrolCost.toLocaleString('en-NG', { maximumFractionDigits: 0 })}</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Estimated {techChoice.toUpperCase()} Cost:</span>
                      <span className="font-mono text-emerald-400 font-bold">₦{monthlyCleanCost.toLocaleString('en-NG', { maximumFractionDigits: 0 })}</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Annual Fuel Savings:</span>
                      <span className="font-mono text-white font-black">₦{yearlySavings.toLocaleString('en-NG', { maximumFractionDigits: 0 })} / year</span>
                    </div>

                    <div className="flex justify-between text-xs pt-2 border-t border-slate-800/60">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                        Carbon Reduction:
                      </span>
                      <span className="font-mono text-emerald-300">{Math.round(co2ReductionKg)} kg CO₂ / mo</span>
                    </div>
                  </div>
                </div>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient w-full py-3 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Inquire About Conversion & Access</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
