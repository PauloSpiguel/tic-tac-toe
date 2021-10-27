import styles from "./styles.module.scss";

export default function GameArea() {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.gameAreaContainer}>
        <div className={styles.gameAreaTitle}>
          <h1>Tic tac toe games</h1>
          <h3>Welcome to the best game in the world.</h3>
        </div>
        <div className={styles.gameAreaContent}>
          <div className={styles.gameAreaButtons}>
            <button type="button" autoFocus>
              Tic tac toe
            </button>
            <button type="button" className="active">
              4-in-a-row
            </button>
          </div>
          <div className={styles.gameAreaBody}>
            <div className={styles.gameAreaBodyPlayer}>
              <div className={styles.gamePlayerTitleScore}>
                <h3>Player 1</h3>
                <h1>1</h1>
              </div>
              <div className={styles.game}>(Game area)</div>
              <div className={styles.gamePlayerTitleScore}>
                <h3>Player 2</h3>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className={styles.gameAreaTimer}>
            <span>00:13:40</span>
          </div>
        </div>
      </div>
    </div>
  );
}
