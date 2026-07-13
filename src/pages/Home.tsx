import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import Demo from "../components/home/Demo";
import Dashboard from "../components/home/Dashboard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <HowItWorks />
      <Features />
      <Demo />
      <Dashboard />
      <Footer />
    </>
  );
}

export default Home;