import { useState, useRef, MutableRefObject } from "react";

type InitialState = number;

const useTimer = (initialState: InitialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const countRef: MutableRefObject<any> = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    countRef.current = setInterval(() => {
      setTimer((timer: number) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
  };

  const handleResume = () => {
    countRef.current = setInterval(() => {
      setTimer((timer: number) => timer + 1);
    }, 1000);
  };

  const handleReset = ({ delay = 0 }) => {
    clearInterval(countRef.current);
    setIsRunning(true);

    setTimeout(() => {
      setTimer(0);
    }, delay);
  };

  return {
    timer,
    isRunning,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};

export default useTimer;
