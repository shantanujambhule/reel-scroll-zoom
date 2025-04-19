import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
      duration: 1.2, // Duration of the animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
