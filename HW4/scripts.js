// 1. При изменении значения в input с id="from", значение содержащееся
// в нем должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.
const inputFromElement = document.querySelector('#from');
const spanElement = document.querySelector('span');

inputFromElement.addEventListener('input', e => {
    spanElement.textContent = e.target.value;
});


// 2. При клике на кнопку с классом messageBtn необходимо
// элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const btnMessageElement = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');

btnMessageElement.addEventListener('click', e => {
    messageElement.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageElement.style.visibility = 'visible';
});


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
// форме. Если какое-либо поле не заполнено, форма не должна отправляться,
// также должны быть подсвечены незаполненные поля
// (необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо,
// при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить
// (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error)
// необходимо убрать.
const formElement = document.querySelector('form');
const inputFirstElement = formElement.querySelector('.form-control[type="text"]');
const inputSecondElement = formElement.querySelector('select.form-control');

formElement.addEventListener('submit', e => {
    e.preventDefault();

    if (inputFirstElement.value === '') {
        inputFirstElement.classList.add('error');
    } else {
        inputFirstElement.classList.remove('error');
    }
    if (inputSecondElement.value === '') {
        inputSecondElement.classList.add('error');
    } else {
        inputSecondElement.classList.remove('error');
    }
});

inputFirstElement.addEventListener('input', e => {
    if (inputFirstElement.value !== '') {
        inputFirstElement.classList.remove('error');
    } else {
        inputFirstElement.classList.add('error');
    }
});

inputSecondElement.addEventListener('input', e => {
    if (inputSecondElement.value !== '') {
        inputSecondElement.classList.remove('error');
    } else {
        inputSecondElement.classList.add('error');
    }
});