const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

