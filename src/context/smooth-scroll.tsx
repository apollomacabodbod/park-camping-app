import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [location]);

  // Scroll to top whenever the route changes
  useEffect(() => {
    if (lenisRef.current) {
      // Use the correct scrollTo method with a single object argument
      lenisRef.current.scrollTo(0, { duration: 0});
    }
  }, [location]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
