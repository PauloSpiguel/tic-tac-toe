import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

import logoCross from "../../assets/images/X_bright.svg";
import logoCircle from "../../assets/images/O_dark.svg";

import styles from "./styles.module.scss";

export default function PlayerProfile() {
  const { player } = useContext(PlayerContext);

  return (
    <section className={styles.container}>
      <div className={styles.wrapperPlayer}>
        <div className={styles.imgProfile}>
          {!!player?.avatar_url ? (
            <img src={player?.avatar_url} alt="Profile" />
          ) : (
            <img
              src={player?.nickname === "cross" ? logoCross : logoCircle}
              alt={player?.nickname}
            />
          )}
        </div>
        <div className={styles.infoPlayer}>
          <div className={styles.detailPlayer}>
            <h2>{player?.name}</h2>
            <span>Age: {player?.age}</span>
            <span>Location: {player?.location}</span>
            <span>Occupation: {player?.occupation}</span>
          </div>
          <div className={styles.aboutPlayer}>
            <h4>About me:</h4>
            <p>{player?.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
