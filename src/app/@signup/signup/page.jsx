import styles from "./signUp.module.scss"
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaTelegram,
} from "react-icons/fa6";

export default function GG() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.logo}>IQRAA</h1>
        <span>SignUP</span>
        <div className={styles.container}>
          <form action="">
            <label htmlFor="email">Email :</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="user">User :</label>
            <input type="text" placeholder="User" />
            <label htmlFor="password">password :</label>
            <input type="password" placeholder="Password" />
            <label htmlFor="password">password :</label>
            <input type="password" placeholder="Password" />
          <button>Submet</button>
          </form>
        </div>
        <footer className={styles.footer}>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaSquareXTwitter />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}
