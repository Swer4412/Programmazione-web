

//I componenti devono avere la lettera iniziale maiuscola
function Header() {
    return (
        <header id="header">
            <nav className="navbar">
                <a href="index.html">
                    <img src="img/logo.png" alt="Logo" class="logo" />
                    <p id="title">CAROLOS BURRITOS Y TACOS</p>
                </a>

                <ul className="menu">
                    <li><a href="about-us.html">About us</a></li>
                    <li><a href="contact-us.html">contact us</a></li>
                </ul>

                <button className="hamburger" onclick="openMenu()">
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
        </header>
    );
}

export default Header