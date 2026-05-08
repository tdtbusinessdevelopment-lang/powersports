import Navbar from '../components/common/Navbar';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactLocation from '../components/contact/ContactLocation';
import CTA from '../components/common/CTA';
import Footer from '../components/common/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactInfo />

      {/* Form + Location row */}
      <section id="contact-form-location" className="w-full bg-white py-20" style={{ minHeight: 'calc(420px * 1.4 + 10rem)' }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-10 items-start">
          <ContactForm />
          <ContactLocation />
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
