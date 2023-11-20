"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, settime] = useState(1);
  useEffect(() => {
    let setid=null
    if (time > 0) {
      setid = setInterval(() => {
        settime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(setid);
  }, []);
  console.log("render timer");
  return (
    <>
      {Math.floor(time / 60)}:{time % 60}
    </>
  );
}
