import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const message = useSelector((state) => state.message);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
