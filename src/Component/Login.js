import React, { useEffect, useState } from "react";
const Login = () => {
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
  const HandleClick = (e) => {
    setTheme(e.target.innerHTML);
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
  useEffect(() => {
    ChangeColor();
  }, [theme]);
  console.log(theme);
  return (
    <>
      <div style={{ backgroundColor: Styles.bg }}>
        <h1 className="text-center mt-4" style={{ color: Styles.headColor }}>
          hello My Name is Mohit Ramola
        </h1>
        <div
          className="d-flex justify-content-center align-item-center flex-column"
          style={{ width: "30vw" }}
        >
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              style={{ color: Styles.label }}
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              style={{ color: Styles.label }}
            >
              password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="enter password"
            />
          </div>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: Styles.button }}
          >
            login
          </button>
          <div class="dropdown mt-2">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {theme}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#" onClick={HandleClick}>
                  Light
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleClick}>
                  Dark
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleClick}>
                  cosmic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
