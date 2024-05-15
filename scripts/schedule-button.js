document.addEventListener('DOMContentLoaded', function () {
    const scheduleButton = document.querySelector('.schedule-button');

    scheduleButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior of the button
        smoothScroll('contact-us'); // Call the smoothScroll function with the ID of the contact-us section
    });
});

// function smoothScroll(targetId) {
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const scheduleButton = document.querySelector('.mobile-schedule-button');

    scheduleButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior of the button
        smoothScroll('contact-us'); // Call the smoothScroll function with the ID of the contact-us section
    });
});