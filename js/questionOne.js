let questionSelectOne = document.getElementById("questionSelectOne");
let q1 = [];

function creatingQuestionOneArray(num) {
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            // console.log(allQuestions[i])
            q1.push(allQuestions[i])
        }
    }
}

function getRandomQuestionOne(num) {
    let question1 = q1[Math.floor(Math.random() * q1.length)];
    if (document.getElementById("questionOne1").textContent != question1.question && document.getElementById("questionTwo1").textContent != question1.question && document.getElementById("questionThree1").textContent != question1.question) {
        document.getElementById("question" + num).textContent = question1.question;
    }
    else {
        getRandomQuestionOne(num);
    }
}
creatingQuestionOneArray(1);
getRandomQuestionOne("One1");
getRandomQuestionOne("Two1");
getRandomQuestionOne("Three1");

function answerQuestionOne() {
    document.getElementById("hideQuestionFormOne").style.display="none"
    document.getElementById("showQuestionOne").style.display="block"
    document.getElementById("hideButtonOne").style.display="none"
    document.getElementById("displayQuestionTwo").style.display="block"

    
    // console.log(questionSelectOne.options[questionSelectOne.selectedIndex].textContent);
    if (questionSelectOne.options[questionSelectOne.selectedIndex].textContent == q1[0].question) {
        document.getElementById("answerOne").innerHTML = q1[0].answer;
        document.getElementById("showQuestionOne").innerHTML = q1[0].question;
    }
    else if (questionSelectOne.options[questionSelectOne.selectedIndex].textContent == q1[1].question) {
        document.getElementById("answerOne").innerHTML = q1[1].answer;
        document.getElementById("showQuestionOne").innerHTML = q1[1].question;
    }
    else if (questionSelectOne.options[questionSelectOne.selectedIndex].textContent == q1[2].question) {
        document.getElementById("answerOne").innerHTML = q1[2].answer;
        document.getElementById("showQuestionOne").innerHTML = q1[2].question;
    }
    else if (questionSelectOne.options[questionSelectOne.selectedIndex].textContent == q1[3].question) {
        document.getElementById("answerOne").innerHTML = q1[3].answer;
        document.getElementById("showQuestionOne").innerHTML = q1[3].question;
    }
    getRandomQuestionTwo("One2");
    getRandomQuestionTwo("Two2");
    getRandomQuestionTwo("Three2");
}
