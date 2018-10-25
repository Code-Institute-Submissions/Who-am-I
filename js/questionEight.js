let questionSelectEight = document.getElementById("questionSelectEight");
let q8 = [];

function creatingQuestionEightArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q8.push(allQuestions[i])
        }
    }
}

function getRandomQuestionEight(num) {
    let question8 = q8[Math.floor(Math.random() * q8.length)];
    if (document.getElementById("questionOne8").textContent != question8.question && document.getElementById("questionTwo8").textContent != question8.question && document.getElementById("questionThree8").textContent != question8.question) {
        document.getElementById("question" + num).textContent = question8.question;
    }
    else {
        getRandomQuestionEight(num);
    }
}
creatingQuestionEightArray(8);

function answerQuestionEight() {
    document.getElementById("hideQuestionFormEight").style.display="none"
    document.getElementById("showQuestionEight").style.display="block"
    document.getElementById("hideButtonEight").style.display="none"
    document.getElementById("displayQuestionNine").style.display="block"
    if (questionSelectEight.options[questionSelectEight.selectedIndex].textContent == q8[0].question) {
        document.getElementById("answerEight").innerHTML = q8[0].answer;
        document.getElementById("showQuestionEight").innerHTML = q8[0].question;
    }
    else if (questionSelectEight.options[questionSelectEight.selectedIndex].textContent == q8[1].question) {
        document.getElementById("answerEight").innerHTML = q8[1].answer;
        document.getElementById("showQuestionEight").innerHTML = q8[1].question;
    }
    else if (questionSelectEight.options[questionSelectEight.selectedIndex].textContent == q8[2].question) {
        document.getElementById("answerEight").innerHTML = q8[2].answer;
        document.getElementById("showQuestionEight").innerHTML = q8[2].question;
    }
    else if (questionSelectEight.options[questionSelectEight.selectedIndex].textContent == q8[3].question) {
        document.getElementById("answerEight").innerHTML = q8[3].answer;
        document.getElementById("showQuestionEight").innerHTML = q8[3].question;
    }
    getRandomQuestionNine("One9");
    getRandomQuestionNine("Two9");
    getRandomQuestionNine("Three9");
}
