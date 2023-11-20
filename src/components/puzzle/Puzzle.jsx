"use client";
import React, { useEffect, useState } from "react";
import styles from "./puzzle.module.scss";
import { useContdown } from "../../hooks/useContdown";
import Timer from "../timer/timer";

const quiz = [
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg amine ?",
    propz: ["1998", "1997", "1999", "1996"],
    answer: "1998",
  },
  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
    answer: "1998",
  },

  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslljksdg ?",
    propz: ["amie", "ifo", "madi", "oma"],
    answer: "1998",
  },

  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
    answer: "1998",
  },

  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
    answer: "1998",
  },

  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
    answer: "1998",
  },

  {
    question: "lksdgljksgkjlsgdjjklsgdlkjsgdljkgslkjgsljksdg ?",
    propz: ["amine", "sifo", "mahdi", "omar"],
    answer: "1998",
  },
];
export default function Puzzle() {
  const [complite, setComplite] = useState(false);
  const [note, setNote] = useState([]);
  console.log("render");
  const [i, setI] = useState(0);
  // // const timer = useContdown(10000, () => {
  //   console.log("hi");
  // });
  const next = () => {
    if (i >= quiz.length - 1) {
      setComplite(true);
    }
    setI((i) => i + 1);
  };
  const previous = () => {
    if (i <= 0) return;
    setI((i) => i - 1);
  };
  if (complite) {
    return (
      <>
        <h1> The Answer Is</h1>
        <div>
          {quiz.map((quiz, index) => {
            return (
              <>
                <p key={index + "aa"}>
                  {index + 1}: {quiz.question} {quiz.answer}
                </p>
              </>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.title}>
            <h1>math</h1>
            <span>{i + 1}</span>/{quiz.length}
          </div>
          <div className={styles.right}>
            <p>
              {
                <Timer /> /* {Math.floor(timer / 60000)}:{(timer % 60000) / 1000} */
              }
            
            </p>
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
          <button onClick={previous}>previous</button>
          <button onClick={next}>next</button>
        </div>
      </div>
    </>
  );
}
