const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const letters = 'アイウエオカキクケコサシスセソ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars = letters.split('');
let fontSize = 14;
let columns = 0;
let drops = [];

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () => Math.random() * -100);
}

function drawRain() {
  ctx.fillStyle = 'rgba(1, 6, 3, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#53ff88';
  ctx.font = `${fontSize}px Share Tech Mono`;

  drops.forEach((drop, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = drop * fontSize;

    ctx.fillText(char, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i] += 1;
  });
}

setupCanvas();
window.addEventListener('resize', setupCanvas);
setInterval(drawRain, 38);
