// ========================================== // ١. داتای پرسیارەکانی یاری زانیاری (Quiz) // ========================================== const quizData = [ { question: "CPU چییە؟", options: ["حافیزەی کاتی", "مێشکی کۆمپیوتەر", "شاشەی پیشاندان", "هارد دیسک"], correct: 1 }, { question: "کام لەمانە هەڵدەگرێتەوە بۆ هەڵگرتنی داتای هەمیشەیی؟", options: ["RAM", "CPU", "HDD", "GPU"], correct: 2 }, { question: "HTTP چییە؟", options: ["پڕۆتۆکۆڵی گواستنەوەی هایپەر تێکست", "جۆرێک لە ڤایرۆس", "زمانێکی پرۆگرامسازی", "سیستەمی کارپێکردن"], correct: 0 }, // تۆ دەتوانیت لێرەدا بیگەیهێنی بە ٢٠ پرسیار بە هەمان شێوە ];
let currentQuestionIndex = 0; let timeLeft = 20; let timerInterval; let score = 0;
// ========================================== // ٢. فەنکشنەکانی سەرەکی // ==========================================
function goHome() { clearInterval(timerInterval); document.getElementById('game-container').classList.add('hidden'); document.getElementById('quiz-section').classList.add('hidden'); document.getElementById('it-images-section').classList.add('hidden'); document.getElementById('main-menu').classList.remove('hidden'); }
function startQuiz() { document.getElementById('main-menu').classList.add('hidden'); document.getElementById('game-container').classList.remove('hidden'); document.getElementById('quiz-section').classList.remove('hidden');
currentQuestionIndex = 0;
score = 0;
loadQuestion();
}
function loadQuestion() { if (currentQuestionIndex >= quizData.length) { endQuiz(); return; }
document.getElementById('question-counter').innerText = `Question: ${currentQuestionIndex + 1}/${quizData.length}`;

const currentQuestion = quizData[currentQuestionIndex];
document.getElementById('question-text').innerText = currentQuestion.question;

const optionsContainer = document.getElementById('options-container');
optionsContainer.innerHTML = '';

currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
});

startTimer();
}
function startTimer() { clearInterval(timerInterval); timeLeft = 20; document.getElementById('timer').innerText = ⏱ Time: ${timeLeft}s;
timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = ⏱ Time: ${timeLeft}s;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        currentQuestionIndex++; 
        loadQuestion();
    }
}, 1000);
}
function checkAnswer(selectedIndex) { clearInterval(timerInterval);
if (selectedIndex === quizData[currentQuestionIndex].correct) {
    score++;
}

currentQuestionIndex++;
loadQuestion();
}
function endQuiz() { clearInterval(timerInterval); document.getElementById('quiz-section').innerHTML = <h2 style="text-align:center;">یاری تەواو بوو! 🎉</h2> <p style="text-align:center; font-size: 1.5rem; margin: 20px 0;">ئەنجام: ${score} لە ${quizData.length}</p> <button class="option-btn" style="width: 100%;" onclick="goHome()">گەڕانەوە بۆ مێنیو</button>; }
// ========================================== // ٣. بەشی وێنەکانی IT // ========================================== function showITImages() { document.getElementById('main-menu').classList.add('hidden'); document.getElementById('game-container').classList.remove('hidden'); document.getElementById('it-images-section').classList.remove('hidden'); }
// ========================================== // ٤. دروستکردنی ژوور (Room Code) // ========================================== function createRoom() { // دروستکردنی کۆدێکی ڕەندەم لە نێوان ١٠٠٠ بۆ ٩٩٩٩ const roomCode = Math.floor(1000 + Math.random() * 9000);
alert(`کۆدی ژوورەکەت دروستکرا: ${roomCode}\n\nئەم کۆدە بۆ هەڤاڵانت بنێرە بۆ ئەوەی پێوە بچنە ژوورەوە.`);

// لێرەدا دەتوانیت کۆدی پەیوەندیکردن بە داتابەیس (وەک Firebase) زیاد بکەیت لە داهاتوودا
}
// فەنکشنێکی کاتی بۆ پازڵ function startPuzzle() { alert("یاری پازڵ بەم زووانە زیاد دەکرێت! (Under Construction)"); }
