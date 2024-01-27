// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import rock from "../assets/images/icon-Rock.svg";


import {  useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";

import {
  setScore,
  setResultPage,
  determineWinner,
  handleChoice
} from "../redux/GameSlice";


function UserPage() {
  const dispatch = useDispatch();
  const { score} = useSelector(
    (state: RootState) => state.game
  );
  const winner = useSelector(determineWinner);

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
    dispatch(setResultPage(true));
    if (winner === 'player') {
      dispatch(setScore(score + 1));
    } else if (winner === 'computer') {
      dispatch(setScore(score - 1));
    }
  };
  return (
    <div
    className="bg-white cursor-pointer absolute -bottom-5 rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-red-600 z-50"
    onClick={() => handleChoiceClick("rock")}
  >
    <div className="flex items-center ">
      <img src={rock} alt="" />
    </div>
  </div>
  );
}

export default UserPage;
