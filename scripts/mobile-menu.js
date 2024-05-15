const toggleButton = document.querySelector('.toggle-button');
const mobileMenuList = document.querySelector('.mobile-menu');
toggleButton.addEventListener('click', () => {
    mobileMenuList.classList.toggle('mobile-menu');
})