import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/sections/ContactHero';
import ContactFormSection from '../components/sections/ContactForm';
import ContactLocation from '../components/sections/Location';
import ContactCTA from '../components/sections/CTA';

const Contact = () => {
  return (
    <div className="font-sans text-gray-900 bg-[#f9f9f9] min-h-screen flex flex-col">
      
      
      {/* مساحة فاضية عشان الـ Navbar */}
      <div className="pt-[90px] bg-white"></div> 
      
      <main className="flex-grow">
        <ContactHero />
        <ContactFormSection />
        <ContactLocation />
        <ContactCTA />
      </main>

      
    </div>
  );
};

export default Contact;