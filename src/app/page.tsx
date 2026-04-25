import Header from "../components/Header";
import Hero from "../components/Hero";
import Editorial from "../components/Editorial";
import Programme from "../components/Programme";
import Auteurs from "../components/Auteurs";
import Concert from "../components/Concert";
import Conferences from "../components/Conferences";
import Expositions from "../components/Expositions";
import Films from "../components/Films";
import Editeurs from "../components/Editeurs";
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
        <Editorial />
        <Programme />
        <Gallery />
        <Auteurs />
        <Concert />
        <Conferences />
        <Expositions />
        <Films />
        <Editeurs />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
