// Retrieve cart data from localStorage and display it on the checkout page
function loadCheckoutCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.getElementById('checkout-cart-body');
    let totalAmount = 0;

    cartTable.innerHTML = ''; // Clear existing items

    cart.forEach((product) => {
        let subtotal = product.price * product.quantity;
        totalAmount += subtotal;

        // Create a row for each product in the cart
        cartTable.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>Rs. ${product.price}</td>
                <td>Rs. ${subtotal}</td>
            </tr>
        `;
    });

    // Update the total amount
    document.getElementById('checkout-total').textContent = 'Total: Rs. ' + totalAmount;
}

// Handle checkout form submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Gather cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Gather customer information
    let customerName = document.getElementById('name').value;
    let customerEmail = document.getElementById('email').value;
    let customerAddress = document.getElementById('address').value;
    let customerPhone = document.getElementById('phone').value;

    // Combine cart and customer data into one object
    let checkoutData = {
        customerName: customerName,
        customerEmail: customerEmail,
        customerAddress: customerAddress,
        customerPhone: customerPhone,
        cart: cart
    };

    // Here you can send the checkoutData to your server
    // Example: Uncomment this section and implement your server logic
    /*
    fetch('/submit-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Checkout completed', data);
        // Optionally clear the cart
        localStorage.removeItem('cart'); // Clear the cart after checkout
        alert("Thank you for your purchase!");
    })
    .catch(error => console.error('Error:', error));
    */

    // Clear the cart after checkout for demonstration purposes
    localStorage.removeItem('cart'); // Clear the cart
    alert("Thank you for your purchase!"); // Feedback to the user
});

// Initialize checkout cart display on page load
document.addEventListener('DOMContentLoaded', loadCheckoutCart);

fetch('(link unavailable)', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(checkoutData)
})

