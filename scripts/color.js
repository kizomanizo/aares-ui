// Get the root element
const body = document.body;

// Rceive theme details and change on click
function loadTheme(theme) {
    const chosenTheme = (theme+'-theme')
    body.className = "";
    body.classList.add(chosenTheme);
    return setCookie('maintheme', theme, 12);
}

function setCookie(cname, cvalue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    return document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let cookieTheme = getCookie("maintheme");
    if (cookieTheme != "") {
        const maintheme = cookieTheme;
        return loadTheme(maintheme);
    } else {
        return loadTheme('delftblue');
    }
}