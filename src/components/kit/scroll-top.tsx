import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top using lenis
    window.scrollTo(0, 0);
    // Reload the page if lenis is not working
    
  }, [pathname]);

  return null;
}
