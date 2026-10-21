// 20 Full IT Questions
const quizData = [
    { en: "What is considered the brain of the computer?", ku: "مێشکێ کۆمپیوتەری چییە؟", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600", options: ["CPU", "RAM", "HDD", "GPU"], correct: 0 },
    { en: "Which language is used for web styling?", ku: "کیش زمان بۆ دیزاینا وێبی هێتە بکارئینان؟", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600", options: ["Python", "CSS", "C++", "SQL"], correct: 1 },
    { en: "Volatile memory in PC?", ku: "کیش بیردانک ب چۆنا کارەبێ دادەمریت؟", img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600", options: ["SSD", "ROM", "RAM", "Flash"], correct: 2 },
    { en: "What does HTML stand for?", ku: "کورتکرنا HTML چییە؟", img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600", options: ["Hyper Text Markup Language", "High Tech Multi", "Hyper Transfer", "Home Tool"], correct: 0 },
    { en: "Open-source Operating System?", ku: "سیستەمێ کراوە کیژە؟", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600", options: ["Linux", "Windows", "MacOS", "iOS"], correct: 0 },
    { en: "Primary function of a Router?", ku: "ئەرکێ ڕاوتەری چییە؟", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", options: ["Storage", "Forward Data Packets", "Cooling", "Display"], correct: 1 },
    { en: "Secure protocol for browsing?", ku: "پڕۆتۆکۆڵێ پاریزراو بۆ وێبی؟", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
    { en: "SQL is used for?", ku: "SQL بۆ چی دهێتە بکارئینان؟", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600", options: ["Databases", "Audio", "Networks", "Graphics"], correct: 0 },
    { en: "Device converting digital to analog?", ku: "ئامێرا ئاماژەیا دیجیتاڵی دگوهۆڕیت؟", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", options: ["Modem", "Switch", "Hub", "Repeater"], correct: 0 },
    { en: "Python extension file?", ku: "پاشگرا فایلا پایتۆن؟", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600", options: [".py", ".html", ".js", ".cpp"], correct: 0 },
    { en: "Malware disguised as real software?", ku: "ڤایرۆسێ خۆ دکەتە وەک بەڕنامەکێ دروست؟", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600", options: ["Trojan Horse", "Spyware", "Adware", "Worm"], correct: 0 },
    { en: "Cloud Virtual Machines Model?", ku: "کیش جۆرێ عەورێ مەکینەیێن ڤێرچواڵ ددەت؟", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600", options: ["IaaS", "SaaS", "PaaS", "DaaS"], correct: 0 },
    { en: "Full form of RAM?", ku: "کورتکرنا RAM چییە؟", img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600", options: ["Random Access Memory", "Read Access", "Rapid Active", "Remote Access"], correct: 0 },
    { en: "IP stands for?", ku: "IP کورتکرنا چییە؟", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", options: ["Internet Protocol", "Internal Program", "Index Page", "Instant Packet"], correct: 0 },
    { en: "USB stands for?", ku: "USB کورتکرنا چییە؟", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", options: ["Universal Serial Bus", "Ultra Secure Block", "Unified System", "Utility Software"], correct: 0 },
    { en: "Main board in computer?", ku: "سەرەکیترین پلێتا کۆمپیوتەری؟", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600", options: ["Motherboard", "Keyboard", "Monitor", "CPU"], correct: 0 },
    { en: "Company making Windows?", ku: "کۆمپانیایا ویندۆز دروستکری؟", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600", options: ["Microsoft", "Apple", "Google", "IBM"], correct: 0 },
    { en: "GPU is used for?", ku: "GPU پتر بۆ چییە؟", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600", options: ["Graphics", "Text Typing", "Sound", "Printing"], correct: 0 },
    { en: "WIFI stands for?", ku: "WIFI کورتکرنا چییە؟", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", options: ["Wireless Fidelity", "Wired Finder", "Web Filter", "Wide Field"], correct: 0 },
    { en: "Default HTTP Port?", ku: "ژمارە پۆرتێ HTTP؟", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600", options: ["80", "443", "21", "25"], correct: 0 }
];

let currQIdx = 0;
let quizScore = 0;
let qTimer;
let qTimeLeft = 20;

function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-card').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if(el) el.classList.add('active');

    if (tabId === 'quiz-tab') restartQuiz();
    if (tabId === 'puzzle-tab') { initPuzzle(); startPuzzleClock(); }
}

function restartQuiz() {
    currQIdx = 0;
    quizScore = 0;
    document.getElementById('quiz-card-body').style.display = 'block';
    document.getElementById('quiz-result-screen').style.display = 'none';
    loadQ();
}

function loadQ() {
    clearInterval(qTimer);
    qTimeLeft = 20;
    document.getElementById('quiz-timer').textContent = qTimeLeft;
    document.getElementById('quiz-progress').textContent = `${currQIdx + 1} / 20`;

    if (currQIdx >= quizData.length) {
        document.getElementById('quiz-card-body').style.display = 'none';
        document.getElementById('quiz-result-screen').style.display = 'block';
        document.getElementById('final-score-text').textContent = `${quizScore} / 20`;
        return;
    }

    const q = quizData[currQIdx];
    document.getElementById('q-text-en').textContent = q.en;
    document.getElementById('q-text-ku').textContent = q.ku;
    document.getElementById('q-img').src = q.img;

    const optsDiv = document.getElementById('options-grid');
    optsDiv.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = opt;
        btn.onclick = () => answerQ(idx);
        optsDiv.appendChild(btn);
    });

    qTimer = setInterval(() => {
        qTimeLeft--;
        document.getElementById('quiz-timer').textContent = qTimeLeft;
        if (qTimeLeft <= 0) {
            clearInterval(qTimer);
            currQIdx++;
            loadQ(); // Auto advance if unanswered
        }
    }, 1000);
}

function answerQ(selected) {
    clearInterval(qTimer);
    if (selected === quizData[currQIdx].correct) quizScore++;
    currQIdx++;
    loadQ();
}

function joinQuizCode() {
    const code = document.getElementById('quiz-room-code').value;
    if(code) alert("تۆ تێکەڵی ژوورا [" + code + "] بی ب سەرکەفتیانە!");
}

// Puzzle 10 Stages & 10 Mins
let pStage = 1;
let pTimeLeft = 600;
let pClockInterval;

function startPuzzleClock() {
    clearInterval(pClockInterval);
    pClockInterval = setInterval(() => {
        if (pTimeLeft > 0) {
            pTimeLeft--;
            let m = Math.floor(pTimeLeft / 60);
            let s = pTimeLeft % 60;
            document.getElementById('puzzle-clock').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
        }
    }, 1000);
}

let pPieces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let pSelected = null;

function initPuzzle() {
    const board = document.getElementById('puzzle-board');
    if(!board) return;
    board.innerHTML = '';
    pPieces.sort(() => Math.random() - 0.5);

    pPieces.forEach((pos, idx) => {
        const piece = document.createElement('div');
        piece.className = 'p-piece';
        const x = (pos % 3) * 100;
        const y = Math.floor(pos / 3) * 100;
        piece.style.backgroundImage = 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=300")';
        piece.style.backgroundPosition = `-${x}px -${y}px`;
        piece.onclick = () => swapPiece(idx);
        board.appendChild(piece);
    });
}

function swapPiece(idx) {
    if (pSelected === null) {
        pSelected = idx;
    } else {
        let temp = pPieces[pSelected];
        pPieces[pSelected] = pPieces[idx];
        pPieces[idx] = temp;
        pSelected = null;
        renderP();
    }
}

function renderP() {
    const board = document.getElementById('puzzle-board');
    const pieces = board.children;
    pPieces.forEach((pos, idx) => {
        const x = (pos % 3) * 100;
        const y = Math.floor(pos / 3) * 100;
        pieces[idx].style.backgroundPosition = `-${x}px -${y}px`;
    });
}

function nextPuzzleStage() {
    if (pStage < 10) {
        pStage++;
        document.getElementById('puzzle-stage-num').textContent = `${pStage} / 10`;
        initPuzzle();
    } else {
        alert("پیرۆزە! تە 10 مەرحلەیێن پۆزلێ ب تەواوی خلاس کرن!");
        pStage = 1;
        pTimeLeft = 600;
        document.getElementById('puzzle-stage-num').textContent = `1 / 10`;
        initPuzzle();
    }
}

function joinPuzzleCode() {
    const code = document.getElementById('puzzle-room-code').value;
    if(code) alert("بەشداری د ڕکابەرییا پۆزلێ دا ب کۆدێ [" + code + "]");
}

function generateRoomCode() {
    const rId = document.getElementById('new-room-id').value;
    if(rId) {
        const info = document.getElementById('room-created-info');
        info.style.display = 'block';
        info.innerHTML = `<b>ژوور هاتە دروستکرن!</b> کۆدێ ژوورێ بۆ هەڤالان: <span style="color:var(--cyan-neon);">${rId}</span>`;
    }
}

window.onload = restartQuiz;
