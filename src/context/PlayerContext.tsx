import { createContext, useState } from "react";

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

interface PlayerContextData {
  player: Player;
  gameRoom: Player[];
  onChangePlayer: (player: Player) => void;
  onAddPlayerRoom: (player: Player) => void;
}

const playersData: Player[] = [
  {
    nickname: "cross",
    name: "Paulo",
    score: 0,
  },
  {
    nickname: "circle",
    name: "John Doe",
    score: 0,
  },
];

export const PlayerContext = createContext({} as PlayerContextData);

const PlayerContextProvider: React.FC = ({ children }) => {
  const [gameRoom, setGameRoom] = useState<Player[]>(playersData);
  const [player, setPlayer] = useState(playersData[0] as Player);

  function onChangePlayer(player: Player) {
    setPlayer(() => {
      const nextPlayer = gameRoom
        .filter((p) => p.nickname !== player.nickname)
        .shift();

      return nextPlayer;
    });
  }

  function onAddPlayerRoom(data: Player) {
    setGameRoom((prevState) => {
      if (prevState.length < 2) {
        return [...prevState, data];
      }
    });
  }

  return (
    <PlayerContext.Provider
      value={{
        player,
        gameRoom,
        onChangePlayer,
        onAddPlayerRoom,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
