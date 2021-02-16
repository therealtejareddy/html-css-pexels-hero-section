const menu = document.querySelector('.fa-bars');
const linksDiv = document.querySelector('.links-div');

menu.addEventListener('click', () => {
    linksDiv.classList.toggle('active');
});