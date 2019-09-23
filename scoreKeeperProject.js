numberOfGames.value = 0
playerOneScore.value = 0
playerTwoScore.value = 0

playerOneScore.innerText = playerOneScore.value
playerTwoScore.innerText = playerTwoScore.value
score.innerText = "-to-"
playingTo.innerText = "Playing to: " + numberOfGames.value

numberOfGames.addEventListener("mouseup", function () {
   playingTo.innerText = "Playing to: " + numberOfGames.value
})

playerOneButton.addEventListener("click", function () {

   playToNumber = Number(numberOfGames.value)

   if (playerOneScore.value < playToNumber && playerTwoScore.value < playToNumber) {
      playerOneScore.value++
      upDateScore()
   }
})

playerTwoButton.addEventListener("click", function () {

   playToNumber = Number(numberOfGames.value)

   if (playerOneScore.value < playToNumber && playerTwoScore.value < playToNumber) {
      playerTwoScore.value++
      upDateScore()
   }
})

resetButton.addEventListener("click", function () {
   playerOneScore.value = 0
   playerTwoScore.value = 0
   playerOneScore.innerText = playerOneScore.value
   playerTwoScore.innerText = playerTwoScore.value
   playerOneScore.style.color = "black"
   playerTwoScore.style.color = "black"
})

function upDateScore() {
   playerOneScore.innerText = playerOneScore.value
   playerTwoScore.innerText = playerTwoScore.value

   if ( playerOneScore.value === playToNumber || playerTwoScore.value === playToNumber ) {
      if ( playerOneScore.value === playToNumber ) {
         playerOneScore.style.color = "green"
      }
      else { playerTwoScore.style.color = "green" }
   }
}