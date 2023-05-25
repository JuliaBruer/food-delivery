let dishes = [
    {
      "name": "Hamburger",
      "description": "mit Rindfleisch-Patty, Gurken, Tomaten und Salat",
      "price": 6.50,
      "category": "burger"
    },
    {
      "name": "Cheeseburger",
      "description": "mit Rindfleisch-Patty, Gurken, Tomaten, Salat und Cheddar",
      "price": 7.50,
      "category": "burger"
    },
    {
      "name": "Mr. Burger",
      "description": "mit Rindfleisch-Patty, Bacon, Spiegelei und Cheddar",
      "price": 8.50,
      "category": "burger"
    },
    {
        "name": "Mr. Veggie-Burger",
        "description": "saftiges Patty mit geschmolzenem Cheddar, Gurken, Tomaten und Salat",
        "price": 8.50,
        "category": "vegetarian-burger"
    },
    {
        "name": "Hirtenburger",
        "description": "gegrillter Ziegenköse, Rucola, Tomaten und Salat",
        "price": 8.50,
        "category": "vegetarian-burger"
    },
    {
        "name": "Pommes frites",
        "description": "",
        "price": 3.00,
        "category": "side-dish"
    },
    {
        "name": "Kartoffelecken",
        "description": "",
        "price": 3.50,
        "category": "side-dish"
    },
    {
      "name": "Mayonnaise",
      "description": "",
      "price": 0.50,
      "category": "sauces"
    },
    {
      "name": "Ketchup",
      "description": "",
      "price": 0.50,
      "category": "sauces"
    },
    {
      "name": "Barbecuesauce",
      "description": "",
      "price": 1.00,
      "category": "sauces"
    },
    {
      "name": "Knoblauchsauce",
      "description": "",
      "price": 1.00,
      "category": "sauces"
    },
    {
      "name": "Coca-Cola 1,0l (MEHRWEG)",
      "description": "",
      "price": 2.50,
      "category": "drinks"
    },
    {
      "name": "Fanta 1,0l (MEHRWEG)",
      "description": "",
      "price": 2.50,
      "category": "drinks"
    },
    {
      "name": "Apfelschorle 1,0l (MEHRWEG)",
      "description": "",
      "price": 2.50,
      "category": "drinks"
    },
    {
      "name": "Mineralwasser 1,0l (MEHRWEG)",
      "description": "",
      "price": 2.00,
      "category": "drinks"
    },
    {
      "name": "Gemischter Salat",
      "description": "grüner Salat mit Gurken, Tomate, Zwiebeln, Paprika und Karotten",
      "price": 6.50,
      "category": "salads"
    },
    {
      "name": "Griechischer Salat",
      "description": "Feta mit Gurken, Tomate, Zwiebeln und Oliven",
      "price": 8.00,
      "category": "salads"
    }
];
let cartAmount = [];
let cartNames = [];
let cartPrices = [];

function init() {
  renderSections();
  renderDishes();
  renderCart();
}

function renderSections() {
  let container = document.getElementById('menucard-container');
    container.innerHTML = '';
    container.innerHTML += `
      <img id="burger" class="menucard-img" src="./img/burger.jpg">
      <div>
        <h3>Burger</h3>
        ${renderDishes('burger')}
      </div>
  
      <img id="vegetarian-burger" class="menucard-img" src="./img/vegetarian-burger.jpg">
      <div>
        <h3>Vegetarische Burger</h3>
        ${renderDishes('vegetarian-burger')}
      </div>
  
      <img id="side-dish" class="menucard-img" src="./img/side-dish.jpg">
      <div>
        <h3>Beilagen</h3>
        ${renderDishes('side-dish')}
      </div>
  
      <img id="sauces" class="menucard-img" src="./img/sauce.jpg">
      <div>
        <h3>Saucen</h3>
        ${renderDishes('sauces')}
      </div>
  
      <img  id="drinks" class="menucard-img" src="./img/drinks.jpg">
      <div>
        <h3>Getränke</h3>
        ${renderDishes('drinks')}
      </div>
  
      <img  id="salads" class="menucard-img" src="./img/salad.jpg">
      <div>
        <h3>Salate</h3>
        ${renderDishes('salads')}
      </div>
    `;
}
  
function renderDishes(category) {
  let result = '';

  for (let i = 0; i < dishes.length; i++) {
    if (category === dishes[i].category) {
      let priceFormatted = dishes[i].price.toFixed(2).replace('.', ',') + ' €';
      result += `
        <div class="dish">
          <div class="add-btn">
            <img onclick="addToCart('${dishes[i].name}','${dishes[i].price}')" src="./img/add.svg">
          </div>
            <h4>${dishes[i].name}</h4>
            <p>${dishes[i].description}</p>
            <p id="price-${i}">${priceFormatted}</p>
        </div>
      `;
    }
  } 
  return result;
}

function addToCart(name, price) {
  let index = cartNames.indexOf(name);

  if (index === -1) {
    cartNames.push(name);
    cartPrices.push(price);
    cartAmount.push(1);
  } else {
    cartAmount[index]++;
  }
  renderCart();
}

//cart starts here
function renderCart() {
  let cartContainer = document.getElementById('content-cart');
    cartContainer.innerHTML = '';
    cartContainer.innerHTML = `
      <h2>Warenkorb</h2>
    `;

    if (cartNames.length == 0) {
      renderEmptyCart();
    } else {
      renderCartItems();
    }

    orderButton();
}

function renderEmptyCart() {
  let cartContainer = document.getElementById('content-cart');
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <h2>Fülle deinen Warenkorb</h2>
        <br>
        <img class="empty-cart-img" src="img/cart.svg">
        <br>
        <br>
        <p class="empty-cart-text">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
      </div>
    `;
}

function renderCartItems(){
  let cartContainer = document.getElementById('content-cart');

    for (i = 0; i < cartNames.length; i++) {
      cartContainer.innerHTML += `
        <div>
          <div class="dish-amount-name">
            
            <div class="btn-minus" onclick="removeDish(${i})">-</div>
            <div id="amount-${i}">${cartAmount[i]}</div>
            <div class="btn-plus" onclick="addDish(${i})">+</div>
          
            <div class="cart-item-names">${cartNames[i]}</div>
          </div>

          <div id="totalDishesPrice-${i}">
          ${totalDishesPrice(i, cartAmount[i])}
          </div>

          <hr class="hr">
        </div>
      `;
    }
    
      cartContainer.innerHTML += `
        <div>Gesamt: ${totalPrice()} €</div>
        
        <button onclick="openOrder()" class="order-btn order-btn-active" id="order-btn">bestellen</button>
      `;
}

function removeDish(i) {
  if (i >= 0 && i < cartNames.length) {
    if (cartAmount[i] > 1) {
      cartAmount[i]--;
    } else {
      cartNames.splice(i, 1);
      cartPrices.splice(i, 1);
      cartAmount.splice(i, 1);
    }
    renderCart();
  }
}

function addDish(i) {
  if (i >= 0 && i < cartNames.length) {
    cartAmount[i]++;
    renderCart();
  }
}

function totalDishesPrice(i, cartAmount) {
  let dishPrice = cartPrices[i];
  let totalDishesPrice = dishPrice * cartAmount;
  let formattedPrice = totalDishesPrice.toFixed(2).replace('.', ',');
  return formattedPrice;
}

function totalPrice() {
  let totalPrice = 0;
  
  for (let i = 0; i < cartPrices.length; i++) {
    let price = cartPrices[i];
    let amount = cartAmount[i];
    totalPrice += price * amount;
  }
  let formattedTotalPrice = totalPrice.toFixed(2).replace('.', ',');
  return formattedTotalPrice;
}

function orderButton() {
  let orderButton = document.getElementById('order-btn');
  let total = parseFloat(totalPrice().replace(',', '.'));
  let minOrder = 15.0;

  if (total >= minOrder) {
    orderButton.classList.remove('order-btn-active');
  }
}

function openOrder() {
  document.getElementById('show-order-container').classList.remove('d-none'); 
}

//Footer starts here
function footerAlert() {
  alert ('Da es sich bei der Webseite nur um ein Template handelt, können zu den Links keine weiteren Informationen gegeben werden.');
}