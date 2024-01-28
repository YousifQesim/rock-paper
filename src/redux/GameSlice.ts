// slices/gameSlice.ts
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "./Store";

// Function to load the score from local storage
const loadScoreFromLocalStorage = () => {
  const storedScore = localStorage.getItem("score");
  return storedScore ? parseInt(storedScore, 10) : 0;
};
export const selectDifficulty = (state: RootState) => state.game.difficulty;


interface GameState {
  score: number;
  playerChoice: string;
  computerChoice: string;
  resultPage: boolean;
  difficulty:string
}

const initialState: GameState = {
  score: loadScoreFromLocalStorage(),
  playerChoice: "",
  computerChoice: "",
  resultPage: false,
  difficulty:"medium"
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
      localStorage.setItem("score", action.payload.toString());
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
    setDifficulty: (state, action: PayloadAction<'easy' | 'medium' | 'hard'>) => {
      state.difficulty = action.payload;
    },
    resetGame: (state) => {
      state.playerChoice = "";
      state.computerChoice = "";
      state.resultPage = false;
      
    },
    
    handleChoice: (state, action: PayloadAction<string>) => {
      const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      const computerChoice =
      state.difficulty === 'easy'
        ? options[Math.floor(Math.random() * 3)] // Computer avoids 'lizard' and 'spock'
        : state.difficulty === 'medium'
        ? options[Math.floor(Math.random() * 4)] // Computer chooses randomly from all options
        : options[Math.floor(Math.random() * 5)]; // Computer chooses randomly from all options


      state.computerChoice = computerChoice;
      state.playerChoice = action.payload;

      const winner =
        state.playerChoice === state.computerChoice
          ? 'draw'
          : (
              (state.playerChoice === 'rock' && state.computerChoice === 'scissors') ||
              (state.playerChoice === 'paper' && state.computerChoice === 'rock') ||
              (state.playerChoice === 'scissors' && state.computerChoice === 'paper') ||
              (state.playerChoice === 'rock' && state.computerChoice === 'lizard') ||
              (state.playerChoice === 'lizard' && state.computerChoice === 'spock') ||
              (state.playerChoice === 'spock' && state.computerChoice === 'scissors') ||
              (state.playerChoice === 'scissors' && state.computerChoice === 'lizard') ||
              (state.playerChoice === 'lizard' && state.computerChoice === 'paper') ||
              (state.playerChoice === 'paper' && state.computerChoice === 'spock')
            )
          ? 'player'
          : 'computer';

       // Update the score based on the winner
       state.score = state.score + (winner === 'player' ? 1 : winner === 'computer' ? -1 : 0);
       // Save the updated score locally
       localStorage.setItem("score", state.score.toString());
      state.resultPage = true;
    },
  },
});

export const {
  setScore,
  setPlayerChoice,
  setComputerChoice,
  setResultPage,
  resetGame,
  handleChoice,
  setDifficulty
} = gameSlice.actions;

export const selectPlayerChoice = (state: RootState) => state.game.playerChoice;
export const selectComputerChoice = (state: RootState) => state.game.computerChoice;

export const determineWinner = createSelector(
  [selectPlayerChoice, selectComputerChoice],
  (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return 'draw';
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'rock' && computerChoice === 'lizard') ||
      (playerChoice === 'lizard' && computerChoice === 'spock') ||
      (playerChoice === 'spock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'lizard') ||
      (playerChoice === 'lizard' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'spock')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }
);

export default gameSlice.reducer;
