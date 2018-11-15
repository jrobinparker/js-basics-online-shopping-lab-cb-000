var cart = [];
var removedItems = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if ( getCart().length < 1 ) {
    return 'Your shopping cart is empty.'
  } else {
    var itemsWithPrice = [];
    getCart().forEach(function (item) {
      itemsWithPrice.push(`${item.itemName} at $${item.itemPrice}`);
    });
      if ( itemsWithPrice.length === 1 ) {
        return `In your cart, you have ${itemsWithPrice}.`;
      } else if ( itemsWithPrice.length === 2 ) {
        return `In your cart, you have ${itemsWithPrice.join(', and ')}.`;
      } else if ( itemsWithPrice.length >= 3 ) {
        return `In your cart, you have ${itemsWithPrice.slice(0, 2).join(', ') + ', and ' + itemsWithPrice.slice(2)}.`;
      }
    }
  };

function total() {
  var prices = [];

  cart.forEach(function (item) {
    prices.push(item.itemPrice);
  });

  var sum = prices.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i < getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove, 1)
}


function placeOrder(cardNumber) {
  if ( cardNumber === undefined ) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total();
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`;
    }
};
