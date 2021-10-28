import { createContext, useContext, useEffect, useState } from "react";
import { toast as notify } from "react-toastify";

import { PlayerContext } from "./PlayerContext";

const INITIAL_STATE = ["", "", "", "", "", "", "", "", ""];

type Player = {
  nickname: string;
  name: string;
  score: number;
  age?: number;
  location?: string;
  occupation?: string;
  about?: string;
  avatar_url?: string;
};

interface HistoryGame {
  winner: Player;
  loser: Player;
  date: string;
  timer: number;
}

interface GameContextData {
  gameSquare: string[];
  onGameSquare: (key: number) => void;
  onGameOver: () => void;
  winner: Player;
}

export const GameContext = createContext({} as GameContextData);

const GameContextProvider: React.FC = ({ children }) => {
  const [gameSquare, setGameSquare] = useState(INITIAL_STATE);
  const [historyGame, setHistoryGame] = useState<HistoryGame[]>([]);
  const [winner, setWinner] = useState<Player>(null);

  const { player, onChangePlayer } = useContext(PlayerContext);

  function onGameSquare(index: number) {
    const newGameSquare = [...gameSquare];

    if (newGameSquare[index] !== "") {
      return notify.info("Please try another square!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    newGameSquare[index] = player.nickname;

    setGameSquare(newGameSquare);

    onChangePlayer(player);
  }

  function onResetGame() {
    setGameSquare(INITIAL_STATE);
    onChangePlayer(player);
  }

  function onGameOver() {
    notify.info("Game Over!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const checkCombination = (): void => {
      combinations.forEach((combination) => {
        const [a, b, c] = combination;

        if (
          gameSquare[a] &&
          gameSquare[a] === gameSquare[b] &&
          gameSquare[a] === gameSquare[c]
        ) {
          const winner = player.name;

          setWinner(player);

          notify.success(`Player ${winner} won!`, {
            onClose: () => {},
          });

          /*   setTimeout(() => {
            onResetGame();
          }, 2000); */

          //onGameOver();
          //onChangePlayer();
        }
      });
    };

    checkCombination();
  }, [gameSquare]);

  return (
    <GameContext.Provider
      value={{
        winner,
        gameSquare,
        onGameSquare,
        onGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
