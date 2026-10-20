// MitanXP - Main Interactive & Translation Logic
document.addEventListener("DOMContentLoaded", () => { let currentLang = "ku"; // Default language is Badini Kurdish
const btnLangToggle = document.getElementById("btnLangToggle"); const btnStartGame = document.getElementById("btnStartGame");
// Multi-language dictionary (Kurdish Badini & English) const translations = { ku: { navHome: "سەرەکی", navPlay: "یاری بکه", navCategories: "بابەتێن IT", navLeaderboard: "خشتەی پێشەنگان", navSettings: "ڕێکخستن", navAbout: "دەربارە", heroTitle: "ئاستێ خۆ بلند بکه و زانیاریان کۆم بکه ب یاریا MitanXP", heroSub: "Improve Your IT Skills", btnStart: "▶ دەستپێکردنی یاری / Start Game", catHeader: "🗂️ بابەتەکان / Categories", modesHeader: "🎮 شێوازەکانی یاری / Game Modes", lbHeader: "🏆 خشتەی پێشەنگان / Leaderboard", alertGame: "یاری دێ نوکە دەست پێ کەت!" }, en: { navHome: "Home", navPlay: "Play", navCategories: "Categories", navLeaderboard: "Leaderboard", navSettings: "Settings", navAbout: "About", heroTitle: "Level up and gain knowledge with MitanXP Game", heroSub: "Improve Your IT Skills", btnStart: "▶ Start Game", catHeader: "🗂️ Categories", modesHeader: "🎮 Game Modes", lbHeader: "🏆 Leaderboard", alertGame: "Game starting now!" } };
// Language switch handler if (btnLangToggle) { btnLangToggle.addEventListener("click", () => { currentLang = currentLang === "ku" ? "en" : "ku"; btnLangToggle.innerText = currentLang === "ku" ? "Kurdish / EN" : "EN / Kurdish";
  // Update UI texts according to selected language
  const t = translations[currentLang];
  if (btnStartGame) btnStartGame.innerText = t.btnStart;
});
}
// Start game button functionality if (btnStartGame) { btnStartGame.addEventListener("click", () => { alert(translations[currentLang].alertGame); }); }
// Category card clicks const catCards = document.querySelectorAll(".cat-card"); catCards.forEach((card) => { card.addEventListener("click", () => { const catName = card.querySelector("h4")?.innerText || "IT Category"; alert(currentLang === "ku" ? تە بەشێ (${catName}) هەڵبژارد! : You selected (${catName})!); }); }); });
