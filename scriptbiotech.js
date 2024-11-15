function handlePayment(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Paystack integration
    let handler = PaystackPop.setup({
        key: 'YOUR_PAYSTACK_PUBLIC_KEY',
        email: email,
        amount: 5000 * 100, // 5000 Naira
        currency: 'NGN',
        ref: 'BIO' + Math.floor((Math.random() * 1000000000) + 1),
        metadata: {
            custom_fields: [
                {
                    display_name: "Name",
                    variable_name: "name",
                    value: name
                }
            ]
        },
        callback: function(response) {
            alert('Payment successful. Transaction ref: ' + response.reference);
        },
        onClose: function() {
            alert('Transaction was not completed, please try again');
        }
    });
    handler.openIframe();
}
