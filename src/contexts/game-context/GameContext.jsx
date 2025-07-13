import { useState } from "react";
import { createContext } from "react";
export const GameContext = createContext();

export default function GameProvider({ children }) {
  const HOLE = 0;
  const MOLE = 1;
  const SIDE_LENGTH = 3;
  const initMolePos = [
    randomIntInclusiveToExclusive(0, SIDE_LENGTH),
    randomIntInclusiveToExclusive(0, SIDE_LENGTH),
  ];
  const initGrid = createGrid(initMolePos);

  const [score, setScore] = useState(0);
  const [molePos, setMolePos] = useState(initMolePos);
  const [grid, setGrid] = useState(createGrid(initMolePos));
  const [gameIsRunning, setGameIsRunning] = useState(false);

  function isMole(data) {
    return data === MOLE;
  }

  function isHole(data) {
    return data === HOLE;
  }

  function generateMolePos(prevPos) {
    let newPos = prevPos;
    while (newPos[0] === prevPos[0] && newPos[1] === prevPos[1]) {
      const x = randomIntInclusiveToExclusive(0, SIDE_LENGTH),
        y = randomIntInclusiveToExclusive(0, SIDE_LENGTH);
      newPos = [x, y];
    }
    return newPos;
  }

  /* logic lovingly taken from https://dougschallmoser.medium.com/javascript-matrix-creation-3222c5113478 */
  function createGrid(molePos) {
    const grid = [];
    for (let i = 0; i < SIDE_LENGTH; i++) {
      grid[i] = [];
      for (let j = 0; j < SIDE_LENGTH; j++) {
        grid[i][j] = HOLE;
      }
    }
    grid[molePos[0]][molePos[1]] = MOLE;
    return grid;
  }

  function shuffleGrid() {
    const newPos = generateMolePos(molePos);
    setMolePos(newPos);
    const newGrid = createGrid(molePos);
    setGrid(newGrid);
  }

  function randomIntInclusiveToExclusive(min, max) {
    const range = max - min;
    return min + Math.floor(Math.random() * range);
  }

  const values = {
    score,
    setScore,
    grid,
    molePos,
    shuffleGrid,
    isMole,
    isHole,
    gameIsRunning,
    setGameIsRunning,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}
