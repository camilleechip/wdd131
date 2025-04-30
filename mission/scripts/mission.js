const themeSelector = document.querySelector('#theme-selector');
function changeTheme() {
    const selectedTheme = themeSelector.value;
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(selectedTheme); 
    
    const footerImage = document.getElementById('footer-img');
    if (selectedTheme === 'dark') {
        footerImage.src = 'images/byui-logo_dark.png';
    } else {
        footerImage.src = 'images/byu-logo.webp';
    }
}

themeSelector.addEventListener('change', changeTheme)
changeTheme();