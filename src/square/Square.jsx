import { useContext } from "react";
import { GameContext } from "../contexts/game-context/GameContext";

const moleUrl = "/mole.png";
const holeUrl = "/hole.png";

export default function Square({ pos }) {
  const { molePos, handleClickMole } = useContext(GameContext);
  console.log("molepos", molePos);
  console.log("pos", pos);
  const isMole = molePos[0] === pos[0] && molePos[1] === pos[1];
  const data = isMole
    ? { src: moleUrl, name: "mole", onClick: handleClickMole }
    : { src: holeUrl, name: "hole" };
  console.log(isMole);
  return (
    <img
      width="100px"
      height="100px"
      src={data.src}
      className={data.name}
      onClick={data.onClick}
      alt={data.name}
    />
  );
}
