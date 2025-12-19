import React from "react";
import "./header.css";
import { changeColourMode } from "../utilities/helpers";

const Header = ({ mode, setMode }) => {
  function handleMode(mode) {
    if (mode === "dark") {
      setMode("light");
      changeColourMode("light");
    } else if(mode === "light") {
      setMode("dark");
      changeColourMode("dark");
    }
    console.log(mode);

  }
  return (
    <header className={"header bg-component"}>
      <h2>Where in the world?</h2>
      <div className="header-mode" onClick={() => handleMode(mode)}>
        {mode === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
        {mode === "dark" ? <p>Dark Mode</p> : <p>Light mode</p>}
      </div>
    </header>
  );
};

export default Header;
