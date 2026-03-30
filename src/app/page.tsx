import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Editorial from "../components/Editorial";
import Programme from "../components/Programme";
import PracticalInfo from "../components/PracticalInfo";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Team />
        <Editorial />
        <Programme />
        <PracticalInfo />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
