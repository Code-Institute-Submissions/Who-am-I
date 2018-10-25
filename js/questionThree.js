let questionSelectThree = document.getElementById("questionSelectThree");
let q3 = [];

function creatingQuestionThreeArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            q3.push(allQuestions[i])
        }
    }
}

function getRandomQuestionThree(num) {
    let question3 = q3[Math.floor(Math.random() * q3.length)];
    if (document.getElementById("questionOne3").textContent != question3.question && document.getElementById("questionTwo3").textContent != question3.question && document.getElementById("questionThree3").textContent != question3.question) {
        document.getElementById("question" + num).textContent = question3.question;
    }
    else {
        getRandomQuestionThree(num);
    }
}
creatingQuestionThreeArray(3);

function answerQuestionThree() {
    document.getElementById("hideQuestionFormThree").style.display="none"
    document.getElementById("showQuestionThree").style.display="block"
    document.getElementById("hideButtonThree").style.display="none"
    document.getElementById("displayQuestionFour").style.display="block"

    if (questionSelectThree.options[questionSelectThree.selectedIndex].textContent == q3[0].question) {
        document.getElementById("answerThree").innerHTML = q3[0].answer;
        document.getElementById("showQuestionThree").innerHTML = q3[0].question;
    }
    else if (questionSelectThree.options[questionSelectThree.selectedIndex].textContent == q3[1].question) {
        document.getElementById("answerThree").innerHTML = q3[1].answer;
        document.getElementById("showQuestionThree").innerHTML = q3[1].question;
    }
    else if (questionSelectThree.options[questionSelectThree.selectedIndex].textContent == q3[2].question) {
        document.getElementById("answerThree").innerHTML = q3[2].answer;
        document.getElementById("showQuestionThree").innerHTML = q3[2].question;
    }
    else if (questionSelectThree.options[questionSelectThree.selectedIndex].textContent == q3[3].question) {
        document.getElementById("answerThree").innerHTML = q3[3].answer;
        document.getElementById("showQuestionThree").innerHTML = q3[3].question;
    }
    getRandomQuestionFour("One4");
    getRandomQuestionFour("Two4");
    getRandomQuestionFour("Three4");
}
