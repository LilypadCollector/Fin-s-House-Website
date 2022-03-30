import Footer from "./footer"
import Header from "./header"

const AccessibilityStatement = () => {
    return (
    <div className="page" id="accessibility-page">
        <Header />
        <div id="accessibility-body">

            <h2>Accessibility Statement for <span class="basic-information website-name">Fin's House</span></h2>
            <p>
                This is an accessibility statement from <span class="basic-information organization-name">Fin's House</span>.
            </p>
            <h3>Conformance status</h3>
            <p>
                The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                <span class="basic-information website-name">Fin's House</span>
                is
                <span class="basic-information conformance-status" data-printfilter="lowercase">fully conformant</span>
                with
                <span class="basic-information conformance-standard"><span data-negate="">WCAG 2.1 level AA</span>.</span>
                <span>
                <span class="basic-information conformance-status">Fully conformant</span>
                means that
                <span class="basic-information conformance-meaning">the content fully conforms to the accessibility standard without any exceptions</span>.
            </span>
            </p>
            <h3>Feedback</h3>
            <p>
                We welcome your feedback on the accessibility of
                <span class="basic-information website-name">Fin's House</span>.
                Please let us know if you encounter accessibility barriers on
                <span class="basic-information website-name">Fin's House</span>:
            </p>
            <ul class="basic-information feedback h-card">
                <li>
                Phone:
                <span class="phone-number p-tel">(916) 696-7718</span>
            </li>
            </ul>
            <p>
                We try to respond to feedback within <span class="feedback responsetime">10 business days</span>.
            </p>
            <hr noshade="noshade" />
            <h3>Date</h3>
            <p>
                This statement was created on
                <span class="basic-information statement-created-date">30 March 2022</span>
                using the <a href="https://www.w3.org/WAI/planning/statements/">W3C Accessibility Statement Generator Tool</a>.
            </p>

        </div>
        <Footer />
    </div>)
}

export default AccessibilityStatement