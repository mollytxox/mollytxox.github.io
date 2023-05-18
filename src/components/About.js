import { ArrowRight } from "react-bootstrap-icons"
const About = () => {
    return (
        <>
            <div className="about-container">
                <h2 className="about-me-title">about me</h2>
                <p className="about-me-text">Kia Ora, My name is Molly Thompson and I am a 22 year old female Junior Web Designer. I have created and collaborated on a variety of websites, some of which you can see right here on my portfolio.
                    I am an aspiring web designer looking to start my career in the industry.<br></br>
                    ‍
                    I have a huge passion for anything to do with web and UX design. I am constantly trying to up-skill my existing knowledge and keep up to date with what is happening in the industry. One way I do this is by building functional apps to up-skill, so far I have built a JavaScript countdown app and a 'MERN' app. <br></br>
                    ‍
                    Over the past few months I had the opportunity to gain professional experience working with a Wellington web design company. The project was created using Drupal 9 and we worked in an Agile environment.<br></br>

                    This experience gave me a taste of what the industry is like and I loved it. I gained professional team working skills, learned my way around another CMS, picked up on key design skills from trained professionals and learnt how to communicate with clients.<br></br>

                    I am now ready to find a full time role in web development or UX design. I am looking for full time employment in Wellington CBD. <br></br>

                    When I am not coding you can find me out walking my dog, or in the kitchen baking!<br></br>

                    Thank you for visiting my portfolio. </p>
            </div>
            <div className="contact-container">
                <div className="contact-text">
                    <div className="contact-button"><a href="tel:0275038151">0275038151</a><ArrowRight className="arrow-right" /></div>
                    <div className="contact-button"><a href="mailto:mollythompsonxox@gmail.com">mollythompsonxox@gmail.com</a><ArrowRight className="arrow-right" /></div>
                </div>
            </div>
        </>
    )
}

export default About