const localStorageAccess = localStorage

function getAllProductsFromLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))

}

function updateLocalStorage(products) {
    return JSON.parse(localStorage.getItem("cart"))
}

function addToCart(id, color, quantity) {
    let cart = updateLocalStorage()
    cart.push(id, color, quantity)
    getAllProductsFromLocalStorage(cart)

}

// get set

// const localStorageAccess = localStorage

// function getAllProductsFromLocalStorage(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart))

// }

// function updateLocalStorage(products) {
//     return JSON.parse(localStorage.getItem("cart"))
// }

// function addToCart(id, color, quantity) {
//     let cart = updateLocalStorage()
//     cart.push(id, color, quantity)
//     getAllProductsFromLocalStorage(cart)

// }