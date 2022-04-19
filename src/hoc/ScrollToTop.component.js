import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  // VARIABLES
  const { pathname } = useLocation();

  // EFFECT
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }, [pathname]);

  return children;
}