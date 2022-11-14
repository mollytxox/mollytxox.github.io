import { Envelope, Phone, Github, Linkedin } from "react-bootstrap-icons"

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">CONTACT ME</h2>
            <p className="contact-text"><Envelope className="contact-icon" />mollythompsonxox@gmail.com <br></br> <br></br>
                <Phone className="contact-icon" />0275038151 <br></br> <br></br>
                <Github className="contact-icon" />mollytxox <br></br> <br></br>
                <Linkedin className="contact-icon" />LinkedIn</p>
        </div>
    )
}

export default Contact