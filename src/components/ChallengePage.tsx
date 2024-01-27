// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import UserScore from "./UserScore";
import {determineWinner} from "../redux/GameSlice";
import { RootState } from "@/redux/Store";
import { useSelector } from "react-redux";
const ChallengePage = () => {

  const {  playerChoice, computerChoice,score} = useSelector((state: RootState) => state.game);
  const winner = useSelector(determineWinner);

  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore />
        <div className="w-2/4 h-1/4 flex justify-center gap-24 relative">
        <h1>{playerChoice}</h1>
        <h1>{computerChoice}</h1>
        <h1>{score}</h1>
        <h1>{winner}</h1>
        </div>
      </div>
    </div>
  );
}

export default ChallengePage;
