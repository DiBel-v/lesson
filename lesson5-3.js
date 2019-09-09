//task 3
let $catalog = document.getElementById('catalog');
let catalogProducts = [
    {
        icon: "./src/t-shirt.jpg",
        name: "T-shirt",
        count: 10,
        price: 500
    },
    {
        icon: "./src/skirt.jpg",
        name: "Skirt",
        count: 15,
        price: 1000
    },
    {
        icon: "./src/sneakers.jpg",
        name: "Sneakers",
        count: 12,
        price: 5000
    }
];
let getProd = function getProducts(products){
    for ( let i = 0; i < products.length; i++ ){
        let $product = document.createElement('div');
        let $leftSideImg = document.createElement('img');
        let $rightSide = document.createElement('div');
        let $head = document.createElement('h3');
        let $count = document.createElement('span');
        let $price = document.createElement('span')
        $product.className = "card";
        $leftSideImg.className = "image";
        $rightSide.className = "rightSide";
        $head.className = "head";
        $count.className = "count";
        $price.className = "price";
        $leftSideImg.src = products[i].icon;
        $leftSideImg.alt = products[i].name;
        $head.textContent = products[i].name;
        $head.style.fontStyle = "italic";
        $count.textContent = `Количество на складе: ${products[i].count} шт.`;
        $price.textContent = `Стоимость за шт.: ${products[i].price} руб.`;
        $product.appendChild($leftSideImg);
        $product.appendChild($rightSide);
        $rightSide.appendChild($head);
        $rightSide.appendChild($count);
        $rightSide.appendChild($price);
        $catalog.appendChild($product);
    }
}
getProd(catalogProducts);