// Функция для добавления класса "visible" элементам, когда они появляются в области видимости
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Прекращаем отслеживание элемента, когда он стал видимым
      }
    });
  }, { threshold: 0.2 }); // Элемент должен быть на 20% видимым
  
  // Настройка наблюдателя для всех элементов списка
  document.querySelectorAll('.card__item').forEach(item => {
    observer.observe(item);
  });
  