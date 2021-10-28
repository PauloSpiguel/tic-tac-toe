import BoardGame from "../../components/BoardGame";
import GameStatistics from "../../components/GameStatistics";
import PlayerProfile from "../../components/PlayerProfile";

import styles from "./styles.module.scss";

function Home() {
  return (
    <section className={styles.container}>
      <PlayerProfile />
      <BoardGame />
      <GameStatistics />
    </section>
  );
}

export default Home;
