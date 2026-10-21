 <p>پەیوەندیکرن دناڤبەرا ئامێرێن کۆمپیوتەری دا بۆ ئاڵوگۆڕکرنا داتایان.</p>
            <div style="background:#000; height:120px; border-radius:8px; margin-top:8px; display:flex; align-items:center; justify-content:center; color:#aaa;">
                ▶️ ڤیدیۆیا شۆڤەکرنا تۆڕێن کۆمپیوتەری
            </div>
        </div>
    </div>
    <button class="btn-action" style="background:#555; margin-top:15px;" onclick="closeModule()">داخستن</button>
`;
}
// --- Service Worker (بۆ ئەوەی ئەپڵیکەیشنەکە وەک ئەپ کار بکات) --- if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err)); }
 // --- 1. Data & Variables --- const quizBank = [ { q: "کیش زمان ده ستپێکا گەشەپێدانا وێبێ یە؟ (Which is foundational for Web Dev?)", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400", options: ["HTML", "C++", "Python", "SQL"], ans: 0 }, { q: "Cyber Security د چ تشتیدا هاریکاریا مە دکەت؟", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", options: ["پاراستنا داتایان", "دروستکرنا هەوای", "چێکرنا وێنەیان", "هیچ ئێک"], ans: 0 } ];
let activeTimer = null; let currentLevel = 1;
// --- 2. Modal System (کردنەوە و داخستنی پەنجەرەکان) --- function openModule(moduleType) { const modal = document.getElementById('app-modal'); const content = document.getElementById('modal-content'); modal.classList.remove('hidden');
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
// --- 3. Quiz Game (یاریا پرسیاران) --- function renderQuizModule(container) { let currentQ = 0; let timeLeft = 20;
// کۆدەکەی تۆ بۆ یاریا پرسیاران لێرە تەواو نەبوو، من شێوازێکی سادەم بۆ داناوی
container.innerHTML = `
    <h2>❓ یاریا پرسیاران</h2>
    <p>ئەم بەشە هێشتا لە ژێر دروستکردندایە. بە زوویی پرسیارەکان زیاد دەکرێن.</p>
    <button class="btn-action" onclick="closeModule()">داخستن</button>
`;

// ئەگەر دەتەوێت کۆدەکەی خوارەوە بەکاربهێنیت، دەبێت دڵنیابیت لە HTMLـەکەتدا ئای دیێک هەیە
}
// --- 4. Puzzle Game (یاریا پازڵ) --- function renderPuzzleModule(container) { container.innerHTML = <h2>🧩 یاریا پازڵ (Level <span id="lvl-num">${currentLevel}</span>)</h2> <p>ئەم بەشە هێشتا لە ژێر دروستکردندایە.</p> <button class="btn-action" onclick="window.nextLevel()">ئاستێ دی</button> <button class="btn-action" style="background:#555;" onclick="closeModule()">داخستن</button>; }
window.nextLevel = () => { if (currentLevel < 10) { currentLevel++; document.getElementById('lvl-num').innerText = currentLevel; } else { alert('پێرۆزه! تە هەمی 10 ئاستان خلاسکرن!'); currentLevel = 1; // Reset closeModule(); } };
// --- 5. Create Room (دروستکرنا ژوورێ) --- function renderRoomModule(container) { container.innerHTML = <h2>👥 دروستکرنا ژوورێ (Create Room)</h2> <p>ژوورەکێ چێکە ب 20 پسیاران، 4 هەڵبژارتنان، و تایمەرێ 20 چڕکان!</p> <input type="text" placeholder="ناڤێ ژوورێ بنڤێسه..." class="input-field"> <button class="btn-action" style="background:#008a4c;" onclick="generateRoomCode()">دروستکرنا کۆدێ ژوورێ</button> <div id="room-code-result" style="margin-top:15px; font-weight:bold; color:#ffd700;"></div>; }
window.generateRoomCode = () => { const code = "MX-" + Math.floor(100000 + Math.random() * 900000); document.getElementById('room-code-result').innerHTML = کۆدێ ژوورا تە دروست بوو: <span style="font-size:1.4rem; color:#00ff88;">${code}</span><br> <small>ئەڤ کۆدە بدە هەڤالێن خۆ دا ب ڕێکا موبایلێن خۆ بەشدار ببن!</small>; };
// --- 6. IT Images & Topics (گالێری) --- function renderGalleryModule(container) { container.innerHTML = ` <h2>🖼 بەشێ وێنە و بابەتێن IT</h2> <p>ب کورتیا بادینی ب ڤیدیۆ و شۆڤەکرن ڕوونکریە:</p>
    <div style="margin-top:15px;">
        <div style="background:#151d2a; padding:12px; border-radius:10px; margin-bottom:10px;">
            <h4 style="color:#ffd700;">1. Software Engineering (ئەندازیاریا بوردسازی)</h4>
            <p>زانستێ دروستکرن و گەشەپێدانا پرۆگرام و ئەپڵیکەیشنان ب شێوازەکێ ئەکادیمی.</p>
            <div style="background:#000; height:120px; border-radius:8px; margin-top:8px; display:flex; align-items:center; justify-content:center; color:#aaa;">
                ▶️ ڤیدیۆیا شۆڤەکرنا بابەتێ ئەندازیاریا بوردسازی
            </div>
        </div>

        <div style="background:#151d2a; padding:12px; border-radius:10px; margin-bottom:10px;">
            <h4 style="color:#ffd700;">2. Computer Networks (تۆڕێن کۆمپیوتەری)</h4>
