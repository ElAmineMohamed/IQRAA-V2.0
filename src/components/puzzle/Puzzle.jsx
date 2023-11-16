"use client";
import React, { useEffect, useState } from "react";
import styles from "./puzzle.module.scss";

const quiz = [
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg amine ?",
    propz: ["1998", "1997", "1999", "1996"],
  },
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
  },
  
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslljksdg ?",
    propz: ["amie", "ifo", "madi", "oma"],
  },
  
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
  },
  
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
  },
  
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
  },
  
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
  },
];
export default function Puzzle() {
  console.log(quiz);
  const [i, setI] = useState(0);
  console.log(i);
  const next = () => {
    if (i >= quiz.length-1) {
      return setI(0);
    }
    setI(i + 1);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.title}>
            <h1>math</h1>
            <span>{i + 1}</span>/{quiz.length}
          </div>
          <div className={styles.right}>
            <p>4:50</p>
            <h1>score:8</h1>
          </div>
        </div>
        <div className={styles.question}>
          <p>{quiz[i].question}</p>

          <ul>
            {quiz[i].propz.map((pro, d) => {
              return <li key={d}>{pro}</li>;
            })}
          </ul>
        </div>
        <div className={styles.np}>
          <button>previous</button>
          <button onClick={next}>next</button>
        </div>
      </div>
    </>
  );
}
