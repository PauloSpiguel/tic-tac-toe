import { createContext, useState } from "react";

export type PlayerProps = {
  nickname: string;
  name: string;
  score: number;
  age?: number;
  location?: string;
  occupation?: string;
  about?: string;
  avatar_url?: string;
};

interface PlayerContextData {
  player: PlayerProps;
  gameRoom: PlayerProps[];
  onSetGameRoom: (players: Object, cb: any) => void;
  onChangePlayer: (player: PlayerProps) => void;
  onAddPlayerRoom: (player: PlayerProps) => void;
  onUpdateScore: (player: PlayerProps) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

const PlayerContextProvider: React.FC = ({ children }) => {
  const [gameRoom, setGameRoom] = useState<PlayerProps[]>(() => {
    const data = localStorage.getItem("tic-tac-toe.gameRoom");

    const dataParsed = JSON.parse(data);

    return dataParsed || [];
  });
  const [player, setPlayer] = useState(() => {
    const data = localStorage.getItem("tic-tac-toe.gameRoom");

    const dataParsed = JSON.parse(data);

    if (dataParsed === null) return {};

    return dataParsed[0];
  });

  function onChangePlayer(player: PlayerProps) {
    setPlayer(() => {
      const nextPlayer = gameRoom
        .filter((p) => p.nickname !== player.nickname)
        .shift();

      return nextPlayer;
    });
  }

  function onAddPlayerRoom(data: PlayerProps) {
    setGameRoom((prevState) => {
      if (prevState.length < 2) {
        return [...prevState, data];
      }
    });
  }

  function onUpdateScore(player: PlayerProps) {
    const updatedPlayer = gameRoom.map((p) => {
      if (p.nickname === player.nickname) {
        return { ...p, score: p.score + 1 };
      }
      return p;
    });

    setGameRoom(updatedPlayer);
  }

  function onSetGameRoom(players: { [k: string]: PlayerProps }, callback: any) {
    const newRoom = [
      {
        ...players.player1,
        nickname: "cross",
        score: 0,
      },
      {
        ...players.player2,
        nickname: "circle",
        score: 0,
      },
    ];

    localStorage.setItem("tic-tac-toe.gameRoom", JSON.stringify(newRoom));

    setGameRoom(newRoom);

    setTimeout(() => {
      callback(true);
    }, 500);
  }

  return (
    <PlayerContext.Provider
      value={{
        player,
        gameRoom,
        onSetGameRoom,
        onChangePlayer,
        onAddPlayerRoom,
        onUpdateScore,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
