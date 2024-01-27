// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import UserScore from "./UserScore";

import ChallengePage from "./ChallengePage";

function UserPage() {
  const { resultPage } = useSelector((state: RootState) => state.game);

  return (
    <div className="h-screen ">
      {resultPage ? (
        <ChallengePage />
      ) : (
        <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore />
          <div className="md:w-2/4 w-full  h-2/5 flex justify-center gap-24 relative border-2 border-red-500">
            {/* <div className="line1"></div> */}

            <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-indigo-600 z-50 ">
              <Paper />
            </div>
            {/* <div className="line2"></div> */}
            <div className="bg-white cursor-pointer rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-yellow-500 z-50">
              <Scissors />
            </div>
            {/* <div className="line3"></div> */}

            <div className="bg-white cursor-pointer absolute md:bottom-3 bottom-14 rounded-full h-28 w-28 flex justify-center items-center outline outline-8 outline-red-600 z-50">
              <Rock />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
