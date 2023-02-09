import { useSelector } from "react-redux";
import Canvas from "./Canvas";

function Game() {
  const message = useSelector((state) => state.message);

  return <Canvas />;
}

export default Game;
