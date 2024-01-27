// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import UserScore from "./UserScore";

const ChallengePage: React.FC<{ playerChoice: string; computerChoice: string; winner: string }> = ({ playerChoice, computerChoice, winner }) => {


  return (
    <div className="h-screen ">
      <div className="flex flex-col  items-center  h-screen w-full">
          <UserScore />
        <div className="w-2/4 h-1/4 flex justify-center gap-24 relative">
        <h1>{winner}</h1>
        </div>
      </div>
    </div>
  );
}

export default ChallengePage;
