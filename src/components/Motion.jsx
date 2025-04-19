import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid1 from "../assets/vid-1.mp4";
import { IoSparklesSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const PlayInMotion = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Left Text Animation (Play) - Move from left to center
      timeline.fromTo(
        textLeftRef.current,
        { x: "-20vw", opacity: 1 },
        { x: "0vw", opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Right Text Animation (Reel) - Move from right to center
      timeline.fromTo(
        textRightRef.current,
        { x: "20vw", opacity: 1 },
        { x: "0vw", opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=1.2" // Starts slightly earlier for better sync
      );

      // Video Animation (Scale and Fade-in)
      timeline.fromTo(
        videoRef.current,
        { scale: 0.3, opacity: 1 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
        "-=1"
      );

      // Transparent Overlay Animation (Fade Out)
      timeline.to(
        overlayRef.current,
        { opacity: 0, duration: 1.5, ease: "power2.out" },
        "-=1"
      );
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Transparent Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-70 z-10"
      ></div>

      {/* Header */}
      <div className="head absolute flex gap-4 items-baseline text-[14.33px] top-10 text-white z-20">
        <IoSparklesSharp />
        Play in motion
      </div>

      {/* Animated Video - Positioned Behind Text */}
      <video
        ref={videoRef}
        src={vid1}
        autoPlay
        muted
        loop
        className="absolute w-[100%] h-[100%] object-cover z-[-2]"
      ></video>

      {/* Animated Text */}
      <div className="absolute flex justify-center items-center gap-8 text-white text-[82.176px] md:text-[153.33px] z-20">
        <span ref={textLeftRef}>Play</span>
        <span ref={textRightRef}>Reel</span>
      </div>

      {/* Footer */}
      <div className="foot-mot absolute bottom-10 text-white text-center z-20">
        <p>
          Our work is best experienced in motion. Don't <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; forget to put on your
          headphones.
        </p>
      </div>
    </section>
  );
};

export default PlayInMotion;
