import { MouseEvent, useCallback, useContext, useState } from "react";
import { Animated } from "react-animated-css";

import { GameContext } from "../../context/GameContext";
import { PlayerContext } from "../../context/PlayerContext";

import Square from "../Square";

import styles from "./styles.module.scss";
import Stopwatch from "../Stopwatch";

export default function BoardGame() {
  const [activeButton, setActiveButton] = useState("tic-tac-toe");
  const { gameSquare, winner, gameIsFinished, historyGames } =
    useContext(GameContext);

  const { player, gameRoom } = useContext(PlayerContext);

  const handleChooseGame = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setActiveButton(event.currentTarget.name);
    },
    []
  );

  return (
    <section className={styles.wrapperContainer}>
      {gameIsFinished && (
        <Animated
          animationIn="bounceIn"
          animationOut="flash"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
          className={styles.animationContainer}
        >
          <span className={styles.animationText}>
            {historyGames.some((s) => s.winner?.nickname !== null)
              ? `👏 Congratulation ${winner?.name}!`
              : `😞 Oh, did't have a winner!`}
          </span>
        </Animated>
      )}
      <div className={styles.boardContainer}>
        <div className={styles.boardTitle}>
          <h1>Tic tac toe games</h1>
          <h3>Welcome to the best game in the world.</h3>
        </div>
        <div className={styles.boardContent}>
          <div className={styles.boardButtons}>
            <button
              type="button"
              name="tic-tac-toe"
              className={activeButton === "tic-tac-toe" ? styles.isActive : ""}
              onClick={handleChooseGame}
            >
              Tic tac toe
            </button>
            <button
              type="button"
              name="4-in-a-row"
              className={activeButton === "4-in-a-row" ? styles.isActive : ""}
              onClick={handleChooseGame}
            >
              4-in-a-row
            </button>
          </div>
          <div className={styles.boardBody}>
            <div className={styles.boardBodyPlayer}>
              <div
                className={`${styles.gamePlayerTitleScore} ${
                  styles.scorePlayer1
                } ${gameRoom[0] === player ? styles.isActive : ""}`}
              >
                <h3>Player 1</h3>
                <h1>{gameRoom[0]?.score}</h1>
              </div>
              <div className={styles.boardGame}>
                <div className={styles.squareGroup}>
                  <div className={styles.boardRow}>
                    <Square position={0} value={gameSquare[0]} />
                    <Square position={1} value={gameSquare[1]} />
                    <Square position={2} value={gameSquare[2]} />
                  </div>
                  <div className={styles.boardRow}>
                    <Square position={3} value={gameSquare[3]} />
                    <Square position={4} value={gameSquare[4]} />
                    <Square position={5} value={gameSquare[5]} />
                  </div>
                  <div className={styles.boardRow}>
                    <Square position={6} value={gameSquare[6]} />
                    <Square position={7} value={gameSquare[7]} />
                    <Square position={8} value={gameSquare[8]} />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.gamePlayerTitleScore} ${
                  styles.scorePlayer2
                } ${gameRoom[1] === player ? styles.isActive : ""}`}
              >
                <h3>Player 2</h3>
                <h1>{gameRoom[1]?.score}</h1>
              </div>
              <div className={styles.stopwatch}>
                <Stopwatch
                  start={gameSquare.some((s) => s !== "")}
                  pause={!!winner || gameSquare.every((s) => s !== "")}
                  reset={
                    (!!winner && gameSquare.some((s) => s !== "")) ||
                    gameSquare.every((s) => s !== "")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
