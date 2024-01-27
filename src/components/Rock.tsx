// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import rock from "../assets/images/icon-rock.svg"

import { useDispatch } from "react-redux";

import { handleChoice } from "../redux/GameSlice";

function UserPage() {
  const dispatch = useDispatch();

  const handleChoiceClick = (choice: string) => {
    dispatch(handleChoice(choice));
  };
  return (
    <div onClick={() => handleChoiceClick("rock")}>
      <div className="flex items-center ">
        <img src={rock} alt="" className="h-16 w-16" />
      </div>
    </div>
  );
}

export default UserPage;
