
//Products List

const cardItemsData = [
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

function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card__item');

    const cardContent = `
        <figure>
            <img src="${cardData.imgSrc}" alt="">
        </figure>
        <div class="card__content__text">
            <h3>${cardData.title}</h3>
            <div class="rates">
                ${Array(cardData.stars).fill('<i class="fa-regular fa-star" style="color: #F2C94C;"></i>').join('')}
                ${Array(5 - cardData.stars).fill('<i class="fa-regular fa-star" style="color: #000000;"></i>').join('')}
            </div>
            <p>${cardData.price}$</p>
        </div>
        <div class="hover__div">
            <div class="hover__text">
                <h3>${cardData.category}</h3>
                <p>${cardData.description}</p>
                <button onclick= "navigate('${cardData.id}');">VIEW ALL</button>
            </div>
        </div>
    `;

    cardItem.innerHTML = cardContent;
    return cardItem;
}

const productsCardContainer = document.querySelector('.products__card');

for (let i = 0; i < cardItemsData.length; i++) {
    const cardElement = createCard(cardItemsData[i]);
    productsCardContainer.appendChild(cardElement);
}

//Top Raiting List
let getBag = JSON.parse(localStorage.getItem("bag")) || [];

const topRatedProductsData = [
    {
        id: '9',
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 30,
    },
    {
        id: '10',
        imgSrc: './assets/images/home/toprating/Rectangle 27.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 40,
    },
    {
        id: '11',
        imgSrc: './assets/images/home/toprating/Rectangle 28.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '50',
    },
    {
        id: '12',
        imgSrc: './assets/images/home/toprating/Rectangle 29.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 60,
    },
    {
        id: '13',
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 70,
    },
    {
        id: '14',
        imgSrc: './assets/images/home/toprating/Rectangle 30.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 80,
    },
    {
        id: '15',
        imgSrc: './assets/images/home/toprating/Rectangle 31.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 90,
    },
    {
        id: '16',
        imgSrc: './assets/images/home/toprating/Rectangle 32.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 100,
    },
    {
        id: '17',
        imgSrc: './assets/images/home/toprating/Rectangle 33.png',
        title: 'Tray with Foot',
        stars: 4,
        price: 110,
    },
];

function createTopRatedCard(productData) {
    const topRatedCard = document.createElement('div');
    topRatedCard.classList.add('top__raiting__card');

    const isInBag = getBag.some(item => item.id === productData.id);


    const cardContent = `
        <div class="card__items">
            <figure>
                <img src="${productData.imgSrc}" alt="">
            </figure>
            <div class="top__raiting__content">
                <h3>${productData.title}</h3>
                <div class="rates">
                    ${Array(productData.stars).fill('<i class="fa-regular fa-star" style="color: #F2C94C;"></i>').join('')}
                    ${Array(5 - productData.stars).fill('<i class="fa-regular fa-star" style="color: #000000;"></i>').join('')}
                </div>
                <p>${productData.price}$</p>
                <button onclick="addToCart('${productData.id}')">
                    ${isInBag ? "IN BAG" : "ADD TO CART"}
                </button>
            </div>
        </div>
    `;

    topRatedCard.innerHTML = cardContent;
    return topRatedCard;
}

const topRatedProductsContainer = document.querySelector('.top__rating__products');

for (let i = 0; i < topRatedProductsData.length; i++) {
    const topRatedCardElement = createTopRatedCard(topRatedProductsData[i]);
    topRatedProductsContainer.appendChild(topRatedCardElement);
}

function addToCart(productId) {
    const isItemInBag = getBag.some(item => item.id === productId);

    if (isItemInBag) {
        alert("This item already added in your bag");
    } else {
        const productToAdd = topRatedProductsData.find(product => product.id === productId);

        if (productToAdd) {
            getBag.push({...productToAdd , numOfPiece: 1 , size: "None"});
            localStorage.setItem("bag", JSON.stringify(getBag));
            alert("This item added successfully");
            window.location.reload();
        } else {
            alert("Product not found.");
        }
    }
}


//Navigate to description page
function navigate(id) {
    const url = `details.html?id=${id}`;
    window.location.href = url;
}

//To display the length of bag
let bag = JSON.parse(localStorage.getItem("bag"))
let bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag?.length || 0

