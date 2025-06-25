const products = [
  {
    id: 1,
    name: "Black Shirts",
    price: 15,
    image: "/photos/1.webp"
  },
  {
    id: 2,
    name: "Blue Shirts",
    price: 10,
    image: "/photos/2.webp"
  },
  {
    id: 3,
    name: "Blue Shirts",
    price: 25,
    image: "/photos/3.jpg"
  },
  {
    id: 4,
    name: "Blue Shirts",
    price: 20,
    image: "/photos/4.webp"
  },
  {
    id: 5,
    name: "Yellow Shirts",
    price: 10,
    image: "/photos/5.jpg"
  },
  {
    id: 6,
    name: "Blue Shirts",
    price: 15,
    image: "/photos/6.webp"
  },
  {
    id: 7,
    name: "Red Shirts",
    price: 30,
    image: "/photos/7.webp"
  },
  {
    id: 8,
    name: "Black Shirts",
    price: 25,
    image: "/photos/8.webp"
  },
  {
    id: 9,
    name: "White Shirts",
    price: 10,
    image: "/photos/9.jpg"
  },
  {
    id: 10,
    name: "Blue Shirts",
    price: 25,
    image: "/photos/10.webp"
  },
  {
    id: 11,
    name: "Black Shirts",
    price: 15,
    image: "/photos/11.webp"
  },
  {
    id: 12,
    name: "Blue Shirts",
    price: 30,
    image: "/photos/12.webp"
  },
]

if (document.getElementById('products')) {
  const container = document.getElementById('products');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>$${p.price}</p><button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>`;
    container.appendChild(div);
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product.name + " added to cart!");
}

if (document.getElementById('cart-items')) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalBox = document.getElementById('cart-total');

  function renderCart() {
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
      totalBox.innerHTML = "";
      return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
      total += item.price;
      return `
        <div class="product">
          <img src="${item.image}" alt="${item.name}" style="width: 100px; border-radius: 8px;">
          <h3>${item.name}</h3>
          <p>Price: $${item.price.toFixed(2)}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    }).join('');

    totalBox.innerHTML = `<div style="text-align:right; margin-top:20px;"><strong>Total Price: $${total.toFixed(2)}</strong></div>`;
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }

  renderCart();
}