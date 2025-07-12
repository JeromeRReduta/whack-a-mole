import { useContext } from "react";
import { GameContext } from "../contexts/game-context/GameContext";

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

export function Mole() {
  return <div>M</div>;
}

export function Hole() {
  return <div>H</div>;
}

// export default function GameBoard() {
//   const { board } = useContext(GameContext);
//   return Array.from(board, (row, rowI) =>
//     Array.from(row, (data, colI) => (
//       <Square key={colI * (rowI + 1)} elem={data} />
//     ))
//   );
// }

// function Square({ elem }) {
//   const { isMole, handleClickMole } = useContext(GameContext);
//   const moleData = {
//     imgUrl: "mole.png",
//     name: "mole",
//     handleClick: handleClickMole,
//   };
//   const holeData = {
//     imgUrl: "hole.png",
//     name: "hole",
//   };
//   const data = isMole(elem) ? moleData : holeData;
//   return (
//     <img
//       height="100px"
//       width="100px"
//       src={data.imgUrl}
//       className={data.name}
//       alt={data.name}
//       onClick={data.handleClick}
//     />
//   );
// }
