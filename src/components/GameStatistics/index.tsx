import React from "react";

import styles from "./styles.module.scss";

const GameStatistics: React.FC = () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.gameStatisticContainer}>
        <div className={styles.title}>
          <h1>Awesome statistics</h1>
        </div>
        <div className={styles.subtitle}>
          <h3>All statistics in on place!</h3>
        </div>
        <div className={styles.statistic}></div>
      </div>
    </div>
  );
};

export default GameStatistics;
