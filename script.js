// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// Typewriter Effect
const texts = ["Web Developer", "Frontend Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typewriter').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 150);
  }
})();
