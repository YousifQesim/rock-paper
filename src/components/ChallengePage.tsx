import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/Store";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Lizard from "./Lizard";
import Spock from "./Spock";
import { determineWinner, resetGame, setResultPage } from "../redux/GameSlice";
import PopupButton from "./PopupButton";
import Popup from "./Popup";
import Spinner from "./Spinner";

// Import sound files
import winSound from "../assets/sounds/success-fanfare-trumpets-6185.mp3";
import loseSound from "../assets/sounds/violin-lose-5-185126.mp3";
import drawSound from "../assets/sounds/negative_beeps-6008.mp3";

const ChallengePage = () => {
  const { playerChoice, computerChoice, score } = useSelector(
    (state: RootState) => state.game
  );
  const winner = useSelector(determineWinner);
  const dispatch = useDispatch();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // Create audio elements
  const winAudio = new Audio(winSound);
  const loseAudio = new Audio(loseSound);
  const drawAudio = new Audio(drawSound);

  // Function to play the appropriate sound based on the game outcome
  const playSound = () => {
    if (winner === "player") {
      winAudio.play();
    } else if (winner === "computer") {
      loseAudio.play();
    } else {
      drawAudio.play();
    }
  };

  // Function to handle game reset
  const handleReset = () => {
    dispatch(resetGame());
    dispatch(setResultPage(false));
  };

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Function to render player's choice component
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
        return null;
    }
  };

  // Function to render computer's choice component
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
        return null;
    }
  };

  useEffect(() => {
    // Simulate loading for computer's choice (example with setTimeout)
    const timeoutId = setTimeout(() => {
      setLoading(false);
      playSound(); // Play the sound when the computer makes a choice
    }, 2000);

    // Cleanup the timeout on component unmount or whenever it's appropriate
    return () => clearTimeout(timeoutId);
  }, [computerChoice]);

  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center w-full ">
        <div className="border-white border-solid border-2 rounded-lg text-white md:w-1/4 w-3/4 h-24 flex justify-between items-center mx-auto my-20">
          <div className="ml-4 font-rockFamily space-y-0 leading-4 uppercase font-700">
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
            <h1>Lizard</h1>
            <h1>Spock</h1>
          </div>
          <div className="mr-4 bg-white text-black p-2 w-24 rounded-xl text-center">
            <h1 className="font-rockFamily font-700">Score</h1>
            {isLoading ? (
              <div>
                <h1 className="animate-pulse font-rockFamily font-700 text-4xl text-gray-600">...</h1>
              </div>
            ) : (
              <h1 className="font-rockFamily font-700 text-4xl text-gray-600 ">{score}</h1>
            )}
          </div>
        </div>

        <div className="md:w-2/4 w-full h-1/4 flex justify-center items-center gap-12 flex-wrap">
          <div className="flex flex-col justify-center items-center">
            <div className="my-8">
              <h1 className="text-white font-rockFamily font-600 text-xl">
                You picked
              </h1>
            </div>
            <div>{renderPlayerChoiceComponent()}</div>
          </div>

          {isLoading ? (
            <div className="order-last lg:order-none md:mx-12 lg:relative lg:left-6">
              <Spinner />
            </div>
          ) : (
            <div className="order-last lg:order-none md:mx-12">
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
          )}
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
