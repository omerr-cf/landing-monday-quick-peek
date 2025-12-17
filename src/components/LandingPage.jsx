// Landing Page - Main Component
// Imports all sections from their respective folders

import Header from "./Header";
import Hero from "./Hero";
import PainPoints from "./PainPoints";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
