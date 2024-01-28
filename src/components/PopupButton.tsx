import React from "react";

interface PopupButtonProps {
  onClick: () => void;
}

const PopupButton: React.FC<PopupButtonProps> = ({ onClick }) => {
  return (
    <button
      className="border-2 border-white font-rockFamily font-700 text-white px-4 py-2 rounded focus:outline-none absolute bottom-4 right-4"
      onClick={onClick}
    >
      Show Rules
    </button>
  );
};

export default PopupButton;
