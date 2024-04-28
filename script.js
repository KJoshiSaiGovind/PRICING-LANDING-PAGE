// JavaScript for interactive pricing toggles and currency customization

// Function to handle toggling between pricing plans
function togglePricingPlan() {
    // Get all pricing plan elements
    const plans = document.querySelectorAll('.plan');

    // Loop through each plan
    plans.forEach(plan => {
        // Add event listener for click event
        plan.addEventListener('click', () => {
            // Remove 'selected' class from all plans
            plans.forEach(p => {
                p.classList.remove('selected');
            });
            // Add 'selected' class to the clicked plan
            plan.classList.add('selected');
        });
    });
}

// Function to handle currency customization
function customizeCurrency() {
    // Get the select element for currency
    const currencySelect = document.getElementById('currency');

    // Add event listener for change event
    currencySelect.addEventListener('change', () => {
        // Get the selected currency value
        const selectedCurrency = currencySelect.value;

        // Update prices with the selected currency symbol
        const prices = document.querySelectorAll('.price');
        prices.forEach(price => {
            // Get the numeric value of the price
            let numericPrice = parseFloat(price.dataset.price);

            // Convert the price to the selected currency
            numericPrice = convertCurrency(numericPrice, selectedCurrency);

            // Update the price text with the formatted value
            price.textContent = formatCurrency(numericPrice, selectedCurrency);
        });
    });
}

// Function to convert currency based on exchange rates (for demonstration purposes)
function convertCurrency(price, currency) {
    // Exchange rates for demonstration
    const exchangeRates = {
        'USD': 75,
        'EUR': 0.85, // Example exchange rate, you should use actual exchange rates
        // Add more currency exchange rates as needed
    };

    // Convert price to selected currency
    return price * exchangeRates[currency];
}

// Function to format currency based on selected currency
function formatCurrency(price, currency) {
    // Format price with currency symbol
    switch (currency) {
        case 'USD':
            return '$' + price.toFixed(2);
        case 'EUR':
            return '€' + price.toFixed(2);
        // Add more currency formatting as needed
        default:
            return '$' + price.toFixed(2);
    }
}

// Call functions to initialize interactive elements
togglePricingPlan();
customizeCurrency();
