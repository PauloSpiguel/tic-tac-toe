import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { PlayerContext } from "../../context/PlayerContext";
import { calcPercentageGame } from "../../utils";
import Stopwatch from "../Stopwatch";

import styles from "./styles.module.scss";

const GameStatistics: React.FC = () => {
  const { historyGames, gameIsFinished } = useContext(GameContext);
  const { gameRoom } = useContext(PlayerContext);

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
                    <div>
                      <span>{`${
                        calcPercentageGame(historyGames, gameRoom[0]).victories
                      }%`}</span>
                    </div>
                    <span>V</span>
                  </div>
                  <div className={styles.playerProgressItem}>
                    <div>
                      <span>{`${
                        calcPercentageGame(historyGames, gameRoom[0]).losses
                      }%`}</span>
                    </div>
                    <span>L</span>
                  </div>
                </div>
              </div>
              <div className={styles.statisticGroupPlayerItems}>
                <h4>Player 2</h4>
                <div className={styles.playerProgress}>
                  <div className={styles.playerProgressItem}>
                    <div>
                      <span>{`${
                        calcPercentageGame(historyGames, gameRoom[1]).victories
                      }%`}</span>
                    </div>
                    <span>V</span>
                  </div>
                  <div className={styles.playerProgressItem}>
                    <div>
                      <span>{`${
                        calcPercentageGame(historyGames, gameRoom[1]).losses
                      }%`}</span>
                    </div>
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
                  <li className={historyGames[0] && styles.isActive} />
                  <li className={historyGames[1] && styles.isActive} />
                  <li className={historyGames[2] && styles.isActive} />
                  <li className={historyGames[3] && styles.isActive} />
                  <li className={historyGames[4] && styles.isActive} />
                  <li className={historyGames[5] && styles.isActive} />
                  <li className={historyGames[6] && styles.isActive} />
                  <li className={historyGames[7] && styles.isActive} />
                  <li className={historyGames[8] && styles.isActive} />
                </ul>
              </div>
            </div>
            <div className={styles.gameHistory}>
              <h3>Game history</h3>
              <div className={styles.gameHistoryItem}>
                <ul>
                  <li>
                    {historyGames[0]
                      ? historyGames[0]?.winner !== null
                        ? historyGames[0]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[1]
                      ? historyGames[1]?.winner !== null
                        ? historyGames[1]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[2]
                      ? historyGames[2]?.winner !== null
                        ? historyGames[2]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[3]
                      ? historyGames[3]?.winner !== null
                        ? historyGames[3]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[4]
                      ? historyGames[4]?.winner !== null
                        ? historyGames[4]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[5]
                      ? historyGames[5]?.winner !== null
                        ? historyGames[5]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[6]
                      ? historyGames[6]?.winner !== null
                        ? historyGames[6]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[7]
                      ? historyGames[7]?.winner !== null
                        ? historyGames[7]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                  <li>
                    {historyGames[8]
                      ? historyGames[8]?.winner !== null
                        ? historyGames[8]?.winner.nickname === "cross"
                          ? "P1"
                          : "P2"
                        : "X"
                      : ""}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalTimer}>
        <h4>Total time</h4>
        <span>
          <Stopwatch start={!gameIsFinished} pause={gameIsFinished} />
        </span>
      </div>
    </section>
  );
};

export default GameStatistics;
