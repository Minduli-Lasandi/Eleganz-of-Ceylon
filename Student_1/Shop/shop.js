const root = document.getElementById('root');

//Create display box for each product item
function generateProductHTML(products) {
  return products
    .map((product, index) => {
      const { image, name, price, category } = product; 
      return `
        <div class="box">
          <div class="img-box">
            <img class="images" src="${product.image}" alt="${product.name}">
          </div>
          <div class="bottom">
            <h3>${product.name}</h3>
            <p>${product.description}</p> <!-- Properly closed the <p> tag -->
            <h2>$ ${product.price.toFixed(2)}</h2>
            <!-- Added data-category attribute to store the category -->
            <button onclick="addToCart(${index}, '${category}')">Add to Cart</button>
          </div>
        </div>
      `;
    })
    .join('');
}

//Devide all the products based on their categories
const artsAndCraftsProducts = products.filter(product => product.category === 'artsAndCrafts');
const foodsAndBeveragesProducts = products.filter(product => product.category === 'foodsAndBeverages');
const fashionAndClothingProducts = products.filter(product => product.category === 'fashionAndClothing');
const cosmeticsAndWellnessProducts = products.filter(product => product.category === 'cosmeticsAndWellness');

//Create sections based on product data
const artsAndCraftsHTML = generateProductHTML(artsAndCraftsProducts);
document.getElementById('artsAndCrafts').innerHTML = artsAndCraftsHTML;

const foodsAndBeveragesHTML = generateProductHTML(foodsAndBeveragesProducts);
document.getElementById('foodsAndBeverages').innerHTML = foodsAndBeveragesHTML;

const fashionAndClothingHTML = generateProductHTML(fashionAndClothingProducts);
document.getElementById('fashionAndClothing').innerHTML = fashionAndClothingHTML;

const cosmeticsAndWellnessHTML = generateProductHTML(cosmeticsAndWellnessProducts);
document.getElementById('cosmeticsAndWellness').innerHTML = cosmeticsAndWellnessHTML;

const cart = [];   //Create cart array to store selected products

function updateCartItemCount() {   //Function to update the cart item count
  document.getElementById("count").innerHTML = cart.length;
}

function addToCart(index, category) {   //Function to add a product to the cart
  const productArray = getProductArrayByCategory(category);
  const product = productArray.find((product) => product.category === category && productArray.indexOf(product) === index);
  if (product) {
    cart.push(product);
    updateCartItemCount();
    displayCart();
  }
}

function getProductArrayByCategory(category) {  //Function to select the product array based on category
  switch (category) {
    case 'artsAndCrafts':
      return artsAndCraftsProducts;
    case 'foodsAndBeverages':
      return foodsAndBeveragesProducts;
    case 'fashionAndClothing':
      return fashionAndClothingProducts;
    case 'cosmeticsAndWellness':
      return cosmeticsAndWellnessProducts;
    default:
      return [];
  }
}

function delElement(index){  //Function to remove an element from the cart
    cart.splice(index, 1);
    updateCartItemCount();
    displayCart();
}

function getTotalValue() {  //Function to calculate the total value of items in the cart
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });
  return total.toFixed(2);
}

function placeOrder() {  //Function place the order
  const totalValue = getTotalValue();
  window.open(`Payment_page.html?total=${totalValue}`, "_blank");   //Open the payment page in a new tab with the total value
}

function displayCart() {  //Fuction to display the cart
  const cartItemElement = document.getElementById("cartItem");
  let total = 0;

  if (cart.length === 0) {
    cartItemElement.innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    document.getElementById("placeOrderBtn").style.display = "none";   // Hide the "Place Order" button if the cart is empty
  } else {
    cartItemElement.innerHTML = cart
      .map((item, index) => {
        total = total + item.price;
        document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
        document.getElementById("placeOrderBtn").style.display = "block";   // Show the "Place Order" button if there are items in the cart
        return `
          <div class="cart-item">
            <div class="row-img">
              <img class="rowimg" src="./${item.image}">
            </div>
            <p style="font-size: 14px;">$ ${item.name}</p>
            <h2 style="font-size: 17px;">$ ${item.price}</h2>
            <i class="fa-solid fa-trash" onclick="delElement(${index})"></i>
          </div>
        `;
      })
      .join("");
  }
}
