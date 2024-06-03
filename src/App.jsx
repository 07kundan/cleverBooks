import { useState } from "react";
import HeroSection from "./components/herosection/HeroSection";
import KeyProblems from "./components/keyProblems/KeyProblems";
import Review from "./components/CustomerReveiw/Review";
import CallToAction from "./components/CTA/CallToAction";
import Footer from "./components/footer/Footer";
import FeatruesTab from "./components/problemsAndFeatures/FeatruesTab";
import WhyCleverBook from "./components/whySomeoneShouldChoose/WhyCleverBook";
import NavBar from "./components/navbar/Navbar";
import { useMotionValueEvent, useScroll } from "framer-motion";

function App() {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="bg-zinc-900 text-white">
      <NavBar visible={visible} />
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
