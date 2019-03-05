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
  } else if(cart.length===1){
    inCart+=cart[0].itemName+' at $'+cart[0].itemPrice+'.'
  } else{
    for(var i=0;i<cart.length-1;i++){
      inCart+=cart[i].itemName+' at $'+cart[i].itemPrice+', '

    } inCart+='and '+cart[cart.length-1].itemName+' at $'+cart[cart.length-1].itemPrice+'.'

  }
  return inCart
}



function total() {
  // write your code here
  var tot=0;
  for(var i=0;i<cart.length;i++){
    tot+=cart[i].itemPrice
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
  var found=0;
  for(var i=0;i<cart.length;i++){
    if(cart[i].itemName=item){
      found=i
    } else {
      found='That item is not in your cart.'
    }
    
  }
  cart.splice(found-1,1);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
