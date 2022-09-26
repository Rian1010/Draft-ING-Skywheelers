const searchQuery = document.getElementById('searchQuery');
const searchBtn = document.getElementById('searchBtn');

let isOpened = false

searchBtn.addEventListener('click', () => {
    isOpened = !isOpened;
    if (isOpened) {
        searchQuery.style.opacity = "1"
        searchQuery.style.width = "100%"
    } else {
        searchQuery.style.opacity = "0";
        searchQuery.style.width = "0%";
    }
});