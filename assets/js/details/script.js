//All Products Data
const cardItemsData = [
    {
        id: '18',
        imgSrc: './assets/images/store/Rectangle 62.png',
        title: 'Velvet Covered',
        colors: ['#9E6344', '#C4C4C4'],
        price: 111,
    },
    {
        id: '19',
        imgSrc: './assets/images/store/Rectangle 47.png',
        title: 'Candle In Glass Holder',
        colors: ['#C4C4C4'],
        price: 122,
    },
    {
        id: '20',
        imgSrc: './assets/images/store/Rectangle 48.png',
        title: 'Metal Photo Frame',
        colors: ['#F2C94C', '#C4C4C4'],
        price: 133,
    },
    {
        id: '21',
        imgSrc: './assets/images/store/Rectangle 65.png',
        title: 'Round Floor Mat',
        colors: ['#ACAD92', '#C4C4C4'],
        price: 144,
    },
    {
        id: 22,
        imgSrc: './assets/images/store/Rectangle 66.jpg',
        title: 'Class Light Holder',
        colors: ['#770505', '#EB5757'],
        price: 55,
    },
    {
        id: '23',
        imgSrc: './assets/images/store/Rectangle 67.png',
        title: 'Flannel Duvet Cover Set',
        colors: ['#C4C4C4'],
        price: 66,
    },
    {
        id: '24',
        imgSrc: './assets/images/store/Rectangle 70.png',
        title: 'Fitted Cotton Sheet',
        colors: ['#C4C4C4'],
        price: 220,
    },
    {
        id: '25',
        imgSrc: './assets/images/store/Rectangle 71.png',
        title: 'Small Candle in a Small Jar',
        colors: ['#770505', '#C4C4C4', '#EB5757'],
        price: 90,
    },
    {
        id: '26',
        imgSrc: './assets/images/store/Rectangle 72.png',
        title: 'Checked Duvet Cover Set',
        colors: ['#C4C4C4', '#6FCF97'],
        price: 130,
    },
    {
        id: '27',
        imgSrc: './assets/images/store/Rectangle 75.png',
        title: 'Washed Linen Pillowcase',
        colors: ['#C4C4C4'],
        price: 280,
    },
    {
        id: '28',
        imgSrc: './assets/images/store/Rectangle 76.png',
        title: 'Small Candle in a Small Jar',
        colors: ['#C4C4C4', '#DDC1B2'],
        price: 100,
    },
    {
        id: '29',
        imgSrc: './assets/images/store/Rectangle 77.png',
        title: 'Mini Porcelain Dish',
        colors: ['#C4C4C4', '#EB5757'],
        price: 77,
    },
];

const productsCardItemsData = [
    {
        id: '1',
        imgSrc: './assets/images/home/products/Rectangle 5.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 120,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '2',
        imgSrc: './assets/images/home/products/Rectangle 6.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 130,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '3',
        imgSrc: './assets/images/home/products/Rectangle 7.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 140,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '4',
        imgSrc: './assets/images/home/products/Rectangle 8.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 150,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '5',
        imgSrc: './assets/images/home/products/Rectangle 9.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 160,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '6',
        imgSrc: './assets/images/home/products/Rectangle 10.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 170,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '7',
        imgSrc: './assets/images/home/products/Rectangle 11.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 180,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '8',
        imgSrc: './assets/images/home/products/Rectangle 12.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 190,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

//Display bag length on Navbar
let bag = JSON.parse(localStorage.getItem("bag"))
let bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag?.length ||0

//Intialize the wishlist or put it as an empty array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//Get All HTML requirment elements
let firstImg = document.getElementById('first__img')
let secImg = document.getElementById('sec__img')
let thirdImg = document.getElementById('third__img')
let fourthImg = document.getElementById('fourth__img')
let title = document.getElementById('title')
let price = document.getElementById('price')
let description = document.getElementById('description')
let sizeMenu = document.getElementById('size__list')
let setSizeValue = document.getElementById('setSizeValue')


// Get the id parameter from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName('id');
console.log('ID:', id);


let selectedProduct;
for (let i = 0; i < productsCardItemsData.length; i++) {
    if (id == productsCardItemsData[i].id) {
        selectedProduct = productsCardItemsData[i]
        console.log(selectedProduct)
    }
}

// Insert Selected Product Data Inside HTML
firstImg.setAttribute("src", selectedProduct.imgSrc)
secImg.setAttribute("src", selectedProduct.imgSrc)
thirdImg.setAttribute("src", selectedProduct.imgSrc)
fourthImg.setAttribute("src", selectedProduct.imgSrc)
title.innerHTML = selectedProduct.title
price.innerHTML = `${selectedProduct.price}$`
description.innerHTML = selectedProduct.description


// Size selected Menu Logic
function openMenu() {
    sizeMenu.style.display = "block";
}

function closeMenu() {
    sizeMenu.style.display = "none";
}

let sizeValue;

function size(x) {
    sizeValue = x;
    setSizeValue.innerHTML = sizeValue
}

function clearSize() {
    setSizeValue.innerHTML = "Select Size";
}

//Add Selected Product to shopping Bag

function addBag() {
    let addLocalStorage = JSON.parse(localStorage.getItem("bag")) || []
    addLocalStorage.push({ ...selectedProduct, size: sizeValue, numOfPiece: 1 })
    localStorage.setItem("bag", JSON.stringify(addLocalStorage))
    location.reload()
}


//Simillar Items Card
function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('products__item', 'swiper-slide');

    const isInBag = bag.some(item => item.id === cardData.id);


    const cardContent = `
        <figure>
            <img src="${cardData.imgSrc}" alt="">
        </figure>
        <div class="card__content__text">
            <h3>${cardData.title}</h3>
            <div class="product__colors">
                ${cardData.colors.map(color => `<p style="background-color: ${color};"></p>`).join('')}
            </div>
            <div class="price__actions">
                <p>${cardData.price}$</p>
                <div class="simillar__actions">
                <button onclick="addToCart('${cardData.id}')">
                ${isInBag ? "IN BAG" : "ADD TO CART"}
                </button>
                <i id="heart-${cardData.id}" class="fa-regular fa-heart" style="color: #323334; font-size: 20px; cursor: pointer;"
                onclick="addToWishlist('${cardData.id}')"></i>
                </div>
            </div>
        </div>
    `;

    cardItem.innerHTML = cardContent;
    return cardItem;
}

function addToCart(productId) {
    const isItemInBag = bag.some(item => item.id === productId);

    if (isItemInBag) {
        alert("This item already added in your bag");
    } else {
        const productToAdd = cardItemsData.find(product => product.id === productId);

        if (productToAdd) {
            bag.push({...productToAdd , numOfPiece: 1 , size: "None"});
            localStorage.setItem("bag", JSON.stringify(bag));
            alert("This item added successfully");
            window.location.reload();
        } else {
            alert("Product not found.");
        }
    }
}

// Check if the product already in Shopping cart , hide it from slider
const itemsNotInBag = cardItemsData.filter(cardData => !bag.some(item => item.id === cardData.id));

const productsCardContainer = document.querySelector('.similar__main');

for (let i = 0; i < itemsNotInBag.length; i++) {
    const cardElement = createCard(itemsNotInBag[i]);
    productsCardContainer.appendChild(cardElement);
}

// Simillar Items Slider
let swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        567: {
            slidesPerView: 2,
        },
    },
});
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

//update heart icons based on the wishlist state
function updateHeartIcons() {
    cardItemsData.forEach(product => {
        const heartIcon = document.getElementById(`heart-${product.id}`);
        if (heartIcon) {
            if (isInWishlist(product.id)) {
                //product is in the wishlist == heart icon red
                heartIcon.classList.remove("fa-regular");
                heartIcon.classList.add("fa-solid");
                heartIcon.style.color = "#DF1313";
            } else {
                //product is not in the wishlist == regular heart icon
                heartIcon.classList.remove("fa-solid");
                heartIcon.classList.add("fa-regular");
                heartIcon.style.color = "#323334";
            }
        }
    });
}
// Function to add or remove items from the wishlist
function addToWishlist(productId) {
    const isItemInWishlist = isInWishlist(productId);

    if (isItemInWishlist) {
        // Remove item from the wishlist
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateHeartIcons(); // Update the heart icons after removing
        alert("This item has been removed from your wishlist");
    } else {
        const productToAdd = cardItemsData.find(product => product.id === productId);

        if (productToAdd) {
            wishlist.push(productToAdd);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            updateHeartIcons(); // Update the heart icons after adding
            alert("This item has been added to your wishlist");
        } else {
            alert("Product not found.");
        }
    }
    updateHeartIcons();
}

updateHeartIcons();

