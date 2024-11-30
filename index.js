document.getElementById("home")
document.getElementById("away")

let homePoints = 0
let awayPoints = 0
let bothPoints = homePoints + awayPoints

function homebtn1() {
   homePoints += 1
  home.textContent = homePoints
   console.log(homePoints)
}

function homebtn2() {
   homePoints += 2
  home.textContent = homePoints
   console.log(homePoints)
}

function homebtn3() {
   homePoints += 3
  home.textContent = homePoints
   console.log(homePoints)
}

function awaybtn1() {
   awayPoints += 1
  away.textContent = awayPoints
   console.log(awayPoints)
}

function awaybtn2() {
   awayPoints += 2
  away.textContent = awayPoints
   console.log(awayPoints)
}

function awaybtn3() {
   awayPoints += 3
  away.textContent = awayPoints
   console.log(awayPoints)
}

function rst() {
   bothPoints = 0
   away.textContent = bothPoints
   home.textContent = bothPoints
   console.log(bothPoints)
}