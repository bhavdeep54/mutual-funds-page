document.addEventListener("DOMContentLoaded", function() {
    // Navigation to Get Started page
    const getStartedButton = document.querySelector("#getStarted");
    getStartedButton.addEventListener("click", function() {
        window.location.href = "get_started.html";  // Directs user to the "Get Started" page
    });

    // Navigation to Contact Support page
    const contactSupportButton = document.querySelector("#contactSupport");
    contactSupportButton.addEventListener("click", function() {
        window.location.href = "contact_support.html";  // Directs user to the "Contact Support" page
    });

    // Form submission handling for contact form (Contact Support Page)
    if (document.querySelector("#contactForm")) {
        const contactForm = document.querySelector("#contactForm");
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            console.log("Message Sent!");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            alert("Thank you for contacting us! We will get back to you shortly.");

            // Reset form after submission
            contactForm.reset();
        });
    }

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the answer
            item.classList.toggle('active');
        });
    });
});
