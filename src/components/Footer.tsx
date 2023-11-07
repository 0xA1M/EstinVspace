import "../assets/styles/footer.css";

interface Params {
  isDark: boolean;
}

function Footer({ isDark }: Params) {
  return (
    <footer className={isDark ? "dark" : ""}>
      <h1>Footer</h1>
    </footer>
  );
}

export default Footer;
