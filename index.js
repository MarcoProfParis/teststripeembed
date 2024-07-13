// Initialize Stripe.js
const stripe = Stripe('pk_test_51LRCoLLs1TDYQP49kqswyvskmILtO4jMqm2Z3RSmpS9QSiQKYMRdkEZcXbkSXuhn20J3tehP7UI2iRDFlLeYwyaL00i1awuKzL');

initialize();

// Fetch Checkout Session and retrieve the client secret
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  // Initialize Checkout
  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}
