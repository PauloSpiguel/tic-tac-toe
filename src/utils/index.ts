type Player = {
  name: string;
  score: number;
  nickname: string;
  [key: string]: any;
};

export function calcPercentageGame(game: any, player: Player) {
  const victories: number = game.filter(
    (g) => g?.winner?.nickname === player.nickname
  ).length;

  const losses: number = game.filter(
    (g) => g?.winner !== null && g?.winner?.nickname !== player.nickname
  ).length;

  const victoriesPercentage: number = (victories / game.length) * 100;
  const lossesPercentage: number = (losses / game.length) * 100;

  return {
    victories: Math.floor(victoriesPercentage || 0),
    losses: Math.floor(lossesPercentage || 0),
  };
}
