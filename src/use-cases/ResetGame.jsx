export default function ResetGame({ gameIsRunning, setGameIsRunning }) {
  console.log("Game reset!");
  setGameIsRunning(!gameIsRunning);
}
