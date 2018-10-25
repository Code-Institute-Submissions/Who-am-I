let questionSelectFive = document.getElementById("questionSelectFive");
let q5 = [];

function creatingQuestionFiveArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q5.push(allQuestions[i])
        }
    }
}

function getRandomQuestionFive(num) {
    let question5 = q5[Math.floor(Math.random() * q5.length)];
    if (document.getElementById("questionOne5").textContent != question5.question && document.getElementById("questionTwo5").textContent != question5.question && document.getElementById("questionThree5").textContent != question5.question) {
        document.getElementById("question" + num).textContent = question5.question;
    }
    else {
        getRandomQuestionFive(num);
    }
}
creatingQuestionFiveArray(5);

function answerQuestionFive() {
    document.getElementById("hideQuestionFormFive").style.display="none"
    document.getElementById("showQuestionFive").style.display="block"
    document.getElementById("hideButtonFive").style.display="none"
    document.getElementById("displayQuestionSix").style.display="block"
    
    if (questionSelectFive.options[questionSelectFive.selectedIndex].textContent == q5[0].question) {
        document.getElementById("answerFive").innerHTML = q5[0].answer;
        document.getElementById("showQuestionFive").innerHTML = q5[0].question;
    }
    else if (questionSelectFive.options[questionSelectFive.selectedIndex].textContent == q5[1].question) {
        document.getElementById("answerFive").innerHTML = q5[1].answer;
        document.getElementById("showQuestionFive").innerHTML = q5[1].question;
    }
    else if (questionSelectFive.options[questionSelectFive.selectedIndex].textContent == q5[2].question) {
        document.getElementById("answerFive").innerHTML = q5[2].answer;
        document.getElementById("showQuestionFive").innerHTML = q5[2].question;
    }
    else if (questionSelectFive.options[questionSelectFive.selectedIndex].textContent == q5[3].question) {
        document.getElementById("answerFive").innerHTML = q5[3].answer;
        document.getElementById("showQuestionFive").innerHTML = q5[3].question;
    }
    getRandomQuestionSix("One6");
    getRandomQuestionSix("Two6");
    getRandomQuestionSix("Three6");
}
