let questionSelectNine = document.getElementById("questionSelectNine");
let q9 = [];

function creatingQuestionNineArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q9.push(allQuestions[i])
        }
    }
}

function getRandomQuestionNine(num) {
    let question9 = q9[Math.floor(Math.random() * q9.length)];
    if (document.getElementById("questionOne9").textContent != question9.question && document.getElementById("questionTwo9").textContent != question9.question && document.getElementById("questionThree9").textContent != question9.question) {
        document.getElementById("question" + num).textContent = question9.question;
    }
    else {
        getRandomQuestionNine(num);
    }
}
creatingQuestionNineArray(9);

function answerQuestionNine() {
     document.getElementById("hideQuestionFormNine").style.display="none"
    document.getElementById("showQuestionNine").style.display="block"
    document.getElementById("hideButtonNine").style.display="none"
    document.getElementById("displayQuestionTen").style.display="block"
    if (questionSelectNine.options[questionSelectNine.selectedIndex].textContent == q9[0].question) {
        document.getElementById("answerNine").innerHTML = q9[0].answer;
        document.getElementById("showQuestionNine").innerHTML = q9[0].question;
    }
    else if (questionSelectNine.options[questionSelectNine.selectedIndex].textContent == q9[1].question) {
        document.getElementById("answerNine").innerHTML = q9[1].answer;
        document.getElementById("showQuestionNine").innerHTML = q9[1].question;
    }
    else if (questionSelectNine.options[questionSelectNine.selectedIndex].textContent == q9[2].question) {
        document.getElementById("answerNine").innerHTML = q9[2].answer;
        document.getElementById("showQuestionNine").innerHTML = q9[2].question;
    }
    else if (questionSelectNine.options[questionSelectNine.selectedIndex].textContent == q9[3].question) {
        document.getElementById("answerNine").innerHTML = q9[3].answer;
        document.getElementById("showQuestionNine").innerHTML = q9[3].question;
    }
    getRandomQuestionTen("One10");
    getRandomQuestionTen("Two10");
    getRandomQuestionTen("Three10");
}
