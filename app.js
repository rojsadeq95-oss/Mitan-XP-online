[10/23/2026 8:05 PM] ❤️‍🩹🖤🐯: loadQuiz();
        }, 1300);
    };

    optionsGrid.appendChild(btn);
});
}
function restartQuiz() { currentQ = 0; score = 0; loadQuiz(); }
document.addEventListener("DOMContentLoaded", function() { loadQuiz(); });
[10/23/2026 8:05 PM] ❤️‍🩹🖤🐯: const quizData = [ { questionEn: "What does CPU stand for?", questionKu: "واتایا پەیڤا CPU چییە؟", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500", options: [ "Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit" ], correct: 0 }, { questionEn: "Which of the following is an Operating System?", questionKu: "کیش ژ ڤان سیستەمێ کارپێکرنێ یە (Operating System)؟", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500", options: ["HTML", "Windows 11", "HTTP", "CPU"], correct: 1 }, { questionEn: "What is the main function of RAM?", questionKu: "ئەرکێ سەرەکیی یێ زاکیرەیا RAM چییە؟", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500", options: [ "Permanent Storage (خەزنکرنا دەوامی)", "Temporary Memory (زاکیرەیا کاتی)", "Power Supply (دابینکرنا کارەبێ)", "Internet Connection (ئینتەرنێت)" ], correct: 1 } ];
let currentQ = 0; let score = 0; let answered = false;
function loadQuiz() { answered = false; const qImg = document.getElementById('q-img'); const qTextEn = document.getElementById('q-text-en'); const qTextKu = document.getElementById('q-text-ku'); const optionsGrid = document.getElementById('options-grid'); const progress = document.getElementById('quiz-progress');
if (!optionsGrid) return;

if (currentQ >= quizData.length) {
    optionsGrid.innerHTML = `
        <div style="text-align:center; padding:30px;">
            <h2 style="color: #ffc107; font-size: 1.8rem; margin-bottom: 15px;">🎉 تاقیکردن تەواو بوو!</h2>
            <p style="font-size: 1.2rem; color: #fff; margin-bottom: 20px;">نمرا تە: <span style="color: #00f2fe; font-weight: bold;">${score} / ${quizData.length}</span></p>
            <button onclick="restartQuiz()" style="padding: 12px 25px; background: linear-gradient(135deg, #00f2fe, #4facfe); border: none; border-radius: 10px; color: #000; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,242,254,0.4);">دووبارە دەستپێکرن / Restart</button>
        </div>
    `;
    return;
}

const currentItem = quizData[currentQ];

if (qImg) qImg.src = currentItem.image;
if (qTextEn) qTextEn.innerText = currentItem.questionEn;
if (qTextKu) qTextKu.innerText = currentItem.questionKu;
if (progress) progress.innerText = `Question: ${currentQ + 1} / ${quizData.length}`;

optionsGrid.innerHTML = '';
currentItem.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.style.cssText = "padding: 14px 18px; background: rgba(17, 24, 39, 0.95); border: 1px solid rgba(0, 242, 254, 0.4); color: #fff; border-radius: 10px; cursor: pointer; text-align: right; font-size: 1.05rem; width: 100%; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.3);";
    
    btn.onmouseover = () => {
        if(!answered) {
            btn.style.borderColor = "#00f2fe";
            btn.style.boxShadow = "0 0 10px rgba(0,242,254,0.4)";
        }
    };
    btn.onmouseout = () => {
        if(!answered) {
            btn.style.borderColor = "rgba(0, 242, 254, 0.4)";
            btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
        }
    };

    btn.onclick = function() {
        if (answered) return;
        answered = true;

        const allBtns = optionsGrid.querySelectorAll('button');
        if (index === currentItem.correct) {
            score++;
            btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            btn.style.borderColor = "#34d399";
            btn.style.boxShadow = "0 0 15px rgba(16, 185, 129, 0.6)";
        } else {
            btn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
            btn.style.borderColor = "#f87171";
            btn.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.6)";
            
            // نیشاندانا بەسڤا ڕاست
            allBtns[currentItem.correct].style.background = "linear-gradient(135deg, #10b981, #059669)";
            allBtns[currentItem.correct].style.borderColor = "#34d399";
        }

        setTimeout(() => {
            currentQ++;
