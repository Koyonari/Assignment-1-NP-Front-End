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

//Add to cart
const ITEMS = [
    {
        id: 1,
        name: "Bocchi X Cyberpunk Shirt",
        price: 25,
        image: "assets/bocchi_cyberpunk_shirt.jpg",
        qty: 1,
    },
    {
        id: 2,
        name: "Appetite for Friendship Hoodie",
        price: 60,
        image: "assets/bocchi_friendship_hoodie.jpg",
        qty: 1,
    },
    {
        id: 3,
        name: "Back in Pink Hoodie",
        price: 60,
        image: "assets/bocchi_hoodie.jpg",
        qty: 1,
    },
    {
        id: 4,
        name: "Kessoku Band Mug",
        price: 15,
        image: "assets/bocchi_mug.jpg",
        qty: 1,
    },
    {
        id: 5,
        name: "Hitori Gotoh Guitar Poster",
        price: 10,
        image: "assets/gotoh_poster.jpg",
        qty: 1,
    },
    {
        id: 6,
        name: "Hitori Gotoh Rock Poster",
        price: 15,
        image: "assets/hitori_gotoh_poster.jpg",
        qty: 1,
    },
    {
        id: 7,
        name: "Kessoku Band Logo Shirt",
        price: 25,
        image: "assets/kessoku_band_shirt.jpg",
        qty: 1,
    },
    {
        id: 8,
        name: "Hitori Gotoh Tote Bag",
        price: 20,
        image: "assets/gotoh_tote_bag.jpg",
        qty: 1,
    },
    {
        id: 9,
        name: "Kessoku Band Members Shirt",
        price: 25,
        image: "assets/kessoku_band_shirt2.jpg",
        qty: 1,
    },
    {
        id: 10,
        name: "Ikuyo Kita Hoodie",
        price: 60,
        image: "assets/kita_hoodie.jpg",
        qty: 1,
    },
    {
        id: 11,
        name: "Ryo Yamada Hoodie",
        price: 60,
        image: "assets/ryo_hoodie.jpg",
        qty: 1,
    },
    {
        id: 12,
        name: "Ikuyo Kita Poster",
        price: 15,
        image: "assets/kita_poster.jpg",
        qty: 1,
    },
];


const openBtn = document.getElementById("open_cart_btn");
const cart = document.getElementById("sidecart");
const closeBtn = document.getElementById("close_btn");
const backdrop = document.querySelector(".backdrop");
const itemsEl = document.querySelector(".items");
const cartItems = document.querySelector(".cart_items");
const itemsNum = document.getElementById("items_num");
const subTotalPrice = document.getElementById("subtotal_price");

let cart_data = [];

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
};

//Close cart
function closeCart() {
    cart.classList.remove("open");
    backdrop.classList.remove("show");

    setTimeout(() => {
      backdrop.style.display = "none";
    }, 500);
};


//Add Items to cart
function addItem(idx, itemId) {
    //Find same id
    const foundedItem = cart_data.find(
        (item) => item.id.toString() === itemId.toString()
    );

    if (foundedItem) {
        //Increase qty
    } else {
        cart_data.push(ITEMS[idx]);
    };
    updateCart();
    openCart();
}

//Remove item from cart
function removeCartItem(itemId) {
    cart_data = cart_data.filter((item) => item.id != itemId);

    updateCart();
}

//Increase qty
function increaseQty(itemId) {
    cart_data = cart_data.map((item) =>
        item.id.toString() === itemId.toString()
            ? { ...item, qty: item.qty + 1 }
            : item
    );

    updateCart();
}

//Decrease qty
function decreaseQty(itemId) {
    cart_data = cart_data.map((item) =>
        item.id.toString() === itemId.toString()
            ? { ...item, qty: item.qty > 1 ? item.qty - 1: item.qty }
            : item
    );

    updateCart();
}

//Calculate item number
function calcItemsNum() {
    let itemsCount = 0

    cart_data.forEach((item) => itemsCount += item.qty);

    itemsNum.innerText = itemsCount;
}

//Calculate Subtotal
function calcSubtotalPrice() {
    let subtotal = 0

    cart_data.forEach((item) => (subtotal += item.price * item.qty));

    subTotalPrice.innerText = subtotal;
}

//Render items
const itemsContainer = document.querySelector(".items");
function renderItems() {
    itemsContainer.innerHTML = "";

    ITEMS.forEach((item, idx) => {
        const itemEl = document.createEl("div");
        itemEl.onclick = () => addItem(idx, item.id);
        itemEl.classList.add("pro");
        itemEl.innerHTML = `
            <div class = "item">
                <img src="${item.image}" alt="${item.name}">
                <div class = "des">
                    <h5>Bocchi X Cyberpunk Shirt</h5>
                    <h4>$25</h4>
                </div>
                <button><a href = "#"><img src="assets/shoppingcart.png" class = "cart" alt="Cart"></a></button>
            </div>   
        `;

        itemsContainer.appendChild(itemEl);
    });
};

//Display/Render Cart merch
function renderCartItems() {

    //Clear cart items
    cartItems.innerHTML = "";

    //Add data
    cart_data.forEach((item) => {
        const cartItem = document.createEl("div");
        cartItem.classList.add("cart_item");
        cartItem.innerHTML = `
                <div class = "remove_item" onclick = "removeCartItem(${item.id})">
                    <span>&times;</span>
                </div>
                <div class="item_img">
                    <img src = "${item.image}" alt = "">
                </div>
                <div class="item_details">
                    <p>${item.name}</p>
                    <strong>$${item.price}</strong>
                    <div class = "qty">
                        <span onclick = "decreaseQty(${item.id})">-</span>
                        <strong>${item.qty}</strong>
                        <span onclick = "increaseQty(${item.id})">+</span>
                    </div>
                </div>
        `;

        cartItems.appendChild(cartItem);
})
};

function updateCart() {
    renderCartItems();
    calcItemsNum();
    calcSubtotalPrice();
}