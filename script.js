```javascript
let cart = JSON.parse(localStorage.getItem("amazonCloneCart")) || [];

const cartCount = document.getElementById("cartCount");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");
const category = document.getElementById("category");
const searchBtn = document.getElementById("searchBtn");
const shopBtn = document.getElementById("shopBtn");

function updateCart() {
    let total = 0;

    cart.forEach(function(item) {
        total += item.quantity;
    });

    cartCount.textContent = total;
}

function saveCart() {
    localStorage.setItem(
        "amazonCloneCart",
        JSON.stringify(cart)
    );
}

function showMessage(text) {
    message.textContent = text;
    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 1800);
}

function addToCart(name, price) {
    const existingItem = cart.find(function(item) {
        return item.name === name;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
    showMessage(name + " added to cart");
}

document.querySelectorAll(".addBtn").forEach(function(button) {
    button.addEventListener("click", function() {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        addToCart(name, price);
    });
});

function filterProducts() {
    const text = searchInput.value.toLowerCase().trim();
    const selectedCategory = category.value;

    document.querySelectorAll(".product").forEach(function(product) {
        const name = product.dataset.name.toLowerCase();
        const productCategory = product.dataset.category;

        const matchesText = name.includes(text);
        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === productCategory;

        if (matchesText && matchesCategory) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

searchBtn.addEventListener("click", filterProducts);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filterProducts();
    }
});

category.addEventListener("change", filterProducts);

shopBtn.addEventListener("click", function() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

updateCart();
```
