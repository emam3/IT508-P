//Display bag length on Navbar
let bag = JSON.parse(localStorage.getItem("bag")) || [];
let bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag?.length || 0

//Intialize the wishlist or put it as an empty array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//All Cards Data
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

//Created Card Dynamiclly
function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('products__item');

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
                <div class="actions">
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
            bag.push({ ...productToAdd, numOfPiece: 1, size: "None" });
            localStorage.setItem("bag", JSON.stringify(bag));
            alert("This item added successfully");
            window.location.reload();
        } else {
            alert("Product not found.");
        }
    }
}
//check if a product is in the wishlist
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
//filtering by color
let filteredProducts = [];
function filterByColor(color) {
    filteredProducts = cardItemsData.filter(product => product.colors.includes(color));
    productsCardContainer.innerHTML = '';
    for (let i = 0; i < filteredProducts.length; i++) {
        const cardElement = createCard(filteredProducts[i]);
        productsCardContainer.appendChild(cardElement);
    }
}

//filtering by price
let filteredProductsByPrice = [];
let selectedPriceRanges = [];
function filterByPrice(priceRange) {
    const index = selectedPriceRanges.indexOf(priceRange);

    if (index === -1) {
        selectedPriceRanges.push(priceRange);
    } else {
        selectedPriceRanges.splice(index, 1);
    }
    if (selectedPriceRanges.length === 0) {
        filteredProductsByPrice = cardItemsData;
    } else {
        filteredProductsByPrice = cardItemsData.filter(product => {
            const productPrice = parseFloat(product.price);
            return selectedPriceRanges.some(range => {
                const [minPrice, maxPrice] = range.split('-').map(parseFloat);
                return productPrice >= minPrice && productPrice <= maxPrice;
            });
        });
    }
    productsCardContainer.innerHTML = '';
    for (let i = 0; i < filteredProductsByPrice.length; i++) {
        const cardElement = createCard(filteredProductsByPrice[i]);
        productsCardContainer.appendChild(cardElement);
    }
}

const productsCardContainer = document.querySelector('.filtered__products');

for (let i = 0; i < cardItemsData.length; i++) {
    const cardElement = createCard(cardItemsData[i]);
    productsCardContainer.appendChild(cardElement);
}

updateHeartIcons();
