let str = "http://localhost:3000/api/products";
let url = new URL(location);
console.log(url);
let urlParams = (url).searchParams
console.log(urlParams);

let productId = urlParams.get("id")
console.log(productId);

fetch('http://localhost:3000/api/products/' + productId)
  .then((response) => response.json())
  .then((data) => {

    let imgContainer = document.querySelector(".item__img")
    let productImg = document.createElement("img")
    productImg.src = data.imageUrl
    productImg.alt = data.altTxt
    imgContainer.appendChild(productImg)

    let pageTitle = document.querySelector("#title")
    pageTitle.innerHTML = data.name

    let priceProduct = document.querySelector("#price")
    priceProduct.innerHTML = data.price

    let descriptionProduct = document.querySelector("#description")
    descriptionProduct.innerHTML = data.description

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
        name: pageTitle.innerHTML,
        color: data.colors,
        price: parseFloat(priceProduct.innerHTML),
        quantity: parseFloat(document.querySelector("#quantity").value),
        id: productId,
        description: descriptionProduct.innerHTML
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
      }
    })
  })




