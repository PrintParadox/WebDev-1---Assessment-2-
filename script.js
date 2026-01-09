

// This code runs when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded means the page is ready

    // BOOKING FORM PRICE CALCULATOR
    // This updates the price when user changes number of people
    

    // Get the people dropdown element
    var peopleSelect = document.getElementById('people');
    // getElementById finds element with that id

    // Get the price display element
    var priceDisplay = document.getElementById('total-price');
    // This is where we show the total price

    // Check if these elements exist on this page
    if (peopleSelect && priceDisplay) {
        // If they exist, add the event listener

        // Listen for when user changes selection
        peopleSelect.addEventListener('change', function() {
            // change event fires when selection changes

            // Get how many people selected
            var numberOfPeople = peopleSelect.value;
            // .value gets the selected option value

            // Calculate total price (599 pounds per person)
            var total = numberOfPeople * 599;
            // Multiply number of people by price

            // Update the display
            priceDisplay.textContent = 'Total: £' + total;
            // .textContent changes the text shown

        });
        // End of change event listener

    }
    // End of if statement

    
    // BOOKING FORM SUBMIT
    // Shows message when user clicks book now
    

    // Get the booking form
    var bookingForm = document.getElementById('booking-form');
    // Find the form by its id

    // Check if form exists
    if (bookingForm) {
        // If form exists

        // Listen for form submit
        bookingForm.addEventListener('submit', function(event) {
            // submit event fires when form is submitted

            // Stop the form from actually submitting
            event.preventDefault();
            // preventDefault stops the default action

            // Show alert message to user
            alert('Thank you for your booking! We will contact you soon.');
            // alert shows a popup message

        });
        // End of submit listener

    }
    // End of if

        // CONTACT FORM SUBMIT
    // Shows message when user sends contact form
    

    // Get the contact form
    var contactForm = document.getElementById('contact-form');
    // Find by id

    // Get the message display
    var formMessage = document.getElementById('form-message');
    // Where we show success message

    // Check if elements exist
    if (contactForm && formMessage) {
        // If they exist

        // Listen for submit
        contactForm.addEventListener('submit', function(event) {
            // When form submitted

            // Stop actual submission
            event.preventDefault();
            // Prevent default

            // Show success message
            formMessage.textContent = 'Thank you! Your message has been sent. We will reply soon.';
            // Update the text

            // Clear the form
            contactForm.reset();
            // reset() clears all form fields

        });
        // End listener

    }
    // End if

    // Log message to console (for testing)
    console.log('JavaScript loaded successfully!');
    // console.log prints to browser console

});
// End of DOMContentLoaded


// FAQ TOGGLE FUNCTION
// Shows and hides FAQ answers when clicked


// This function is called when FAQ question is clicked
function toggleAnswer(number) {
    // number is which FAQ was clicked (1, 2, 3, etc)

    // Build the id of the answer
    var answerId = 'answer' + number;
    // Creates string like 'answer1' or 'answer2'

    // Get the answer element
    var answer = document.getElementById(answerId);
    // Find the answer by its id

    // Check if answer exists
    if (answer) {
        // If it exists

        // Check if answer is currently hidden
        if (answer.style.display === 'block') {
            // If it's showing

            // Hide it
            answer.style.display = 'none';
            // display none hides element

        } else {
            // If it's hidden

            // Show it
            answer.style.display = 'block';
            // display block shows element

        }
        // End of inner if

    }
    // End of outer if

}
// End of function
