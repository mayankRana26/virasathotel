import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

export default ScrollToTopOnNavigate;