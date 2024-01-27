// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import paper from "../assets/images/icon-paper.svg";

import { useDispatch } from "react-redux";

import { handleChoice } from "../redux/GameSlice";

function UserPage() {
  const dispatch = useDispatch();

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };
  return (
    <div onClick={() => handleChoiceClick("paper")}>
      <div className="flex items-center">
        <img src={paper} alt="" className="h-16 w-16" />
      </div>
    </div>
  );
}

export default UserPage;
