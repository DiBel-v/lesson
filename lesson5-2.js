//task2
var $basket = document.getElementById("basket");

function calcBasket(products) {
    let sum = products.reduce((acc, product) => {
        console.log(product);
        return acc + product.count * product.price;
    }, 0);
    return sum;
}
let productsInBasket = [{
        name: 'Шоколад',
        count: 4,
        price: 50
    },
    {
        name: 'Мясо',
        count: 2,
        price: 150
    },
    {
        name: 'Молоко',
        count: 2,
        price: 70
    }
];
let sumBask;
sumBask = calcBasket(productsInBasket);
let $button = document.createElement('button');
$button.textContent = "Посчитать корзину";

$button.onclick = function onClick() {
    let $txt = document.createElement('div');
    if (sumBask) {
        $txt.textContent = `В корзине: ${productsInBasket.reduce((acc, product) => {
            return acc + product.count;
        }, 0)} товаров на сумму ${sumBask} рублей.`
    } else {
        $txt.textContent = "В корзине нет продуктов."
    }
    $basket.appendChild($txt);
}
$basket.appendChild($button);