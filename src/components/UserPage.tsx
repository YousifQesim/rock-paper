// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import UserScore from "./UserScore";
import {
  setScore,
  setResultPage,
  resetGame,
  determineWinner,
  handleChoice,
} from "../redux/GameSlice";

import ChallengePage from "./ChallengePage";

function UserPage() {
  const dispatch = useDispatch();
  const { resultPage, score, playerChoice, computerChoice } = useSelector(
    (state: RootState) => state.game
  );

  const winner = useSelector(determineWinner);
  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
    dispatch(setResultPage(true));
    if (winner === "player") {
      dispatch(setScore(score + 1));
    } else if (winner === "computer") {
      dispatch(setScore(score - 1));
    }
  };

  return (
    <div className="h-screen ">
      {resultPage ? (
        <ChallengePage />
      ) : (
        <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore />
          <div className="w-2/4 h-1/4 flex justify-center gap-24 relative">
            {/* <div className="line1"></div> */}

            <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-indigo-600 z-50 ">
              <Paper />
            </div>
            {/* <div className="line2"></div> */}
            <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-yellow-500 z-50">

              <Scissors />
            </div>
            {/* <div className="line3"></div> */}

            <div className="bg-white cursor-pointer absolute -bottom-5 rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-red-600 z-50">
            <Rock />
            </div>
          </div>
        </div>
      )}
      <h1>{playerChoice}</h1>
      <h1>{computerChoice}</h1>
      <h1>{score}</h1>
      <h1>{winner}</h1>
    </div>
  );
}

export default UserPage;
