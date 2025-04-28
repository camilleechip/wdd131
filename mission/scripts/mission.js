const themeSelector = document.getElementById('theme-selector');

themeSelector.addEventListener('change', function() {
    const selectedTheme = themeSelector.value;

    document.body.className = selectedTheme;
});
