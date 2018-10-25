let questionSelectSeven = document.getElementById("questionSelectSeven");
let q7 = [];

function creatingQuestionSevenArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q7.push(allQuestions[i])
        }
    }
}

function getRandomQuestionSeven(num) {
    let question7 = q7[Math.floor(Math.random() * q7.length)];
    if (document.getElementById("questionOne7").textContent != question7.question && document.getElementById("questionTwo7").textContent != question7.question && document.getElementById("questionThree7").textContent != question7.question) {
        document.getElementById("question" + num).textContent = question7.question;
    }
    else {
        getRandomQuestionSeven(num);
    }
}
creatingQuestionSevenArray(7);

function answerQuestionSeven() {
    document.getElementById("hideQuestionFormSeven").style.display="none"
    document.getElementById("showQuestionSeven").style.display="block"
    document.getElementById("hideButtonSeven").style.display="none"
    document.getElementById("displayQuestionEight").style.display="block"
    if (questionSelectSeven.options[questionSelectSeven.selectedIndex].textContent == q7[0].question) {
        document.getElementById("answerSeven").innerHTML = q7[0].answer;
        document.getElementById("showQuestionSeven").innerHTML = q7[0].question;
    }
    else if (questionSelectSeven.options[questionSelectSeven.selectedIndex].textContent == q7[1].question) {
        document.getElementById("answerSeven").innerHTML = q7[1].answer;
        document.getElementById("showQuestionSeven").innerHTML = q7[1].question;
    }
    else if (questionSelectSeven.options[questionSelectSeven.selectedIndex].textContent == q7[2].question) {
        document.getElementById("answerSeven").innerHTML = q7[2].answer;
        document.getElementById("showQuestionSeven").innerHTML = q7[2].question;
    }
    else if (questionSelectSeven.options[questionSelectSeven.selectedIndex].textContent == q7[3].question) {
        document.getElementById("answerSeven").innerHTML = q7[3].answer;
        document.getElementById("showQuestionSeven").innerHTML = q7[3].question;
    }
    getRandomQuestionEight("One8");
    getRandomQuestionEight("Two8");
    getRandomQuestionEight("Three8");
}
