const home = document.getElementById("score1")
var score1 = Number(home.textContent)

const away = document.getElementById("score2")
var score2 = Number(away.textContent)

const homeBtn1 = document.getElementById("btn-a")
const homeBtn2 = document.getElementById("btn-b")
const homeBtn3 = document.getElementById("btn-c")

const awayBtn1 = document.getElementById("btn-1")
const awayBtn2 = document.getElementById("btn-2")
const awayBtn3 = document.getElementById("btn-3")

const comment = document.getElementById("comment")

const endGame = document.getElementById("end-game")

homeBtn1.addEventListener('click', function() {
    score1 += 1
    home.textContent = score1
 })
 
homeBtn2.addEventListener('click', function() {
    score1 += 2
    home.textContent = score1
 })

homeBtn3.addEventListener('click', function() {
    score1 += 3
    home.textContent = score1
 })
 
 
 awayBtn1.addEventListener('click', function() {
    score2 += 1
    away.textContent = score2
 })
 
 awayBtn2.addEventListener('click', function() {
    score2 += 2
    away.textContent = score2
 })

 awayBtn3.addEventListener('click', function() {
    score2 += 3
    away.textContent = score2
 })

endGame.addEventListener('click', function() {
    if (score1 > score2) {
        comment.textContent = "HOME TEAM WINS"
    } else if (score1 === score2) {
        comment.textContent = "Match has been Cancelled"
    }
    else {
        comment.textContent = "AWAY TEAM WINS"
    }
    score1 = 0
    score2 = 0
    
    home.textContent = score1
    away.textContent = score1
})

