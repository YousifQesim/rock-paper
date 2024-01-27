// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import spock from "../assets/images/icon-spock.svg";

import { useDispatch } from "react-redux";

import { handleChoice } from "../redux/GameSlice";

function Spock() {
  const dispatch = useDispatch();

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };
  return (
    <div onClick={() => handleChoiceClick("spock")}>
      <div className="flex items-center">
        <img src={spock} alt="" className="h-12 w-12"/>
      </div>
    </div>
  );
}

export default Spock;
