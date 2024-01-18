// 1. Найти по id, используя getElementById, элемент с id равным "super_link"
//  и вывести этот элемент в консоль.
const superLinkElement = document.getElementById('super_link');
console.log(superLinkElement);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link",
// поменяйте текст внутри элемента на "ссылка".
const cardLinkElement = document.querySelectorAll('.card-link');
cardLinkElement.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link",
// которые лежат в элементе с классом "card-body" и вывести полученную
// коллекцию в консоль.
const cardLinkElInCardBodyEl = document.querySelectorAll('.card-body .card-link');
console.log(cardLinkElInCardBodyEl);

// 4. Найти первый попавшийся элемент на странице у которого есть
// атрибут data-number со значением 50 и вывести его в консоль.
const dataNum50FirstEl = document.querySelector('[data-number="50"]');
console.log(dataNum50FirstEl);

// 5. Выведите содержимое тега title в консоль.
const titleHeadEl = document.querySelector('title');
console.log(titleHeadEl);

// 6. Получите элемент с классом "card-title" и выведите его
// родительский узел в консоль.
const cardTitleElement = document.querySelector('.card-title');
console.log(cardTitleElement.parentNode);

// 7. Создайте тег 'p', запишите внутри него текст "Привет" и добавьте
// созданный тег в начало элемента, который имеет класс "card".
const cardElement = document.querySelector('.card');
const paragraphJS = document.createElement('p');
paragraphJS.textContent = 'Привет';
cardElement.insertBefore(paragraphJS, cardElement.firstChild);

// 8. Удалите тег h6 на странице.
const cardSubTitleElement = document.querySelector('.card-subtitle');
cardSubTitleElement.remove();