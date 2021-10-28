import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GameContextProvider from "./context/GameContext";
import PlayerContextProvider from "./context/PlayerContext";
import Routes from "./routers";

import "./styles/global.scss";

function App() {
  return (
    <PlayerContextProvider>
      <GameContextProvider>
        <Routes />;
        <ToastContainer />
      </GameContextProvider>
    </PlayerContextProvider>
  );
}

export default App;
