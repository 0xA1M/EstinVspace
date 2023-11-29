import Link from "next/link";

function NavBar() {
  const styles = {
    color: "white",
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/playground/web" style={styles}>
            FrontEnd Code
          </Link>
        </li>
        <li>
          <Link href="/playground/code" style={styles}>
            Code Runner
          </Link>
        </li>
        <li>
          <Link href="/playground/linux" style={styles}>
            Linux Terminal
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
