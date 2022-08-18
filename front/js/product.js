//----------------------------------------------------------------
// Récupération de l'ID produit via l'URL
//----------------------------------------------------------------
let str = "http://localhost:3000/api/products";
let url = new URL(location);
console.log(url);
let urlParams = (url).searchParams
console.log(urlParams);

let productId = urlParams.get("id")
console.log(productId);

//--------------------------------------------------------------------------
// Récupération des produits de l'api et traitement des données
//--------------------------------------------------------------------------

fetch('http://localhost:3000/api/products/' + productId)
  .then((response) => response.json())
  .then((data) => {

    let imgContainer = document.querySelector(".item__img")
    let productImg = document.createElement("img")
    productImg.src = data.imageUrl
    productImg.alt = data.altTxt
    imgContainer.appendChild(productImg)

    let productTitle = document.querySelector("#title")
    productTitle.innerHTML = data.name

    let productPrice = document.querySelector("#price")
    productPrice.innerHTML = data.price

    let productDescription = document.querySelector("#description")
    productDescription.innerHTML = data.description

    let colorSelect = document.querySelector("#colors")
    for (let color of data.colors) {
      console.log(color);

      let option = document.createElement("option")
      option.value = color
      option.innerHTML = color
      colorSelect.appendChild(option)
    }

    let userQuantity = document.querySelector("#quantity")
    let addButton = document.querySelector("#addToCart")

    addButton.addEventListener("click", () => {

      let userChosenColor = colorSelect.value
      let userChosenQuantity = userQuantity.value
      console.log(userChosenColor)
      console.log(userChosenQuantity)

      if (userChosenQuantity >= 1 && userChosenQuantity <= 100) {
        if (userChosenColor === "") {
          window.alert("Veuillez choisir une couleur")
          
        } else {
          addToCart(productId, userChosenColor, userChosenQuantity)
        }
      }
    })
  })








