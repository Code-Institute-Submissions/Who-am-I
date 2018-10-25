let questionSelectSix = document.getElementById("questionSelectSix");
let q6 = [];

function creatingQuestionSixArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q6.push(allQuestions[i])
        }
    }
}

function getRandomQuestionSix(num) {
    let question6 = q6[Math.floor(Math.random() * q6.length)];
    if (document.getElementById("questionOne6").textContent != question6.question && document.getElementById("questionTwo6").textContent != question6.question && document.getElementById("questionThree6").textContent != question6.question) {
        document.getElementById("question" + num).textContent = question6.question;
    }
    else {
        getRandomQuestionSix(num);
    }
}
creatingQuestionSixArray(6);

function answerQuestionSix() {
    document.getElementById("hideQuestionFormSix").style.display="none"
    document.getElementById("showQuestionSix").style.display="block"
    document.getElementById("hideButtonSix").style.display="none"
    document.getElementById("displayQuestionSeven").style.display="block"
    if (questionSelectSix.options[questionSelectSix.selectedIndex].textContent == q6[0].question) {
        document.getElementById("answerSix").innerHTML = q6[0].answer;
        document.getElementById("showQuestionSix").innerHTML = q6[0].question;
    }
    else if (questionSelectSix.options[questionSelectSix.selectedIndex].textContent == q6[1].question) {
        document.getElementById("answerSix").innerHTML = q6[1].answer;
        document.getElementById("showQuestionSix").innerHTML = q6[1].question;
    }
    else if (questionSelectSix.options[questionSelectSix.selectedIndex].textContent == q6[2].question) {
        document.getElementById("answerSix").innerHTML = q6[2].answer;
        document.getElementById("showQuestionSix").innerHTML = q6[2].question;
    }
    else if (questionSelectSix.options[questionSelectSix.selectedIndex].textContent == q6[3].question) {
        document.getElementById("answerSix").innerHTML = q6[3].answer;
        document.getElementById("showQuestionSix").innerHTML = q6[3].question;
    }
    getRandomQuestionSeven("One7");
    getRandomQuestionSeven("Two7");
    getRandomQuestionSeven("Three7");
}
