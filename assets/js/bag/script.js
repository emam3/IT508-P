//Get Items from Localstorage
let bagItem = JSON.parse(localStorage.getItem("bag"))
//Intialize the wishlist or put it as an empty array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//Created Product Card thar added to bag
let leftSide = document.getElementById('left__side')
console.log(bagItem)
for (let i = 0; i < bagItem?.length; i++) {
    leftSide.innerHTML += `<div class="product__item">
    <figure>
        <img src="${bagItem[i].imgSrc}" alt="">
    </figure>
    <div class="product__content">
        <div class="title__icon">
            <h3>${bagItem[i].title}</h3>
            <i class="fa-solid fa-xmark" style="color: #323334; font-size: 20px; cursor: pointer;" onclick = "removeItem(${bagItem[i].id})"></i>
        </div>
        <h3>${bagItem[i].price}$</h3>
        <div class="product__desc">
            <p>Art. No.: <span>54637253</span></p>
            <p>Size: <span>${bagItem[i].size}</span></p>
            <p>Color: <span>${bagItem[i].color ? bagItem[i].color : "None"}</span></p>
            <p>Total: <span>${bagItem[i].price}</span></p>
        </div>
        <div class="fav__select">
            <div class="select">
            <i class="fa-solid fa-circle-minus" style="color: #323334; font-size: 20px; cursor: pointer;" onclick = "subNum(${bagItem[i].id})"></i>
            <p>${bagItem[i].numOfPiece}</p>
                <i class="fa-solid fa-circle-plus" style="color: #323334; font-size: 20px; cursor: pointer;" onclick = "addNum(${bagItem[i].id})"></i>
            </div>
        </div>
    </div>
</div>`
}

//These Product Counter for Add and Sub
function addNum(x) {
    let addItem = JSON.parse(localStorage.getItem('bag'))
    for (let i = 0; i < addItem?.length; i++) {
        if (addItem[i].id == x) {
            addItem[i].numOfPiece++;
            addItem[i].price = addItem[i].price * addItem[i].numOfPiece
        }
    }
    localStorage.setItem('bag', JSON.stringify(addItem))
    window.location.reload();
}
function subNum(y) {
    let addItem = JSON.parse(localStorage.getItem('bag'));
    let found = false; // Flag to check if the product with the specified ID was found

    for (let i = 0; i < addItem?.length; i++) {
        if (addItem[i].id == y) {
            if (addItem[i].numOfPiece > 1) {
                addItem[i].numOfPiece--;
                addItem[i].price = addItem[i].price / (addItem[i].numOfPiece + 1);
            } else {
                found = true;
            }
        }
    }

    if (found) {
        alert("You cannot choose less than 1.");
    }

    localStorage.setItem('bag', JSON.stringify(addItem));
    window.location.reload();
}

//Remove Item from Shopping Bag
function removeItem(z) {
    let removeItem = JSON.parse(localStorage.getItem('bag'))
    for (let i = 0; i < removeItem?.length; i++) {
        if (removeItem[i].id == z) {
            removeItem.splice(i, 1)
        }

    }
    localStorage.setItem('bag', JSON.stringify(removeItem))
    window.location.reload();
}

//Calculate total Price
let totalPrice = 0;
let bag = JSON.parse(localStorage.getItem("bag"))
for (let i = 0; i < bag.length; i++) {
    totalPrice += bag[i].price
}

let priceElement = document.getElementById('total__price')
let beforeDiscount = document.getElementById('before__discount')
let afterDiscount = document.getElementById('after__discount')

priceElement.innerHTML = `${totalPrice}$`
beforeDiscount.innerHTML = `${totalPrice}$`
afterDiscount.innerHTML = `${totalPrice}$`


let bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag?.length || 0

//Simillar Card Data
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
//Simillar Items Card
function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('products__item', 'swiper-slide');

    const isInBag = bagItem.some(item => item.id === cardData.id);


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
    const isItemInBag = bagItem.some(item => item.id === productId);

    if (isItemInBag) {
        alert("This item already added in your bag");
    } else {
        const productToAdd = cardItemsData.find(product => product.id === productId);

        if (productToAdd) {
            bagItem.push({...productToAdd , numOfPiece: 1 , size: "None"});
            localStorage.setItem("bag", JSON.stringify(bagItem));
            alert("This item added successfully");
            window.location.reload();
        } else {
            alert("Product not found.");
        }
    }
}

//Check if the product already in Shopping cart , hide it from slider
const itemsNotInBag = cardItemsData.filter(cardData => !bagItem.some(item => item.id === cardData.id));

const productsCardContainer = document.querySelector('.similar__main');

for (let i = 0; i < itemsNotInBag.length; i++) {
    const cardElement = createCard(itemsNotInBag[i]);
    productsCardContainer.appendChild(cardElement);
}

//Slider
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