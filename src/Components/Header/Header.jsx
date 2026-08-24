import { useState, useEffect } from "react";

import Logo from "./Logo";
import Menu from "./Menu";

import "./header.css";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMenuClick() {
    setIsMenuOpened((prev) => !prev);
  }

  return (
    <div className="header centralized">
      <Logo />

      {isMobile && (
        <button type="button" className="menuLogo" onClick={handleMenuClick}>
          <i className="fa-solid fa-bars"></i>
        </button>
      )}

      <Menu
        isMobile={isMobile}
        display={(isMenuOpened && isMobile) || !isMobile}
      />
    </div>
  );
}

export default Header;
