import useMeasure from "react-use/lib/useMeasure";
import Confetti from "react-confetti";

import BoardGame from "../../components/BoardGame";
import GameStatistics from "../../components/GameStatistics";
import PlayerProfile from "../../components/PlayerProfile";

import styles from "./styles.module.scss";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { useHistory } from "react-router-dom";

function Home() {
  const [ref, { width, height }] = useMeasure();
  const { gameIsFinished, historyGames } = useContext(GameContext);
  const { gameRoom } = useContext(PlayerContext);

  const history = useHistory();

  if (!gameRoom.length) {
    history.push("/subscription");
  }

  return (
    <section ref={ref} className={styles.container}>
      {historyGames.some((s) => s.winner?.nickname !== null) && (
        <Confetti width={width} height={height} run={gameIsFinished} />
      )}
      <PlayerProfile />
      <BoardGame />
      <GameStatistics />
    </section>
  );
}

export default Home;
