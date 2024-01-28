import React from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {


  return (
    <div className="fixed inset-0 flex justify-center items-center ">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md "></div>

      {/* Popup Content */}
      <div className="bg-white p-8 rounded-lg z-10 relative">
        {/* Close button (X) */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Add your bonus rules content here */}
        <h2 className="text-2xl font-rockFamily font-700 mb-4 text-score uppercase">Rules</h2>
        <ul className="list-disc pl-4">
  
        <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Scissors beats Paper:</strong > Scissors cut Paper.</li>
    <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Paper beats Rock:</strong> Paper covers Rock.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Rock beats Lizard:</strong> Rock crushes Lizard.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Lizard beats Spock:</strong> Lizard poisons Spock.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Spock beats Scissors:</strong> Spock smashes Scissors.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Scissors beats Lizard:</strong> Scissors decapitate Lizard.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Paper beats Spock:</strong> Paper disproves Spock.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Rock beats Scissors:</strong> Rock crushes Scissors.</li>
      <li className="marker:text-scoreText font-rockFamily"><strong className="text-scoreText font-700">Lizard beats Paper:</strong> Lizard eats Paper.</li>
      <li className="marker:text-scoreText  font-rockFamily"><strong className="text-scoreText font-700">Spock beats Rock:</strong> Spock vaporizes Rock.</li>
      </ul>
<hr className="bg-score my-4 h-1 "/>
      <h2 className="text-2xl font-rockFamily font-700 mb-4 text-score uppercase">TIP</h2>
        <ul className="list-disc pl-4">
  
        <li className="marker:text-green-600 font-rockFamily"><strong className="text-green-600">Player Win:</strong> Score increase by 1.</li>
    <li className="marker:text-red-600 font-rockFamily"><strong className="text-red-600">Computer Win:</strong> Score decrease by 1.</li>
      <li className="marker:text-orange-600 font-rockFamily"><strong className="text-orange-600">Draw:</strong> Score remain as it is.</li>
      
      </ul>
      
      </div>
    </div>
  );










};
export default Popup;
