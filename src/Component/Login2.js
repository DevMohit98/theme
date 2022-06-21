import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
const Login2 = () => {
  const { theme, HandleClick, Styles } = useGlobalContext();

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
export default Login2;
