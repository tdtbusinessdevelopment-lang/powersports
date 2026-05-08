import Navbar from '../components/common/Navbar';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import CTA from '../components/common/CTA';
import Footer from '../components/common/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
