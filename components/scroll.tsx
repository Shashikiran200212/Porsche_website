import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Scroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Duplicate the content for seamless scrolling
      const originalContent = container.children[0] as HTMLDivElement;
      const clone = originalContent.cloneNode(true) as HTMLDivElement;
      container.appendChild(clone);

      const scrollWidth = originalContent.scrollWidth; // Width of the original content
      const containerWidth = container.clientWidth; // Width of the container

      // GSAP animation
      gsap.to(container.children, {
        x: `-${scrollWidth}px`, // Move both original and clone out of view
        duration: 20, // Adjust duration for smoother scrolling
        ease: 'linear', // Smooth continuous animation
        repeat: -1, // Infinite loop
        modifiers: {
          x: (x) => {
            // Reset position to create a seamless loop
            const value = parseFloat(x);
            return value < -scrollWidth ? `${value + 2 * scrollWidth}px` : x;
          },
        },
      });
    }
  }, []);

  const scrollText = " PORSCHE  | ".repeat(50).trim(); // Repeat "PORSCHE" text 50 times
  const scrollItems = scrollText.split(' ').map((text, index) => (
    <span key={index} className="inline-block px-2">{text}</span>
  ));

  return (
    <div
      ref={containerRef}
      className="flex flex-row gap-2 overflow-hidden whitespace-nowrap mt-10 mb-10 text-2xl md:text-3xl"
      style={{ width: '100%', fontFamily: "PorscheRegular" }}
    >
      {scrollItems}
    </div>
  );
};

export default Scroll;
