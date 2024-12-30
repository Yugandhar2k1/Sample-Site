// Initialize EmailJS with your user ID
emailjs.init("pMtlBE5PRxI5cne5m");  // Replace with your actual user ID

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Send email using EmailJS
    emailjs.sendForm("service_k4vkq2n", "template_h8gquy4", formData)  // Replace with your Service ID and Template ID
        .then(function (response) {
            console.log("Success!", response);
            alert("Your message has been sent successfully!");
        }, function (error) {
            console.log("Failed...", error);
            alert("Oops! Something went wrong, please try again.");
        });
});
