let score = document.getElementById("sub-container");

let num=0

function scoreBoardOne(){
    let result = num+=1;
    score.textContent = result;
}

function scoreBoardTwo(){
    let result = num+=2;
    score.textContent = result;
}

function scoreBoardThree(){
    let result = num+=3;
    score.textContent = result;
}

let scoreTwo = document.getElementById("sub-container-two");

let num2=0

function scoreBoard1(){
    let result2 = num2+=1;
    scoreTwo.textContent = result2;
}

function scoreBoard2(){
    let result2 = num2+=2;
    scoreTwo.textContent = result2;
}

function scoreBoard3(){
    let result2 = num2+=3;
    scoreTwo.textContent = result2;
}