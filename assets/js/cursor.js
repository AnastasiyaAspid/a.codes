const target = document.getElementById('target');

// Создаём кастомный курсор-обводку
const ring = document.createElement('div');
ring.classList.add('custom-ring');
document.body.appendChild(ring);

// Показываем кастомный курсор только внутри блока
target.addEventListener('mouseenter', () => {
  ring.style.display = 'block';
  target.classList.add('custom-cursor');
});

// Скрываем кастомный курсор за пределами блока
target.addEventListener('mouseleave', () => {
  ring.style.display = 'none';
  target.classList.remove('custom-cursor');
});

// Следим за движением мыши

target.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
  
    // Проверяем элемент под курсором
    const elUnder = document.elementFromPoint(x, y);
  
    // Если это <a>, <button> или внутри них — прячем кастомный курсор
    if (elUnder && (elUnder.closest('a') || elUnder.closest('button'))) {
      ring.style.opacity = '0';
    } else {
      ring.style.opacity = '1';
    }
  });
  