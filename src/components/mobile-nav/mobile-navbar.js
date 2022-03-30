
import logo from './../../../src/images/logo.png'
import HamburgerIcon from './hamburger-icon'

// The bar itself
const MobileNavbar = ({toggleMenu}) => {

    return (
        <div id="mobile-navbar">
            <HamburgerIcon/>
            {/* <img src={logo} id="mobile-navbar-logo"/> */}
        </div>
    )
}

export default MobileNavbar