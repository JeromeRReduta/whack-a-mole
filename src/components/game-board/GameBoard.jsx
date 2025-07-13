import { useContext } from "react";
import { GameContext } from "../../contexts/game-context/GameContext";
import "../../reset.css";
import "./game-board.css";

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
  return (
    <div className="mole" onClick={() => console.log("AAA")} id="mole"></div>
  );
}

function Hole() {
  return <div className="hole"></div>;
}
