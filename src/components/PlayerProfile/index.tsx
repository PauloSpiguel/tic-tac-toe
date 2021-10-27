import { useState } from "react";
import styles from "./styles.module.scss";

interface PlayerProfileProps {
  img: string;
}

export default function PlayerProfile() {
  const [player, setPlayer] = useState({} as PlayerProfileProps);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperPlayer}>
        <div className={styles.imgProfile}>
          {player.img ? (
            <img src={player.img} alt="profile" />
          ) : (
            <div>(Photo area)</div>
          )}
        </div>
        <div className={styles.infoPlayer}>
          <div className={styles.detailPlayer}>
            <h2>John Smith</h2>
            <span>Age: 30</span>
            <span>Location: Porto</span>
            <span>Occupation: Ui/Ux designer</span>
          </div>
          <div className={styles.aboutPlayer}>
            <h4>About me:</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis possimus, voluptas ipsa vero tempore asperiores
              eveniet hic nobis enim quos, deleniti suscipit laborum distinctio
              inventore quas error, explicabo dolor ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
