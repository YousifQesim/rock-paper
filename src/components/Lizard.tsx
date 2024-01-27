// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import lizard from "../assets/images/icon-lizard.svg";

import { useDispatch } from "react-redux";

import { handleChoice } from "../redux/GameSlice";

function Lizard() {
  const dispatch = useDispatch();

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };
  return (
    <div onClick={() => handleChoiceClick("lizard")}>
      <div className="flex items-center">
        <img src={lizard} alt="" className="h-12 w-12" />
      </div>
    </div>
  );
}

export default Lizard;
