import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Square from "../Square";
import styles from "./styles.module.scss";

/* import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize"; */

export default function BoardGame() {
  const { gameSquare } = useContext(GameContext);
  /*   const { width, height } = useWindowSize(); */

  /*  return <Confetti width={width} height={height} />; */

  return (
    <section className={styles.wrapperContainer}>
      <div className={styles.boardContainer}>
        <div className={styles.boardTitle}>
          <h1>Tic tac toe games</h1>
          <h3>Welcome to the best game in the world.</h3>
        </div>
        <div className={styles.boardContent}>
          <div className={styles.boardButtons}>
            <button type="button" autoFocus>
              Tic tac toe
            </button>
            <button type="button" className="active">
              4-in-a-row
            </button>
          </div>
          <div className={styles.boardBody}>
            <div className={styles.boardBodyPlayer}>
              <div className={styles.gamePlayerTitleScore}>
                <h3>Player 1</h3>
                <h1>1</h1>
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
              <div className={styles.gamePlayerTitleScore}>
                <h3>Player 2</h3>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className={styles.boardTimer}>
            <span>00:13:40</span>
          </div>
        </div>
      </div>
    </section>
  );
}
