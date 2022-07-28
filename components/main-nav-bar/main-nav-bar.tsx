import Link from "next/link";
import styles from "../main-nav-bar/main-nav-bar.module.css";
function MainNavBar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Pokedex</div>
      </Link>
      <ul>
        <li>
          <Link href="/details">All Pokemons</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavBar;
