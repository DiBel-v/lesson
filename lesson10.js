class Item{
    constructor(name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    }
    render(){
        return `<div class = "item"><h4>${this.name}</h4><span>${this.price}</span>
        <button class = "deleteProd">-</button><span class = "count">${this.count}</span><button class = "addProd">+</button></div>`;
    }
}

class Catalog {
    items
    constructor(url){
        this.url = url;
        this.items = [];
    }
    fetchGoods(){
        return fetch(`http://localhost:3000${this.url}`).then((response)=>
        response.json())
        .then((items) => {
            this.items = items;
        }).catch((err) => {
            console.log('Fetch Error :-S', err);
        });
    }
    render(){
        document.querySelector('.catalog').innerHTML = this.items
        .map((item) =>  new Item(item.name, item.price, item.count = 0).render()).join('');
    }
    addProduct( index, event){
        this.items[index].count = +this.items[index].count + 1;
        event.path[1].children[3].textContent = +event.path[1].children[3].textContent +  1;
    }
    deleteProduct( index, event ){
        if (+this.items[index].count > 0){
            this.items[index].count = +this.items[index].count - 1;
            event.path[1].children[3].textContent = +event.path[1].children[3].textContent -  1;
        }
    }
    calculateProducts(){
        let sum = this.items.reduce((acc,item)=>{
            return acc + item.price * item.count;
        }, 0);
        $calcBask.textContent = `Общая стоимость выбранных товаров: ${sum}`;
        $baskCatal.innerHTML = this.items.map((element) => {
            if (element.count !== 0 ){
            return `<div class = "item"><h4>${element.name}</h4><span>${element.price} рублей</span> Количество: 
        <span class = "count">${element.count}</span></div>`}
        }).join('');
    }
}

const catalog = new Catalog('/goods');
catalog.fetchGoods().then(()=>{
    
    catalog.render();
}).then(()=>{
    $addProd = document.getElementsByClassName('addProd');
    $deleteProd = document.getElementsByClassName('deleteProd');
    $divBasket = document.createElement('div');
    $divBasket.className = "div-basket";
    $butCalc = document.createElement('button');
    $calcBask = document.createElement('span');
    $baskCatal = document.createElement('div');
    $baskCatal.className = "bask-catal";
    $butCalc.textContent = "Посчитать корзину";
    $divBasket.appendChild($butCalc);
    $divBasket.appendChild($calcBask);
    document.querySelector('body').appendChild($divBasket);
    document.querySelector('body').appendChild($baskCatal);
    $butCalc.addEventListener('click', catalog.calculateProducts.bind(catalog))
    Array.from($addProd).forEach((element, index)=>{
        element.addEventListener('click', catalog.addProduct.bind(catalog, index));
    });
    Array.from($deleteProd).forEach((element, index)=>{
        element.addEventListener('click', catalog.deleteProduct.bind(catalog, index));
    });
});
