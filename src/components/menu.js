import Footer from "./footer"
import Header from "./header"
import logo from "./../images/logo.png"

function getSpiceLevelIcon(spiceLevel) {
    switch (spiceLevel) {
        case null:
        case 0: // No spice
            return null
        case 1: 
            return (<><img src="https://picsum.photos/seed/picsum/25/25" /></>)
        case 2:
            return (<><img src="https://picsum.photos/seed/picsum/25/25" /></>)
        case 3:
            return (<><img src="https://picsum.photos/seed/picsum/25/25" /></>)
    }
}

const MenuItemRowBig = ({image, name, description, price, spiceLevel, isMostPopular, containsFish}) => {
    return (<div className="menu-item-row">
        <div className="menu-row-left">
            {image ? <img src="https://picsum.photos/seed/picsum/100/100" /> : null}
            <div className="menu-icons-col">
                {getSpiceLevelIcon(spiceLevel)}
                {isMostPopular ? <p>Heart!</p> : null}
                {containsFish ? <p>Fish!</p> : null}
            </div>
            <div className="menu-text-col">
                {name}
                {description}
            </div>
        </div>
        <div className="menu-row-right">
            {price}
        </div>
    </div>)
}

const MenuItemRowSmall = ({name, description, price, spiceLevel, isMostPopular, containsFish}) => {
    return (<div className="menu-item-row">
        <div className="menu-row-left">
            <div className="menu-icons-col">
                {getSpiceLevelIcon(spiceLevel)}
                {isMostPopular ? <p>Heart!</p> : null}
                {containsFish ? <p>Fish!</p> : null}
            </div>
            <div className="menu-text-col">
                {name}
                {description}
            </div>
        </div>
        <div className="menu-row-right">
            {price}
        </div>
    </div>)
}

const Menu = () => {
    return (
        <div className="page" id="menu-page">
            <Header />
            <div id="menu">
                <h4 className="menu-category-label primary-font bold">ROLLS</h4>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>} 
                    isMostPopular={false}
                    containsFish={false}/>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>}
                    price={<h5 className="primary-font bold">10.95</h5>}
                    spiceLevel={3}
                    isMostPopular={false}
                    containsFish={false}/>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>}
                    price={<h5 className="primary-font bold">10.95</h5>}
                    spiceLevel={0}
                    isMostPopular={false}
                    containsFish={false}/>

                <h4 className="menu-category-label primary-font bold">ROLLS</h4>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>}
                    price={<h5 className="primary-font bold">10.95</h5>}
                    spiceLevel={0}
                    isMostPopular={false}
                    containsFish={false}/>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>}
                    price={<h5 className="primary-font bold">10.95</h5>}
                    spiceLevel={3}
                    isMostPopular={false}
                    containsFish={false}/>
                <MenuItemRowBig 
                    image={logo}
                    name={<h5 className="primary-font bold">VEGGIE</h5>}
                    description={<p className="primary-font">inside: avocado, sprouts, cucumber
                        <br />topped with: avocado, sesame seeds
                    </p>}
                    price={<h5 className="primary-font bold">10.95</h5>}
                    spiceLevel={0}
                    isMostPopular={false}
                    containsFish={false}/>
            </div>
            <Footer />
        </div>
    )
}

export default Menu