/* Dependencies Imports */
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

/* Assets Imports */
import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import LogoLight from "../assets/images/logo-light.svg";

interface Params {
  isDark: boolean;
  setIsDark(state: React.SetStateAction<boolean>): void;
}

function Header({ isDark, setIsDark }: Params) {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const searchBarRef = useRef<HTMLLIElement>(null);
  const searchBarInputRef = useRef<HTMLInputElement>(null);

  const toggleDarkMode = (): void => {
    setIsDark((prevState: boolean) => !prevState);
  };

  const highlighter = (value: string): void => {
    setSelectedItem(value);
  };

  useEffect(() => {
    let timeOut1: number, timeOut2: number;

    const toggleSearchBar = (): void => {
      searchBarRef.current?.classList.toggle("active");

      if (searchBarRef.current?.classList.contains("active")) {
        searchBarInputRef.current?.focus();
      }
    };

    const clickHandler = (event: MouseEvent) => {
      if (searchBarRef.current?.contains(event.target as HTMLElement)) {
        if (
          document
            .querySelector("#Search")
            ?.contains(event.target as HTMLElement)
        ) {
          toggleSearchBar();
        }
      } else {
        searchBarRef.current?.classList.remove("active");

        // Remove SearchBar Input value
        /* if (searchBarInputRef.current) {
          searchBarInputRef.current.value = "";
        } */
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
      clearTimeout(timeOut1);
      clearTimeout(timeOut2);
    };
  }, [showSearchBar]);

  return (
    <header className={isDark ? "dark" : ""}>
      <img
        src={!isDark ? Logo : LogoLight}
        alt="EstinVspace"
        className="logo"
      />

      <nav className="main-nav">
        <ul className="nav-item-list">
          <li
            className={`nav-item item-0 ${
              selectedItem === "home" ? "active-link" : ""
            }`}
            onClick={() => highlighter("home")}
          >
            <NavLink className="nav-link" to="." end>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={!isDark ? "#111111" : "#eeeeee"}
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Home</p>
            </NavLink>
          </li>
          <li
            className={`nav-item item-1 ${
              selectedItem === "academics" ? "active-link" : ""
            }`}
            onClick={() => highlighter("academics")}
          >
            <NavLink className="nav-link" to="academics">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={!isDark ? "#111111" : "#eeeeee"}
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <p>Academics</p>
            </NavLink>
          </li>
          <li
            className={`nav-item item-2 ${
              selectedItem === "selfdev" ? "active-link" : ""
            }`}
            onClick={() => highlighter("selfdev")}
          >
            <NavLink className="nav-link" to="selfdev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={!isDark ? "#111111" : "#eeeeee"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <p> Self Dev</p>
            </NavLink>
          </li>
          <li
            className={`nav-item item-3 ${
              selectedItem === "playground" ? "active-link" : ""
            }`}
            onClick={() => highlighter("playground")}
          >
            <NavLink className="nav-link" to="playground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={!isDark ? "#111111" : "#eeeeee"}
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <p>Playground</p>
            </NavLink>
          </li>
          <li
            className={`nav-item item-4 ${
              selectedItem === "about" ? "active-link" : ""
            }`}
            onClick={() => highlighter("about")}
          >
            <NavLink className="nav-link" to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={!isDark ? "#111111" : "#eeeeee"}
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>

              <p>About</p>
            </NavLink>
          </li>
          <li
            className={`nav-item search-bar ${
              !isDark ? "search-bar-light" : "search-bar-dark"
            }`}
            ref={searchBarRef}
            onClick={() => setShowSearchBar((prevState: boolean) => !prevState)}
          >
            <input id="searchInput" type="text" ref={searchBarInputRef} />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={!isDark ? "#111111" : "#eeeeee"}
              className="icon search-icon"
              id="Search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>

          <div className={`nav-item-highlighter ${isDark ? "dark" : ""}`}></div>
        </ul>
      </nav>

      <div className="darkMode-toggler">
        <input
          type="checkbox"
          name="darkMode"
          id="toggleDark"
          className="toggle-dark"
          onChange={toggleDarkMode}
        />

        <label
          htmlFor="toggleDark"
          className={`toggle-dark-label ${isDark ? "dark" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#f1c40f"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#f39c12"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>

          <span className={`ball ${!isDark ? "dark" : ""}`}></span>
        </label>
      </div>
    </header>
  );
}

export default Header;