const mainNav = document.querySelector(".main-nav");
const bannerText = document.getElementById("bannerText");

const navBar = async () => {
    const { searchInputField } = await import('./navbar/navbar.js');
    const { circularCursor } = await import('./navbar/navbar.js');
    searchInputField();
    circularCursor();
}

const bannerTextChange = async () => {
    const { generateText } = await import('./main-banner/main-banner.js');
    generateText();
}

if (mainNav !== null) navBar();
if (bannerText !== null) bannerTextChange();