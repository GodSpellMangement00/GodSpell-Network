/* =========================
   THEME SYSTEM (SAVE THEME)
========================= */
function setTheme(theme) {
  document.body.className = "theme-" + theme;
  localStorage.setItem("theme", theme);
}

(function loadTheme() {
  const saved = localStorage.getItem("theme") || "green";
  document.body.className = "theme-" + saved;
})();

/* =========================
   COPY SERVER IP (ANIMATION)
========================= */
const copyBtn = document.querySelector(".copy-ip");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("pika-network.net");
    copyBtn.textContent = "Copied ✔";
    copyBtn.style.transform = "scale(1.1)";
    setTimeout(() => {
      copyBtn.textContent = "Copy Server IP";
      copyBtn.style.transform = "scale(1)";
    }, 1500);
  });
}

/* =========================
   FAQ ACCORDION (SMOOTH)
========================= */
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const ans = item.querySelector(".faq-answer");
    if (!ans) return;
    ans.style.display =
      ans.style.display === "block" ? "none" : "block";
  });
});

/* =========================
   FAQ LIVE SEARCH
========================= */
const faqSearch = document.getElementById("faqSearch");
if (faqSearch) {
  faqSearch.addEventListener("input", () => {
    const q = faqSearch.value.toLowerCase();
    document.querySelectorAll(".faq-item").forEach(item => {
      item.style.display = item.innerText.toLowerCase().includes(q)
        ? "block"
        : "none";
    });
  });
}

/* =========================
   MEMBER POPUP (FADE IN)
========================= */
function openPopup(name, role = "") {
  const popup = document.getElementById("popup");
  if (!popup) return;

  document.getElementById("popupName").textContent = name;
  const roleEl = document.getElementById("popupRole");
  if (roleEl) roleEl.textContent = role;

  popup.style.display = "flex";
  popup.style.opacity = "0";
  setTimeout(() => (popup.style.opacity = "1"), 10);
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

/* =========================
   MEMBER SEARCH
========================= */
const memberSearch = document.getElementById("memberSearch");
if (memberSearch) {
  memberSearch.addEventListener("input", () => {
    const q = memberSearch.value.toLowerCase();
    document.querySelectorAll(".member-card").forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(q)
        ? "block"
        : "none";
    });
  });
}

/* =========================
   SCROLL REVEAL (SECTIONS)
========================= */
const revealEls = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});

/* =========================
   BUTTON RIPPLE EFFECT
========================= */
document.querySelectorAll(".btn, button").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.4)";
    ripple.style.width = ripple.style.height = "120px";
    ripple.style.left = e.offsetX - 60 + "px";
    ripple.style.top = e.offsetY - 60 + "px";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 0.6s ease-out";

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

/* =========================
   RIPPLE KEYFRAMES (JS-INJECT)
========================= */
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  from { transform: scale(0); opacity: 0.8; }
  to { transform: scale(2.5); opacity: 0; }
}`;
document.head.appendChild(style);
