// Quiz Data const quizData = [ { questionEn: "What does CPU stand for?", questionKu: "واتایا پەیڤا CPU چییە؟", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500", options: [ "Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit" ], correct: 0 }, { questionEn: "Which of the following is an Operating System?", questionKu: "کیش ژ ڤان سیستەمێ کارپێکرنێ یە (Operating System)؟", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500", options: ["HTML", "Windows 11", "HTTP", "CPU"], correct: 1 }, { questionEn: "What is the main function of RAM?", questionKu: "ئەرکێ سەرەکیی یێ زاکیرەیا RAM چییە؟", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500", options: [ "Permanent Storage (خەزنکرنا دەوامی)", "Temporary Memory (زاکیرەیا کاتی)", "Power Supply (دابینکرنا کارەبێ)", "Internet Connection (ئینتەرنێت)" ], correct: 1 } ];
let currentQ = 0; let score = 0; let timer; let timeLeft = 20;
function loadQuestion() { const cardBody = document.getElementById('quiz-card-body'); const resultScreen = document.getElementById('quiz-result-screen');
if (!cardBody) return;

if (currentQ >= quizData.length) {
    cardBody.style.display = 'none';
    resultScreen.style.display = 'block';
    document.getElementById('final-score-text').innerText = score + " / " + quizData.length;
    clearInterval(timer);
    return;
}

const q = quizData[currentQ];
const qImg = document.getElementById('q-img');
if (qImg) qImg.src = q.image;

document.getElementById('q-text-en').innerText = q.questionEn;
document.getElementById('q-text-ku').innerText = q.questionKu;
document.getElementById('quiz-progress').innerText = (currentQ + 1) + " / " + quizData.length;

const grid = document.getElementById('options-grid');
grid.innerHTML = '';

q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.style.cssText = "padding:12px; margin:5px; border-radius:8px; background:#111827; border:1px solid #00f2fe; color:#fff; cursor:pointer; width:100%; font-size:1rem;";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx);
    grid.appendChild(btn);
});

resetTimer();
}
function checkAnswer(idx) { if (idx === quizData[currentQ].correct) { score++; } currentQ++; loadQuestion(); }
function resetTimer() { clearInterval(timer); timeLeft = 20; const timerElem = document.getElementById('quiz-timer'); if (timerElem) timerElem.innerText = timeLeft;
timer = setInterval(() => {
    timeLeft--;
    if (timerElem) timerElem.innerText = timeLeft;
    if (timeLeft <= 0) {
        currentQ++;
        loadQuestion();
    }
}, 1000);
}
function restartQuiz() { currentQ = 0; score = 0; document.getElementById('quiz-card-body').style.display = 'block'; document.getElementById('quiz-result-screen').style.display = 'none'; loadQuestion(); }
function switchTab(tabId, element) { document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active')); document.querySelectorAll('.nav-card').forEach(c => c.classList.remove('active'));
const targetTab = document.getElementById(tabId);
if (targetTab) targetTab.classList.add('active');
if (element) element.classList.add('active');
}
// Initialize on Load document.addEventListener("DOMContentLoaded", () => { loadQuestion(); });
// Function to load questions directly function loadQuestion() { const cardBody = document.getElementById('quiz-card-body'); if (!cardBody) return;
const sampleQ = {
    questionEn: "What does CPU stand for?",
    questionKu: "واتایا پەیڤا CPU چییە؟",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"],
    correct: 0
};

const qImg = document.getElementById('q-img');
if (qImg) qImg.src = sampleQ.image;

const textEn = document.getElementById('q-text-en');
if (textEn) textEn.innerText = sampleQ.questionEn;

const textKu = document.getElementById('q-text-ku');
if (textKu) textKu.innerText = sampleQ.questionKu;

const grid = document.getElementById('options-grid');
if (grid) {
    grid.innerHTML = '';
    sampleQ.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.style.cssText = "padding:12px; margin:5px; border-radius:8px; background:#111827; border:1px solid #00f2fe; color:#fff; cursor:pointer; width:100%; font-size:1rem;";
        btn.innerText = opt;
        grid.appendChild(btn);
    });
}
}
// Automatically start when page is ready document.addEventListener("DOMContentLoaded", () => { loadQuestion(); });
