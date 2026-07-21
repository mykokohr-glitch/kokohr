import AnimatedBackground from "./AnimatedBackground";
import HeroContent from "./HeroContent";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-24">

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Section */}
          <HeroContent />

          {/* Right Section */}
          <DashboardMockup />

        </div>

      </div>

    </section>
  );
}