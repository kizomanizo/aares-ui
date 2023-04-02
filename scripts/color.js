// Get the root element
const body = document.body;

// Rceive theme details and change on click
function loadTheme(theme) {
    const reversedTheme = theme.split("").reverse().join("");
    const chosenTheme = (theme+'-theme')
    body.className = "";
    body.classList.add(chosenTheme);
    storeTheme(reversedTheme);
    document.cookie = "maintheme=delftblue; expires=Sun, 03 Apr 2023 23:59:59 GMT+3; SameSite=Lax;";
    // return setCookie('maintheme', theme, 12);
}

function storeTheme(name) {
    // localStorage.setItem('maintheme', name);
    // return setCookie('maintheme', name, 12);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
        const maintheme = cookieTheme.split("").reverse().join("");
        return loadTheme(maintheme);
    } else {
        return loadTheme('delftblue');
    }
}