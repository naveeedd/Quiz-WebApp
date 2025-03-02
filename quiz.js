const questions = [
    { q: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    { q: "What is 5+3?", options: ["7", "8", "9"], answer: "8" }
];

let currentIndex = 0;
let timeLeft = 20;
let timer;

document.getElementById("startQuiz").addEventListener("click", function() {
    document.getElementById("quizSection").classList.remove("hidden");
    loadQuestion();
    startTimer();
});

function startTimer() {
    timeLeft = 20;
    document.getElementById("timer").textContent = `${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("nextBtn").click();
        }
    }, 1000);
}

function loadQuestion() {
    document.getElementById("questionText").textContent = questions[currentIndex].q;
    let optionsHTML = "";
    questions[currentIndex].options.forEach(opt => {
        optionsHTML += `<button class="option bg-gray-300 p-2 m-1 rounded">${opt}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}

document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
        startTimer();
    } else {
        document.getElementById("submitQuiz").classList.remove("hidden");
    }
});
