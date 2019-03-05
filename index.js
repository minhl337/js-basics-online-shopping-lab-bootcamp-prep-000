var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price=Math.floor(Math.random()*100);
 var nn={ 'itemName': item, 'itemPrice': price };

 cart.push(nn);
 
 return item+' has been added to your cart.';
}

function viewCart() {
  // write your code here
  if()
}

function total() {
  // write your code here
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
