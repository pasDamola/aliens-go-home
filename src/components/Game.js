import { useSelector } from "react-redux";

function Game() {
  const message = useSelector((state) => state.message);

  return <h1>{message}</h1>;
}

export default Game;
