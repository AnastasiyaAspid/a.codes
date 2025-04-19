// Анимации, которые должны запускаться СРАЗУ:

// Обо мне
const observer_2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-two');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});
document.querySelectorAll('.me').forEach((el) => observer_2.observe(el));

// Неон
const observer_3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-three');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});
document.querySelectorAll('.me__neon').forEach((el) => observer_3.observe(el));

// Заголовки
const observer_4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-four');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});
document.querySelectorAll('.title').forEach((el) => observer_4.observe(el));


// --- Анимации, которые должны запускаться ТОЛЬКО после прелоадера:

function runObserver() {
  // Кнопка
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  document.querySelectorAll('.link').forEach((el) => observer.observe(el));

  // Постер
  const observer_5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-five');
        observer_5.unobserve(entry.target);
      }
    });
  }, {
    threshold: 1
  });
  document.querySelectorAll('.hero__img').forEach((el) => observer_5.observe(el));
}

// Ссылки в хэдере

document.addEventListener('preloader:done', () => {
  // Запуск всех Observer'ов
  runObserver();

  // Просто добавляем класс всем ссылкам сразу
  document.querySelectorAll('.header__link').forEach(link => {
    link.classList.add('flash');
  });
});




// Запускаем только после завершения прелоадера
document.addEventListener('preloader:done', () => {
  runObserver();
});
