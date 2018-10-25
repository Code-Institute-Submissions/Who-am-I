let questionSelectTwo = document.getElementById("questionSelectTwo");
let q2 = [];

function creatingQuestionTwoArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q2.push(allQuestions[i])
        }
    }
}

function getRandomQuestionTwo(num) {
    let question2 = q2[Math.floor(Math.random() * q2.length)];
    if (document.getElementById("questionOne2").textContent != question2.question && document.getElementById("questionTwo2").textContent != question2.question && document.getElementById("questionThree2").textContent != question2.question) {
        document.getElementById("question" + num).textContent = question2.question;
    }
    else {
        getRandomQuestionTwo(num);
    }
}
creatingQuestionTwoArray(2);

function answerQuestionTwo() {
    document.getElementById("hideQuestionFormTwo").style.display="none"
    document.getElementById("showQuestionTwo").style.display="block"
    document.getElementById("hideButtonTwo").style.display="none"
    document.getElementById("displayQuestionThree").style.display="block"
    
    if (questionSelectTwo.options[questionSelectTwo.selectedIndex].textContent == q2[0].question) {
        document.getElementById("answerTwo").innerHTML = q2[0].answer;
        document.getElementById("showQuestionTwo").innerHTML = q2[0].question;
    }
    else if (questionSelectTwo.options[questionSelectTwo.selectedIndex].textContent == q2[1].question) {
        document.getElementById("answerTwo").innerHTML = q2[1].answer;
        document.getElementById("showQuestionTwo").innerHTML = q2[1].question;
    }
    else if (questionSelectTwo.options[questionSelectTwo.selectedIndex].textContent == q2[2].question) {
        document.getElementById("answerTwo").innerHTML = q2[2].answer;
        document.getElementById("showQuestionTwo").innerHTML = q2[2].question;
    }
    else if (questionSelectTwo.options[questionSelectTwo.selectedIndex].textContent == q2[3].question) {
        document.getElementById("answerTwo").innerHTML = q2[3].answer;
        document.getElementById("showQuestionTwo").innerHTML = q2[3].question;
        allQuestions[13].locked = false;
    }
    getRandomQuestionThree("One3");
    getRandomQuestionThree("Two3");
    getRandomQuestionThree("Three3");
}
