"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';
import BorderGlowButton from '@/components/ui/border-glowButton';

gsap.registerPlugin(ScrollTrigger);

const Models: React.FC = () => {
  const fRefs = useRef<HTMLDivElement[]>([]);
  const iRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // GSAP animations for text elements
    fRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el,
          {
            x: -1000,
            opacity: 0, // Start with opacity 0 for text elements
          },
          {
            x: 0,
            opacity: 1, // End with opacity 1 for text elements
            duration: 3,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 60%',
              scrub: true,
              markers: false
            }
          }
        );
      }
    });

    // GSAP animations for image elements
    iRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 3,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 60%',
              scrub: true,
              markers: false
            }
          }
        );
      }
    });
  }, []);

  // Define the data for each row
  const rows = [
    { image: '/cayman.jpg', heading: '718 Cayman', text: 'The Porsche 718 Cayman S, a high-performance variant of the 718 Cayman lineup.' },
    { image: '/911.jpg', heading: 'Porsche 911 GT2 RS', text: 'The Porsche 911 GT2 RS, a high-performance marvel, embodies the relentless pursuit of speed and precision that defines the German automakers iconic 911 lineup.' },
    { image: '/taycan.jpg', heading: 'Taycan Electric', text: 'The Porsche Taycan, introduced in 2019, represents a groundbreaking foray into the electric vehicle (EV) realm by the renowned German sports car manufacturer. ' },
    { image: '/panamera.jpg', heading: 'Panamera', text: 'The Porsche Panamera, a quintessential four-door sports car, epitomizes the seamless blend of performance, luxury, and versatility. ' },
    { image: '/macan.jpg', heading: 'Macan S', text: 'The Porsche Macan S is a dynamic manifestation of sports car DNA fused with the versatility of an SUV. Its athletic stance, characterized by well-defined lines and a purposeful silhouette, exudes a sporty elegance that is unmistakably Porsche. ' },
    { image: '/cayenne.jpg', heading: 'Cayenne', text: 'The Porsche Cayenne is a luxury crossover SUV manufactured by Porsche since 2002. It was Porsches first V8-engined vehicle since the 1995 Porsche 928 and the first production Porsche with four doors.' },
  ];

  return (
    <div className='h-auto w-full text-black flex flex-col justify-start items-center bg-white' style={{ userSelect: "none" }}>
      <div className='mt-7 mb-10 md:mb-36'>
        <h1 className='md:text-4xl text-xl font-bold tracking-wider' style={{ fontFamily: "PorscheRegular" }}>
          Models
        </h1>
      </div>

      <div className='gap-y-28 flex flex-col'>
        {/* Rows */}
        {rows.map((row, index) => (
          <div className='flex flex-col md:flex-row gap-4' key={index}>
            <div
              className='w-full md:w-[40vw] justify-center items-start flex flex-col gap-y-4 p-4 md:p-10 '
              ref={el => { if (el) fRefs.current[index] = el; }}
            >
              <h1 className='text-2xl md:text-4xl font-semibold'>{row.heading}</h1>
              <p className='text-justify'>{row.text}</p>
              <BorderGlowButton/>
            </div>
            <img
              src={row.image}
              alt={row.heading}
              className='w-full md:w-[40vw] rounded-md shadow-lg p-2'
              ref={el => { if (el) iRefs.current[index] = el; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Models;
