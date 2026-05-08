import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductHighlight from '../components/home/ProductHighlight';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/common/CTA';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductHighlight />
      <Categories />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
