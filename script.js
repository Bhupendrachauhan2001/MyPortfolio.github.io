const bottomheader = document.getElementById('header-sticky');
const main = document.getElementById('Main')
addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        bottomheader.classList.add("sticky");
        main.classList.add("sticky-active-main"); //JUMBOTRON WHEN STICKY NAVBAR ACTIVE
    }
    else {
        bottomheader.classList.remove("sticky")
        main.classList.remove("sticky-active-main"); // JUMBOTRON WHEN STICKY NAVBAR DEACTIVE

    }
})