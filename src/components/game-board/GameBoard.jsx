import { useContext } from "react";
import { GameContext } from "../../contexts/game-context/GameContext";
import "../../reset.css";
import "./game-board.css";
import ClickMole from "../../use-cases/ClickMole";

export default function GameBoard() {
  const { grid, isMole } = useContext(GameContext);

  return (
    <ul className="board">
      {Array.from(grid, (row, rowI) =>
        Array.from(row, (data, colI) =>
          isMole(data) ? (
            <Mole key={colI * (rowI + 1)} />
          ) : (
            <Hole key={colI * (rowI + 1)} />
          )
        )
      )}
    </ul>
  );
}

function Mole() {
  const { score, setScore, shuffleGrid } = useContext(GameContext);
  return (
    <div
      className="mole"
      onClick={() =>
        ClickMole({
          score: score,
          setScore: setScore,
          shuffleGrid: shuffleGrid,
        })
      }
      id="mole"
    ></div>
  );
}

function Hole() {
  return <div className="hole"></div>;
}
