// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const usersData = JSON.parse(dataInfo);
const contentBoxElement = document.querySelector('.content');

usersData.forEach(user => {
    const contentItemElement = document.createElement('div');
    contentItemElement.classList.add('content__item');
    contentBoxElement.append(contentItemElement);

    const itemImgEl = document.createElement('img');
    itemImgEl.classList.add('content__item__img');
    itemImgEl.src = user.image;
    itemImgEl.setAttribute('alt', 'avatar');
    contentItemElement.append(itemImgEl);

    const itemDescWrapEl = document.createElement('div');
    itemDescWrapEl.classList.add('content__item__descwrap');
    contentItemElement.appendChild(itemDescWrapEl);

    const itemName = document.createElement('h3');
    itemName.classList.add('content__item__name');
    itemName.textContent = `Name: ${user.name}`;
    itemDescWrapEl.append(itemName);

    const itemSpecies = document.createElement('p');
    itemSpecies.classList.add('content__item__species');
    itemSpecies.textContent = `Species: ${user.species}`;
    itemDescWrapEl.append(itemSpecies);

    const itemStatus = document.createElement('p');
    itemStatus.classList.add('content__item__status');
    itemStatus.textContent = `Status: ${user.status}`;
    itemDescWrapEl.append(itemStatus);

    const itemOrigin = document.createElement('p');
    itemOrigin.classList.add('content__item__origin');
    itemOrigin.textContent = `Origin: ${user.origin}`;
    itemDescWrapEl.append(itemOrigin);

    const itemLink = document.createElement('a');
    itemLink.classList.add('content__item__link');
    itemLink.href = user.url;
    itemLink.textContent = `Link for ${user.name} API info`;
    itemDescWrapEl.append(itemLink);
});