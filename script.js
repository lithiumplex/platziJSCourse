const emailMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const productDetail = document.querySelector(".product-detail")
const shoppiingCar = document.querySelector(".navbar-shopping-cart") 
const cardsContainer = document.querySelector(".cards-container")

navEmail.addEventListener('click',toggleEmailMenu);
hamMenu.addEventListener('click',toggleMobileMenu);
shoppiingCar.addEventListener('click',toggleProductDetail)

function toggleEmailMenu(){
    emailMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleProductDetail(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    emailMenu.classList.add('inactive');
}

const productList = [];

productList.push(
    {
        name: "bike",
        price: 234,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "bike",
        price: 450,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "bike",
        price: 359,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "bike",
        price: 234,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "bike",
        price: 450,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "bike",
        price: 359,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const  productInfoDiv = document.createElement('div');
    
        const  productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure =  document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productCard.append(img,productInfo);
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productInfoFigure.append(productImgCard);
        productInfoDiv.append(productPrice,productName);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)