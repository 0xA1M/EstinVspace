import "../assets/styles/header.css";

interface Params {
  isDark: boolean;
  setIsDark(state: React.SetStateAction<boolean>): void;
}

function Header({ isDark, setIsDark }: Params) {
  const toggleDarkMode = (): void => {
    setIsDark((prevState: boolean) => !prevState);
  };

  return (
    <header className={isDark ? "dark" : ""}>
      <h1>Header</h1>
      <button onClick={toggleDarkMode}>dark</button>
    </header>
  );
}

export default Header;
