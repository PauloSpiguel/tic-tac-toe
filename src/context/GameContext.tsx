import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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

interface HistoryMatch {
  winner: Player;
}

interface GameContextData {
  gameSquare: string[];
  winner: Player;
  gameIsFinished: boolean;

  historyGames: HistoryMatch[];
  onGameSquare: (key: number) => void;
  onGameOver: () => void;
}

export const GameContext = createContext({} as GameContextData);

const GameContextProvider: React.FC = ({ children }) => {
  const [gameSquare, setGameSquare] = useState(INITIAL_STATE);
  const [historyGames, setHistoryGames] = useState<HistoryMatch[]>([]);
  const [winner, setWinner] = useState<Player>(null);
  const [gameIsFinished, setGameIsFinished] = useState<boolean>(false);

  const { player, onChangePlayer, onUpdateScore } = useContext(PlayerContext);

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

    newGameSquare[index] = player?.nickname;

    setGameSquare(newGameSquare);

    /*   localStorage.setItem(
      "tic-tac-toe.gameSquare",
      JSON.stringify(newGameSquare)
    ); */

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

  function onGameFinish() {
    setGameIsFinished(true);
  }

  function onResetGame() {
    setGameSquare(INITIAL_STATE);
    onChangePlayer(player);

    if (historyGames.length < 8) {
      setWinner(null);
    }
  }

  const onRecordGame = useCallback(
    (winner: Player) => {
      const newHistoryGames = [...historyGames];

      newHistoryGames.push({
        winner,
      });

      setHistoryGames(newHistoryGames);

      /*  localStorage.setItem(
        "tic-tac-toe.historyGames",
        JSON.stringify(newHistoryGames)
      ); */
    },
    [historyGames]
  );

  const checkCombination = (): void => {
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

    if (gameSquare.filter((item) => item === "").length === 0) {
      onRecordGame(null);

      notify.info("Draw!", {
        autoClose: 3000,
      });

      setTimeout(() => {
        onResetGame();
      }, 3000);
    } else {
      combinations.forEach((combination) => {
        const [a, b, c] = combination;

        if (
          gameSquare[a] &&
          gameSquare[a] === gameSquare[b] &&
          gameSquare[a] === gameSquare[c]
        ) {
          const currentWinner = player.name;

          setWinner(player);
          onUpdateScore(player);
          onRecordGame(player);

          notify.success(`Player ${currentWinner} won!`, {
            autoClose: 3000,
          });

          setTimeout(() => {
            onResetGame();
          }, 3000);
        }
      });
    }
  };

  useEffect(() => {
    checkCombination();
  }, [gameSquare, player]);

  useEffect(() => {
    if (historyGames.length > 8) {
      onGameFinish();
    }
  }, [historyGames]);

  /*   useEffect(() => {
    const gameHistoryStorage = localStorage.getItem("tic-tac-toe.historyGames");
    const gameSquareStorage = localStorage.getItem("tic-tac-toe.gameSquare");

    const parseHistoryData = JSON.parse(gameHistoryStorage);
    const parseSquareData = JSON.parse(gameSquareStorage);

    setHistoryGames(parseHistoryData || []);
    setGameSquare(parseSquareData || INITIAL_STATE);
  }, []); */

  return (
    <GameContext.Provider
      value={{
        winner,
        gameIsFinished,
        historyGames,
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
