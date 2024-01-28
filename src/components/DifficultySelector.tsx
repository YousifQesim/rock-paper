// components/DifficultySelector.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, selectDifficulty } from '../redux/GameSlice';

const DifficultySelector = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(selectDifficulty);

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = event.target.value as 'easy' | 'medium' | 'hard';
    dispatch(setDifficulty(selectedDifficulty));
  };

  return (
    <div className="flex flex-col items-center mt-4">
      
      <select
        className="px-4 py-2  rounded-md focus:outline-none focus:border-blue-500 border border-score absolute bottom-4 left-4"
        value={difficulty}
        onChange={(event) => handleDifficultyChange(event)}
      >
        <option value=""  disabled selected className="text-black">Select Difficulty</option>
        <option value="easy" className="text-blue-500">Easy</option>
        <option value="medium" className="text-yellow-500">Medium</option>
        <option value="hard" className="text-red-500">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
