export default function BeginGame({ gameIsRunning, setGameIsRunning }) {
  console.log("Game begun!");
  console.log("gameisRunning is: ", gameIsRunning);
  setGameIsRunning(!gameIsRunning);
}
