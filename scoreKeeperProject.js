numberOfGames.value = 0
p1Score.value = 0
p2Score.value = 0

p1Score.innerText = p1Score.value
p2Score.innerText = p2Score.value

numberOfGames.addEventListener("change", function () {
   playingTo.innerText = "Playing to: " + numberOfGames.value
})

playerOneButton.addEventListener("click", function () {

   playToNumber = Number(numberOfGames.value)

   if (p1Score.value < playToNumber && p2Score.value < playToNumber) {
      p1Score.value++
      upDateScore()
   }
})

playerTwoButton.addEventListener("click", function () {

   playToNumber = Number(numberOfGames.value)

   if (p1Score.value < playToNumber && p2Score.value < playToNumber) {
      p2Score.value++
      upDateScore()
   }
})

resetButton.addEventListener("click", function () {
   p1Score.value = 0
   p2Score.value = 0
   p1Score.innerText = p1Score.value
   p2Score.innerText = p2Score.value
   p1Score.style.color = "black"
   p2Score.style.color = "black"
})

function upDateScore() {
   p1Score.innerText = p1Score.value
   p2Score.innerText = p2Score.value

   if ( p1Score.value === playToNumber || p2Score.value === playToNumber ) {
      if ( p1Score.value === playToNumber ) {
         p1Score.style.color = "green"
      }
      else { p2Score.style.color = "green" }
   }
}