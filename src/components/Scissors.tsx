// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import scissors from "../assets/images/icon-scissors.svg";

import { useDispatch } from "react-redux";

import { handleChoice } from "../redux/GameSlice";

function Scissors() {
  const dispatch = useDispatch();

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };
  return (
    <div onClick={() => handleChoiceClick("scissors")}>
      <div className="flex items-center">
        <img src={scissors} alt="" className="h-12 w-12"/>
      </div>
    </div>
  );
}

export default Scissors;
