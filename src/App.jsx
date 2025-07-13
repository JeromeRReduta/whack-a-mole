import GameProvider, { GameContext } from "./contexts/game-context/GameContext";
import GameBoard from "./components/game-board/GameBoard";
import WelcomeScreen from "./components/welcome-screen/WelcomeScreen";
import { useContext } from "react";
import GameHeader from "./components/game-header/GameHeader";

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
  const game = (
    <>
      <GameHeader />
      <GameBoard />
    </>
  );
  const welcome = <WelcomeScreen />;
  return gameIsRunning ? game : welcome;
}
