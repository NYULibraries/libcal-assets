function loadNYUPerstareFonts() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @font-face {
            font-family: 'NYUPerstare';
            src: url('https://webstatic.nyu.edu/fonts/NYUPerstare-VF.woff2') format('woff2');
            font-style: normal;
            font-synthesis: none;
        }

        @font-face {
            font-family: 'NYUPerstareItalic';
            src: url('https://webstatic.nyu.edu/fonts/NYUPerstare-Italic-VF.woff2') format('woff2');
            font-style: italic;
            font-synthesis: none;
        }

        @font-face {
            font-family: 'NYUPerstareCondensed';
            src: url('https://webstatic.nyu.edu/fonts/NYUPerstareCondensed-VF.woff2') format('woff2');
            font-style: normal;
            font-synthesis: none;
        }

        @font-face {
            font-family: 'NYUPerstareCondensedItalic';
            src: url('https://webstatic.nyu.edu/fonts/NYUPerstareCondensed-Italic-VF.woff2') format('woff2');
            font-style: italic;
            font-synthesis: none;
        }
    `));
    document.head.appendChild(style);
}

loadNYUPerstareFonts();
