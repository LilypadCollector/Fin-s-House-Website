import Footer from "./footer"
import Header from "./header"

const Contact = () => {
    return (<div id="contact-page">
        <Header />
        <section>
            <h2 className="primary-font">Phone Number</h2>
            <p className="primary-font">(916) 696 - 7718</p>
        </section>
        <section>
            <h2 className="primary-font">Email</h2>
            <p className="primary-font">lorem@finshouse.com</p>
        </section>
        <Footer />
    </div>)
}

export default Contact