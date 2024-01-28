import React from "react";

interface PopupButtonProps {
  onClick: () => void;
}

const PopupButton: React.FC<PopupButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
      onClick={onClick}
    >
      Show Rules
    </button>
  );
};

export default PopupButton;
