[10/20/2026 7:03 AM] ❤️‍🩹🖤🐯: length) { alert("یاری ب دووماهی هات! ئاستێ تە گەلەک بەرز بوو. / Game Finished! Great Job!"); quizArea.classList.add("hidden"); return; }
const q = currentQuestions[qIndex];
qCount.innerText = `پرسیار / Question: ${qIndex + 1} / 10`;
questionText.innerText = q.q;
qImage.src = q.img;
optionsContainer.innerHTML = "";

q.options.forEach((opt, idx) => {
  const btn = document.createElement("button");
  btn.className = "opt-btn";
  btn.innerText = opt;
  btn.onclick = () => checkAnswer(idx);
  optionsContainer.appendChild(btn);
});

timeLeft = 20;
timerElem.innerText = ⏱️ ${timeLeft}s;
timer = setInterval(() => {
  timeLeft--;
  timerElem.innerText = ⏱️ ${timeLeft}s;
  if (timeLeft <= 0) {
    clearInterval(timer);
    qIndex++;
    loadQuestion();
  }
}, 1000);
}
function checkAnswer(selected) { clearInterval(timer); if (selected === currentQuestions[qIndex].correct) { alert("وەڵام دروستە! 🎯 / Correct Answer!"); } else { alert("وەڵام شاش بوو! ❌ / Wrong Answer!"); } qIndex++; loadQuestion(); }
if (btnCreateRoom) { btnCreateRoom.addEventListener("click", () => { customQuizSection.classList.remove("hidden"); quizArea.classList.add("hidden"); puzzleArea.classList.add("hidden"); }); }
document.getElementById("btnAddQuestion")?.addEventListener("click", () => { const qVal = document.getElementById("customQuestion").value; if (qVal) { document.getElementById("generatedCode").innerText = Math.floor(1000 + Math.random() * 9000); document.getElementById("roomCodeDisplay").classList.remove("hidden"); alert("پرسیارا تە ب سەرکەفتیانە تۆمار بوو! / Question Added!"); } });
if (btnPuzzleGame) { btnPuzzleGame.addEventListener("click", () => { puzzleArea.classList.remove("hidden"); quizArea.classList.add("hidden"); customQuizSection.classList.add("hidden"); initPuzzle(); }); }
function initPuzzle() { const board = document.getElementById("puzzleBoard"); board.innerHTML = ""; let numbers = [1, 2, 3, 4, 5, 6, 7, 8, ""].sort(() => Math.random() - 0.5); numbers.forEach((num) => { const tile = document.createElement("div"); tile.className = "puzzle-tile"; tile.innerText = num; board.appendChild(tile); }); } });
[10/20/2026 7:03 AM] ❤️‍🩹🖤🐯: // MitanXP - Professional IT Quiz & Gaming Logic
document.addEventListener("DOMContentLoaded", () => { // IT Questions Database with Images & Bilingual text (Badini & English) const defaultQuestions = [ { q: "ئەڤ ئامێرە چییە د ناڤ کۆمپیوتەری دا؟ / What is this IT Hardware component?", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format&fit=crop", options: ["پڕۆسێسەر (CPU / Processor)", "زاکۆک (RAM)", "دیپسک (SSD)"], correct: 0 }, { q: "کاتی زاکۆکا دەمەکی (Volatile Memory) چییە؟ / Identify the Volatile RAM memory:", img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&auto=format&fit=crop", options: ["هارد درایڤ (Hard Disk)", "زاکۆکا دەمەکی (RAM)", "فلاش میمۆری (USB Drive)"], correct: 1 }, { q: "ئەڤ ئامێرە بۆ چ مەرەم د تۆڕان (Networking) دا بکار تێت؟ / What is this Network Device?", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop", options: ["ڕاوتەر (Network Router / Switch)", "کۆمپیوتەر (PC)", "پرینتەر (Printer)"], correct: 0 }, { q: "سیستمێ بنکەدراوەیێ (Database) بۆ چ مەرەم بکار تێت؟ / What is Database used for?", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop", options: ["دیزاینکرنا وێنەیان", "پاشەکەوتکرنا داتایان (Data Storage)", "لێدانا موزیکێ"], correct: 1 }, { q: "فایروۆل (Firewall) و پاراستنا سایبەری (Cybersecurity) چییە؟", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop", options: ["سیستمێ پاراستنا تۆڕێ ژ هێرشان (Security)", "بەرنامێ وێنەکێشانێ", "سیستمێ دەنگی"], correct: 0 }, { q: "کۆدکرن و زمانێن بەرنامەسازیێ (Programming Languages):", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop", options: ["HTML / JavaScript / Python", "Microsoft Word", "Photoshop"], correct: 0 }, { q: "ئامێرێن گەیاندنێ و ئینتەرنێتێ (Internet & Cloud Computing):", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop", options: ["کلاود و ئینتەرنێت (Cloud & Global Network)", "سیدی (CD-ROM)", "فلاپی دیپسک"], correct: 0 }, { q: "مێشکا کۆمپیوتەری و حسابکرنا زانیاریان (Computer Processing Unit):", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop", options: ["سی پی یو (Microprocessor / CPU)", "کیبۆرد (Keyboard)", "ماوس (Mouse)"], correct: 0 }, { q: "سیستمێ کارپێکرنێ یێ سۆرس-ڤەکۆلی چییە؟ / Open-Source Operating System:", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&auto=format&fit=crop", options: ["لینۆکس (Linux OS)", "ویندۆز (Windows)", "مەک (macOS)"], correct: 0 }, { q: "پڕۆتۆکۆڵا ئاسایشا وێبسايتان (Secure Web Protocol) چییە؟", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop", options: ["HTTPS (Secure Web Standard)", "FTP", "Bluetooth"], correct: 0 } ];
let currentQuestions = [...defaultQuestions]; let qIndex = 0; let timer; let timeLeft = 20;
const btnQuickPlay = document.getElementById("btnQuickPlay"); const btnPuzzleGame = document.getElementById("btnPuzzleGame"); const btnCreateRoom = document.getElementById("btnCreateRoom"); const quizArea = document.getElementById("quizArea"); const puzzleArea = document.getElementById("puzzleArea"); const customQuizSection = document.getElementById("customQuizSection"); const qCount = document.getElementById("qCount"); const timerElem = document.getElementById("timer"); const questionText = document.getElementById("questionText"); const qImage = document.getElementById("qImage"); const optionsContainer = document.getElementById("optionsContainer");
if (btnQuickPlay) { btnQuickPlay.addEventListener("click", () => { quizArea.classList.remove("hidden"); puzzleArea.classList.add("hidden"); customQuizSection.classList.add("hidden");
  // Shuffle 10 questions randomly
  currentQuestions = [...defaultQuestions].sort(() => Math.random() - 0.5);
  qIndex = 0;
  loadQuestion();
});
}
function loadQuestion() { clearInterval(timer); if (qIndex >= 10 || qIndex >= currentQuestions.
