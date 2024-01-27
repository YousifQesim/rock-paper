// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import UserScore from "./UserScore";
function UserPage() {
  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore />
        <div className="w-2/4 h-1/4 flex justify-center gap-24 relative">
          {/* <div className="line1"></div> */}

          <div className="bg-white rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-indigo-600 z-50">
            <div className="flex items-center">
              <img src={paper} alt="" />
            </div>
          </div>
          {/* <div className="line2"></div> */}
          <div className="bg-white rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-yellow-500 z-50">
            <div className="flex items-center">
              <img src={scissors} alt="" />
            </div>
          </div>
          {/* <div className="line3"></div> */}
          <div className="bg-white absolute -bottom-5 rounded-full h-20 w-20 flex justify-center items-center outline outline-8 outline-red-600 z-50">
            <div className="flex items-center ">
              <img src={rock} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
