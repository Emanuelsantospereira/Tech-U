const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkModeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});
