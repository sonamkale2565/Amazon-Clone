let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}


function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


function searchProduct() {

    let searchText =
        document.getElementById("searchInput").value.toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}
