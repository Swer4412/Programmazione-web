function openMenu() {
    var header = document.getElementById("header")
    header.classList.toggle("toggleMenu") //.toggle fa in modo che se una classe è attivata, viene disattivata e viceversa

    var mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.toggle("MobileMenuClass")
}