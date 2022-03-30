import { slide as Menu } from 'react-burger-menu'
import { Link, useNavigate } from 'react-router-dom'

// The expanded hamburger (not icon)
const Hamburger = (props) => {
    const scrollTo = (component) => {
        console.log("Scrolling to ", component)
        window.location.replace(component)
        this.props.stateToggler()
    }

    const navigate = useNavigate();

    return (
        <Menu>
            {/* <nav>
                    <Link to="/" className="mobile-navbar-item" onClick={() => window.location.replace("/#home-page")}>HOME</Link>
                    <Link to="/" className="mobile-navbar-item" onClick={() => window.location.replace("/#hours-page")}>HOURS</Link>
                    <Link to="/" className="mobile-navbar-item" onClick={() => window.location.replace("/#location-page")}>LOCATION</Link>
                    <Link to="/menu" className="mobile-navbar-item">MENU</Link>
                    <Link to="/gallery" className="mobile-navbar-item">GALLERY</Link>
                    <Link to="/contact" className="mobile-navbar-item">CONTACT</Link>
            </nav> */}
            <ul>
                <a onClick={() => scrollTo("/#home")}>Home</a>
                <a onClick={() => window.location.replace("/#hours-page")}>Hours</a>
                <a onClick={() => window.location.replace("/#location-page")}>Location</a>
                <a href="/menu">Menu</a>
                <a onClick={() => window.location.replace("/#photos-page")}>Photos</a>
            </ul>
        </Menu>
    )
}

export default Hamburger