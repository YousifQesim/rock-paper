// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import UserScore from "./UserScore";
import { RootState } from "@/redux/Store";
import { useSelector, useDispatch } from "react-redux";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import { determineWinner, resetGame, setResultPage } from "../redux/GameSlice";

const ChallengePage = () => {
  const { playerChoice, computerChoice } = useSelector(
    (state: RootState) => state.game
  );
  const winner = useSelector(determineWinner);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
    dispatch(setResultPage(false));
  };
  const renderPlayerChoiceComponent = () => {
    switch (playerChoice) {
      case "rock":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline  outline-8 outline-red-600 z-50 ">
            {" "}
            <Rock />{" "}
          </div>
        );

      case "paper":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-indigo-600 z-50 ">
            {" "}
            <Paper />{" "}
          </div>
        );
      case "scissors":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-yellow-500 z-50 ">
            {" "}
            <Scissors />{" "}
          </div>
        );
      default:
        return null; // Handle other cases or unexpected values
    }
  };
  const renderComputerChoiceComponent = () => {
    switch (computerChoice) {
      case "rock":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline  outline-8 outline-red-600 z-50 ">
            {" "}
            <Rock />{" "}
          </div>
        );
      case "paper":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-indigo-600 z-50 ">
            {" "}
            <Paper />{" "}
          </div>
        );
      case "scissors":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-yellow-500 z-50 ">
            {" "}
            <Scissors />{" "}
          </div>
        );

      default:
        return null; // Handle other cases or unexpected values
    }
  };
  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center  h-screen w-full">
        <UserScore />
        <div className="w-2/4 h-1/4 flex justify-center items-center gap-36 ">
          <div className="flex flex-col justify-center items-center">
            <div className="my-8">
              <h1 className="text-white font-rockFamily font-600 text-xl">You picked</h1>
            </div>
            <div>{renderPlayerChoiceComponent()}</div>
          </div>

          <div>

            {winner ? (
              winner === "player" ? (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl">You win</h1>
                  <button className="text-green-600 bg-white p-2 rounded-xl w-36 mt-2" onClick={handleReset}>
                    Play Again
                  </button>
                </div>
              ) : winner === "computer" ? (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl">Computer wins</h1>
                  <button className="text-red-600 bg-white p-2 rounded-xl w-36 mt-2" onClick={handleReset}>
                    Play Again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl">Draw</h1>
                  <button className="text-orange-400 bg-white p-2 rounded-xl w-36 mt-2" onClick={handleReset}>
                    Play Again
                  </button>
                </div>
              )
            ) : null}
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="my-8">
              <h1 className="text-white font-rockFamily font-600 text-xl">The House picked</h1>
            </div>
            <div>{renderComputerChoiceComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
