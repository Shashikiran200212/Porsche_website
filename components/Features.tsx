import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const videoRef1 = useRef<HTMLVideoElement | null>(null)
  const videoRef2 = useRef<HTMLVideoElement | null>(null)
  const videoRef3 = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoElements = [videoRef1.current, videoRef2.current, videoRef3.current]

    videoElements.forEach((videoElement) => {
      if (!videoElement) return // Return early if videoElement is null

      // Create a ScrollTrigger instance for each video element
      const trigger = ScrollTrigger.create({
        trigger: videoElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => videoElement.play(),
        onLeave: () => videoElement.pause(),
        onEnterBack: () => videoElement.play(),
        onLeaveBack: () => videoElement.pause(),
      })

      return () => {
        trigger.kill() // Clean up the ScrollTrigger instance when the component unmounts
      }
    })
  }, [])

  return (
    <div className="h-auto w-full p-4 md:p-10 flex flex-col gap-8 text-white bg-black font-sans">

      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
        <div className="w-full md:w-1/2 h-auto p-2 md:p-6 flex flex-col justify-center text-justify">
          <h1 className="text-2xl md:text-4xl font-semibold text-left">
            Timeless Aesthetic
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-4 md:block hidden">
            The Porsche 911 features a timeless aesthetic that has evolved over decades. Its distinctive silhouette, 
            characterized by smooth curves, a sloping roofline, and the unmistakable round headlights, embodies the perfect blend of tradition and modernity.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[20rem] md:h-[30rem] mt-4 md:mt-0">
          <video 
            ref={videoRef2}  // Reference to the second video element
            src="2.mp4" 
            className="h-full w-full object-cover"
            loop
            muted
          ></video>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
        <div className="w-full md:w-1/2 h-[20rem] md:h-[30rem] mt-4 md:mt-0 order-2 md:order-1">
          <video 
            ref={videoRef1}  // Reference to the first video element
            src="1.mp4" 
            className="h-full w-full object-cover"
            loop
            muted
          ></video>
        </div>
        <div className="w-full md:w-1/2 h-auto p-2 md:p-6 flex flex-col justify-center text-justify order-1 md:order-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-left">
            Powerful Performance
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-4 md:block hidden">
            The Porsche 911 is renowned for its exceptional performance, equipped with a range of powerful engines. 
            The latest models offer turbocharged engines that deliver exhilarating acceleration, impressive top speeds, 
            and precise handling, making it a true drivers car.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
        <div className="w-full md:w-1/2 h-auto p-2 md:p-6 flex flex-col justify-center text-justify">
          <h1 className="text-2xl md:text-4xl font-semibold text-left">
            Discover the Forefront
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-4 md:block hidden">
            The Porsche 911 integrates cutting-edge technology, including a fully digital cockpit, Porsche Communication Management system, and advanced driver 
            assistance features. These innovations enhance both the driving experience and overall safety, ensuring that the 911 remains at the forefront of automotive technology.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[20rem] md:h-[30rem] mt-4 md:mt-0">
          <video 
            ref={videoRef3}  // Reference to the third video element
            src="3.mp4" 
            className="h-full w-full object-cover"
            loop
            muted
          ></video>
        </div>
      </div>

    </div>
  )
}

export default Features
