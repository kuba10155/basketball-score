const homeScore = document.querySelector('.home-score')
const guestScore = document.querySelector('.guest-score')
const homePlus1Btn = document.querySelector('.h-pl1-btn')
const homePlus2Btn = document.querySelector('.h-pl2-btn')
const homePlus3Btn = document.querySelector('.h-pl3-btn')
const guestPlus1Btn = document.querySelector('.g-pl1-btn')
const guestPlus2Btn = document.querySelector('.g-pl2-btn')
const guestPlus3Btn = document.querySelector('.g-pl3-btn')
let score = 0
let score2 = 0
homeScore.textContent = 0
guestScore.textContent = 0

homePlus1Btn.addEventListener("click", function(){
  score = add1P(score)
  homeScore.textContent = score
})

homePlus2Btn.addEventListener("click", function(){
  score = add2P(score)
  homeScore.textContent = score
})

homePlus3Btn.addEventListener("click", function(){
  score = add3P(score)
  homeScore.textContent = score
})

guestPlus1Btn.addEventListener("click", function(){
  score2 = add1P(score2)
  guestScore.textContent = score2
})

guestPlus2Btn.addEventListener("click", function(){
  score2 = add2P(score2)
  guestScore.textContent = score2
})

guestPlus3Btn.addEventListener("click", function(){
  score2 = add3P(score2)
  guestScore.textContent = score2
})

function add1P(score) {
  points = 1
  score += points
  return score
}

function add2P(score) {
  points = 2
  score += points
  return score
}

function add3P(score) {
  points = 3
  score += points
  return score
}
