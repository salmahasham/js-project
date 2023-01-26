// /////////////////////////////////////////////////////////
let allProducts = document.querySelector('.products')
let products = [
    {
        id: 1,
        title: 'watch 11',
        color: 'red',
        imageUrl: 'images/watch8.jfif',
    },
    {
        id: 2,
        title: 'watch 12',
        color: 'blue',
        imageUrl: 'images/watch8.jfif',
    },
    {
        id: 3,
        title: 'watch 13',
        color: 'green',
        imageUrl: 'images/watch8.jfif',
    },
    {
        id: 4,
        title: 'watch 14',
        color: 'orange',
        imageUrl: 'images/watch8.jfif',
    }
]

function drawItems() {
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="watch1${item.id}">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>the new watch from company 6-202</p>
            <span>color : ${item.color}</span>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onclick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav"></i>
        </div>
        </div>
        `
    })
    allProducts.innerHTML = y
}
drawItems()

let badge = document.querySelector('.badge')
let cartProductDiv = document.querySelector('.cart_products div')

// let addedItem = []
let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : []

if (addedItem) {
    addedItem.map( (item) => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = 'block'
    badge.innerHTML = addedItem.length
}

if (localStorage.getItem('username')) {
    function addToCart(id) {
        let chosenItem = products.find( (item) => item.id === id)
        cartProductDiv.innerHTML += `<p>${chosenItem.title}</p>`
        
        addedItem = [...addedItem, chosenItem]
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))
        
        let cartProductsLength = document.querySelectorAll('.cart_products div p')
        badge.style.display = 'block'
        badge.innerHTML = cartProductsLength.length
    }
} else {
    window.location = 'login.html'
}

// ////////////////////////////////////////////////////////////////////

let shoppingCartIcon = document.querySelector('.shopping_cart')
let cartProducts = document.querySelector('.cart_products')

shoppingCartIcon.addEventListener('click', openCart)

function openCart() {
    if (cartProductDiv.innerHTML != '') {
        if (cartProducts.style.display == 'block') {
            cartProducts.style.display = 'none'
        } else {
            cartProducts.style.display = 'block'
        }
    }
}

// ////////////////////////////////////////////////////////////////////