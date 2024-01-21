// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
// "super-dropdown", необходимо использовать методы forEach и querySelectorAll
// и свойство classList у элементов.
const dropdownElements = document.querySelectorAll('.dropdown');
dropdownElements.forEach(element => {
    element.classList.add('super-dropdown');
});
console.log(dropdownElements);


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса
// у элемента не было.
const btnElement = document.querySelector('.btn');
if (btnElement.classList.contains('btn-secondary')) {
    btnElement.classList.remove('btn-secondary');
    console.log('Class btn-secondary removed from button');
} else {
    btnElement.classList.add('btn-secondary');
    console.log('Class btn-secondary added to button');
};

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
// присутствует класс "menu".
const menuElement = document.querySelector('.menu');
menuElement.classList.remove('dropdown-menu');
console.log(menuElement);

// 4. Используя метод insertAdjacentHTML добавьте после
// diva с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const divDropdown = btnElement.parentElement;
divDropdown.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown"
const dropdownIDElement = document.getElementById('dropdownMenuButton');
dropdownIDElement.id = 'superDropdown';
console.log(dropdownIDElement);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
// атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaElement = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaElement.dataset.dd = '3';
console.log(ariaElement);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggleElement = document.querySelector('.dropdown-toggle')
dropdownToggleElement.removeAttribute('type');
console.log(dropdownToggleElement);