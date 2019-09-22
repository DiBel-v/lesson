var $catalog = document.getElementById('catalog');
var $card = document.getElementById('card');
var $currentSum = document.getElementById('currentSum');
var $modal = document.getElementById('myModal');
var $modalImg = document.getElementById('modal-img');
var $close = document.getElementsByClassName("close")[0];
var $calc = document.getElementById('bask');
var iMoloko = ["./src/milk1.jpg", "./src/milk2.jpg", "./src/milk3.jpg"];
var iMeat = ["./src/meat1.jpg", "./src/meat2.jpg", "./src/meat3.jpg"];
var iChoco = ["./src/choco.jpg", "./src/choco1.jpg", "./src/choco2.jpg"];
let sum = 0;
var indexImg = 0;
let currentProdImg = [];
//Переменная с массивом объектов в корзине
let productsInBasket = [
    {
        name: "Шоколад",
        currentPrice: 0,
        count: 0
    },
    {
        name: "Мясо",
        currentPrice: 0,
        count: 0
    },
    {
        name: "Молоко",
        currentPrice: 0,
        count: 0
    }
];
//Каталог продуктов
let products = [
    {
        img: iMeat,
        name: "Мясо",
        price: 150
    },
    {
        img: iChoco,
        name: "Шоколад",
        price: 60
    },
    {
        img: iMoloko,
        name: "Молоко",
        price: 70
    }
];

//Получаем шаблон html и записываем все продукты из каталога
function getItems(){
    for(let i = 0; i<products.length; i++){
        let $tmpl = document.getElementById('template').content.cloneNode(true);
        Object.keys(products[i]).forEach(function(key){
            if(key = "name"){
                $tmpl.querySelector('.' + key).textContent = products[i][key];
            }
            if(key = "price") {
                $tmpl.querySelector('.' + key).textContent = `${products[i][key]} руб.`;
            }
            if(key = "img"){
                $tmpl.querySelector('.' + key ).src = products[i][key][0];
            }
        });
        $tmpl.querySelector('.count').id = `count${i}`;
        $tmpl.querySelector('.minus').textContent = '-';
        $tmpl.querySelector('.button').textContent = '+';
        $tmpl.querySelector('.img').addEventListener('click', handleOpenImage.bind(null,products[i]));
        $tmpl.querySelector('.button').addEventListener('click', handleAddToBusket.bind(null,products[i]));
        $tmpl.querySelector('.minus').addEventListener('click', handleDeleteFromBusket.bind(null,products[i]));
        $catalog.appendChild($tmpl);
    }
}

//Обработчик событий при добавлении продукта в корзину
function handleAddToBusket(product){
    for(let i = 0; i < productsInBasket.length; i++){
        if (productsInBasket[i].name === product.name){
            productsInBasket[i].currentPrice += product.price;
            $pos = document.getElementById(`count${products.map(function(e) { return e.name;}).indexOf(productsInBasket[i].name)}`);
            $pos.textContent = ++productsInBasket[i].count;
        }
    }
    sum = productsInBasket.reduce((acc,item) => {
        return acc + item.currentPrice;
    }, 0);
}

//Обработчик событий при удалении продукта из корзины
function handleDeleteFromBusket(product){
    for(let i = 0; i < productsInBasket.length; i++){
        if (productsInBasket[i].name === product.name && productsInBasket[i].count > 0){
            productsInBasket[i].currentPrice -= product.price;
            pos = products.map(function(e) { return e.name;}).indexOf(productsInBasket[i].name);
            $pos = document.getElementById(`count${pos}`);
            $pos.textContent = --productsInBasket[i].count;
            if (sum > 0) {
                sum = Math.abs(productsInBasket.reduce((acc,item) => {
                    return acc - item.currentPrice;
                }, 0));
            }
        }
    }
}
//Открытие картинки в модальном окне
function handleOpenImage(product){
    $modal.style.display = "block";
    document.querySelector(".modal-header > h2").textContent = product.name;
    $modalImg.src = product.img[0];
    currentProdImg = product.img;
    window.addEventListener('keydown', handleChangeItemOnKey);

}

$modalImg.addEventListener('click', handleChangeImg);

//Обработчик событий при клике на картинку в модальном окне
function handleChangeImg(event){
    ++indexImg;
    console.log(indexImg);
    if(indexImg === currentProdImg.length){
        indexImg = 0;
    }
    $modalImg.src = currentProdImg[indexImg];
}

//Обработчик событий для изменения картинки на нажатие клавиши "влево" или "вправо"
function handleChangeItemOnKey(event){
    console.log(indexImg);
    if( event.code === "ArrowLeft"){
        --indexImg;
        if(indexImg === -1){
            indexImg = currentProdImg.length-1;
        }
    }
    if( event.code === "ArrowRight"){
        ++indexImg;
        if(indexImg === currentProdImg.length){
            indexImg = 0;
        }
    }
    $modalImg.src = currentProdImg[indexImg];
}

//Закрыть модальное окно
$close.onclick = function(){
    $modal.style.display = "none";
}

$calc.addEventListener('click', ()=>
sum>0?$currentSum.textContent = `Сумма покупок составит: ${sum}`:$currentSum.textContent = 'Корзина пуста');
getItems();

//Lesson 9
//Task1,2
function Basket(){
    let size = 0; //Количество выбранных уникальных товаров
    let currentSum = 0;
    let products = [];
}
//products - массив содержит набор элементов класса Product
Basket.prototype.addProduct = function(product){
    //Добавить продукт в корзину, инкрементировать size
}
Basket.prototype.summarize = function(){
    //Запись в currentSum всех выбранных продуктов
}
Basket.prototype.clear = function(){
    //Очистить корзину
}
Basket.prototype.getProducts = function(){
    //Получить все добавленные в корзину товары
}

function Product(name,price){
    this.amount;
    this.price = price;
    this.name = name;
}

Product.prototype.incrementProd = function(){
    //Инкриментировать amount
}
Product.prototype.decrementProd = function(){
    //Декрементировать amount
}