"use client"

import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"

export function HeroSection() {

  return (
    <section className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">One of the reps on your team missed quota</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#BFBFBF" }}>
            You need to help this rep level up right away otherwise they're going to throw off your entire team's numbers
          </p>
        </div>

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative w-full h-[600px]">
            <iframe
              src="https://fast.wistia.net/embed/iframe/21gjd93ikf"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Deals Pipeline Video"
            />
          </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}
