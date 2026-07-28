let cartCount = 0;

function addCart() {
    cartCount++;

    document.getElementById("cart-count").innerHTML = cartCount;

    alert("Product added to cart!");
}
