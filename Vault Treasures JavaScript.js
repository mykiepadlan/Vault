let cart = [];

function addToCart(index) {
    let product = products[index];
    cart.push(product);
    updateCart();
    showMessage("Added to Cart. Go to your shopping cart to view or check out.");
}

function showMessage(message) {
    alert(message);
}

let products = [
    { id: 1, name: 'Chemtrails Over the Country Club', image: 'COTCC.png', price: 350.50 },
    { id: 2, name: 'Tidal', image: 'The Tidal.png', price: 100.00 },
    { id: 3, name: 'All Eyes On Me', image: 'All Eyes On me - 2pac.png', price: 600.00 },
    { id: 4, name: 'The Twilight Saga: New Moon Soundtrack', image: 'The Twilight Saga New Moon Soundtrack.png', price: 250.00 },
    { id: 5, name: 'Flower Boy', image: 'Flower Boy - Tyler, The Creator.png', price: 550.00 },
    { id: 6, name: 'Graduation', image: 'Graduation - Kanye West.png', price: 500.00 },
    { id: 7, name: 'Queen: The Greatest Hits', image: 'Queen The Greatest Hits - Queen.png', price: 350.00 },
    { id: 8, name: 'Straight Outta Compton', image: 'Straight Outta Compton - N.W.A.png', price: 350.00 },
];

function updateCart() {
    let cartList = document.querySelector('.cart-list');
    cartList.innerHTML = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            <div><img src="images/${item.image}" alt="${item.name}" width="50"></div>
            <div>${item.name}</div>
            <div>₱${item.price.toFixed(2)}</div>
            <div><button onclick="removeFromCart(${index})">Remove</button></div>
        `;
        cartList.appendChild(li);
        subtotal += item.price;
    });
    document.querySelector('.subtotal').textContent = subtotal.toFixed(2);
    document.querySelector('.tax').textContent = (subtotal * 0.12).toFixed(2);
    document.querySelector('.total').textContent = (subtotal * 1.12).toFixed(2);
    document.querySelector('.quantity').textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
