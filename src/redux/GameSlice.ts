// slices/gameSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  score: number;
  playerChoice: string;
  computerChoice: string;
  resultPage:boolean;
}

const initialState: GameState = {
  score: 0,
  playerChoice: '',
  computerChoice: '',
  resultPage: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setPlayerChoice: (state, action: PayloadAction<string>) => {
      state.playerChoice = action.payload;
    },
    setComputerChoice: (state, action: PayloadAction<string>) => {
      state.computerChoice = action.payload;
    },
    setResultPage: (state, action: PayloadAction<boolean>) => {
      state.resultPage = action.payload;
    },
    resetGame: (state) => {
      state.playerChoice = '';
      state.computerChoice = '';
      state.resultPage = false;
    },
  },
});

export const { setScore, setPlayerChoice, setComputerChoice,setResultPage, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
