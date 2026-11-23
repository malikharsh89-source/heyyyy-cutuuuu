# ❤️ Operation Cutuuu — Romantic Apology Website

> *Ek chhoti si duniya, sirf tumhare liye.*

A personal, interactive romantic website built with pure HTML, CSS & JavaScript — no frameworks, no backend, just love.

---

## 📂 Project Structure

```
for cutuuu/
├── index.html              ← Main website (open this in browser)
├── style.css               ← All design, animations & layout
├── script.js               ← All interactions & logic
└── assets/
    └── images/
        ├── photo1.jpg      ← Lavender outfit (formal event)
        ├── photo2.jpg      ← Cafe selfie
        ├── photo3.jpg      ← Cafe cuddle
        ├── photo4.jpg      ← Intimate moment with flowers
        ├── photo5.jpg      ← Wedding venue (red saree)
        ├── photo6.jpg      ← Basko rooftop night out
        └── README.txt      ← Photo replacement guide
```

---

## 🚀 How to Open

Just double-click `index.html` — works in any browser.  
No internet required, no installation needed.

---

## ✏️ How to Customize (No Coding Needed)

Open `script.js` and edit the **CONFIG object at the very top** (first ~60 lines):

```js
const CONFIG = {
  nickname: "Cutuuu",          // ← Her name

  photos: [
    { src: "assets/images/photo1.jpg", caption: "Your caption here ❤️" },
    // ... edit captions for all 6 photos
  ],

  quiz: [
    { question: "...", options: [...], ... },
    // ... edit quiz questions
  ],

  happyMessage: "YAYYYYY! ...",   // ← When she clicks "Maan gayi"
  angryMessage:  "Koi baat nahi ...", // ← When she clicks "Gussa hoon"
};
```

> You **only** need to touch the CONFIG block. Everything else updates automatically.

---

## 📸 How to Replace Photos

1. Save your new photos with these exact names:
   `photo1.jpg` `photo2.jpg` `photo3.jpg` `photo4.jpg` `photo5.jpg` `photo6.jpg`
2. Drop them into `assets/images/` (replace the existing ones)
3. Refresh the browser — done! ✅

**Tips:**
- Portrait (phone-style) photos look best in the polaroid frames
- JPG, PNG, and WEBP all work
- If a photo fails to load, a pretty gradient shows instead — design never breaks

---

## 🌐 How to Host Online (Free)

### ⚡ Netlify Drop — Easiest (60 seconds, no account needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `for cutuuu` folder onto the blue box
3. Get a shareable link instantly — send it to Cutuuu 💌

### 🐙 GitHub Pages — Permanent Free Hosting
1. Create free account at [github.com](https://github.com)
2. New Repository → name: `for-cutuuu` → Public
3. Upload all files (index.html, style.css, script.js, assets/ folder)
4. Settings → Pages → Source: `main` → Save
5. Your link: `https://yourusername.github.io/for-cutuuu`

---

## ✨ Features

| Section | What it does |
|---|---|
| 💗 Splash Screen | Animated hearts, flowers, particles — full-screen opening |
| 🧸 Apology (Dil Se) | Animated teddy bear + poem lines + heartfelt message |
| 🌸 Why You're My Favourite | 5 flip cards with hidden love messages |
| 📸 Photo Gallery | 6 polaroid-style frames with real photos + hover effects |
| 💌 Envelope Letter | 3D envelope that opens to reveal a personal letter |
| 💝 Love Quiz | 3 funny questions + confetti celebration |
| 🏥 Smile Recovery Dept | Playful hospital dashboard with treatment progress bar |
| ❤️ Final Surprise | "Maan gayi / Gussa hoon" buttons with unique responses |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Glassmorphism, animations, gradients, responsive layout
- **Vanilla JavaScript** — All interactions, no frameworks
- **Google Fonts** — Playfair Display, Dancing Script, Lora, Inter
- **No backend. No database. No dependencies.**

---

## 📱 Mobile Optimized

Designed mobile-first, specifically for iPhone screens:
- No horizontal scroll
- Touch-friendly buttons (min 44px tap targets)
- Smooth 60fps animations
- Respects `prefers-reduced-motion` accessibility setting
- Custom cursor only on desktop (auto-hidden on touch devices)

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Pink | `#f9c6d4` |
| Blush | `#f4a0b0` |
| Rose | `#e8798e` |
| Deep Rose | `#c95578` |
| Lavender | `#e8d5f5` |
| Cream | `#fff9f5` |
| Font (Display) | Playfair Display |
| Font (Handwritten) | Dancing Script |
| Font (Body) | Inter + Lora |

---

*Made with ❤️ — Sirf tumhare liye banayi thi yeh duniya 🌸*
