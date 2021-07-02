import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkOn, setDarkOn] = useState(false);

  const handelDarkMode = () => {
    setDarkOn(!darkOn);
  };

  useEffect(() => {
    if (darkOn) {
      document.documentElement.style.setProperty(
        "--very-light-gray",
        "#202c37"
      );
      document.documentElement.style.setProperty("--white", "#2b3945");
      document.documentElement.style.setProperty(
        "--very-dark-blue-text",
        "#fafafa"
      );
    } else {
      document.documentElement.style.setProperty(
        "--very-light-gray",
        "#fafafa"
      );
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty(
        "--very-dark-blue-text",
        "#111517"
      );
    }
  }, [darkOn]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <h2>Where in the world?</h2>
          <div className="darkmode-btn">
            <i className={darkOn ? "bx bx-sun" : "bx bx-moon"}></i>
            <span onClick={handelDarkMode}>
              {darkOn ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
