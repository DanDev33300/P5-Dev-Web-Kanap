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

                //mettre les trois variables pour récupérer l'id, la couleur et la quantité
                //puis les mettre en paramètre dans les parenthèses de l'appel de la fonction
                changeQuantityToCart()

            })
        })
    }
}

//   À cet endroit, tu peux commencer à travailler la gestion du formulaire.
// En mettant un écouteur d'événements au clic pour valider chaque champ.


