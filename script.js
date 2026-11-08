// Cart Micro-Conversion Logic
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartTotalDisplay = document.getElementById('cart-total');

// Starting cart total based on mockup
let currentTotal = 150.00;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Retrieve price from the card data attribute
        const card = e.target.closest('.product-card');
        const priceElement = card.querySelector('.sale-price') || card.querySelector('.price');
        const priceValue = parseFloat(priceElement.getAttribute('data-price'));
        
        if (!isNaN(priceValue)) {
            currentTotal += priceValue;
            cartTotalDisplay.textContent = `$${currentTotal.toFixed(2)}`;
        }

        // Button interaction feedback
        const originalText = e.target.textContent;
        e.target.textContent = "ADDED ✓";
        e.target.style.backgroundColor = "#28a745"; 
        
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.backgroundColor = ""; 
        }, 1200);
    });
});
