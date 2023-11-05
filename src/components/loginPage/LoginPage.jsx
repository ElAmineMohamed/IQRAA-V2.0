import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import styles from "./loginPage.module.scss";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.left}>
              <span>IQRAA</span>
              <h1>dasd</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                cumque corrupti dicta. Magni, eius accusantium animi et minima
                sed alias pariatur eos
              </p>
              <Image
                src="/undraw_Educator_re_ju47.svg"
                width={450}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.right}>
              <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="password" />
                <button type="submet">log in</button>
              </form>
              <span>forget password ?</span>
              <button className={styles.create}>create new account</button>
            </div>
          </div>
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
