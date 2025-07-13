export default function ClickMole({ score, setScore, shuffleGrid }) {
  console.log("clicking mole");
  setScore(score + 1);
  console.log(`new score is: ${score}`);
  shuffleGrid();
}
