console.log("JS Started");

window.onload = () => {
    console.log("Window Loaded");

    setTimeout(() => {
        console.log("Removing Splash");

        const splash = document.getElementById("splash");

        if (splash) {
            splash.remove();
        }
    }, 3000);
};