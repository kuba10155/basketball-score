let homeScore = document.querySelector('.home-score')
let guestScore = document.querySelector('.guest-score')
let homePlus1Btn = document.querySelector('.h-pl1-btn')
let homePlus2Btn = document.querySelector('.h-pl2-btn')
let homePlus3Btn = document.querySelector('.h-pl3-btn')
let guestPlus1Btn = document.querySelector('.g-pl1-btn')
let guestPlus2Btn = document.querySelector('.g-pl2-btn')
let guestPlus3Btn = document.querySelector('.g-pl3-btn')
let points = 0
let score = 0
homeScore.textContent = 0
guestScore.textContent = 0

homePlus1Btn.addEventListener("click", function(){
  add1P()
  homeScore.textContent = score
})

homePlus2Btn.addEventListener("click", function(){
  add2P()
  homeScore.textContent = score
})

homePlus3Btn.addEventListener("click", function(){
  add3P()
  homeScore.textContent = score
})

guestPlus1Btn.addEventListener("click", function(){
  add1P()
  guestScore.textContent = score
})

guestPlus2Btn.addEventListener("click", function(){
  add2P()
  guestScore.textContent = score
})

guestPlus3Btn.addEventListener("click", function(){
  add3P()
  guestScore.textContent = score
})

function add1P() {
  points = 1
  score += points
}

function add2P() {
  points = 2
  score += points
}

function add3P() {
  points = 3
  score += points
}
