// Cart Logic
let cartItemCount = 0;
const cartCountElement = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Attach event listeners to all 'Add to Cart' buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        cartCountElement.textContent = cartItemCount;
        
        // Brief visual feedback on the button
        const originalText = button.textContent;
        button.textContent = "Added ✓";
        button.style.background = "#48bb78";
        button.style.color = "#ffffff";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = "";
            button.style.color = "";
        }, 1500);
    });
});

// Wishlist Logic
function toggleWishlist(buttonElement) {
    buttonElement.classList.toggle('active');
    
    if (buttonElement.classList.contains('active')) {
        buttonElement.textContent = '♥ Saved';
    } else {
        buttonElement.textContent = '♡ Save';
    }
}

