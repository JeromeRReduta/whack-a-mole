export default function ClickMole({ score, setScore, shuffleGrid }) {
  setScore(score + 1);
  shuffleGrid();
}
