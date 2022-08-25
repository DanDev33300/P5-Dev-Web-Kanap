let productSavedInLocalStorage = getAllProductsFromLocalStorage()
console.log(productSavedInLocalStorage);


//tout d'abord il faut faire une boucle sur le panier de l'utilisateur pour faire un traitement par produit (en destructurant le produit).
for (let [id, colors] of Object.entries(productSavedInLocalStorage)) {
    console.log(colors)
    //la deuxième boucle permets d'aller récupérer la couleur et la quantité
    for (let [color, quantity] of Object.entries(colors)) {
        console.log(color)
        fetch("http://localhost:3000/api/products/")
            .then(response => response.json())
            .then(product => {
                console.table(product);

                let itemsCart = document.querySelector("#cart__items")

                for (j = 0; j < product.length; j++) {
                    const productCart = `
                    <article class="cart__item" data-id="${product[j]._id}" data-color="${product[j].colors}">
                      <div class="cart__item__img">
                        <img src="${product[j].imageUrl}" alt="${product[j].altTxt}"/>
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">${product[j].description}
                          <h2>${product[j].name}</h2>
                          <p>${product[j]}</p>
                          <p>${product[j].price}€</</p>
                        </div>
                        <div class="cart__item_content__settings">
                          <div class="cart__item__content__settings___quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>      
                    </article>
                    `
                    itemsCart.innerHTML = productCart;
                }
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



                changeQuantityToCart

            })
        })
    }
}

  //À cet endroit, tu peux commencer à travailler la gestion du formulaire.
//En mettant un écouteur d'événements au clic pour valider chaque champ.
