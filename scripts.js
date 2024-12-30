document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your user ID (replace with your actual User ID)
    emailjs.init("UCi9jvExPzca_iZ4y"); // Replace "your_user_id" with your actual user ID

    // Get the form element
    const form = document.getElementById("contact-form");

    // Ensure the form exists
    if (form) {
        // Add event listener to the form submission
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Send the form data using EmailJS
            emailjs.sendForm("service_k4vkq2n", "template_h8gquy4", form) // Directly pass the form element
                .then(function (response) {
                    console.log("Success!", response);
                    alert("Your message has been sent successfully!");
                })
                .catch(function (error) {
                    console.log("Failed...", error);
                    alert("Oops! Something went wrong, please try again.");
                });
        });
    } else {
        console.error("Form element not found!");
    }
});
