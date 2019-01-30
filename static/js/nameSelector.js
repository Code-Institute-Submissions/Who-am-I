let personArray = ["Brad Pitt", "Beyonce", "Conor McGregor", "Usain Bolt"];
let answerform = document.getElementById("myForm");
let correctAnswer = personArray[Math.floor(Math.random() * personArray.length)];
let correctModal = document.getElementById('correctModal');
let incorrectModal = document.getElementById('incorrectModal');
let infoModal = document.getElementById("infoModal")
let span = document.getElementById("close");
let info = document.getElementById("info")
document.getElementById("correctAnswer").innerHTML = correctAnswer;

function infoBtn() {
    infoModal.style.display = "none";
    info.onclick = function(){ 
        infoModal.style.display = "block";
    }
    window.onclick = function(event) {
             if (event.target == infoModal) {
                infoModal.style.display = "none";
              }
            };
}

infoBtn()

function checkAnswer() {
    if (answerform.answer.value.toLowerCase() == correctAnswer.toLowerCase()) {
        correctModal.style.display = "block";
        window.onclick = function(event) {
             if (event.target == correctModal) {
                correctModal.style.display = "none";
              }
            };
    }
    else {
        incorrectModal.style.display = "block";
        span.onclick = function() {
            incorrectModal.style.display = "none";
            };
        window.onclick = function(event) {
             if (event.target == incorrectModal) {
                incorrectModal.style.display = "none";
              }
            };
    }
}


