const bannerText = document.getElementById("bannerText");

export const generateText = () => {
    let words = ["ehrgeizig!", "kämpferisch!", "ein Skywheeler!"];
    let i = 0;
    let j = 0;

    let loop = () => {
        if (i < words.length) {
            let innerLoop = setInterval(() => {
                if (j < words[i].length && words[i].length !== undefined) {
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
    setInterval(loop, 1000);
}