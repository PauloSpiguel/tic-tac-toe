import React, { useContext } from "react";

import styles from "./styles.module.scss";

import cross from "../../assets/images/X_bright.svg";
import circle from "../../assets/images/O_dark.svg";
import { GameContext } from "../../context/GameContext";

interface SquareProps {
  value?: string;
  position: number;
}

const Square: React.FC<SquareProps> = ({ value, position }) => {
  const { onGameSquare, winner } = useContext(GameContext);

  function handleChangeMark(index: number) {
    console.log({ value }, position);

    if (winner) {
      return;
    }

    onGameSquare(index);
  }

  return (
    <div
      className={styles.container}
      onClick={() => handleChangeMark(position)}
    >
      {!value || value === undefined ? (
        <div className={styles.nullValue} />
      ) : value === "circle" ? (
        <div className={styles.squareImage}>
          <img src={circle} alt="circle" />
        </div>
      ) : (
        <div className={styles.squareImage}>
          <img src={cross} alt="cross" />
        </div>
      )}
    </div>
  );
};

export default Square;
