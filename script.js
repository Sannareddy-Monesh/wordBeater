
const Words = ["nobly", "pallidy", "manfully", "turgidly", "blindly","obsequiously", 
                "cryptically", "impartially", "significantly", "unimaginably", 
                "condescendingly","noncomprehensively","grandiloquently","logogrammatically", 
                "Floccinaucinihilipilification","Hippopotomonstrosesquippedaliophobia" ,
                "Pneumonoultramicroscopicsilicovolcanoconiosis"
];


const word = document.querySelector(".word");
const input = document.querySelector("input");
const startBtn = document.querySelector(".start");
const tryAgainBtn = document.querySelector(".try-again");
const timerTag = document.querySelector(".timer");
const scoreTag = document.querySelector(".score");
const checkBtn = document.querySelector(".check-word");

let score = 0, currentWord = 0, Length = Words.length, timer;

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    input.focus();
    checkBtn.style.display = "inline";
    Game();
});

checkBtn.addEventListener("click", () => {
    const userInput = input.value;
    
    if (userInput == Words[currentWord]){
        score++; currentWord++;
        input.value = "";
        Game();
    }else {
        alert(`Oops! Recheck the word you typed once again, ${timerTag.innerHTML}`);
    }
    input.focus();
});

tryAgainBtn.addEventListener("click", () => {
    score = 0, currentWord = 0;
    tryAgainBtn.style.display = "none";
    checkBtn.style.display = "inline";
    Game();
})

const initTimer = (seconds) => {
    clearInterval(timer);

    timer = setInterval(() => {
        if (seconds == 0){
            checkBtn.style.display = "none";
            tryAgainBtn.style.display = "inline";
            alert("Time Up! Your Score is " + score);
            clearInterval(timer);
        }else {
            seconds--;
            timerTag.innerHTML = "Remaining Time : " + seconds;
        }
    }, 1000)
}

function Game(){
    initTimer(10);
    word.innerHTML = Words[currentWord];
    scoreTag.innerHTML = "Score : " + score;
}
















