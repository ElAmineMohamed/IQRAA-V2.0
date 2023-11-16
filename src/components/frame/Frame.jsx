import Image from "next/image";
import styles from "./frame.module.scss";
import img1 from "public/photo-1575936123452-b67c3203c357.jpeg";
import Likes from "../likes/Likes";

export default function Frame() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>amine</h2>
          <h1>prof</h1>
          <span>1 h</span>
        </div>
        <div className={styles.contant}>
          <div className={styles.status}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            commodi architecto autem vero, iste ipsum. Non, illo praesentium
            neque dolor fugiat maiores modi dignissimos, officia animi, maxime
            soluta sint ex? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolorem, illum sed iusto eos dolor sit quam veniam
            consequatur! Tempore laudantium nisi itaque nam? Sit ad modi debitis
            sunt
          </div>
          <Image src={img1} width={300} height={300} />
        </div>
        <div className={styles}></div>
        <Likes />
      </div>
    </>
  );
}
