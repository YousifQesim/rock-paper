// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
function UserScore() {
  const { score } = useSelector((state: RootState) => state.game);

  return (
    <div className="border-white border-solid border-2 rounded-lg text-white md:w-1/4 w-3/4 h-24 flex justify-between items-center mx-auto my-20">
      <div className="ml-4 font-rockFamily space-y-0 leading-4 uppercase font-700 ">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="mr-4 bg-white text-black p-2 w-24 rounded-xl text-center">
        <h1>score</h1>
        <h1 className="font-rockFamily font-700 text-4xl ">{score}</h1>
      </div>
    </div>
  );
}

export default UserScore;
