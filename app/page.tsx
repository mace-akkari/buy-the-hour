import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/landingPage/HeroSection";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import SignUpSection from "@/components/landingPage/SignUpSection";
import ValueSection from "@/components/landingPage/ValueSection";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-text">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SignUpSection />
      <ValueSection />
      <Footer />
    </main>
  );
}
