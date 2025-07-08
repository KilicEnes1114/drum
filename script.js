const keys = document.querySelectorAll('.key');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('speed');
const soundSetSelect = document.getElementById('soundSet');
const recordBtn = document.getElementById('recordBtn');
const playBtn = document.getElementById('playBtn');
const themeToggle = document.getElementById('themeToggle');

let soundSet = 'rock';
let volume = 1;
let speed = 1;
let isRecording = false;
let recording = [];

function playSound(keyCode) {
  const fileName = `${keyCode}.wav`;
  const audioPath = `${soundSet}/${fileName}`;
  const audio = new Audio(audioPath);
  audio.volume = volume;
  audio.playbackRate = speed;
  audio.play();

  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) return;

  // Konsola bilgi yaz
  console.log(`Tuş: ${String.fromCharCode(keyCode)} (${keyCode}) → Ses: ${soundSet}/${fileName}`);

  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 200);

  if (isRecording) {
    recording.push({ keyCode, time: Date.now() });
  }
}

// Klavye ile oynatma
window.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});

// Mouse tıklaması ile oynatma
keys.forEach(key => {
  key.addEventListener("click", () => {
    const keyCode = key.getAttribute("data-key");
    playSound(keyCode);
  });
});

// Ses seti seçimi
soundSetSelect.addEventListener("change", (e) => {
  soundSet = e.target.value;
});

// Ses seviyesi ayarı
volumeSlider.addEventListener("input", (e) => {
  volume = parseFloat(e.target.value);
});

// Tempo ayarı
speedSlider.addEventListener("input", (e) => {
  speed = parseFloat(e.target.value);
});

// Kayıt başlat/durdur
recordBtn.addEventListener("click", () => {
  isRecording = true;
  recording = [];
  recordBtn.textContent = "🔴 Kaydediliyor...";
  setTimeout(() => {
    isRecording = false;
    recordBtn.textContent = "⏺️ Kayıt";
  }, 10000); // 5 saniye kayıt süresi
});

// Kayıt oynatma
playBtn.addEventListener("click", () => {
  if (recording.length === 0) return;
  const startTime = recording[0].time;
  recording.forEach(note => {
    setTimeout(() => playSound(note.keyCode), note.time - startTime);
  });
});

// Gece/gündüz modu
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
