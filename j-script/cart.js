// variables

const cartBtn = document.querySelector(".cart-icon");
const closeCartBtn = document.querySelector(".close-icon");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart_main");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".quantity");
const cartTotal = document.querySelector(".total_price");
const cartContent = document.querySelector(".cartContainer");
const productsDOM = document.querySelector(".week-section-container");
// const btns = document.querySelectorAll('.addTo-cart');

// cart
let cart = [];
//buttons
let buttonsDOM = [];

// getting the products
class Products {
  
}
// display products
class UI {
//   displayProducts(products) {
//     let result = "";
//     products.forEach(product => {
//       result += `
//      <div class="week-prod product-box">
//           <a href=""><img src=${product.img} alt="" class="week-img"></a>
//           <a href="#" class="new-p-link">${product.desc}</a>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//           <div class="price-cart">
//             <h5>${product.price}</h5>
//             <button data-id=${product.id} class='addBtn addTo-cart add-cart' name='add-cart'>Add To Cart</button>
//           </div>
//         </div>
//     `;
//     });
//     productsDOM.innerHTML = result;
//   }
  getAddButtons() {
    const buttons = [...document.querySelectorAll(".addTo-cart")];
    buttonsDOM = buttons;
    // console.log(buttons);
    buttons.forEach(button => {
      let id = button.dataset.id;
      // console.log(id);
      let inCart = cart.find(item => item.id === id);
      if (inCart) {
        button.innerText = "In Cart";
        button.disabled = true;
        
      }

      button.addEventListener("click", event => {
        
        // disable button
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        cart_menu.classList.add('active');
        //get product from products
        
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        
        
// console.log(Storage.getProduct);
        // add product to cart
        cart = [...cart,cartItem]
       
        //save cart in local storage
        Storage.saveCart(cart)
        //set cart values
        this.setCartValues(cart);
        //display cart items
        this.addCartItem(cartItem);
        //show the cart
        // let cartItem = { ...Storage.getProduct(id), amount: 1 };

        //   cart = [...cart, cartItem];
        //   Storage.saveCart(cart);
        // add to DOM
        //   this.setCartValues(cart);
        //   this.addCartItem(cartItem);
        //   this.showCart();
        
      });
    });
  }
  setCartValues(cart){
    let tempTotal = 0;
    let itemsTotal = 0;
cart.map(item =>{
  tempTotal += item.price * item.amount;
  itemsTotal += item.amount;
  
})
cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
cartItems.innerText = itemsTotal;
// console.log(cartTotal);
  }
  addCartItem(item){
const div = document.createElement('div');
div.classList.add("cartComponents");
div.innerHTML = `
<div class="head_img"><img src=${item.img} alt=""></div>
        <div class="head_desc">
          <h5>${item.name}</h5>
        </div>
        <div class="head_price">
          <h5>${item.price}</h5>
        </div>
        <div class="head_quantity">
        <i class="fas fa-chevron-left" data-id=${item.id}></i>
          <h5>${item.amount}</h5>
          <i class="fas fa-chevron-right" data-id=${item.id}></i>
        </div>
        <div class="head_remove cart-remove"><i class="fa-solid fa-trash remove-item" data-id=${item.id}></i></div>
          `
cartContent.appendChild(div);
// console.log(cartContent);
const Name_Items = document.getElementById("Name_Items");
    const Price = document.getElementById("Price");
    const amount = document.getElementById("amount");
      Name_Items.value += item.name + "\n";
      amount.value += item.amount + "\n";
      Price.value += item.price + "\n";
      console.log(amount.value);
  }
  setupAPP() {
cart = Storage.getCart();
  this.setCartValues(cart);
  this.populateCart(cart);
  }
  populateCart(cart){
    cart.forEach(item => this.addCartItem(item));
  }
  //clear cart button
  cartLogic(){
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
      cart_menu.classList.remove('active');
    });
    // cart functionality
    cartContent.addEventListener('click', event=>{
      if(event.target.classList.contains('remove-item')){
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        this.removeItem(id);
        }
        else if(event.target.classList.contains("fa-chevron-right")){
let addAmount = event.target;
let id = addAmount.dataset.id;
let tempItem = cart.find(item => item.id === id);
tempItem.amount = tempItem.amount +1;
Storage.saveCart(cart);
this.setCartValues(cart);
addAmount.previousElementSibling.innerText = tempItem.amount;
let cartInStorage = JSON.parse(localStorage.getItem("cart"));

        amount.value = ""

        cartInStorage.forEach((item) => {
          
          amount.value += item.amount + "\n";

          console.log(item.amount);
      })
        }
        else if(event.target.classList.contains("fa-chevron-left")){
let lowerAmount = event.target;
let id = lowerAmount.dataset.id;
let tempItem = cart.find(item => item.id === id);
tempItem.amount = tempItem.amount - 1;
if(tempItem.amount > 0){
Storage.saveCart(cart);
this.setCartValues(cart);
lowerAmount.nextElementSibling.innerText = tempItem.amount;
let cartInStorage = JSON.parse(localStorage.getItem("cart"));

        amount.value = ""

        cartInStorage.forEach((item) => {
          
          amount.value += item.amount + "\n";

          console.log(item.amount);
      })
}
else{
  cartContent.removeChild(lowerAmount.parentElement.parentElement);
  this.removeItem(id);
}
        }
    })
  }
  clearCart(){
    let cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));
    console.log(cartContent.children);
    while(cartContent.children.length>0){
      cartContent.removeChild(cartContent.children[0])
    }
    Name_Items.value = [];
    amount.value = [];
    Price.value = [];
  }
  removeItem(id){
    cart = cart.filter(item => item.id !==id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    // let button = this.getSingleButton(id);
    // button.disabled = false;
    // button.innerHTML = `
    // <button class='addTo-cart' name='add-cart'>Add To Cart</button>`
  }
  getSingleButton(id){
    return buttonsDOM.find(button => button.dataset.id === id);
  }
}
// local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
    // console.log(products);
  }
  static getProduct(id){
    
        let products = JSON.parse(localStorage.getItem("products"));
    // console.log(Storage.getProduct(id));
    return products.find(product => product.id === id);
   }
   static saveCart(cart) {
localStorage.setItem('cart',JSON.stringify(cart))
   }
   static getCart(){
    return localStorage.getItem('cart')?JSON.parse
    (localStorage.getItem('cart')):[]
   }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  ui.setupAPP();

  // get all products
  products
        
        ui.cartLogic();
    
});
