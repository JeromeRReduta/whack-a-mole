import { useState } from "react";
import { createContext } from "react";

export const GameContext = createContext();
const defaultSideLength = 3;
const numRows = defaultSideLength;
const numCols = defaultSideLength;
const initBoard = Array.from({ length: numRows }, () =>
  Array.from({ length: numCols }, () => 0)
);

export default function GameProvider({ children }) {
  const [board, setBoard] = useState(initBoard);

  const score = useState(0);

  const [molePos, setMolePos] = useState([0, 0]);
  const handleClickMole = () => console.log("You clicked me!");

  const values = {
    board,
    setBoard,
    molePos,
    setMolePos,
    handleClickMole,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}
