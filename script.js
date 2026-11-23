/* ══════════════════════════════════════════════════════════
   OPERATION CUTUUU — script.js
   ══════════════════════════════════════════════════════════

   ★  EASY CUSTOMIZATION ZONE  ★
   Edit the CONFIG object below to personalize everything.
   You do NOT need to understand JavaScript — just edit the text!
   ══════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── Girlfriend's nickname ── */
  nickname: "Cutuuu",

  /* ── Photo captions (match photo1.jpg through photo6.jpg) ── */
  photos: [
    { src: "assets/images/photo1.jpg", caption: "Hamare pehle wala function ❤️" },
    { src: "assets/images/photo2.jpg", caption: "Just us being us. 🥺"           },
    { src: "assets/images/photo3.jpg", caption: "My favourite human 🥺"          },
    { src: "assets/images/photo4.jpg", caption: "One of my favourite moments ❤️" },
    { src: "assets/images/photo5.jpg", caption: "Forever my Cutuuu. 💗"          },
    { src: "assets/images/photo6.jpg", caption: "Main bahut lucky hoon. ✨"       },
  ],

  /* ── Quiz questions and options ── */
  quiz: [
    {
      question: "Who is the cutest person in this world?",
      options:  ["Me", "Obviously Me", "Cutuuu ❤️", "No competition!"],
      correct:  2,
      emoji:    "👑",
      resultMsg:"Bilkul sahi! Tum hi ho sabse cute! 🌸",
    },
    {
      question: "Who is the biggest idiot?",
      options:  ["Me", "Definitely Me", "Your favourite idiot", "All of the above"],
      correct:  3,
      emoji:    "😅",
      resultMsg:"Haan haan, main hi hoon. Maan gaya! 😂❤️",
    },
    {
      question: "What should we do after this?",
      options:  ["Smile together", "Talk and sort things out", "Have a cute date", "All of the above ❤️"],
      correct:  3,
      emoji:    "🎉",
      resultMsg:"Yahi chahta tha sunna! All of the above please! 💕",
    },
  ],

  /* ── Final messages ── */
  happyMessage: "YAYYYYY! Meri Cutuuu ki smile wapas aa gayi! ❤️",
  angryMessage:  "Koi baat nahi madam ji.\nMain yahin hoon.\nJab mann kare tab baat kar lena.\nEk virtual hug bhej raha hoon. 🧸❤️",

  /* ── Hospital section ── */
  hospitalName: "Cutuuu Smile Recovery Department",
  diagnosis:    "Thoda sa gussa detected.",
  treatments: [
    { icon: "🤗", text: "1000 virtual hugs"       },
    { icon: "😘", text: "Unlimited forehead kisses" },
    { icon: "🫂", text: "One tight hug"            },
    { icon: "💝", text: "Unlimited care"            },
    { icon: "🙏", text: "One sincere apology"      },
  ],
};

/* ══════════════════════════════════════════════════════════
   DO NOT EDIT BELOW THIS LINE (unless you know JavaScript!)
   ══════════════════════════════════════════════════════════ */

/* ── Detect mobile ── */
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ═════════════════════════════════════════════════════════
   1. CUSTOM CURSOR
   ═════════════════════════════════════════════════════════ */
(function initCursor() {
  const cursor      = document.getElementById("cursor");
  const cursorTrail = document.getElementById("cursorTrail");
  if (!cursor || !cursorTrail) return;

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top  = mouseY + "px";
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    cursorTrail.style.left = trailX + "px";
    cursorTrail.style.top  = trailY + "px";
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width  = "32px";
      cursor.style.height = "32px";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width  = "20px";
      cursor.style.height = "20px";
    });
  });
})();

/* ═════════════════════════════════════════════════════════
   2. SPLASH SCREEN
   ═════════════════════════════════════════════════════════ */
(function initSplash() {
  const splash  = document.getElementById("splash");
  const mainSite = document.getElementById("mainSite");
  const btn     = document.getElementById("openSurpriseBtn");
  const particles = document.getElementById("splashParticles");
  const flowers   = document.getElementById("splashFlowers");

  /* Spawn floating particles */
  const HEARTS  = ["❤️","💕","💗","💖","💝","🌸","✨","💫"];
  const FLOWERS = ["🌸","🌺","🌹","🌷","💐","🌼","🌻"];

  if (!prefersReducedMotion) {
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${4 + Math.random() * 6}s;
        animation-delay: ${Math.random() * 5}s;
        font-size: ${0.8 + Math.random() * 1.2}rem;
      `;
      particles.appendChild(p);
    }

    for (let i = 0; i < 12; i++) {
      const f = document.createElement("div");
      f.className = "splash-flower";
      f.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
      f.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${6 + Math.random() * 8}s;
        animation-delay: ${Math.random() * 6}s;
        font-size: ${1 + Math.random() * 1.5}rem;
      `;
      flowers.appendChild(f);
    }
  }

  btn.addEventListener("click", () => {
    splash.classList.add("closing");
    mainSite.classList.remove("hidden");
    setTimeout(() => {
      splash.style.display = "none";
      spawnBgHearts();
    }, 850);
  });
})();

/* ═════════════════════════════════════════════════════════
   3. BACKGROUND FLOATING HEARTS
   ═════════════════════════════════════════════════════════ */
function spawnBgHearts() {
  if (prefersReducedMotion) return;
  const container = document.getElementById("bgHearts");
  if (!container) return;
  const emojis = ["❤️","💕","💗","🌸","✨","💫","🌺","💖"];
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.className = "bg-heart";
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${10 + Math.random() * 15}s;
      animation-delay: ${Math.random() * 10}s;
      font-size: ${0.6 + Math.random() * 1}rem;
    `;
    container.appendChild(h);
  }
}

/* ═════════════════════════════════════════════════════════
   4. SCROLL REVEAL (Intersection Observer)
   ═════════════════════════════════════════════════════════ */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        /* Poem lines staggered reveal */
        if (entry.target.classList.contains("poem-line")) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => entry.target.classList.add("visible"), delay);
        }
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

/* ═════════════════════════════════════════════════════════
   5. NAV — SCROLL EFFECTS
   ═════════════════════════════════════════════════════════ */
(function initNav() {
  const nav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      nav.classList.add("scrolled");
      if (backToTop) backToTop.classList.remove("hidden");
    } else {
      nav.classList.remove("scrolled");
      if (backToTop) backToTop.classList.add("hidden");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

/* ═════════════════════════════════════════════════════════
   6. REASONS — FLIP CARDS
   ═════════════════════════════════════════════════════════ */
(function initReasons() {
  const items = document.querySelectorAll(".reason-item");
  items.forEach((item) => {
    function toggle() {
      item.classList.toggle("flipped");
    }
    item.addEventListener("click", toggle);
    item.addEventListener("touchstart", toggle, { passive: true });
  });
})();

/* ═════════════════════════════════════════════════════════
   7. ENVELOPE LETTER
   ═════════════════════════════════════════════════════════ */
(function initEnvelope() {
  const envelope = document.getElementById("envelope");
  if (!envelope) return;

  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add("open");

    /* Spawn mini hearts */
    if (!prefersReducedMotion) {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => spawnFloatingHeart(envelope, "❤️"), i * 150);
      }
    }

    /* Hide scroll hint when user reaches bottom */
    const letterContent = document.getElementById("letterContent");
    if (letterContent) {
      setTimeout(() => {
        letterContent.addEventListener("scroll", () => {
          const atBottom = letterContent.scrollHeight - letterContent.scrollTop - letterContent.clientHeight < 20;
          const hint = document.getElementById("letterScrollHint");
          if (hint) hint.style.opacity = atBottom ? "0" : "1";
        });
      }, 1200); // wait for open animation
    }
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("touchstart", openEnvelope, { passive: true });
})();

/* ═════════════════════════════════════════════════════════
   8. QUIZ
   ═════════════════════════════════════════════════════════ */
let quizIndex = 0;

function renderQuiz() {
  const q   = CONFIG.quiz[quizIndex];
  const total = CONFIG.quiz.length;

  const numEl  = document.getElementById("quizNum");
  const qEl    = document.getElementById("quizQuestion");
  const optEl  = document.getElementById("quizOptions");
  const progBar = document.getElementById("quizProgressBar");

  if (numEl)   numEl.textContent   = `Question ${quizIndex + 1} of ${total}`;
  if (qEl)     qEl.textContent     = q.question;
  if (progBar) progBar.style.width = `${(quizIndex / total) * 100}%`;

  if (optEl) {
    optEl.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className   = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleQuizAnswer(i, btn));
      optEl.appendChild(btn);
    });
  }
}

function handleQuizAnswer(chosen, btnEl) {
  const q = CONFIG.quiz[quizIndex];
  btnEl.classList.add("selected");

  /* Disable all options */
  document.querySelectorAll(".quiz-option").forEach((b) => {
    b.style.pointerEvents = "none";
  });

  /* Celebrate correct answer */
  if (!prefersReducedMotion) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => spawnFloatingHeart(document.getElementById("quizCard"), "💕"), i * 100);
    }
  }

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < CONFIG.quiz.length) {
      renderQuiz();
    } else {
      showQuizResult();
    }
  }, 800);
}

function showQuizResult() {
  const quizCard    = document.getElementById("quizCard");
  const quizResult  = document.getElementById("quizResult");
  const emojiEl     = document.getElementById("quizResultEmoji");
  const msgEl       = document.getElementById("quizResultMsg");
  const progBar     = document.getElementById("quizProgressBar");

  if (progBar) progBar.style.width = "100%";

  if (quizCard)   quizCard.classList.add("hidden");
  if (quizResult) quizResult.classList.remove("hidden");
  if (emojiEl)    emojiEl.textContent = "🎉";
  if (msgEl)      msgEl.textContent   = "Tum literally the best ho is duniya mein! ❤️";

  if (!prefersReducedMotion) launchConfetti();
}

function restartQuiz() {
  quizIndex = 0;
  const quizCard   = document.getElementById("quizCard");
  const quizResult = document.getElementById("quizResult");
  if (quizCard)   quizCard.classList.remove("hidden");
  if (quizResult) quizResult.classList.add("hidden");
  renderQuiz();
}

/* Init quiz on load */
document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  initHospital();
  initFinalSection();
  initFinalDecorations();
});

/* ═════════════════════════════════════════════════════════
   9. SMILE RECOVERY DEPARTMENT
   ═════════════════════════════════════════════════════════ */
function initHospital() {
  const btn = document.getElementById("treatmentBtn");
  if (!btn) return;

  const treatments  = document.querySelectorAll(".treatment-item");
  const progressFill = document.getElementById("smileProgress");
  const percentEl   = document.getElementById("smilePercent");
  const teddyDiv    = document.getElementById("treatmentTeddy");
  const heartsDiv   = document.getElementById("treatmentHearts");

  let step = 0;
  const total = CONFIG.treatments.length;

  btn.addEventListener("click", () => {
    if (step >= total) {
      /* All done — show teddy and hearts */
      btn.classList.add("hidden");
      teddyDiv.classList.remove("hidden");

      if (!prefersReducedMotion) {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            const h = document.createElement("div");
            h.className = "floating-heart";
            h.textContent = ["❤️","💕","🌸","💗"][Math.floor(Math.random() * 4)];
            h.style.left = 20 + Math.random() * 60 + "%";
            h.style.top  = "0";
            h.style.animationDuration = (1 + Math.random()) + "s";
            heartsDiv.appendChild(h);
            setTimeout(() => h.remove(), 2500);
          }, i * 160);
        }
      }
      return;
    }

    /* Animate one treatment at a time */
    const item = treatments[step];
    if (item) {
      item.classList.add("done");
      const check = item.querySelector(".treatment-check");
      if (check) check.classList.remove("hidden");
    }

    step++;
    const pct = Math.round((step / total) * 100);
    if (progressFill) progressFill.style.width = pct + "%";
    if (percentEl)    percentEl.textContent = pct + "%";

    if (!prefersReducedMotion) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnFloatingHeart(btn, "❤️"), i * 100);
      }
    }

    btn.textContent = step < total
      ? `Continue Treatment (${step}/${total}) 💊`
      : "Mission Complete! 🎊";
  });
}

/* ═════════════════════════════════════════════════════════
   10. FINAL SECTION
   ═════════════════════════════════════════════════════════ */
function initFinalSection() {
  const happyBtn     = document.getElementById("btnHappy");
  const angryBtn     = document.getElementById("btnAngry");
  const happyResp    = document.getElementById("happyResponse");
  const angryResp    = document.getElementById("angryResponse");
  const celebHearts  = document.getElementById("celebrationHearts");

  if (happyBtn) {
    happyBtn.addEventListener("click", () => {
      if (happyResp) happyResp.classList.remove("hidden");
      if (angryResp) angryResp.classList.add("hidden");
      if (!prefersReducedMotion) {
        launchConfetti();
        spawnCelebHearts(celebHearts);
      }
      happyBtn.textContent = "Yayyyy! 🎉";
    });
  }

  if (angryBtn) {
    angryBtn.addEventListener("click", () => {
      if (angryResp) angryResp.classList.remove("hidden");
      if (happyResp) happyResp.classList.add("hidden");
      angryBtn.textContent = "Received ❤️";
    });
  }
}

function spawnCelebHearts(container) {
  if (!container) return;
  const emojis = ["❤️","💕","🌸","💗","💖","🌺","✨","💫"];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "floating-heart";
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.left = Math.random() * 100 + "%";
      h.style.top  = "0";
      h.style.fontSize = (1 + Math.random()) + "rem";
      h.style.animationDuration = (1.5 + Math.random()) + "s";
      container.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }, i * 120);
  }
}

/* ═════════════════════════════════════════════════════════
   11. FINAL SECTION DECORATIONS (stars & flowers)
   ═════════════════════════════════════════════════════════ */
function initFinalDecorations() {
  if (prefersReducedMotion) return;

  const starsContainer  = document.getElementById("finalStars");
  const flowersContainer = document.getElementById("finalFlowers");
  const STARS  = ["✨","⭐","💫","🌟","⚡"];
  const FLOWERS = ["🌸","🌺","🌹","🌷","💐","🌼"];

  if (starsContainer) {
    for (let i = 0; i < 30; i++) {
      const s = document.createElement("div");
      s.className = "final-star";
      s.textContent = STARS[Math.floor(Math.random() * STARS.length)];
      s.style.cssText = `
        left: ${Math.random() * 100}%;
        top:  ${Math.random() * 100}%;
        animation-duration: ${1.5 + Math.random() * 3}s;
        animation-delay: ${Math.random() * 3}s;
        font-size: ${0.6 + Math.random() * 1.2}rem;
      `;
      starsContainer.appendChild(s);
    }
  }

  if (flowersContainer) {
    for (let i = 0; i < 12; i++) {
      const f = document.createElement("div");
      f.className = "final-flower";
      f.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
      f.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${8 + Math.random() * 10}s;
        animation-delay: ${Math.random() * 8}s;
        font-size: ${1 + Math.random() * 1.5}rem;
      `;
      flowersContainer.appendChild(f);
    }
  }
}

/* ═════════════════════════════════════════════════════════
   12. UTILITY — FLOATING HEART
   ═════════════════════════════════════════════════════════ */
function spawnFloatingHeart(parent, emoji) {
  if (!parent) return;
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = emoji || "❤️";
  h.style.left  = 20 + Math.random() * 60 + "%";
  h.style.top   = "50%";
  h.style.position = "absolute";
  h.style.pointerEvents = "none";
  h.style.fontSize = (0.8 + Math.random() * 0.6) + "rem";
  h.style.zIndex = "100";
  h.style.animationDuration = (1 + Math.random() * 0.8) + "s";

  const wrapper = parent.style.position !== "relative" && parent.style.position !== "absolute"
    ? (parent.style.position = "relative", parent) : parent;
  wrapper.appendChild(h);
  setTimeout(() => h.remove(), 2500);
}

/* ═════════════════════════════════════════════════════════
   13. CONFETTI
   ═════════════════════════════════════════════════════════ */
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas || prefersReducedMotion) return;
  canvas.classList.remove("hidden");

  const ctx = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#f9c6d4","#e8798e","#c95578","#e8d5f5","#d4a054","#ffffff"];
  const pieces = [];
  const TOTAL  = 140;

  for (let i = 0; i < TOTAL; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 10,
      h: 5 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -2 + Math.random() * 4,
      vy: 3 + Math.random() * 5,
      angle: Math.random() * Math.PI * 2,
      av: (-0.1 + Math.random() * 0.2),
      alpha: 1,
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.av;
      if (frame > 90) p.alpha -= 0.015;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (frame < 180) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.add("hidden");
    }
  }

  draw();
}

/* ═════════════════════════════════════════════════════════
   14. RESIZE HANDLER
   ═════════════════════════════════════════════════════════ */
window.addEventListener("resize", () => {
  const canvas = document.getElementById("confettiCanvas");
  if (canvas) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

/* ═════════════════════════════════════════════════════════
   15. PREVENT SCROLL ON SPLASH
   ═════════════════════════════════════════════════════════ */
(function lockSplashScroll() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  document.body.style.overflow = "hidden";
  document.getElementById("openSurpriseBtn")
    ?.addEventListener("click", () => {
      setTimeout(() => { document.body.style.overflow = ""; }, 850);
    });
})();
