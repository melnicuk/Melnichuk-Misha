const toggle = document.getElementById('theme-toggle-checkbox');

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.style.backgroundColor = '#F9E1B5'; 
  } else {
    document.body.style.backgroundColor = '#ba8150'; 
  }
});

// Відображаємо товари на сторінці
getProducts().then(function(products){
    let productsList = document.querySelector('.products-list')
    if (productsList) { 
        products.forEach(function(product) {
            productsList.innerHTML += getCardHTML(product)
        })
    }
})

function getCardHTML(product) {
    return `<div class="my-card" style="">
            <img src="img/${product.image}">
            <h5 class="text-my-card">${product.title}</h5>
            <p class="description-card"> ${product.description} </p>
            <p class="price-card">${product.price} грн</p>
            <button type="button" class="cart-btn">Купити</button>
        </div>`
}
async function getProducts (){
    let response = await fetch("store_db.json")
    let products = await response.json()
    return products
}
