let answer;

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    answer = randomNumber;
}

function checkAnswer() {
    let submittedAnswer = document.getElementsByTagName("input")[0].value;

    if (submittedAnswer == answer) {
        document.getElementById("correct-answer").classList.remove("hidden");
        generateRandomNumber();

        setTimeout(() => {
            document.getElementById("correct-answer").classList.add("hidden");
            document.getElementsByTagName("input")[0].value = "";
        }, 1000);

    } else {
        document.getElementById("wrong-answer").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("wrong-answer").classList.add("hidden");
        }, 2000);
    }
}