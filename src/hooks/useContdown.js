import { useEffect, useState } from "react";

export const useContdown = (intialTime, callback) => {
  const [time, setTime] = useState(10000);
  console.log("from hook");
  useEffect(() => {
    const costemintervel = setInterval(() => {
      console.log("from inter");
      if (time > 0) setTime((t) => t - 1000);
    }, 1000);
    if (time == 0) {
      callback();
    }
    return clearInterval(costemintervel);
  }, [time]);
  return time;
};
