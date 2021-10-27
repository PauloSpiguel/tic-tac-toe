import React from "react";
import GameArea from "../../components/GameArea";
import GameStatistics from "../../components/GameStatistics";
import PlayerProfile from "../../components/PlayerProfile";

import styles from "./styles.module.scss";

function Home() {
  return (
    <section className={styles.container}>
      <PlayerProfile />
      <GameArea />
      <GameStatistics />
    </section>
  );
}

export default Home;
