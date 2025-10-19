import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { ChatPill } from "@/components/chat-pill";
import { Footer } from "@/components/footer";
import { WaterShaderBackground } from "@/components/ui/water-shader-background";

export default function WAV0Landing() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-10">
        <HeroSection />

        <section className="py-32 px-6 relative">
          <div className="absolute inset-0 opacity-30">
            <WaterShaderBackground />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight">
                Why Participate
              </h2>
              <p
                id="main-content"
                className="text-6xl font-bold text-red-600 relative glitch"
                data-text="CODE TILL YOU BLEED"
              >
                CODE TILL YOU BLEED
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <FeatureSection
                title="Collaborate and Innovate"
                description="Work with diverse groups of talented individuals, all passionate about making a difference"
                index={0}
              />

              <FeatureSection
                title="Showcase your Skills"
                description="This is your opportunity to showcase your skills in Real world projects and getting recognized by industry experts."
                index={1}
              />

              <FeatureSection
                title="Win Big"
                description="Compete for a chance to win big cash prizes from a total prize pool of 1 Lakh INR"
                index={2}
              />

              <FeatureSection
                title="Build Your Portfolio"
                description="Create real world Projects for your resume, document your hackathon journey get certificates of participation and achievement"
                index={3}
              />
            </div>
          </div>
        </section>

        <Footer />

        {/* <ChatPill /> */}
      </div>
    </div>
  );
}
