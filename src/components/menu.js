import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/menu.css"

function Menu() {
    const navRef = useRef();
    const showMenu = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>Lemonade</h3>
            <nav ref={navRef}>
                <a href="/profile">Profile</a>
                <a href="/browse">Browse</a>
                <a href="/follow">Followings</a>
                <button className="nav-btn nav-close-btn" onClick={showMenu}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showMenu}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Menu;