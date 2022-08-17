let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"))
console.log(productSavedInLocalStorage);

const productSelected = document.querySelector("#cart__items")
console.log(productSelected);

if(productSavedInLocalStorage === null) {
    console.log("Panier vide");
} else {
    console.log("Panier contenant un ou plusieurs produits");
}

