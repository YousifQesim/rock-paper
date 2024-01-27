// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import {useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import UserScore from "./UserScore";
import {

  determineWinner,

} from "../redux/GameSlice";



function UserPage() {

  const {  score, playerChoice, computerChoice } = useSelector(
    (state: RootState) => state.game
  );

  const winner = useSelector(determineWinner);
console.log(score)

  return (
    <div className="h-screen ">
      {/* {resultPage ? (
        <ChallengePage />
      ) : ( */}
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
      
      {/* } */}
      <h1>{score}</h1>
      <h1>{playerChoice}</h1>
      <h1>{computerChoice}</h1>
      <h1>{winner}</h1>
    </div>
  );
}

export default UserPage;
