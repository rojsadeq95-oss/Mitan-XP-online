
"use strict";

// ==========================================
// MitanXP — IT Educational Game
// English + Kurdish Badini
// ==========================================

const DEFAULT_QUESTIONS = [
  {
    en: "Which component is known as the brain of a computer?",
    ku: "کیش بەشێ کۆمپیوتەری دهێتە ژمارتن وەک مێشکێ وی؟",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    options: [
      "Central Processing Unit (CPU)",
      "Random Access Memory (RAM)",
      "Hard Disk Drive (HDD)",
      "Power Supply Unit (PSU)"
    ],
    correct: 0
  },
  {
    en: "Which language is used to style web pages?",
    ku: "کیش زمان دهێتە بکارئینان بۆ دیزاینکرنا مالپەڕان؟",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600",
    options: ["Python", "CSS", "C++", "SQL"],
    correct: 1
  },
  {
    en: "Which memory loses its data when power is turned off?",
    ku: "کیش بیردانک دەمێ کارەبا دچیت داتایێن خۆ ژ دەست ددەت؟",
    img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600",
    options: ["SSD", "ROM", "RAM", "Flash Drive"],
    correct: 2
  },
  {
    en: "What does HTML stand for?",
    ku: "HTML کورتکرنا چییە؟",
    img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600",
    options: [
      "Hyper Text Markup Language",
      "High Tech Multi Language",
      "Hyper Transfer Main Logic",
      "Home Tool Markup Level"
    ],
    correct: 0
  },
  {
    en: "Which of these is an open-source operating system?",
    ku: "کیش ژ ڤان سیستەمێن کارپێکرنێ یێ کراوەیە؟",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600",
    options: ["Linux", "MS Office", "Photoshop", "PowerPoint"],
    correct: 0
  },
  {
    en: "What is the main function of a router?",
    ku: "ئەرکێ سەرەکی یێ Router چییە؟",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
    options: [
      "Store files",
      "Forward data between networks",
      "Print documents",
      "Display images"
    ],
    correct: 1
  },
  {
    en: "Which protocol is used for secure web browsing?",
    ku: "کیش پڕۆتۆکۆڵ بۆ گەڕیانا پاراستی ل وێبێ دهێتە بکارئینان؟",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correct: 1
  },
  {
    en: "What does SQL stand for?",
    ku: "SQL کورتکرنا چییە؟",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
    options: [
      "Structured Query Language",
      "Simple Quick Logic",
      "System Quality Level",
      "Sequential Query List"
    ],
    correct: 0
  },
  {
    en: "Which device converts digital and analog signals?",
    ku: "کیش ئامێر ئاماژەیێن دیجیتاڵی و ئەنالۆگ دگوهۆڕیت؟",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    options: ["Modem", "Switch", "Monitor", "Keyboard"],
    correct: 0
  },
  {
    en: "Which file extension is used for Python scripts?",
    ku: "پاشگرێ فایلێن Python چییە؟",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
    options: [".py", ".html", ".cpp", ".jpg"],
    correct: 0
  },
  {
    en: "Which malware disguises itself as legitimate software?",
    ku: "کیش جۆرێ malware خۆ وەک بەڕنامەیەکا ڕاستەقینە نیشان ددەت؟",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600",
    options: ["Trojan Horse", "Adware", "Firewall", "Cookie"],
    correct: 0
  },
  {
    en: "Which cloud service provides virtual machines?",
    ku: "کیش جۆرێ خزمەتگوزاریا Cloud مەکینەیێن ڤێرچواڵ دابین دکەت؟",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    options: ["IaaS", "SaaS", "PaaS", "SMTP"],
    correct: 0
  },
  {
    en: "What does CPU stand for?",
    ku: "CPU کورتکرنا چییە؟",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    options: [
      "Central Processing Unit",
      "Computer Personal Utility",
      "Central Program Upload",
      "Control Power Unit"
    ],
    correct: 0
  },
  {
    en: "Which HTML tag creates a hyperlink?",
    ku: "کیش تاگە ل HTML پەیوەندییەکێ دروست دکەت؟",
    img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600",
    options: ["<a>", "<p>", "<h1>", "<img>"],
    correct: 0
  },
  {
    en: "Which device connects multiple devices in a LAN?",
    ku: "کیش ئامێر چەند ئامێران د ناڤ تۆڕەکا LAN دا پەیوەند دکەت؟",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
    options: ["Switch", "Printer", "Scanner", "Speaker"],
    correct: 0
  },
  {
    en: "What is the primary purpose of a firewall?",
    ku: "ئەرکێ سەرەکی یێ Firewall چییە؟",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
    options: [
      "Protect and filter network traffic",
      "Increase screen brightness",
      "Edit photos",
      "Create presentations"
    ],
    correct: 0
  },
  {
    en: "Which of these is a database management system?",
    ku: "کیش ژ ڤان سیستەمەکێ بەڕێڤەبرنا داتابەیسێیە؟",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
    options: ["MySQL", "HTML", "CSS", "JPEG"],
    correct: 0
  },
  {
    en: "Which language is commonly used for AI and data science?",
    ku: "کیش زمان ب گشتی بۆ AI و زانستا داتایان دهێتە بکارئینان؟",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    options: ["Python", "HTML", "CSS", "XML"],
    correct: 0
  },
  {
    en: "What is the full form of URL?",
    ku: "URL کورتکرنا چییە؟",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600",
    options: [
      "Uniform Resource Locator",
      "Universal Record Link",
      "User Route Language",
      "Unified Remote Login"
    ],
    correct: 0
  },
  {
    en: "Which unit is commonly used to measure computer storage?",
    ku: "کیش یەکە بۆ پێڤانا شوێنێ هەڵگرتنا داتایان دهێتە بکارئینان؟",
    img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600",
    options: ["Byte", "Meter", "Liter", "Volt"],
    correct: 0
  }
];

const QUESTION_KEY = "mitanxp_custom_questions_v1";
const ROOM_KEY = "mitanxp_room_questions_v1";

let fullQuizData = [...DEFAULT_QUESTIONS];
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
let answered = false;

let puzzlePieces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let selectedPiece = null;

const $ = (id) => document.getElementById(id);

// Safe local storage helpers
function readStorage(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Load saved custom questions
function loadSavedQuestions() {
  const saved = readStorage(QUESTION_KEY, []);

  if (!Array.isArray(saved)) return;

  saved.forEach((q) => {
    if (
      q &&
      typeof q.en === "string" &&
      typeof q.ku === "string" &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      Number.isInteger(q.correct) &&
      q.correct >= 0 &&
      q.correct < 4
    ) {
      fullQuizData.push({
        en: q.en,
        ku: q.ku,
        img: q.img || "",
        options: q.options,
        correct: q.correct
      });
    }
  });
}

// Switch tabs without relying on the global event object
function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.toggle("active", tab.id === tabId);
  });

  document.querySelectorAll(".nav-btn").forEach((button) => {
    const inlineAction = button.getAttribute("onclick") || "";
    button.classList.toggle(
      "active",
      inlineAction.includes(`'${tabId}'`) ||
      inlineAction.includes(`"${tabId}"`)
    );
  });

  if (tabId === "quiz-tab") startQuiz();
  if (tabId === "puzzle-tab") initPuzzle();
}

// Quiz
function startQuiz() {
  clearInterval(timer);

  currentQuestions = shuffle(fullQuizData);
  currentIndex = 0;
  score = 0;
  answered = false;

  if ($("quiz-box")) $("quiz-box").style.display = "block";
  if ($("result-box")) $("result-box").style.display = "none";

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  answered = false;

  if (currentIndex >= currentQuestions.length) {
    showResults();
    return;
  }

  timeLeft = 20;

  if ($("timer")) $("timer").textContent = timeLeft;

  const q = currentQuestions[currentIndex];

  if ($("question-text-en")) {
    $("question-text-en").textContent = q.en;
  }

  if ($("question-text-ku")) {
    $("question-text-ku").textContent = q.ku;
  }

  const image = $("quiz-image");

  if (image) {
    if (q.img) {
      image.src = q.img;
      image.style.display = "inline-block";
    } else {
      image.removeAttribute("src");
      image.style.display = "none";
    }

    image.onerror = () => {
      image.style.display = "none";
    };
  }

  const optionsDiv = $("options-container");
  if (!optionsDiv) return;

  optionsDiv.replaceChildren();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsDiv.appendChild(button);
  });

  timer = setInterval(() => {
    timeLeft--;

    if ($("timer")) $("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      answered = true;
      showAnswerFeedback(null);
    }
  }, 1000);
}

function showAnswerFeedback(selectedIndex) {
  const q = currentQuestions[currentIndex];
  const buttons = $("options-container")?.querySelectorAll("button");

  if (!buttons || !q) return;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.correct) {
      button.style.borderColor = "#22c55e";
      button.style.background = "rgba(34,197,94,0.15)";
    } else if (index === selectedIndex) {
      button.style.borderColor = "#ef4444";
      button.style.background = "rgba(239,68,68,0.15)";
    }
  });

  if (selectedIndex === null) {
    announce("Time is up! / دەم تەمام بوو!");
  } else if (selectedIndex === q.correct) {
    announce("Correct! / وەڵام درستە!");
  } else {
    announce("Incorrect! / وەڵام خەلەتە!");
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 900);
}

function announce(message) {
  let notice = $("quiz-notice");

  if (!notice) {
    notice = document.createElement("p");
    notice.id = "quiz-notice";
    notice.setAttribute("role", "status");
    notice.style.margin = "12px 0";
    notice.style.fontWeight = "bold";

    const options = $("options-container");
    if (options) options.after(notice);
  }

  notice.textContent = message;
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const q = currentQuestions[currentIndex];

  if (selectedIndex === q.correct) score++;

  showAnswerFeedback(selectedIndex);
}

function showResults() {
  clearInterval(timer);

  if ($("quiz-box")) $("quiz-box").style.display = "none";
  if ($("result-box")) $("result-box").style.display = "block";

  if ($("score-display")) {
    $("score-display").textContent =
      `${score} / ${currentQuestions.length}`;
  }

  const resultTitle = $("result-box")?.querySelector("h3");

  if (resultTitle) {
    const percentage = currentQuestions.length
      ? Math.round((score / currentQuestions.length) * 100)
      : 0;

    resultTitle.textContent =
      percentage >= 80 ? "🏆 Excellent! / زۆر باش!" :
      percentage >= 50 ? "👏 Good job! / باشە!" :
      "💪 Keep learning! / بەردەوام بە!";
  }
}

// Create Room
function handleCreateRoom(event) {
  event.preventDefault();

  const qEn = $("custom-q-en")?.value.trim();
  const qKu = $("custom-q-ku")?.value.trim();
  const answer = $("custom-answer")?.value.trim();

  if (!qEn || !qKu || !answer) {
    alert("Please fill in all fields. / تکایە هەموو خانەیان پڕ بکە.");
    return;
  }

  // The existing HTML form has only one answer field.
  // Ask for three distractors to build a real four-option question.
  const distractors = [];

  for (let i = 1; i <= 3; i++) {
    const choice = prompt(
      `Enter incorrect option ${i} of 3:`
    );

    if (choice === null || !choice.trim()) {
      alert(
        "Question not published. Please enter all three incorrect options."
      );
      return;
    }

    distractors.push(choice.trim());
  }

  const options = shuffle([answer, ...distractors]);
  const question = {
    en: qEn,
    ku: qKu,
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    options,
    correct: options.indexOf(answer)
  };

  const saved = readStorage(QUESTION_KEY, []);
  saved.push(question);

  if (!writeStorage(QUESTION_KEY, saved)) {
    alert(
      "Could not save this question in browser storage. Check your browser settings."
    );
    return;
  }

  fullQuizData.push(question);

  // Render safely; do not inject user-entered text as HTML.
  const list = $("room-questions-list");

  if (list) {
    const item = document.createElement("div");
    item.className = "feed-item";

    const english = document.createElement("strong");
    english.textContent = `Q: ${qEn}`;

    const kurdish = document.createElement("p");
    kurdish.className = "sub-text";
    kurdish.textContent = qKu;

    const correctAnswer = document.createElement("p");
    correctAnswer.style.color = "var(--gold)";
    correctAnswer.textContent = `Correct Answer: ${answer}`;

    item.append(english, kurdish, correctAnswer);
    list.prepend(item);
  }

  alert(
    "Question saved successfully! / پرسیار ب سەرکەفتیانە هاتە پاراستن!"
  );

  event.target.reset();
}

// Restore questions created in previous sessions
function renderSavedRoomQuestions() {
  const list = $("room-questions-list");
  if (!list) return;

  const saved = readStorage(QUESTION_KEY, []);

  saved.forEach((q) => {
    const item = document.createElement("div");
    item.className = "feed-item";

    const english = document.createElement("strong");
    english.textContent = `Q: ${q.en}`;

    const kurdish = document.createElement("p");
    kurdish.className = "sub-text";
    kurdish.textContent = q.ku;

    const correctAnswer = document.createElement("p");
    correctAnswer.style.color = "var(--gold)";
    correctAnswer.textContent = `Correct Answer: ${q.options[q.correct]}`;

    item.append(english, kurdish, correctAnswer);
    list.appendChild(item);
  });
}

// Puzzle Game
const PUZZLE_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600";

function initPuzzle() {
  const board = $("puzzle-board");
  if (!board) return;

  clearInterval(timer);
  selectedPiece = null;

  // Shuffle until the puzzle is not already solved.
  do {
    puzzlePieces = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  } while (puzzlePieces.every((piece, index) => piece === index));

  renderPuzzle();
}

function renderPuzzle() {
  const board = $("puzzle-board");
  if (!board) return;

  board.replaceChildren();

  puzzlePieces.forEach((pos, index) => {
    const piece = document.createElement("button");
    piece.type = "button";
    piece.className = "puzzle-piece";
    piece.setAttribute("aria-label", `Puzzle piece ${index + 1}`);

    const x = (pos % 3) * 50;
    const y = Math.floor(pos / 3) * 50;

    piece.style.backgroundImage = `url("${PUZZLE_IMAGE}")`;
    piece.style.backgroundSize = "300px 300px";
    piece.style.backgroundPosition = `${(x / 100) * -100}% ${(y / 100) * -100}%`;
    piece.style.backgroundPosition = `-${(pos % 3) * 100}px -${Math.floor(pos / 3) * 100}px`;
    piece.style.width = "100%";
    piece.style.height = "100%";

    if (selectedPiece === index) {
      piece.style.outline = "3px solid #ffc107";
      piece.style.outlineOffset = "-3px";
    }

    piece.addEventListener("click", () => handlePieceClick(index));
    board.appendChild(piece);
  });
}

function handlePieceClick(index) {
  if (selectedPiece === null) {
    selectedPiece = index;
    renderPuzzle();
    return;
  }

  if (selectedPiece === index) {
    selectedPiece = null;
    renderPuzzle();
    return;
  }

  [puzzlePieces[selectedPiece], puzzlePieces[index]] =
    [puzzlePieces[index], puzzlePieces[selectedPiece]];

  selectedPiece = null;
  renderPuzzle();

  const solved = puzzlePieces.every((piece, i) => piece === i);

  if (solved) {
    setTimeout(() => {
      alert("🎉 Puzzle solved! / پیرۆزە، پۆزل تەمام بوو!");
    }, 100);
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadSavedQuestions();
  renderSavedRoomQuestions();
  startQuiz();
});
