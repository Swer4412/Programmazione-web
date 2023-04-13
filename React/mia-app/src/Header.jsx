

//I componenti devono avere la lettera iniziale MAIUSCOLA
function Header() {
    const openMenu = () => {
        var header = document.getElementById("header")
        console.log(header) //Header viene trovato: <header id="header">...</header>
        header.classList.toggle("toggleMenu") //.toggle fa in modo che se una classe è attivata, viene disattivata e viceversa
    
        var mobileMenu = document.getElementById("mobileMenu")
        mobileMenu.classList.toggle("MobileMenuClass")
    }    

    return (
        <header id="header">
            <nav className="navbar">
                <a href="index.html">
                    <img src="logo.png" alt="Logo" className="logo" />
                    <p id="title">CAROLOS BURRITOS Y TACOS</p>
                </a>

                <ul className="menu">
                    <li><a href="about-us.html">About us</a></li>
                    <li><a href="contact-us.html">contact us</a></li>
                </ul>

                <button className="hamburger" onClick={openMenu}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </button>
            </nav>

            <ul id="moblieMenu" className="mobileMenuClass">
                <li><a href="about-us.html">About us</a></li>
                <li><a href="contact-us.html">contact us</a></li>
            </ul>
            <script src="script.js"></script>
        </header>
    );
}

export default Header