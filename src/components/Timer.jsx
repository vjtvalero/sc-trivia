import { useState, useEffect } from "react";

function Timer({ initSeconds, timerOn }) {
  const [seconds, setSeconds] = useState(initSeconds);
  useEffect(() => {
    let interval;
    if (Boolean(timerOn)) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setSeconds(initSeconds);
    }

    return () => clearInterval(interval);
  }, [timerOn, seconds]);

  return <div>{seconds > 0 ? seconds : 0}</div>;
}

export default Timer;
