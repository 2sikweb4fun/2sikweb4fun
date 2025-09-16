// Intro overlay with animated $ikCash-oUt card
(function introOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'introOverlay';
  Object.assign(overlay.style, {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,.95)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
  });
  const card = document.createElement('div');
  card.id = 'cashCardIntro';
  card.textContent = '$ikCash-oUt';
  Object.assign(card.style, {
    padding: '40px 60px', background: '#0f0', color: '#000', fontWeight: 'bold',
    fontSize: '2rem', borderRadius: '20px', boxShadow: '0 0 30px #39ff14',
    transform: 'perspective(600px) rotateY(0deg)',
    animation: 'rotateCard 2.5s ease-in-out'
  });
  overlay.appendChild(card);
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.style.transition = 'opacity 1s ease';
    overlay.style.opacity = 0;
    setTimeout(() => overlay.remove(), 1000);
  }, 4000);
})();

// Play tear audio when section enters viewport (once)
(function tearAudio() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const id = section.id.replace('tear-', '');
        const audio = document.getElementById(`tear-audio-${id}`);
        if (audio && !audio.dataset.played) {
          audio.play().catch(()=>{});
          audio.dataset.played = '1';
        }
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.tear-section').forEach(sec => io.observe(sec));
})();

// Product hover: play voice once per visit
(function productVoices() {
  const once = (el) => {
    if (!el || localStorage.getItem(el.id + ':played')) return false;
    localStorage.setItem(el.id + ':played', '1'); return true;
  };

  const pairs = [
    ['hoodie-card',  'hoodie-voice'],
    ['caps-card',    'caps-voice'],
    ['beanies-card', 'beanies-voice']
  ];
  pairs.forEach(([cardId, voiceId]) => {
    const card = document.getElementById(cardId);
    const voice = document.getElementById(voiceId);
    if (!card || !voice) return;
    card.addEventListener('mouseenter', () => { if (once(voice)) voice.play().catch(()=>{}); });
  });
})();

// Hoodie flip swap (extra visual)
(function hoodieFlip() {
  const card = document.getElementById('hoodie-card');
  const front = document.getElementById('hoodie-front');
  const back  = document.getElementById('hoodie-back');
  if (!card || !front || !back) return;
  card.addEventListener('mouseover', () => { front.style.visibility='hidden'; back.style.visibility='visible'; });
  card.addEventListener('mouseout',  () => { front.style.visibility='visible'; back.style.visibility='hidden'; });
})();

// Footer voice
(function footerVoice() {
  const footer = document.querySelector('footer');
  const voice  = document.getElementById('about-voice');
  if (!footer || !voice) return;
  footer.addEventListener('mouseenter', () => { voice.currentTime = 0; voice.play().catch(()=>{}); });
})();