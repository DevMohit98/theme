import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const [colors, setColors] = useState({
    headColor: "#000",
    bg: "white",
    label: "#000",
    button: "blue",
  });
  const ChangeColor = () => {
    if (theme === "Light") {
      setColors({
        headColor: light.headColor,
        bg: light.bg,
        label: light.label,
        button: light.button,
      });
    } else if (theme === "Dark") {
      setColors({
        headColor: Dark.headColor,
        bg: Dark.bg,
        label: Dark.label,
        button: Dark.button,
      });
    } else if (theme === "cosmic") {
      setColors({
        headColor: cosmic.headColor,
        bg: cosmic.bg,
        label: cosmic.label,
        button: cosmic.button,
      });
    }
  };
  const light = {
    headColor: "#000",
    bg: "white",
    label: "#000",
    button: "blue",
  };
  const Dark = {
    headColor: "white",
    bg: "blue",
    label: "white",
    button: "black",
  };
  const cosmic = {
    headColor: "white",
    bg: "#323259",
    label: "white",
    button: "black",
  };
  const Styles = {
    headColor: colors.headColor,
    bg: colors.bg,
    label: colors.label,
    button: colors.button,
  };
  const HandleClick = (e) => {
    setTheme(e.target.innerHTML);
  };
  useEffect(() => {
    ChangeColor();
  }, [theme]);
  return (
    <AppContext.Provider value={{ theme, HandleClick, Styles }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
