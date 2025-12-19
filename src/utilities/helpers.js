function changeColourMode(mode) {
  const root = document.documentElement;

  if (mode === "light") {
    root.style.setProperty("--clr-main-1", "hsl(0, 0%, 99%)");
    root.style.setProperty("--clr-main-2", "hsl(0, 100%, 100%)");
    root.style.setProperty("--clr-main-5", "hsl(209, 23%, 22%)");
    root.style.setProperty("--clr-main-6", "hsl(207, 26%, 17%)");
  } 
  else if (mode === "dark") {
    root.style.setProperty("--clr-main-1", "hsl(209, 23%, 22%)");
    root.style.setProperty("--clr-main-2", "hsl(207, 26%, 17%)");
    root.style.setProperty("--clr-main-3", "hsl(200, 15%, 8%)");
    root.style.setProperty("--clr-main-4", "hsl(0, 0%, 50%)");
    root.style.setProperty("--clr-main-5", "hsl(0, 0%, 99%)");
    root.style.setProperty("--clr-main-6", "hsl(0, 100%, 100%)");
  }
}

export { changeColourMode };
