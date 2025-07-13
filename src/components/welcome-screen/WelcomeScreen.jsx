import { useContext } from "react";
import BeginGame from "../../use-cases/BeginGame";
import { GameContext } from "../../contexts/game-context/GameContext";

export default function WelcomeScreen() {
  const { gameIsRunning, setGameIsRunning } = useContext(GameContext);
  return (
    <header className="welcome-screen">
      <div>Welcome to Mole Game!</div>
      <button
        onClick={() =>
          BeginGame({
            gameIsRunning: gameIsRunning,
            setGameIsRunning: setGameIsRunning,
          })
        }
      >
        START
      </button>
    </header>
  );
}
