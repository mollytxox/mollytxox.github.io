import { ArrowRight } from "react-bootstrap-icons"

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">contact me</h2>
            <div className="contact-text">
                <div className="contact-button"><a href="tel:0275038151">0275038151</a><ArrowRight className="arrow-right" /></div>
                <div className="contact-button"><a href="mailto:mollythompsonxox@gmail.com">mollythompsonxox@gmail.com</a><ArrowRight className="arrow-right" /></div>
            </div>
        </div>
    )
}

export default Contact