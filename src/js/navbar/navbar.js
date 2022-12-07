const searchQuery = document.getElementById('searchQuery');
const searchBtn = document.getElementById('searchBtn');
const customCursor = document.getElementById('circularCursor');
const mainBanner = document.querySelector('.main-banner');
const header = document.getElementsByTagName('header')

export const searchInputField = () => {
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
}

export const circularCursor = () => {
    document.addEventListener('mousemove', (e) => {
            const { clientWidth, clientHeight } = customCursor;
            customCursor.style.width = 30 + 'px';
            customCursor.style.height = 30 + 'px';
            customCursor.style.left = (e.pageX - (clientWidth / 2)) + 'px';
            customCursor.style.top = (e.pageY - (clientHeight / 2)) + 'px';

    });
}
