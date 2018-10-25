let questionSelectTen = document.getElementById("questionSelectTen");
let q10 = [];

function creatingQuestionTenArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q10.push(allQuestions[i])
        }
    }
}

function getRandomQuestionTen(num) {
    let question10 = q10[Math.floor(Math.random() * q10.length)];
    if (document.getElementById("questionOne10").textContent != question10.question && document.getElementById("questionTwo10").textContent != question10.question && document.getElementById("questionThree10").textContent != question10.question) {
        document.getElementById("question" + num).textContent = question10.question;
    }
    else {
        getRandomQuestionTen(num);
    }
}
creatingQuestionTenArray(10);

function answerQuestionTen() {
    document.getElementById("hideQuestionFormTen").style.display="none"
    document.getElementById("showQuestionTen").style.display="block"
    document.getElementById("hideButtonTen").style.display="none"
    if (questionSelectTen.options[questionSelectTen.selectedIndex].textContent == q10[0].question) {
        document.getElementById("answerTen").innerHTML = q10[0].answer;
        document.getElementById("showQuestionTen").innerHTML = q10[0].question;
    }
    else if (questionSelectTen.options[questionSelectTen.selectedIndex].textContent == q10[1].question) {
        document.getElementById("answerTen").innerHTML = q10[1].answer;
        document.getElementById("showQuestionTen").innerHTML = q10[1].question;
    }
    else if (questionSelectTen.options[questionSelectTen.selectedIndex].textContent == q10[2].question) {
        document.getElementById("answerTen").innerHTML = q10[2].answer;
        document.getElementById("showQuestionTen").innerHTML = q10[2].question;
    }
    else if (questionSelectTen.options[questionSelectTen.selectedIndex].textContent == q10[3].question) {
        document.getElementById("answerTen").innerHTML = q10[3].answer;
        document.getElementById("showQuestionTen").innerHTML = q10[3].question;
    }
  
}
