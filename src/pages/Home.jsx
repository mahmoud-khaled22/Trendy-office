import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Products from '../components/sections/Products';
import Details from '../components/sections/Details';
import SelectedProjects from '../components/sections/SelectedProjects';
import WhyUs from '../components/sections/WhyUs';
import Clients from '../components/sections/Clients';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
            
            <Hero />
            <Experience />
            <Products />
            <Details/>
            <SelectedProjects/>
            <WhyUs/>
            <Clients/>
            <Contact/>
            
        </div>  
    );
};

export default Home;