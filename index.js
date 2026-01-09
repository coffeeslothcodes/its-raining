const container = document.querySelector('.rain-container');
const numberOfDrops = 1000;

for (let i = 0; i < numberOfDrops; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  // Random position
  drop.style.left = Math.random() * 100 + 'vw';
  // Random size
  const size = Math.random() * 3.5 + 0.5;
  drop.style.width = size + 'px';
  drop.style.height = size * 4 + 'px';
  // Random falling
  drop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
  // Random delay
  drop.style.animationDelay = Math.random() * 2 + 's';
  container.appendChild(drop);
}

console.log("Copyrights (C) 2026 coffeeslothcodes");
