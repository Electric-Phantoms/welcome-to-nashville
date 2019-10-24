const SelectFileCSS = () => {
    if (window.navigator.appVersion.includes("Windows")) {
        document.querySelector("link").href = "styles/main.css"
    }
    if (window.navigator.appVersion.includes("Macintosh")) {
        document.querySelector("link").href = "styles/mac.css"
    }
}