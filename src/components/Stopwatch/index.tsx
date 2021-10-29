import { useEffect } from "react";
import useTimer from "../hooks/useTimer";

import styles from "./styles.module.scss";

interface StopwatchProps {
  start: boolean;
  pause?: boolean;
  reset?: boolean;
}

export default function Stopwatch({ start, pause, reset }: StopwatchProps) {
  const { handleStart, timer, isRunning, handlePause, handleReset } =
    useTimer();

  useEffect(() => {
    if (!isRunning && start) {
      handleStart();
    }
  }, [start, handleStart, isRunning]);

  useEffect(() => {
    if (isRunning && pause) {
      handlePause();
    }
  }, [pause, handlePause, isRunning, reset]);

  useEffect(() => {
    if (reset) {
      handleReset({ delay: 3000 });
    }
  }, [reset, handleReset]);

  const formatTime = (currentTimer: number) => {
    const getSeconds = timer % 60;
    const minutes = Math.floor(timer / 60);
    const getMinutes = minutes % 60;
    const getHours = Math.floor(timer / 3600);

    const h = String(getHours).padStart(2, "0");
    const m = String(getMinutes).padStart(2, "0");
    const s = String(getSeconds).padStart(2, "0");

    return `${h}:${m}:${s}`;
  };

  return (
    <div className={styles.container}>
      <span className={styles.timer}>{formatTime(timer)}</span>
    </div>
  );
}
