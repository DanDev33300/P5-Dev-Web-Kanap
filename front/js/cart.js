let productSavedInLocalStorage = getAllProductsFromLocalStorage()
console.log(productSavedInLocalStorage);


const itemsCart = document.querySelector("#cart__items")

let productArticle = document.createElement("article")
itemsCart.appendChild(productArticle)
productArticle.className = "cart__item";

let itemDivImg = document.createElement("div")
productArticle.appendChild(itemDivImg)
itemDivImg.className = "cart__item__img"

let imgProduct = document.createElement("img")
    itemDivImg.appendChild(imgProduct)
    
    let itemContent = document.createElement("div")
    productArticle.appendChild(itemContent)
    itemContent.className = "cart__item__content"
    
    let itemContentDescription = document.createElement("div")
    itemContent.appendChild(itemContentDescription)
    itemContentDescription.className = "cart__item__content__description"
    
    let productName = document.createElement("h2")
    productName.innerText = "Nom du produit"
    let productColor = document.createElement("p")
    productColor.innerText = "Vert"
    let productPrice = document.createElement("p")
    productPrice.innerText = "42,00 €"
    itemContentDescription.appendChild(productName)
    itemContentDescription.appendChild(productColor)
    itemContentDescription.appendChild(productPrice)
    
    let itemContentSettings = document.createElement("div")
    itemContent.appendChild(itemContentSettings)
    itemContentSettings.className = "cart__item__content__settings"
    
    let itemContentSettingsQuantity = document.createElement("div")
    itemContentSettings.appendChild(itemContentSettingsQuantity)
    itemContentSettingsQuantity.className = "cart__item__content__settings__quantity"
    
    let productQuantity = document.createElement("p")
    productQuantity.innerText = "Qté :"
    let productInput = document.createElement("input")
    itemContentSettingsQuantity.appendChild(productQuantity)
    itemContentSettingsQuantity.appendChild(productInput)
    
    let itemContentSettingsDelete = document.createElement("div")
    itemContentSettings.appendChild(itemContentSettingsDelete)
    itemContentSettingsDelete.className = "cart__item__content__settings__delete"
    
    let itemDelete = document.createElement("p")
    itemDelete.innerText = "Supprimer"
    itemContentSettingsDelete.appendChild(itemDelete)
    itemDelete.className = "deleteItem"
    
    fetch("http://localhost:3000/api/products/")
        .then(response => response.json())
        .then(data => {
        console.table(data);
    })
    
    
    
    
    


    
   



    
    
    
    
    
    
    





