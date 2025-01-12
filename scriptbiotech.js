document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for registering! You'll be redirected to the confirmation page.");
    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
