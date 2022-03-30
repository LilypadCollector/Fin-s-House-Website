import logo from './../../src/images/logo.png'
import MobileNavbar from './mobile-nav/mobile-navbar'
import Hamburger from './../components/mobile-nav/hamburger'
import { Link } from "react-router-dom";

import './../App.css';

const Header = () => {
    const scrollTo = (component) => {
        console.log("Scrolling to ", component)
        window.location.replace(component)
        this.props.stateToggler()
    }

    return (<div>
        <div id="header">
            <Link to="/">
                <img src={logo} />
            </Link>
            {/* <img src={logo} onClick={() => window.location.replace("/#home-page")} alt="A logo of the business which says Fin's House Sushi."/> */}
        </div>

        <MobileNavbar/>
        <nav id="navbar">
                <Link to="/" className="navbar-item" onClick={() => window.location.replace("/#home-page")}>HOME</Link>
                <Link to="/" className="navbar-item" onClick={() => window.location.replace("/#hours-page")}>HOURS</Link>
                <Link to="/" className="navbar-item" onClick={() => window.location.replace("/#location-page")}>LOCATION</Link>
                <Link to="/menu" className="navbar-item">MENU</Link>
                <Link to="/gallery" className="navbar-item">GALLERY</Link>
                <Link to="/contact" className="navbar-item">CONTACT</Link>
        </nav>
    </div>)
}

export default Header