"use client"

import { useState } from "react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"

export function HeroSection() {
  const [selectedTab, setSelectedTab] = useState<"deals" | "negotiation" | "acv">("deals")

  const tabContent = {
    deals: {
      video: "https://fast.wistia.net/embed/iframe/21gjd93ikf",
      alt: "Deals Pipeline Video",
    },
    negotiation: {
      video: "https://fast.wistia.net/embed/iframe/zpcjaxdg8r",
      alt: "Negotiation Analytics Video",
    },
    acv: {
      video: "https://fast.wistia.net/embed/iframe/dbw5pdj49j",
      alt: "ACV Analysis Video",
    },
  }

  return (
    <section className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">One of the reps on your team missed quota</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#BFBFBF" }}>
            You need to help this rep level up right away otherwise they're going to throw off your entire team's numbers
          </p>

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative w-full h-[600px]">
            <iframe
              src={tabContent[selectedTab].video}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={tabContent[selectedTab].alt}
            />
          </div>

          {/* Selector Module */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-1 border border-white/10" style={{borderRadius: "9px"}}>
              <button
                onClick={() => setSelectedTab("deals")}
                className={`text-base transition-all duration-200 ${
                  selectedTab === "deals" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderRadius: "7px",
                  ...(selectedTab === "deals"
                    ? {
                        background: "linear-gradient(135deg, #FF3621 0%, #FE5745 50%, #FF2F19 100%)",
                        fontWeight: 600,
                      }
                    : {}),
                }}
              >
                Deals don't move forward
              </button>
              <button
                onClick={() => setSelectedTab("negotiation")}
                className={`text-base transition-all duration-200 ${
                  selectedTab === "negotiation" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderRadius: "7px",
                  ...(selectedTab === "negotiation"
                    ? {
                        background: "linear-gradient(135deg, #FF3621 0%, #FE5745 50%, #FF2F19 100%)",
                        fontWeight: 600,
                      }
                    : {}),
                }}
              >
                Deals drop off in negotiation
              </button>
              <button
                onClick={() => setSelectedTab("acv")}
                className={`text-base transition-all duration-200 ${
                  selectedTab === "acv" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderRadius: "7px",
                  ...(selectedTab === "acv"
                    ? {
                        background: "linear-gradient(135deg, #FF3621 0%, #FE5745 50%, #FF2F19 100%)",
                        fontWeight: 600,
                      }
                    : {}),
                }}
              >
                ACV is off whack
              </button>
            </div>
          </div>
        </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}
