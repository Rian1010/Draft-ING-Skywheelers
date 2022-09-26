const searchQuery = document.getElementById('searchQuery');
const searchBtn = document.getElementById('searchBtn');

let isOpened = false
searchBtn.style.width = "0"

searchBtn.addEventListener('click', () => {
    !isOpened;
    isOpened ? searchBtn.style.width = "100%" : searchBtn.style.width = "0";
});