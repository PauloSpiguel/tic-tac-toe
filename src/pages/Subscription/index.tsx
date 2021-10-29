import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import logoCross from "../../assets/images/X_bright.svg";
import logoCircle from "../../assets/images/O_dark.svg";

import { PlayerContext, PlayerProps } from "../../context/PlayerContext";

import styles from "./styles.module.scss";

interface Players {
  player1: PlayerProps;
  player2: PlayerProps;
}

const Subscription: React.FC = () => {
  const [players, setPlayers] = useState({} as Players);

  const history = useHistory();

  const { onSetGameRoom } = useContext(PlayerContext);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    onSetGameRoom(players, () => {
      history.push("/");
    });
  }

  function handleAvatar(event: ChangeEvent<HTMLInputElement>) {
    const { id, files } = event.target;

    const urlImage = URL.createObjectURL(files[0]);

    setPlayers((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], avatar_url: urlImage },
    }));
  }

  const handleInput = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, id, value } = event.currentTarget;

      setPlayers((prevState) => ({
        ...prevState,
        [id]: { ...prevState[id], [name]: value },
      }));
    },
    []
  );

  useEffect(() => {
    localStorage.removeItem("tic-tac-toe.gameRoom");
  }, []);

  return (
    <section className={styles.container}>
      {JSON.stringify(players)}
      <h1>Players Registration</h1>
      <h2>Tic Toc Toe</h2>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.playerFormBody}>
          <div className={styles.playerFormItem}>
            <h3>Player 1</h3>

            <div className={styles.avatarGroup}>
              <img
                src={players?.player1?.avatar_url || logoCross}
                alt="Player 1"
              />
              <input
                accept="image/*"
                id="player1"
                type="file"
                hidden
                onChange={handleAvatar}
              />
              <label htmlFor="player1">Choose your Avatar</label>
            </div>

            <input
              required
              autoComplete="off"
              id="player1"
              name="name"
              type="text"
              placeholder="Name Player 1"
              onChange={handleInput}
            />
            <input
              required
              autoComplete="off"
              id="player1"
              name="age"
              type="text"
              placeholder="Age Player 1"
              onChange={handleInput}
            />
            <input
              required
              autoComplete="off"
              id="player1"
              name="location"
              type="text"
              placeholder="Location Player 1"
              onChange={handleInput}
            />
            <input
              required
              autoComplete="off"
              id="player1"
              name="occupation"
              type="text"
              placeholder="Occupation Player 1"
              onChange={handleInput}
            />
            <textarea
              required
              id="player1"
              name="about"
              placeholder="About Player 1"
              onChange={handleInput}
            />
          </div>
          <div className={styles.playerFormItem}>
            <h3>Player 2</h3>

            <div className={styles.avatarGroup}>
              <img
                src={players?.player2?.avatar_url || logoCircle}
                alt="Player 2"
              />
              <input
                accept="image/*"
                id="player2"
                type="file"
                onChange={handleAvatar}
                hidden
              />
              <label htmlFor="player2">Choose your Avatar</label>
            </div>

            <input
              required
              autoComplete="off"
              id="player2"
              name="name"
              type="text"
              placeholder="Name Player 2"
              onChange={handleInput}
            />

            <input
              required
              autoComplete="off"
              id="player2"
              name="age"
              type="text"
              placeholder="Age Player 2"
              onChange={handleInput}
            />
            <input
              required
              autoComplete="off"
              id="player2"
              name="location"
              type="text"
              placeholder="Location Player 2"
              onChange={handleInput}
            />
            <input
              required
              autoComplete="off"
              id="player2"
              name="occupation"
              type="text"
              placeholder="Occupation Player 2"
              onChange={handleInput}
            />
            <textarea
              required
              id="player2"
              name="about"
              placeholder="About Player 2"
              onChange={handleInput}
            />
          </div>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </section>
  );
};

export default Subscription;
