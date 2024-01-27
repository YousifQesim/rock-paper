// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";

import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import UserScore from "./UserScore";
import { setScore,setComputerChoice,setPlayerChoice,setResultPage,resetGame} from "../redux/GameSlice";
import { useState } from "react";
import ChallengePage from "./ChallengePage";

const optoins=['rock','paper','scissors']



const determineWinner = (playerChoice: string, computerChoice: string): string => {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
};
function UserPage() {
  const dispatch=useDispatch();
  const { score, playerChoice, computerChoice,resultPage } = useSelector((state: RootState) => state.game);
  const handleChoice=(choice:string)=>{
    const computerChoice=optoins[Math.floor(Math.random()*3)]
    dispatch(setComputerChoice(computerChoice));
    const winner = determineWinner(choice, computerChoice);

    dispatch(setScore(score + (winner === 'player' ? 1 : winner === 'computer' ? -1 : 0)));

    // Show the result page after making a choice
  
    dispatch(setResultPage(true))
    dispatch(setPlayerChoice(choice));
  
  }
  return (
    <div className="h-screen ">
        { resultPage? (
        <ChallengePage playerChoice={playerChoice} computerChoice={computerChoice} winner={determineWinner(playerChoice, computerChoice)} />
      ) :(
      
      <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore/>
        <div className="w-2/4 h-1/4 flex justify-center gap-24 relative">
          {/* <div className="line1"></div> */}

          <div className="bg-white cursor-pointer rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-indigo-600 z-50 " onClick={() => handleChoice('paper')}>
            <div className="flex items-center">
              <img src={paper} alt="" />
            </div>
          </div>
          {/* <div className="line2"></div> */}
          <div className="bg-white cursor-pointer rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-yellow-500 z-50" onClick={() => handleChoice('scissors')}>
            <div className="flex items-center">
              <img src={scissors} alt="" />
            </div>
          </div>
          {/* <div className="line3"></div> */}
          <div className="bg-white cursor-pointer absolute -bottom-5 rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-red-600 z-50" onClick={() => handleChoice('rock')}>
            <div className="flex items-center ">
              <img src={rock} alt="" />
            </div>
          </div>
        </div>
      </div>)
    
}
    </div>
  );
}

export default UserPage;
