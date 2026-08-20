import Hero from "./components/Hero";
import DevPortfolio from "./components/DevPortfolio";
import NowUses from "./components/NowUses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" id="top">
      <Hero />
      <DevPortfolio />
      <NowUses />
      <Contact />
      <Footer />
    </div>
  );
}
