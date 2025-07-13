import { useContext } from "react";
import "../../reset.css";
import "./game-header.css";
import { GameContext } from "../../contexts/game-context/GameContext";
import ResetGame from "../../use-cases/ResetGame";

export default function GameHeader() {
  const { score, setGameIsRunning, setScore } = useContext(GameContext);
  return (
    <header className="game-header">
      <h1 className="title">WHACK A MOLE</h1>
      <div>
        <p>Score: {score}</p>
        <button
          onClick={() =>
            ResetGame({
              setGameIsRunning: setGameIsRunning,
              setScore: setScore,
            })
          }
        >
          Reset
        </button>
      </div>
    </header>
  );
}
