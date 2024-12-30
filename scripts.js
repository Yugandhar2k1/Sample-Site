document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your user ID (replace with your actual User ID)
    emailjs.init("your_user_id"); // Replace "your_user_id" with your actual user ID

    // Attach event listener to the form
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const formData = new FormData(form);

            // Send the form data using EmailJS
            emailjs.sendForm("your_service_id", "your_template_id", formData) // Replace with your Service ID and Template ID
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
