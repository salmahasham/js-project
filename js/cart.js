let productsInCart = localStorage.getItem('productsInCart')
let allProducts = document.querySelector('.products')

if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)
}

function drawCartProducts(products) {
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
            <button class="add_to_cart" onclick="removeFromCart(${item.id})">Remove from cart</button>
        </div>
        </div>
        `
    })
    allProducts.innerHTML = y
}