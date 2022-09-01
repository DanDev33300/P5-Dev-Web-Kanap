// let url = new URL(location)
// console.log(location);
// let urlParams = (url).searchParams
// console.log(urlParams)
// let productId = urlParams.get("id")
// console.log(productId);

function orderConfirmation() {
    const idHtml = document.querySelector('#orderId')
    idHtml.innerHTML = localStorage.getItem('orderId')
    localStorage.clear()
}

orderConfirmation()