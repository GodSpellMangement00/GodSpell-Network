/* =========================
   THEME SYSTEM (MANUAL SELECT + SAVE)
========================= */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const menu = document.getElementById("themeMenu");
  if (menu) menu.style.display = "none";
}

function toggleThemeMenu() {
  const menu = document.getElementById("themeMenu");
  if (!menu) return;
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "purple";
  document.documentElement.setAttribute("data-theme", savedTheme);
});

/* =========================
   COPY SERVER IP (SAFE)
========================= */
function copyServerIP() {
  const ip = "pika-network.net";

  const tempInput = document.createElement("input");
  tempInput.value = ip;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  const btn = document.activeElement;
  if (btn) {
    const old = btn.textContent;
    btn.textContent = "Copied ✔";
    btn.style.transform = "scale(1.1)";
    setTimeout(() => {
      btn.textContent = old;
      btn.style.transform = "scale(1)";
    }, 1500);
  }
}

/* =========================
   FAQ ACCORDION
========================= */
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const ans = item.querySelector(".faq-answer");
    if (!ans) return;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
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
      item.style.display = item.textContent.toLowerCase().includes(q)
        ? "block"
        : "none";
    });
  });
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
   MEMBER POPUP
========================= */
function openPopup(name, role = "") {
  const popup = document.getElementById("popup");
  if (!popup) return;

  document.getElementById("popupName").textContent = name;
  const roleEl = document.getElementById("popupRole");
  if (roleEl) roleEl.textContent = role;

  popup.style.display = "flex";
  popup.style.opacity = "0";
  setTimeout(() => popup.style.opacity = "1", 10);
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

/* =========================
   SCROLL REVEAL
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
  btn.style.position = "relative";
  btn.style.overflow = "hidden";

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
   RIPPLE KEYFRAMES
========================= */
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  from { transform: scale(0); opacity: 0.8; }
  to { transform: scale(2.5); opacity: 0; }
}`;
document.head.appendChild(style);

/* =========================
   CLOSE THEME MENU ON OUTSIDE CLICK
========================= */
document.addEventListener("click", e => {
  const menu = document.getElementById("themeMenu");
  const switcher = document.querySelector(".theme-switch");
  if (!menu || !switcher) return;

  if (!switcher.contains(e.target)) {
    menu.style.display = "none";
  }
});
