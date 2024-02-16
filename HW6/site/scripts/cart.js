const products = JSON.parse(dataProducts);
const cartLeftElement = document.querySelector('.cart-left')

products.forEach((element, index) => {
    const cartLeftItem = document.createElement('div');
    cartLeftItem.classList.add('cart-left-item');
    cartLeftElement.insertBefore(cartLeftItem, cartLeftElement.lastElementChild);

    const cartItemImg = document.createElement('img');
    cartItemImg.src = element.image;
    cartItemImg.alt = element.alt;
    cartLeftItem.append(cartItemImg);

    const cartItemInfoWrap = document.createElement('div');
    cartItemInfoWrap.classList.add('cart-item-info');
    cartLeftItem.append(cartItemInfoWrap);

    const cartItemName = document.createElement('a');
    cartItemName.classList.add('cart-item-title');
    cartItemName.href = 'catalogItem.html';
    cartItemName.textContent = element.name;
    cartItemInfoWrap.append(cartItemName);

    const cartItemPrice = document.createElement('p');
    cartItemPrice.classList.add('cart-item-discription');
    const spanPrice = document.createElement('span');
    spanPrice.classList.add('cart-item-discription-span-p');
    spanPrice.textContent = element.price;
    cartItemPrice.textContent = 'Price: ';
    cartItemPrice.append(spanPrice);
    cartItemInfoWrap.append(cartItemPrice);

    const cartItemColor = document.createElement('p');
    cartItemColor.classList.add('cart-item-discription');
    cartItemColor.textContent = `Color: ${element.color}`;
    cartItemInfoWrap.append(cartItemColor);

    const cartItemSize = document.createElement('p');
    cartItemSize.classList.add('cart-item-discription');
    cartItemSize.textContent = `Size: ${element.size}`;
    cartItemInfoWrap.append(cartItemSize);

    const cartInputWrap = document.createElement('div');
    cartInputWrap.classList.add('cart-item-discription');
    cartItemInfoWrap.append(cartInputWrap);

    const cartInput = document.createElement('input');
    cartInput.classList.add('cart-item-discription-span-q');
    cartInput.type = 'number';
    cartInput.min = 1;
    cartInput.value = 1;
    cartInput.id = 'number' + index;
    const cartQuantity = document.createElement('label');
    cartQuantity.classList.add('cart-item-inputWrap');
    cartQuantity.textContent = 'Quantity:'
    cartQuantity.append(cartInput);
    cartInputWrap.append(cartQuantity);
});