const bannerText = document.getElementById("bannerText");

var words = ["bereit!", "ein Team-Player!", "ein Skywheeler!"];

function increment(i) {
    return i++;
}

function generateText() {
    let i = 0;
    let j = 0;
    let loop = () => {
        if (i < words.length) {
            let innerLoop = setInterval(function () {
                if (j < words[i].length) {
                    if (j === 0) bannerText.innerHTML = '';
                    bannerText.innerHTML += words[i][j];
                    j++;
                } else {
                    j = 0;
                    i++
                    clearInterval(innerLoop);
                }
            }, 50);
        } else {
            clearInterval(loop);
        }
    }
    // loop();
    setInterval(loop, 1000);

};

generateText();