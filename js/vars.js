// Create variables for use in our game.
var Game = {};

// Global game config
Game.config = {
  blackPlayerName: "Player 1",
  redPlayerName: "Player 2",
  startingPlayer: "black", // Choose 'black' or 'red'.
  takenMsg: "This position is already taken. Please make another choice.",
  drawMsg: "This game is a draw.",
  playerPrefix: "Current Player is: ",
  winPrefix: "The winner is: ",
  countToWin: 4,

  // note: board dimensions are zero-indexed
  boardLength: 6,
  boardHeight: 5,
};

// Global Game State
Game.board = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];

Game.currentPlayer = Game.config.startingPlayer;
