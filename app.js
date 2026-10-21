[10/21/2026 4:45 AM] ❤️‍🩹🖤🐯: alert('دەمی تە خلاس بوو!');
        closeModule();
    }
}, 1000);

window.nextLevel = () => {
    if (currentLevel < 10) {
        currentLevel++;
        document.getElementById('lvl-num').innerText = currentLevel;
    } else {
        alert('پێرۆزه! تە هەمی 10 مراحل خلاسکرن!');
        closeModule();
    }
};
}
// 3. Create Room (20 Questions, 4 Options, 20s Timer) function renderRoomModule(container) { container.innerHTML = <h2>👥 دروستکرنا ژوورێ (Create Room)</h2> <p>ژوورەکێ چێکە ب 20 پسیاران، 4 هەڵبژارتنان، و تایمەرێ 20 چڕکان!</p> <input type="text" placeholder="ناڤێ ژوورێ بنڤێسه..." class="input-field"> <button class="btn-action" style="background:#008a4c;" onclick="generateRoomCode()">دروستکرنا کۆدێ ژوورێ</button> <div id="room-code-result" style="margin-top:15px; font-weight:bold; color:#ffd700;"></div>;
window.generateRoomCode = () => {
    const code = "MX-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('room-code-result').innerHTML = `
        کۆدێ ژوورا تە دروست بوو: <span style="font-size:1.4rem; color:#00ff88;">${code}</span><br>
        <small>ئەڤ کۆدە بدە هەڤالێن خۆ دا ب ڕێکا موبایلێن خۆ بەشدار ببن!</small>
    `;
};
}
// 4. IT Images & Topics with Kurdish Badini & Video Shrove function renderGalleryModule(container) { container.innerHTML = ` <h2>🖼️ بەشێ وێنە و بابەتێن IT</h2> <p>ب کورتیا بادینی ب ڤیدیۆ و شۆڤەکرن ڕوونکریە:</p>
    <div style="margin-top:15px;">
        <div style="background:#151d2a; padding:12px; border-radius:10px; margin-bottom:10px;">
            <h4 style="color:#ffd700;">1. Software Engineering (ئەندازیاریا بوردسازی)</h4>
            <p>زانستێ دروستکرن و گەشەپێدانا پرۆگرام و ئەپڵیکەیشنان ب شێوازەکێ ئەکادیمی.</p>
            <div style="background:#000; height:120px; border-radius:8px; margin-top:8px; display:flex; align-items:center; justify-content:center;">
                ▶️ ڤیدیۆیا شۆڤەکرنا بابەتێ ئەندازیاریا بوردسازی
            </div>
        </div>

        <div style="background:#151d2a; padding:12px; border-radius:10px; margin-bottom:10px;">
            <h4 style="color:#ffd700;">2. Computer Networks (تۆڕێن کۆمپیوتەری)</h4>
            <p>پەیوەندیکرن دناڤبەرا ئامێرێن کۆمپیوتەری دا بۆ ئاڵوگۆڕکرنا داتایان.</p>
            <div style="background:#000; height:120px; border-radius:8px; margin-top:8px; display:flex; align-items:center; justify-content:center;">
                ▶️ ڤیدیۆیا شۆڤەکرنا تۆڕێن کۆمپیوتەری
            </div>
        </div>
    </div>
`;
}
[10/21/2026 4:45 AM] ❤️‍🩹🖤🐯: // Sample Questions Bank with Images const quizBank = [ { q: "کیش زمان ده ستپێکا گەشەپێدانا وێبێ یە؟ (Which is foundational for Web Dev?)", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400", options: ["HTML", "C++", "Python", "SQL"], ans: 0 }, { q: "Cyber Security د چ تشتیدا هاریکاریا مە دکەت؟", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", options: ["پاراستنا داتایان", "دروستکرنا هەوای", "چێکرنا وێنەیان", "هیچ ئێک"], ans: 0 } ];
let activeTimer = null;
function openModule(moduleType) { const modal = document.getElementById('app-modal'); const content = document.getElementById('modal-content'); modal.classList.remove('hidden');
if (moduleType === 'quiz') {
    renderQuizModule(content);
} else if (moduleType === 'puzzle') {
    renderPuzzleModule(content);
} else if (moduleType === 'room') {
    renderRoomModule(content);
} else if (moduleType === 'gallery') {
    renderGalleryModule(content);
}
}
function closeModule() { if (activeTimer) clearInterval(activeTimer); document.getElementById('app-modal').classList.add('hidden'); }
// 1. Quiz Game (10 Questions, 20s each, Restart Feature) function renderQuizModule(container) { let currentQ = 0; let timeLeft = 20;
function loadQuestion() {
    if (currentQ >= 10 || currentQ >= quizBank.length) {
        container.innerHTML = `
            <h2>🎉 یاری خلاس بوو!</h2>
            <p>تە هەمی پسیار بەرسڤدان.</p>
            <button class="btn-action" onclick="openModule('quiz')">دوبارە دەستپێکرن ب پسیارێن دی</button>
        `;
        return;
    }

    const qData = quizBank[currentQ];
    container.innerHTML = `
        <h2>🧠 یاریا زانیاریان (Question ${currentQ + 1}/10)</h2>
        <p>کۆدێ ژوورێ هەڤالان: <input type="text" placeholder="کۆد ل ڤێرە بنڤێسه..." class="input-field" style="width:150px; display:inline-block;"></p>
        <div style="text-align:center; margin:10px 0;">
            <img src="${qData.img}" style="max-width:100%; height:160px; border-radius:10px; object-fit:cover;">
        </div>
        <h3>${qData.q}</h3>
        <p style="color:#ffd700;">دەمی مەیاوی: <span id="q-timer">20</span> چڕکە</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:15px;">
            ￼{opt}</button>`).join('')}
        </div>
    `;

    timeLeft = 20;
    if (activeTimer) clearInterval(activeTimer);
    activeTimer = setInterval(() => {
        timeLeft--;
        const timerEl = document.getElementById('q-timer');
        if (timerEl) timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            nextQuiz();
        }
    }, 1000);
}

window.nextQuiz = () => {
    currentQ++;
    loadQuestion();
};

loadQuestion();
}
// 2. Puzzle Game (10 Levels, Overall 10 Minutes = 600s Timer) function renderPuzzleModule(container) { let currentLevel = 1; let totalTime = 600; // 10 minutes overall
container.innerHTML = `
    <h2>🧩 یاریا پۆزلێ (10 مراحل ب 10 خولەکان)</h2>
    <p>کۆدێ هەڤالان بۆ ڕکابەریێ: <input type="text" placeholder="کۆد..." class="input-field" style="width:140px; display:inline-block;"></p>
    <div style="background:#090e1a; padding:15px; border-radius:12px; margin-top:10px; text-align:center;">
        <p style="color:#ffd700; font-size:1.2rem;">تایمەرێ گشتی: <span id="puzzle-timer">10:00</span> خولەک</p>
        <p>مرحله: <span id="lvl-num">1</span> / 10</p>
        <div style="width:200px; height:200px; margin:15px auto; background:#1c2942; border:2px dashed #701ab8; display:flex; align-items:center; justify-content:center;">
            [ وێنەیێ پۆزلا مرحله 1 ]
        </div>
        <button class="btn-action" style="background:#701ab8;" onclick="nextLevel()">تەواوکرنا ڤێ مرحلەیێ ➔</button>
    </div>
`;

if (activeTimer) clearInterval(activeTimer);
activeTimer = setInterval(() => {
    totalTime--;
    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;
    const timerEl = document.getElementById('puzzle-timer');
    if (timerEl) timerEl.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (totalTime <= 0) {
        clearInterval(activeTimer);
