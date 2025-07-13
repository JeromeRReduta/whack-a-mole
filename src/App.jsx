import GameProvider, { GameContext } from "./contexts/game-context/GameContext";
import GameBoard from "./components/game-board/GameBoard";
import WelcomeScreen from "./components/welcome-screen/WelcomeScreen";
import { useContext } from "react";

export default function App() {
  return (
    <>
      <GameProvider>
        <HTML />
      </GameProvider>
    </>
  );
}

function HTML() {
  const { gameIsRunning } = useContext(GameContext);
  console.log("HTML: isRunning is:", gameIsRunning);

  return gameIsRunning ? <GameBoard /> : <WelcomeScreen />;
}
