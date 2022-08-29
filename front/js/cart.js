let productSavedInLocalStorage = getAllProductsFromLocalStorage()
console.log(productSavedInLocalStorage);

let itemsCart = document.querySelector("#cart__items")

//tout d'abord il faut faire une boucle sur le panier de l'utilisateur pour faire un traitement par produit (en destructurant le produit).
for (let [id, colors] of Object.entries(productSavedInLocalStorage)) {
    console.log(colors)
    //la deuxième boucle permets d'aller récupérer la couleur et la quantité
    for (let [color, quantity] of Object.entries(colors)) {
        console.log(color)
        //ce qui ta embete c'est de récupérer tous les produits à chaque boucle alors qu'il ne faut en récupérer qu'un seul
        //avec l'id
        fetch("http://localhost:3000/api/products/" + id)
            .then(response => response.json())
            .then(product => {
                // console.table(product);

                // for (j = 0; j < product.length; j++) {
                const productCart = `
                    <article class="cart__item" data-id="${product._id}" data-color="${product.colors}">
                      <div class="cart__item__img">
                        <img src="${product.imageUrl}" alt="${product.altTxt}"/>
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${product.name}</h2>
                          <p>${product.description}</p>
                          <p>${product.price}€</</p>
                        </div>
                        <div class="cart__item_content__settings">
                          <div class="cart__item__content__settings___quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>
                    </article>
                    `
                itemsCart.innerHTML += productCart;
            })



        let btnsRemove = document.getElementsByClassName("deleteItem")
        Object.values(btnsRemove).forEach(btnRemove => {
            btnRemove.addEventListener('click', function (event) {
                let articleFromBtnRemove = btnRemove.closest("article")
                let idFromArticle = articleFromBtnRemove.getAttribute("data-id")
                let colorFromArticle = articleFromBtnRemove.getAttribute("data-color")
                removeProductToCart(idFromArticle, colorFromArticle)
            })
        })

        let changedQuantitys = document.getElementsByClassName("itemQuantity")
        Object.values(changedQuantitys).forEach(changedQuantity => {
            changedQuantity.addEventListener('change', function (event) {
                let thisQuantityInput = changedQuantitys.closest("div > input")
                // let articleFromChanged = changed.closest("article")
                let idFromArticle = articleFromChanged.getAttribute("data-id")
                let colorFromArticle = articleFromChanged.getAttribute("data-color")
                let quantityFromArticle = articleFromChanged.getAttribute("value")
                //mettre les trois variables pour récupérer l'id, la couleur et la quantité
                //puis les mettre en paramètre dans les parenthèses de l'appel de la fonction
                changeQuantityToCart(idFromArticle, colorFromArticle, quantityFromArticle,)
                event()

            })
        })
    }
}

//   À cet endroit, tu peux commencer à travailler la gestion du formulaire.
// En mettant un écouteur d'événements au clic pour valider chaque champ.

let formProduct = document.querySelector('.cart__order__form')

// Écouter la modification du prénom
formProduct.firstName.addEventListener('change', function () {
    validFirstName(this)
})

const validFirstName = function (inputFirstName) {
   
    let firstNameRegExp = new RegExp(/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/).test(inputFirstName.value)
    console.log(firstNameRegExp);

    if (firstNameRegExp) {
        document.querySelector('#firstNameErrorMsg').innerHTML = ""
        return true
    } else {
        let firstNameErrorMsg = document.getElementById('firstNameErrorMsg')
        firstNameErrorMsg.innerHTML = "Votre prénom doit contenir entre 3 et 20 caractères"
    }
    console.log(firstNameErrorMsg.innerHTML );
}

// Écouter la modification du nom
formProduct.lastName.addEventListener('change', function () {
    validLastName(this)
})

const validLastName = function (inputLastName) {
    
    let lastNameRegExp = new RegExp(/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/).test(inputLastName.value)
    console.log(lastNameRegExp);

    if (lastNameRegExp) {
        document.querySelector('#lastNameErrorMsg').innerHTML = ""
        return true
    } else {
        let lastNameErrorMsg = document.getElementById('lastNameErrorMsg')
        lastNameErrorMsg.innerHTML = "Votre nom doit contenir entre 3 et 20 caractères"
    }
    console.log(lastNameErrorMsg.innerHTML);
}

// Écouter la modification de l'adresse
formProduct.address.addEventListener('change', function () {
    validAddress(this)
})

const validAddress = function (inputAddress) {
    
    let addressRegExp = new RegExp(/^[0-9]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/).test(inputAddress.value)
    console.log(addressRegExp);

    if (addressRegExp) {
        document.querySelector('#addressErrorMsg').innerHTML = ""
        return true
    } else {
        let addressErrorMsg = document.getElementById('addressErrorMsg')
        addressErrorMsg.innerHTML = "Votre adresse est invalide"
    }
    console.log(addressErrorMsg.innerHTML);
}

// Écouter la modification de la ville
formProduct.city.addEventListener('change', function () {
    validCity(this)
})

const validCity = function (inputCity) {
    
    let cityRegExp = new RegExp(/^[a-zA-Zàâäéèêëïîôöùûüç]+(?:[- ][a-zA-Zàâäéèêëïîôöùûüç]+)*$/).test(inputCity.value)
    console.log(cityRegExp);

    if (cityRegExp) {
        document.querySelector('#cityErrorMsg').innerHTML = ""
        return true
    } else {
        let cityErrorMsg = document.getElementById('cityErrorMsg')
        cityErrorMsg.innerHTML = "Votre ville est invalide"
    }
    console.log(cityErrorMsg.innerHTML);
}

// Écouter la modification de l'email
formProduct.email.addEventListener('change', function () {
    validMail(this)
})

const validMail = function (inputEmail) {
    
    let mailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$').test(inputEmail.value)
    console.log(mailRegExp);

    if (mailRegExp) {
        document.querySelector('#emailErrorMsg').innerHTML = ""
        return true
    } else {
        let emailErrorMsg = document.getElementById('emailErrorMsg')
        emailErrorMsg.innerHTML = "Votre adresse mail est invalide"
    }
    console.log(emailErrorMsg.innerHTML);
}

