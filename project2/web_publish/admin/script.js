// admin.js

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.querySelector('main').classList.toggle('sidebar-open');
});
