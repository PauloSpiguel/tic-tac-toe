import React from "react";

import styles from "./styles.module.scss";

const GameStatistics: React.FC = () => {
  return (
    <section className={styles.wrapperContainer}>
      <div className={styles.gameStatisticContainer}>
        <div className={styles.title}>
          <h1>Awesome statistics</h1>
        </div>
        <div className={styles.subtitle}>
          <h3>All statistics in on place!</h3>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statisticVictories}>
            <h3>Game victories %</h3>
            <div className={styles.statisticPlayers}>
              <div className={styles.statisticGroupPlayerItems}>
                <h4>Player 1</h4>
                <div className={styles.playerProgress}>
                  <div className={styles.playerProgressItem}>
                    <div>61%</div>
                    <span>V</span>
                  </div>
                  <div className={styles.playerProgressItem}>
                    <div>39%</div>
                    <span>L</span>
                  </div>
                </div>
              </div>
              <div className={styles.statisticGroupPlayerItems}>
                <h4>Player 2</h4>
                <div className={styles.playerProgress}>
                  <div className={styles.playerProgressItem}>
                    <div>39%</div>
                    <span>V</span>
                  </div>
                  <div className={styles.playerProgressItem}>
                    <div>61%</div>
                    <span>L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statisticMatchesHistory}>
            <div className={styles.statisticMatches}>
              <h3>Played matches</h3>
              <div className={styles.playerMatchesItem}>
                <ul>
                  <li style={{ background: "var(--color-gray-200" }} />
                  <li style={{ background: "var(--color-gray-200" }} />
                  <li style={{ background: "var(--color-gray-200" }} />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
            <div className={styles.gameHistory}>
              <h3>Game history</h3>
              <div className={styles.gameHistoryItem}>
                <ul>
                  <li>P2</li>
                  <li>P2</li>
                  <li>P1</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalTimer}>
        <h4>Total time</h4>
        <span>00:44:12</span>
      </div>
    </section>
  );
};

export default GameStatistics;
