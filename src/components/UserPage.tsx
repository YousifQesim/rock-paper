// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Lizard from "./Lizard";
import Spock from "./Spock";
import { useDispatch } from "react-redux";
import PopupButton from "./PopupButton";
import Popup from "./Popup";

import { handleChoice } from "../redux/GameSlice";

import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import UserScore from "./UserScore";
import { useState } from "react";


import ChallengePage from "./ChallengePage";
function UserPage() {
  const { resultPage } = useSelector((state: RootState) => state.game);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatch();
  
  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  
  return (
    <div className="h-screen ">
      {resultPage ? (
        <ChallengePage  />
      ) : (
        <div className="flex flex-col items-center h-screen w-full">
        <UserScore />
        <div className="md:w-2/4 w-full h-3/5 flex flex-col justify-center items-center gap-4 ">
          <div className=" relative top-4">

          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-paper "  onClick={() => handleChoiceClick("paper")}>
            <Paper />
          </div>
          </div>
          <div className=" flex lg:w-3/5 w-4/5 justify-around">

          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-scissors  " onClick={() => handleChoiceClick("scissors")}>
            <Scissors />
          </div>
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-rock  " onClick={() => handleChoiceClick("rock")}>
            <Rock />
          </div>
          </div>
          <div className=" flex lg:w-2/5 w-3/5 justify-around ">

          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-lizard " onClick={() => handleChoiceClick("lizard")}>
            <Lizard />
          </div>
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-cyan " onClick={() => handleChoiceClick("spock")}>
            <Spock />
          </div>
          </div>
        </div>
      </div>
      )}
      <div className={`flex flex-col items-center justify-center ${isPopupVisible ? 'overflow-hidden' : ''}`}>
      <PopupButton onClick={togglePopup} />
      {isPopupVisible && <Popup onClose={togglePopup} />}
    </div>
    </div>
  );
}

export default UserPage;
