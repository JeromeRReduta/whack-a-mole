import GameProvider, { GameContext } from "./contexts/game-context/GameContext";
import GameBoard from "./components/game-board/GameBoard";

export default function App() {
  return (
    <>
      <GameProvider>
        <GameBoard />
      </GameProvider>
    </>
  );
}
