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

let bag = JSON.parse(localStorage.getItem("bag")) || [];
let bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag?.length || 0


//Intialize the wishlist or put it as an empty array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//Created Card Dynamiclly
let whishlistproducts = document.getElementById('whishlist__products')
for (let i = 0; i < wishlist?.length; i++) {
    //Check if this item added to the bag or no
const isInBag = bag.some(item => item.id === wishlist[i].id);
    whishlistproducts.innerHTML += `
    <div class="products__item">
    <figure>
            <img src="${wishlist[i].imgSrc}" alt="">
        </figure>
        <div class="card__content__text">
            <h3>${wishlist[i].title}</h3>
            <div class="product__colors">
                ${wishlist[i].colors.map(color => `<p style="background-color: ${color};"></p>`).join('')}
            </div>
            <div class="price__actions">
                <p>${wishlist[i].price}$</p>
                <div class="actions">
                <button onclick="addToCart('${wishlist[i].id}')">
                ${isInBag ? "IN BAG" : "ADD TO CART"}
                </button>
                    <button onclick = "removeItem(${wishlist[i].id})">REMOVE</button>
                </div>
            </div>
        </div>
    </div>
    `
}
//Remove Item from WishList
function removeItem(x) {
    for (let i = 0; i < wishlist?.length; i++) {
        if (wishlist[i].id == x) {
            wishlist.splice(i, 1)
        }
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    window.location.reload();
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