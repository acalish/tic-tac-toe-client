'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  const gameBoard = ['', '', '', '', '', '', '', '', '']
  let currentPlayer = 'X'
  const checkWinner = function () {
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
      return true
    } else if (gameBoard[1] === gameBoard[2] && gameBoard[1] === gameBoard[3] && gameBoard[1] !== '') {
      return true
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
      return true
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
      return true
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
      return true
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
      return true
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
      return true
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
      return true
    } else {
      return false
    }
  }
  //
  $('.box').on('click', function (event) {
    console.log('you clicked', event.target.id)
    // replaces array index with X
    gameBoard.splice(event.target.id, 1, currentPlayer)
    console.log(gameBoard)
    // changes players between X and O
    if (currentPlayer === 'X') {
      $(event.target).text('X')
      currentPlayer = 'O'
    } else {
      $(event.target).text('O')
      currentPlayer = 'X'
    }
    checkWinner()
    console.log(checkWinner())
  })
})
