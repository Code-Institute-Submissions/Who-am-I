let allQuestions = [bpOne1, bpOne2, bpOne3, bpOne4, bpTwo1, bpTwo2, bpTwo3, bpTwo4, bpTwo5, bpThree1, bpThree2, bpThree3, bpThree4, bpThree5, bpFour1, bpFour2, bpFour3, bpFour4, bpFour5, bpFive1, bpFive2, bpFive3, bpFive4, bpFive5, bpSix1, bpSix2, bpSix3, bpSix4, bpSeven1, bpSeven2, bpSeven3, bpSeven4, bpSeven5, bpEight1, bpEight2, bpEight3, bpEight4, bpNine1, bpNine2, bpNine3, bpNine4, bpTen1, bpTen2, bpTen3, bpTen4, bOne1, bOne2, bOne3, bOne4, bTwo1, bTwo2, bTwo3, bTwo4, bTwo5, bThree1, bThree2, bThree3, bThree4, bThree5, bFour1, bFour2, bFour3, bFour4, bFour5, bFive1, bFive2, bFive3, bFive4, bFive5, bSix1, bSix2, bSix3, bSix4, bSeven1, bSeven2, bSeven3, bSeven4, bEight1, bEight2, bEight3, bEight4, bNine1, bNine2, bNine3, bNine4, bTen1, bTen2, bTen3, bTen4, cMcOne1, cMcOne2, cMcOne3, cMcOne4, cMcTwo1, cMcTwo2, cMcTwo3, cMcTwo4, cMcThree1, cMcThree2, cMcThree3, cMcThree4, cMcFour1, cMcFour2, cMcFour3, cMcFour4, cMcFive1, cMcFive2, cMcFive3, cMcFive4, cMcSix1, cMcSix2, cMcSix3, cMcSix4, cMcSeven1, cMcSeven2, cMcSeven3, cMcSeven4, cMcEight1, cMcEight2, cMcEight3, cMcEight4, cMcNine1, cMcNine2, cMcNine3, cMcNine4, cMcTen1, cMcTen2, cMcTen3, cMcTen4, ubOne1, ubOne2, ubOne3, ubOne4, ubTwo1, ubTwo2, ubTwo3, ubTwo4, ubThree1, ubThree2, ubThree3, ubThree4, ubFour1, ubFour2, ubFour3, ubFour4, ubFive1, ubFive2, ubFive3, ubFive4, ubSix1, ubSix2, ubSix3, ubSix4, ubSeven1, ubSeven2, ubSeven3, ubSeven4, ubEight1, ubEight2, ubEight3, ubEight4, ubNine1, ubNine2, ubNine3, ubNine4, ubTen1, ubTen2, ubTen3, ubTen4];

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
        if (allQuestions[i].order == num && allQuestions[i].person == correctAnswer) {
            arr.push(allQuestions[i]);
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
    document.getElementById("hideQuestionForm" + str).style.display="none";
    document.getElementById("showQuestion" + str).style.display="block";
    document.getElementById("hideButton" + str).style.display="none";
    document.getElementById("displayQuestion" + str2).style.display="block";
    
    for(let i=0;i<arr.length;i++){
        if (select.options[select.selectedIndex].textContent == arr[i].question) {
            document.getElementById("answer" + str).innerHTML = arr[i].answer;
            document.getElementById("showQuestion" + str).innerHTML = arr[i].question;
            break;
        } else {
            continue;
        }
    }
}

