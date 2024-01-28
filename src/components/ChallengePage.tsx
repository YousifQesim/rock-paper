// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import UserScore from "./UserScore";
import { RootState } from "@/redux/Store";
import { useSelector, useDispatch } from "react-redux";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Lizard from "./Lizard";
import Spock from "./Spock";
import { determineWinner, resetGame, setResultPage } from "../redux/GameSlice";
import PopupButton from "./PopupButton";
import Popup from "./Popup";
import { useEffect, useState } from "react";

const ChallengePage = () => {
  const { playerChoice, computerChoice } = useSelector(
    (state: RootState) => state.game
  );
  const winner = useSelector(determineWinner);
  const dispatch = useDispatch();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const handleReset = () => {
    dispatch(resetGame());
    dispatch(setResultPage(false));
  };
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const renderPlayerChoiceComponent = () => {
    switch (playerChoice) {
      case "rock":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-rock  z-50">
            <Rock />
          </div>
        );

      case "paper":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-paper z-50">
            <Paper />
          </div>
        );
      case "scissors":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-scissors  z-50">
            <Scissors />
          </div>
        );
      case "lizard":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-lizard z-50">
            <Lizard />
          </div>
        );
      case "spock":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-cyan z-50">
            <Spock />
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
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-rock  z-50">
            <Rock />
          </div>
        );

      case "paper":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-paper z-50">
            <Paper />
          </div>
        );
      case "scissors":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-scissors  z-50">
            <Scissors />
          </div>
        );
      case "lizard":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-lizard z-50">
            <Lizard />
          </div>
        );
      case "spock":
        return (
          <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-cyan z-50">
            <Spock />
          </div>
        );

      default:
        return null; // Handle other cases or unexpected values
    }
  };
  useEffect(() => {
    // Simulate loading for computer's choice (example with setTimeout)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount or whenever it's appropriate
    return () => clearTimeout(timeoutId);
  }, [computerChoice]);
  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center w-full ">
        <UserScore />
        <div className="md:w-2/4 w-full h-1/4 flex justify-center items-center gap-12 flex-wrap">
          <div className="flex flex-col justify-center items-center">
            <div className="my-8">
              <h1 className="text-white font-rockFamily font-600 text-xl">
                You picked
              </h1>
            </div>
            <div>{renderPlayerChoiceComponent()}</div>
          </div>

          <div className="order-last lg:order-none md:mx-12 ">
            {winner ? (
              winner === "player" ? (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl uppercase">
                    You win
                  </h1>
                  <button
                    className="text-green-600 bg-white p-2 rounded-xl w-36 mt-2"
                    onClick={handleReset}
                  >
                    Play Again
                  </button>
                </div>
              ) : winner === "computer" ? (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl uppercase">
                    Computer wins
                  </h1>
                  <button
                    className="text-red-600 bg-white p-2 rounded-xl w-36 mt-2"
                    onClick={handleReset}
                  >
                    Play Again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white font-rockFamily font-700 text-2xl uppercase">
                    Draw
                  </h1>
                  <button
                    className="text-orange-400 bg-white p-2 rounded-xl w-36 mt-2"
                    onClick={handleReset}
                  >
                    Play Again
                  </button>
                </div>
              )
            ) : null}
          </div>
          {isLoading ? (
            <div className="flex flex-col justify-center items-center">
          
              <div className="my-8">
                <h1 className="text-white font-rockFamily font-600 text-xl">
                  Waiting House To pick...
                </h1>
              </div>
      
                <div className="  bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center border-12 border-gray-500 animate-pulse"></div>
          
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="my-8">
                <h1 className="text-white font-rockFamily font-600 text-xl">
                  The House picked
                </h1>
              </div>
              <div>{renderComputerChoiceComponent()}</div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${
          isPopupVisible ? "overflow-hidden" : ""
        }`}
      >
        <PopupButton onClick={togglePopup} />
        {isPopupVisible && <Popup onClose={togglePopup} />}
      </div>
    </div>
  );
};

export default ChallengePage;
