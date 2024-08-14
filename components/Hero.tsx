"use client"
import React, { useState } from 'react';
import Sidebar from './ui/Sidebar'; // Import the Sidebar component
import Link from 'next/link';

const Hero = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <video 
        src="main.mp4" 
        className='absolute top-0 left-0 h-full w-full object-cover z-10'
        autoPlay
        loop
        muted
      ></video>

      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50 z-20'></div>

      {/* Center Porsche text at the top middle */}
      <div className='absolute top-0 left-0 w-full flex justify-center p-3 z-40'>
        <a href="https://www.porsche.com/international/" className='md:block hidden'>
            <h1 className='text-white text-3xl md:text-4xl lg:text-3xl font-thin' style={{ fontFamily: 'PorscheRegular' }}>
              Porsche
            </h1>
        </a>
        <img src="iconm.png" alt="" className='block md:hidden top-0 left-0 w-10 z-30 '/>
      </div>

      <div className='absolute top-0 left-0 p-4 z-40 transition-transform transform hover:scale-150 '>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer"
          onClick={handleSidebarToggle}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </div>

      {/* <div className='absolute top-0 right-0 p-4 z-40 transition-transform transform hover:scale-150'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </div> */}


      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='absolute inset-0 flex flex-col items-center justify-center z-30 text-center p-4'>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-9xl uppercase font-sans font-thin mb-4 sm:mb-6 md:mb-8'>
          There is no substitute
        </h1> 
        <button className="px-3 py-1 md:px-6 md:py-3 h-10 w-48 md:h-auto md:w-auto  text-[11px] md:text-[15px] uppercase font-semibold bg-transparent  border-2 border-white transition-transform  transform hover:scale-110 text-white   duration-200 hover:bg-white hover:text-black  hover:border-white-500">
            <Link href="/Pages/911Models"> Discover the new 911</Link>
        </button>
        <div className='absolute bottom-0 p-6 z-50 text-white'>
          <h1 className='font-extralight font-sans text-[10px] md:text-sm z-40 opacity-70' >Fuel consumption combined: 11.0 - 10.5 l/100 km, CO2-emissions combined WLTP: 251 - 239 g/km, CO2 Class: G</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
