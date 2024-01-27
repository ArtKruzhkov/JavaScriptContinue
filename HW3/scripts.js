// 1. Необходимо вывести сообщение в консоль "все теги прогрузились",
// когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', e => {
    console.log('все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась",
// когда все ресурсы страницы будут загружены.
let pageLoaded = 0;
window.addEventListener('load', e => {
    const imgEls = document.querySelectorAll('img');
    imgEls.forEach(element => {
        if (element.width === 0) {
            console.log(`Ошибка при загрузке изображения(https://placeimg.com/ - хостинг больше не работет) ${element.src}`);
            pageLoaded++;
        }
    });
    if (pageLoaded === 0) {
        console.log('страница загрузилась');
    } else {
        console.log('странице не удалось загрузиться полностью');
    }
});

// 3.При клике на какой-либо тег на странице в консоль должно выводиться
// сообщение наподобие:Класс "super_element" присутствует в элементе "div".
// сообщение должно определять присутствует или отсутствует класс "super_element"
// у элемента, а также выводить в нижнем регистре верный тег
// в данной строке, по которому был совершен клик.
// Необходимо использовать делегирование.
window.addEventListener('click', e => {
    console.log('Вы кликнули по');
    console.log(e.target);
    if (e.target.classList.contains('super_element')) {
        console.log('Класс super_element присутствует в данном элементе');
    } else {
        console.log('Класс super_element отсутвует в данном элементе');
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось 
// сообщение: "Вы навели на textarea."
const textAreaElement = document.querySelector('textarea');
textAreaElement.addEventListener('mouseover', e => {
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике 
// события в консоль необходимо выводить текст, который записан внутри 
// элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, 
// то ничего выводить не нужно. Необходимо использовать делегирование.
const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});

// 6. Почему в console.log пишется сначала текст из 5 задания и только потом
// выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Обрабатываются в порядке всплытия событий. Сначала обрабатывается слушатель
// события для ul а только потом для родителей (window из задания 3).


// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liElememts = document.querySelectorAll('li');
liElememts.forEach(function (element, index) {
    if (index % 2 === 1) {
        element.style.backgroundColor = 'grey';
    }
});