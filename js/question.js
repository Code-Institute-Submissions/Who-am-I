let qOne = [];
let qTwo = [];
let qThree = [];
let qFour = [];
let qFive = [];
let qSix = [];
let qSeven = [];
let qEight = [];
let qNine = [];
let qTen = [];

function creatingQuestionArray(num, arr) {
    
    for (let i in allQuestions) {
        if (allQuestions[i].order == num && allQuestions[i].locked == false && allQuestions[i].person == correctAnswer) {
            arr.push(allQuestions[i])
        }
    }
}

function getRandomQuestion(str, str2, arr) {
    let question = arr[Math.floor(Math.random() * arr.length)];
    if (document.getElementById("questionOne" + str2).textContent != question.question && document.getElementById("questionTwo"+ str2).textContent != question.question && document.getElementById("questionThree" + str2).textContent != question.question) {
        document.getElementById("question" + str + str2).textContent = question.question;
    }
    else {
        getRandomQuestion(str, str2, arr);
    }
}
creatingQuestionArray(1, qOne);
getRandomQuestion("One", "One", qOne);
getRandomQuestion("Two", "One", qOne);
getRandomQuestion("Three", "One", qOne);

function answerQuestion(str, arr, select, str2) {
    document.getElementById("hideQuestionForm" + str).style.display="none"
    document.getElementById("showQuestion" + str).style.display="block"
    document.getElementById("hideButton" + str).style.display="none"
    document.getElementById("displayQuestion" + str2).style.display="block"
    for(i=0;i<arr.length;i++){
        if (select.options[select.selectedIndex].textContent == arr[i].question) {
            document.getElementById("answer" + str).innerHTML = arr[i].answer;
            document.getElementById("showQuestion" + str).innerHTML = arr[i].question;
            break;
        } else {
            continue;
        }
    }
}

