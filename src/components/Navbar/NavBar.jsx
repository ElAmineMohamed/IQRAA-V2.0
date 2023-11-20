import styles from "./NavBar.module.scss";
import { FaSearch, FaUserTie, FaSchoolFlag, FaSchool } from "react-icons/fa";
import { IoHomeOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <span>
            <Link href="/">IQRAA</Link>
          </span>
          <input type="search" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className={styles.midel}>
          <ul>
            <li>
              <Link href="/">
                <IoHomeOutline />
              </Link>
            </li>
            <li>
              <Link href="/puzzle">
                <IoExtensionPuzzleOutline />
              </Link>
            </li>
            <li>
              <Link href="/prof">
                <FaUserTie />
              </Link>
            </li>
            <li>
              <Link href="/school">
                <FaSchool />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>right</div>
      </nav>
    </>
  );
}
