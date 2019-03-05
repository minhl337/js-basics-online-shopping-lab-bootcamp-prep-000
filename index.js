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
  var inCart='In your cart, you have ';
  if(cart.length===0){
  return 'Your shopping cart is empty.'
  } else{
    for(var i=0;i<cart.length-1;i++){
      inCart+=cart[i].itemName+' at $'+cart[i].itemPrice+', '

    } inCart+='and '+cart[cart.length-1].itemName+' at $'+cart[cart.length-1].itemPrice+'.'

  }
  return inCart
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
