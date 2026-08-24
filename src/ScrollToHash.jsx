import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  return null;
}

export default ScrollToHash;
