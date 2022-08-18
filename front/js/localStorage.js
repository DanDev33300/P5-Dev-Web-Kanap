const localStorageAccess = localStorage

function getAllProductsFromLocalStorage() {
    const products = localStorageAccess.getItem("cartProduct")
    if (!products) {
        return {}
    }
    return JSON.parse(products)
}

function updateLocalStorage(products) {
    localStorageAccess.setItem("cartProduct",JSON.stringify(products))
}

function addToCart(id, color, quantity) {
    console.log(id);
    let productElements = getAllProductsFromLocalStorage()
    if (productElements[id]) {
        if (productElements[id][color]) {
            productElements[id][color] = parseInt(productElements[id][color]) + parseInt(quantity)
        } else {
            productElements[id][color] = parseInt(quantity)
        }
    }
    if (!productElements[id]) {
        productElements[id] = {
            [color]: parseInt(quantity)
        }

    }

    updateLocalStorage(productElements)
}

