"use client"

import { useState } from "react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import Image from "next/image"

export function HeroSection() {
  const [selectedTab, setSelectedTab] = useState<"deals" | "negotiation" | "acv">("deals")

  const tabContent = {
    deals: {
      leftVideo: "https://fast.wistia.net/embed/iframe/21gjd93ikf", // First video
      rightVideo: "https://fast.wistia.net/embed/iframe/21gjd93ikf", // Same video on right
      leftAlt: "Deals Pipeline Video",
      rightAlt: "Deal Progress Video",
    },
    negotiation: {
      leftVideo: "https://fast.wistia.net/embed/iframe/zpcjaxdg8r", // Second video
      rightVideo: "https://fast.wistia.net/embed/iframe/zpcjaxdg8r", // Same video on right
      leftAlt: "Negotiation Analytics Video",
      rightAlt: "Negotiation Tools Video",
    },
    acv: {
      leftVideo: "https://fast.wistia.net/embed/iframe/dbw5pdj49j", // Third video
      rightVideo: "https://fast.wistia.net/embed/iframe/dbw5pdj49j", // Same video on right
      leftAlt: "ACV Analysis Video",
      rightAlt: "ACV Dashboard Video",
    },
  }

  return (
    <section className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">One of the your reps just missed quota</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#BFBFBF" }}>
            This rep needs to level up right away otherwise they're going to throw off your entire team's numbers
          </p>

          {/* Selector Module */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setSelectedTab("deals")}
                className={`rounded-md text-sm transition-all duration-200 ${
                  selectedTab === "deals" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
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
                className={`rounded-md text-sm transition-all duration-200 ${
                  selectedTab === "negotiation" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
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
                className={`rounded-md text-sm transition-all duration-200 ${
                  selectedTab === "acv" ? "text-white shadow-lg" : "text-white font-medium hover:bg-white/10"
                }`}
                style={{
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
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

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-mE5vAT4d864MlVhdkcrk1Vn2WcNONq.jpeg"
              alt="Background Gradient"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex transition-all duration-300">
                <div className="flex-1 pr-2">
                  <iframe
                    src={tabContent[selectedTab].leftVideo}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={tabContent[selectedTab].leftAlt}
                  />
                </div>
                <div className="flex-1 pl-2">
                  <iframe
                    src={tabContent[selectedTab].rightVideo}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={tabContent[selectedTab].rightAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}
