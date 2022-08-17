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

    console.log(data);

    let addButton = document.querySelector("#addToCart")
    addButton.addEventListener("click", () => {
      let productAdded = {
        id: productId,
        price: parseFloat(productPrice.innerHTML),
        color: data.colors,
        quantity: parseFloat(document.querySelector("#quantity").value),
        // name: productTitle.innerHTML,
        // description: productDescription.innerHTML
      }

      console.log(productAdded);


      let productSavedInLocalStorage = JSON.parse(localStorage.getItem("product"))

      if (productSavedInLocalStorage) {

        productSavedInLocalStorage.push(productAdded)
        localStorage.setItem("product", JSON.stringify(productSavedInLocalStorage))

      } else {

        productSavedInLocalStorage = [];
        productSavedInLocalStorage.push(productAdded)
        localStorage.setItem("product", JSON.stringify(productSavedInLocalStorage))

        console.log(productSavedInLocalStorage)


        function redirectionToCartPage() {
          // Create an alert in the page when a product is added to the cart
          if (
            window.confirm(
              "Votre produit a été ajouté au panier. Pour le consulter, cliquez sur OK."
            )
          ) {
            window.location.href = "cart.html";
          }
        }
        redirectionToCartPage()
        
        addButton();
      }
    })
  })



