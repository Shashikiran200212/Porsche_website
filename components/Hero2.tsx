"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { TypewriterEffect } from './ui/typeWriter'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
    const pRef = useRef(null)
    const iRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(pRef.current, 
            {
                opacity: 0,
            },
            {
                opacity:1,
                ease:"power1.inOut",
                scrollTrigger:{
                    trigger:pRef.current,
                    start:'top 60%',
                    end:'bottom 80%',
                }
            }
        )
    },[])

    useEffect(() => {
        gsap.fromTo(iRef.current, 
            {
                x: "-100%",
            },
            {
                x:"0%",
                ease:"power1.inOut",
                scrollTrigger:{
                    trigger:iRef.current,
                    start:'top 80%',
                    end:'bottom 80%',
                }
            }
        )
    },[])

    const words = [
        { text: "The" },
        { text: "First" },
        { text: "Launch" },
        { text: "of" },
        { text: "Porsche 911 " },
    ]

    const words2 = [
        { text: "Who " },
        { text: "designed" },
        { text: " the" },
        { text: " Porsche 911" },
        { text: "?" },
    ]

    return (
        <div className='h-auto w-full mt-6 overflow-hidden flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0'>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-0'>
            <img src="h3.jpg" alt="Porsche 911" className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/2' ref={iRef}/>
            <div className='mt-4 sm:mt-0 sm:ml-4 md:ml-6 flex flex-col xl:p-3 xl:mt-20'>
                <TypewriterEffect words={words} className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-semibold xl:flex px-3'/>
                
                <div>
                    <div className='text-black text-justify text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm leading-relaxed px-3 mt-2' ref={pRef}>
                        The Porsche 911 was first unveiled to the public on 12 September 1963 when it was launched at the Frankfurt International Motor Show. 
                        Full production of the car began a year later in September 1964 at the Porsche factory in Zuffenhausen.    
                        <br /><br />
                        The second production model to be made by the company after the Porsche 356, interestingly the 911 was originally called the 901. 
                        However, by the time the model went on sale it had become the 911 after a claim about naming rights from French car manufacturer, Peugeot. 
                        The 911 name not only stuck but has since become synonymous with success on both road and racetrack.
                        <br /><br />
                       <span className='md:block hidden'>
                        If you ever get to see the original Porsche 911 and the current Porsche 911 (type 992) side by side you will notice how much larger the newest model is in comparison. 
                        In truth, the size of the 911 remained reasonably consistent for many decades after it was first launched. The big change came with the introduction of the 911 (type 996), 
                        which had its world premiere at the Frankfurt International Motor Show in 1997. It grew 185mm in length compared to the previous 911 model, the type 993, as well as adding 
                        80mm to the wheelbase and 30mm to its overall width. These changes benefitted both driver and passenger in terms of space inside the car. Every 911 built since has balanced 
                        its sportscar performance with everyday driveability.
                       </span>
                        <br />
                        There have been eight generations of the Porsche 911 since 1963. They are:
                        <ul className='mt-3 flex flex-col gap-2'>
                            <li>• Original 911 (1963-1973)</li>
                            <li>• G series (1974-1989)</li>
                            <li>• 964 (1988-1994)</li>
                            <li>• 993 (1993-1998)</li>
                            <li>• 996 (1997-2005)</li>
                            <li>• 997 (2004-2012)</li>
                            <li>• 991 (2011-2019)</li>
                            <li>• 992 (2018-present)</li>
                        </ul>
                    </div>
    
                    <div className='mt-6'>
                        <button className="px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm uppercase font-semibold bg-transparent border-2 border-black transition-transform transform hover:scale-110 text-black duration-200 hover:bg-white hover:text-black">
                            <Link href="/Pages/911Models">View Models</Link> 
                        </button>
                    </div>
    
                    <br />
                    <div className='mt-8 xl:px-3'>
                        <TypewriterEffect words={words2} className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-semibold xl:flex'/>
    
                        <div className='text-black text-justify text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm leading-relaxed mt-3'>
                            The first ever Porsche 911 was designed by F.A. Porsche - son of the founder of the company, Ferry Porsche - and his team. The original 911 had an air-cooled flat-six 
                            engine instead of the four-cylinder boxer engine of the 356. It developed 130PS, could accelerate from 0-100km/h in 9.1 seconds and had a top speed of 210km/h. 
                            These were hugely impressive figures for a production sportscar at the time. Although there have been many versions of the 911 since then, much has remained the same, 
                            like its 2 + 2 seating layout and rear engine position.
                        </div>
    
                        <div className='mt-5'>
                            <button className="px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm uppercase font-semibold bg-transparent border-2 border-black transition-transform transform hover:scale-110 text-black duration-200 hover:bg-white hover:text-black">
                                <Link href="/Pages/F911">Learn more</Link> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Hero2
