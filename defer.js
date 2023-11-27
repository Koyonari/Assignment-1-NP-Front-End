const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting)
        {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


//Cart
const openBtn = document.getElementById("open_cart_btn");
const cart = document.getElementById("sidecart");
const closeBtn = document.getElementById("close_btn");
const backdrop = document.querySelector(".backdrop");
const itemsEl = document.querySelector(".items");
const cartItems = document.querySelector(".cart_items");

const cart_data = [];

openBtn.addEventListener("click", openCart);
closeBtn.addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);

renderItems();
renderCartItems();

//Open cart
function openCart() {
    cart.classList.add("open");
    backdrop.style.display = "block";

    setTimeout(() => {
      backdrop.classList.add("show");
    },0);
}

//Close cart
function closeCart() {
    cart.classList.remove("open");
    backdrop.classList.remove("show");

    setTimeout(() => {
      backdrop.style.display = "none";
    }, 500);
}

//Render items
function renderItems() {
    ITEMS.forEach((item) => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("item");
        itemEl.innerHTML = `
                <img src="${item.image}" alt="Bocchi X Cyberpunk Shirt">
                <div class = "des">
                    <h5>Bocchi X Cyberpunk Shirt</h5>
                    <h4>$25</h4>
                </div>
                <button><a href = "#"><img src="assets/shoppingcart.png" class = "cart" alt="Cart"></a></button>
        `;

        itemsEl.appendChild(itemEl);
})
}

//Display merch
function renderCartItems() {
    cart_data.forEach((item) => {
        const cartItems = document.createElement("div");
        cartItems.classList.add("cart_item");
        cartItems.innerHTML = `
                <div class = "remove_item">
                    <span>&times;</span>
                </div>
                <div class="item_img">
                    <img src = "assets/bocchi cyberpunk shirt.jpg" alt = "">
                </div>
                <div class="item_details">
                    <p>Bocchi X Cyberpunk Shirt</p>
                    <strong>$25</strong>
                    <div class = "qty">
                        <span>-</span>
                        <strong>1</strong>
                        <span>+</span>
                    </div>
                </div>
        `;

        cartItems.appendChild(cartItem);
})
}

//Add to cart
const ITEMS = [
    {
        id: 1,
        name: "Bocchi X Cyberpunk Shirt",
        price: 25,
        image: "assets/bocchi cyberpunk shirt.jpg",
        qty: 1,
    },
    {
        id: 2,
        name: "Appetite for Friendship Hoodie",
        price: 60,
        image: "assets/bocchi friendship hoodie.jpg",
        qty: 1,
    },
    {
        id: 3,
        name: "Back in Pink Hoodie",
        price: 60,
        image: "assets/bocchi hoodie.jpg",
        qty: 1,
    },
    {
        id: 4,
        name: "Kessoku Band Mug",
        price: 15,
        image: "assets/bocchi mug.jpg",
        qty: 1,
    },
    {
        id: 5,
        name: "Hitori Gotoh Guitar Poster",
        price: 10,
        image: "assets/gotoh poster.jpg",
        qty: 1,
    },
    {
        id: 6,
        name: "Hitori Gotoh Rock Poster",
        price: 15,
        image: "assets/hitori gotoh poster.jpg",
        qty: 1,
    },
    {
        id: 7,
        name: "Kessoku Band Logo Shirt",
        price: 25,
        image: "assets/kessoku band shirt.jpg",
        qty: 1,
    },
    {
        id: 8,
        name: "Hitori Gotoh Tote Bag",
        price: 20,
        image: "assets/gotoh tote bag.jpg",
        qty: 1,
    },
    {
        id: 9,
        name: "Kessoku Band Members Shirt",
        price: 25,
        image: "assets/kessoku band shirt2.jpg",
        qty: 1,
    },
    {
        id: 10,
        name: "Ikuyo Kita Hoodie",
        price: 60,
        image: "assets/kita hoodie.jpg",
        qty: 1,
    },
    {
        id: 11,
        name: "Ryo Yamada Hoodie",
        price: 60,
        image: "assets/ryo hoodie.jpg",
        qty: 1,
    },
    {
        id: 12,
        name: "Ikuyo Kita Poster",
        price: 15,
        image: "assets/kita poster.jpg",
        qty: 1,
    },
];