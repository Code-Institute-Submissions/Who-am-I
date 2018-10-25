let questionSelectFour = document.getElementById("questionSelectFour");
let q4 = [];

function creatingQuestionFourArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q4.push(allQuestions[i])
        }
    }
}

function getRandomQuestionFour(num) {
    let question4 = q4[Math.floor(Math.random() * q4.length)];
    if (document.getElementById("questionOne4").textContent != question4.question && document.getElementById("questionTwo4").textContent != question4.question && document.getElementById("questionThree4").textContent != question4.question) {
        document.getElementById("question" + num).textContent = question4.question;
    }
    else {
        getRandomQuestionFour(num);
    }
}
creatingQuestionFourArray(4);

function answerQuestionFour() {
    document.getElementById("hideQuestionFormFour").style.display="none"
    document.getElementById("showQuestionFour").style.display="block"
    document.getElementById("hideButtonFour").style.display="none"
    document.getElementById("displayQuestionFive").style.display="block"

    if (questionSelectFour.options[questionSelectFour.selectedIndex].textContent == q4[0].question) {
        document.getElementById("answerFour").innerHTML = q4[0].answer;
        document.getElementById("showQuestionFour").innerHTML = q4[0].question;
    }
    else if (questionSelectFour.options[questionSelectFour.selectedIndex].textContent == q4[1].question) {
        document.getElementById("answerFour").innerHTML = q4[1].answer;
        document.getElementById("showQuestionFour").innerHTML = q4[1].question;
    }
    else if (questionSelectFour.options[questionSelectFour.selectedIndex].textContent == q4[2].question) {
        document.getElementById("answerFour").innerHTML = q4[2].answer;
        document.getElementById("showQuestionFour").innerHTML = q4[2].question;
    }
    else if (questionSelectFour.options[questionSelectFour.selectedIndex].textContent == q4[3].question) {
        document.getElementById("answerFour").innerHTML = q4[3].answer;
        document.getElementById("showQuestionFour").innerHTML = q4[3].question;
    }
    getRandomQuestionFive("One5");
    getRandomQuestionFive("Two5");
    getRandomQuestionFive("Three5");
}
