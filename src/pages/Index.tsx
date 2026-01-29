import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import VillainSection from "@/components/VillainSection";
import GuideSection from "@/components/GuideSection";
import PlanSection from "@/components/PlanSection";
import SuccessSection from "@/components/SuccessSection";
import QualificationSection from "@/components/QualificationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <VillainSection />
        <GuideSection />
        <PlanSection />
        <SuccessSection />
        <QualificationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
