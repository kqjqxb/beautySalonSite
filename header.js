// Зберігаємо посилання на ваш елемент хедера
var header = document.querySelector('.fixed-header');

// Визначаємо висоту хедера
var headerHeight = header.offsetHeight;

// Функція, яка встановлює відступ для контенту залежно від положення користувача
function setMarginTop() {
    var content = document.querySelector('.content');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Якщо користувач у верхній частині сторінки, встановлюємо відступ рівний висоті хедера
    if (scrollTop === 0) {
        content.style.marginTop = headerHeight + 'px';
    } else {
        // Інакше встановлюємо відступ 0
        content.style.marginTop = '0';
    }
}

// Викликаємо функцію після завантаження сторінки та при скролі
window.addEventListener('load', setMarginTop);
window.addEventListener('scroll', setMarginTop);
