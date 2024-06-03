import { useState } from "react";
import HeroSection from "./components/herosection/HeroSection";
import KeyProblems from "./components/keyProblems/KeyProblems";
import Review from "./components/CustomerReveiw/Review";
import CallToAction from "./components/CTA/CallToAction";
import Footer from "./components/footer/Footer";
import FeatruesTab from "./components/problemsAndFeatures/FeatruesTab";
import WhyCleverBook from "./components/whySomeoneShouldChoose/WhyCleverBook";
import NavBar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900 text-white">
      <NavBar />
      <HeroSection />
      <KeyProblems />
      <WhyCleverBook />
      <Review />
      <FeatruesTab />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
