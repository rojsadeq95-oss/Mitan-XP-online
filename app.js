const quizData = [ { questionEn: "What does CPU stand for?", questionKu: "واتایا پەیڤا CPU چییە؟", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500", options: [ "Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit" ], correct: 0 }, { questionEn: "Which of the following is an Operating System?", questionKu: "کیش ژ ڤان سیستەمێ کارپێکرنێ یە (Operating System)؟", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500", options: ["HTML", "Windows 11", "HTTP", "CPU"], correct: 1 } ];
let currentQ = 0; let score = 0;
function loadQuiz() { const qImg = document.getElementById('q-img'); const qTextEn = document.getElementById('q-text-en'); const qTextKu = document.getElementById('q-text-ku'); const optionsGrid = document.getElementById('options-grid'); const progress = document.getElementById('quiz-progress');
if (!optionsGrid) return;

if (currentQ >= quizData.length) {
    optionsGrid.innerHTML = "<h3 style='color: #ffc107; text-align: center;'>تە تاقیکردن تەواو کر! / Quiz Completed!</h3>";
    return;
}

const currentItem = quizData[currentQ];

if (qImg) qImg.src = currentItem.image;
if (qTextEn) qTextEn.innerText = currentItem.questionEn;
if (qTextKu) qTextKu.innerText = currentItem.questionKu;
if (progress) progress.innerText = "Question: " + (currentQ + 1) + " / " + quizData.length;

optionsGrid.innerHTML = '';
currentItem.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.style.cssText = "padding: 12px; background: #111827; border: 1px solid #00f2fe; color: #fff; border-radius: 8px; cursor: pointer; text-align: right; font-size: 1rem; width: 100%;";
    
    btn.onclick = function() {
        if (index === currentItem.correct) {
            score++;
        }
        currentQ++;
        loadQuiz();
    };

    optionsGrid.appendChild(btn);
});
}
document.addEventListener("DOMContentLoaded", function() { loadQuiz(); });
