import Puzzle from "@/components/puzzle/Puzzle";
import styles from "./puzzel.module.scss";
export default function page() {
  console.log('render the holl page');
  return (
    <div className={styles.container}>
      <Puzzle />
    </div>
  );
}
