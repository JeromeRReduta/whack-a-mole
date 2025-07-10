import { useContext } from "react";
import GameProvider, { GameContext } from "./contexts/game-context/GameContext";
import Square from "./square/Square";

export default function App() {
  return (
    <>
      <GameProvider>
        <Square pos={[0, 0]} />
      </GameProvider>
    </>
  );
}

function Test() {
  console.log(useContext(GameContext));

  return <div>AA</div>;
}
