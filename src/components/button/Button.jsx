"use client";
import styles from "../../app/@signup/loginPage.module.scss";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <>
      <button
        className={styles.create}
        onClick={() => {
          router.push("/gg");
        }}
      >
        create new acount
      </button>
    </>
  );
}
