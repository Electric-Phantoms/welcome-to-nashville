const SelectFileCSS = () => {
    if (window.navigator.appVersion.includes("Windows")) {
        console.log("This app is being viewed on a windows machine")
        document.querySelector("link").href = "styles/main.css"
    }
    if (window.navigator.appVersion.includes("Macintosh")) {
        console.log("This app is being viewed on a macintosh machine")
        document.querySelector("link").href = "styles/mac.css"
    }
}