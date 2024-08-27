import React, { useEffect } from 'react';

const SkewScroll: React.FC = () => {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".title");

    if (!el) return;

    let elWidth = el.offsetWidth;
    let windowWidth = window.innerWidth;

    let mouseX = 0;
    let prevMouseX = 0;

    let skewTarget = 0;
    let translateTarget = 0;

    let skewWithEasing = 0;
    let translateWithEasing = 0;

    const skewEasingFactor = 0.06;
    const translateEasingFactor = 0.005;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.pageX;
    };

    const handleWithResize = () => {
      elWidth = el.offsetWidth;
      windowWidth = window.innerWidth;
    };

    const lerp = (start: number, end: number, factor: number) => {
      return (1 - factor) * start + factor * end;
    };

    const animateMe = () => {
      skewTarget = mouseX - prevMouseX;
      prevMouseX = mouseX;

      translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;
      skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);
      skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing.toFixed(0)), -75), 75);

      translateWithEasing = lerp(
        translateWithEasing,
        translateTarget,
        translateEasingFactor
      );

      el.style.transform = `
        translateX(${translateWithEasing}px)
        skew(${skewWithEasing}deg)
      `;

      window.requestAnimationFrame(animateMe);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWithResize);

    window.requestAnimationFrame(animateMe);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWithResize);
    };
  }, []);

  return (
    <div className='w-full h-[10vh] flex items-center justify-center bg-[#99948c]'>
      <div className='overflow-hidden cursor-pointer whitespace-nowrap py-[10vh]' >
        <p className='title text-[3vw] inline-block m-0 px-[15%] will-change-transform' style={{ fontFamily: 'PorscheRegular' }}>
          PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE PORSCHE
        </p>
      </div>
    </div>
  );
};

export default SkewScroll;