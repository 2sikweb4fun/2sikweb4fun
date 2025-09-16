// === Scroll-triggered tear audio ===
window.addEventListener('scroll', () => {
  document.querySelectorAll('.tear-reveal').forEach((tearSection, index) => {
    const audio = document.getElementById(`tear-audio-${index + 1}`);
    if (!tearSection || !audio) return;
    const rect = tearSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0 && !audio.played.length) {
      audio.play();
    }
  });
});

// === Create intro overlay ===
const overlay = document.createElement("div");
overlay.id = "introOverlay";
Object.assign(overlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "9999"
});
document.body.appendChild(overlay);

// === Create animated 3D $ikCash-oUt card ===
const card = document.createElement("div");
card.id = "cashCardIntro";
card.innerText = "$ikCash-oUt";
Object.assign(card.style, {
  padding: "40px 60px",
  background: "#0f0",
  color: "#000",
  fontWeight: "bold",
  fontSize: "2rem",
  borderRadius: "20px",
  boxShadow: "0 0 30px #39ff14",
  transform: "perspective(600px) rotateY(0deg)",
  animation: "rotateCard 2.5s ease-in-out"
});
overlay.appendChild(card);

// === Floating cash bills (visual effect) ===
for (let i = 0; i < 5; i++) {
  const cash = document.createElement("div");
  cash.className = "cashBill";
  Object.assign(cash.style, {
    position: "absolute",
    width: "80px",
    height: "40px",
    background: "#00ff88",
    border: "2px solid #000",
    borderRadius: "5px",
    top: `${10 + i * 15}%`,
    left: i % 2 === 0 ? "-100px" : "110%",
    animation: `floatCash${i} 2s ease-in-out forwards`
  });
  overlay.appendChild(cash);
}

// === Play voice hover once per visit ===
function playOncePerVisit(audioId, storageKey) {
  if (localStorage.getItem(storageKey)) return;
  const audio = document.getElementById(audioId);
  if (!audio) return;
  audio.play();
  localStorage.setItem(storageKey, true);
}

// === Product hover audio ===
const productMap = [
  { id: 'hoodie-card', voice: 'hoodie-voice' },
  { id: 'vneck-card', voice: 'vneck-voice' },
  { id: 'roundneck-card', voice: 'roundneck-voice' },
  { id: 'caps-card', voice: 'caps-voice' },
  { id: 'beanies-card', voice: 'beanies-voice' },
  { id: 'trinket-card', voice: 'trinket-voice' },
];

productMap.forEach(({ id, voice }) => {
  const card = document.getElementById(id);
  card?.addEventListener('mouseenter', () => playOncePerVisit(voice, `${voice}Played`));
});

// === Hoodie flip ===
const hoodieCard = document.getElementById('hoodie-card');
const hoodieFront = document.getElementById('hoodieFront');
if (hoodieCard && hoodieFront) {
  hoodieCard.addEventListener('mouseover', () => {
    hoodieFront.src = 'images/product_hoodie_back.png';
  });
  hoodieCard.addEventListener('mouseout', () => {
    hoodieFront.src = 'images/product_hoodie_front.png';
  });
}

// === About voice on footer hover ===
const footer = document.querySelector('footer');
const aboutVoice = document.getElementById('about-voice');
footer?.addEventListener('mouseenter', () => {
  if (aboutVoice) {
    aboutVoice.currentTime = 0;
    aboutVoice.play();
  }
});

// === Track tear section hover ===
document.querySelectorAll('.tear-reveal').forEach((section, index) => {
  section.addEventListener('mouseenter', () => {
    console.log(`Tear section ${index + 1} hovered`);
  });
});

// === Track donation click ===
document.querySelectorAll('.donate-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log(`Donation clicked on button ${index + 1}`);
  });
});
// Target zones
  const tpArea = document.getElementById('tp-Area'); let totalTaps = 0;
  const donationBtn = document.querySelector('a[href*="donate?amount=1"]');

  // Track Tap Zone
  cons tpArea= document.getElementById ("tpArea");let totaltaps = 0; tpArea.addEventListener("click", function () {totalTaps++; tpArea.innerText = `Support taps: ${totalTaps}`; console.log('Tap Zone clicked: ${totalTaps} total`); });
                           
    // Optional: send to server or store in localStorage
  });

  // Track $1 Donation Button
  donationBtn.addEventListener('click', () => {
    donationClicks++;
    console.log(`Donation clicked: ${donationClicks} times`);
    // Optional: send event to analytics or backend
  });
'/script>' <script>
  const bee = document.querySelector('bee.png');
  let positionX = 0;
  let lastScrollY = window.scrollY;

  function moveBee(scrollUp) {
    if (scrollUp) {
      positionX += 10;
      bee.style.transform = `translateX(${positionX}px) rotate(0deg)`;
    } else {
      bee.style.transform = `translateX(${positionX}px) rotate(-45deg)`;
      setTimeout(() => {
        positionX -= 10;
        bee.style.transform = `translateX(${positionX}px) rotate(0deg)`;
      }, 200);
    }
  }

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    const scrollUp = currentY < lastScrollY;
    moveBee(scrollUp);
    lastScrollY = currentY;
  });
</script>

// === Remove overlay after 4 seconds ===
setTimeout(() => {
  overlay.style.transition = "opacity 1s ease";
  overlay.style.opacity = 0;
  setTimeout(() => overlay.remove(), 1000);
}, 4000);'script>'
  // Simple click counters
  let totalTaps = 0;
  let donationClicks = 0;
 'tpArea.addEventListener('', () =>
