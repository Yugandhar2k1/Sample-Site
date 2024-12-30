// Initialize EmailJS with your user ID (replace with your actual User ID)
emailjs.init("UCi9jvExPzca_iZ4y"); // Replace "your_user_id" with your actual user ID

document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener to the form
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(event.target);

        // Send the form data using EmailJS
        emailjs.sendForm("service_k4vkq2n", "template_h8gquy4", formData) // Replace with your Service ID and Template ID
            .then(function (response) {
                console.log("Success!", response);
                alert("Your message has been sent successfully!");
            })
            .catch(function (error) {
                console.log("Failed...", error);
                alert("Oops! Something went wrong, please try again.");
            });
    });
});
