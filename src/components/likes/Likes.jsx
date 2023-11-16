"use client";
import styles from "../frame/frame.module.scss";
import { useState } from "react";
import {
  IoArrowDownSharp,
  IoArrowUpSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
export default function Likes() {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [fav, setFav] = useState(false);

  const handelUP = () => {
    setUp(!up);
    console.log(up);
  };

  const handelDown = () => {
    setDown(!down);
  };

  const handelFav = () => {
    setFav(!fav);
  };
  return (
    <>
      <div className={styles.like}>
        <div className={styles.arw}>
          <button onClick={handelUP}>
            <IoArrowUpSharp size={28} color={up ? "#1d9bf0" : "black"} />
          </button>
          <button onClick={handelDown}>
            <IoArrowDownSharp size={28} color={down ? "#1d9bf0" : "black"} />
          </button>
        </div>
        <button onClick={handelFav}>
          <IoBookmarkOutline size={28} color={fav ? "#1d9bf0" : "black"} />
        </button>
      </div>
    </>
  );
}
