import React from 'react';
import Navbar from '../components/layout/Navbar';
import AboutHero from '../components/sections/AboutHero';
import Footer from '../components/layout/Footer'; // فك الكومنت لو عندك الفوتر جاهز

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col relative w-full font-['Inter']">
      
    

      <main className="flex-1 w-full ">
        {/* سكشن الـ Hero الخاص بصفحة من نحن */}
        <AboutHero />
        
        {/* لو عملت سكاشن تانية زي مميزات الشركة أو فريق العمل، هتضيفها هنا */}
        {/* <WhyChooseUs /> */}
      </main>

     
    </div>
  );
};

export default About;