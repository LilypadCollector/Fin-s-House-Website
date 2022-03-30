import { findByLabelText } from "@testing-library/react"
import { useState } from "react"
import { slide as Menu } from 'react-burger-menu'
import { useNavigate } from "react-router-dom"
import Hamburger from './hamburger'

const HamburgerIcon = ({toggleMenu}) => {

    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const onHamburgerPress = () => {
        setShowMenu(showMenu ? false : true)
        console.log("showMenu is now ", showMenu)
    }

    return(
        <>
        <Menu>
            <a href="/">HOME</a>
            <a onClick={() => window.location.replace("/#hours-page")}>HOURS</a>
            <a onClick={() => window.location.replace("/#location-page")}>LOCATION</a>
            <a href='/menu'>MENU</a>
            <a href='/gallery'>GALLERY</a>
            <a href='/contact'>CONTACT</a>
        </Menu>
        </>
    )
}

export default HamburgerIcon