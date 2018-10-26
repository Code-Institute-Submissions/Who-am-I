let personArray = ["Brad Pitt", "Beyonce", "Conor McGregor", "Usain Bolt"];

let correctAnswer = personArray[Math.floor(Math.random() * personArray.length)];

function checkAnswer() {
    if (answerform["answer"].value == correctAnswer) {
        document.getElementById("checkAnswer").innerHTML = "Correct";
    }
    else {
        document.getElementById("checkAnswer").innerHTML = "Incorrect";
    }
}

let allQuestions = [bpOne1, bpOne2, bpOne3, bpOne4, bpTwo1, bpTwo2, bpTwo3, bpTwo4, bpTwo5, bpThree1, bpThree2, bpThree3, bpThree4, bpThree5, bpFour1, bpFour2, bpFour3, bpFour4, bpFour5, bpFive1, bpFive2, bpFive3, bpFive4, bpFive5, bpSix1, bpSix2, bpSix3, bpSix4, bpSeven1, bpSeven2, bpSeven3, bpSeven4, bpSeven5, bpEight1, bpEight2, bpEight3, bpEight4, bpNine1, bpNine2, bpNine3, bpNine4, bpTen1, bpTen2, bpTen3, bpTen4, bOne1, bOne2, bOne3, bOne4, bTwo1, bTwo2, bTwo3, bTwo4, bTwo5, bThree1, bThree2, bThree3, bThree4, bThree5, bFour1, bFour2, bFour3, bFour4, bFour5, bFive1, bFive2, bFive3, bFive4, bFive5, bSix1, bSix2, bSix3, bSix4, bSix5, bSeven1, bSeven2, bSeven3, bSeven4, bSeven5, bEight1, bEight2, bEight3, bEight4, bEight5, bNine1, bNine2, bNine3, bNine4, bNine5, bTen1, bTen2, bTen3, bTen4, bTen5, cMcOne1, cMcOne2, cMcOne3, cMcOne4, cMcTwo1, cMcTwo2, cMcTwo3, cMcTwo4, cMcTwo5, cMcThree1, cMcThree2, cMcThree3, cMcThree4, cMcThree5, cMcFour1, cMcFour2, cMcFour3, cMcFour4, cMcFour5, cMcFive1, cMcFive2, cMcFive3, cMcFive4, cMcFive5, cMcSix1, cMcSix2, cMcSix3, cMcSix4, cMcSix5, cMcSeven1, cMcSeven2, cMcSeven3, cMcSeven4, cMcSeven5, cMcEight1, cMcEight2, cMcEight3, cMcEight4, cMcEight5, cMcNine1, cMcNine2, cMcNine3, cMcNine4, cMcNine5, cMcTen1, cMcTen2, cMcTen3, cMcTen4, cMcTen5, ubOne1, ubOne2, ubOne3, ubOne4, ubTwo1, ubTwo2, ubTwo3, ubTwo4, ubTwo5, ubThree1, ubThree2, ubThree3, ubThree4, ubThree5, ubFour1, ubFour2, ubFour3, ubFour4, ubFour5, ubFive1, ubFive2, ubFive3, ubFive4, ubFive5, ubSix1, ubSix2, ubSix3, ubSix4, ubSix5, ubSeven1, ubSeven2, ubSeven3, ubSeven4, ubSeven5, ubEight1, ubEight2, ubEight3, ubEight4, ubEight5, ubNine1, ubNine2, ubNine3, ubNine4, ubNine5, ubTen1, ubTen2, ubTen3, ubTen4, ubTen5];