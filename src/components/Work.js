import { Link } from "react-router-dom";

const Work = () => {
    return (
        <div className="work-container">
            <h2 className="work-title">projects</h2>
            <div className="mockup-container">
                {/* PAPORI  */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://papori-frontend.vercel.app/" target="_blank">
                            <img className="mockup-image" src="/images/website3.png" />
                        </a>
                        <div className="middle">
                            <a href="https://papori-frontend.vercel.app/" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">Papori Neighbourhood</div>
                        <div className="website-description">
                            This project was a group assignment, doing a group project improved my teamwork skills greatly.<br></br>
                            I enjoyed implementing so much functionality on this website, including: editing, deleting, posting, commenting, logging in and editing accounts.<br></br>
                            We learnt how to use MongoDB during this project, which I thoroughly enjoyed.
                        </div>
                    </div>
                </div>
                {/* PAPORI  */}
                {/* BAZ THOMPSON   */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://bazthompsonmusic.com" target="_blank">
                            <img className="mockup-image" src="/images/bazthompson.png" />
                        </a>
                        <div className="middle">
                            <a href="https://bazthompsonmusic.com" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">Baz Thompson Music</div>
                        <div className="website-description">
                            My dad, who is a musician asked me to code him a portfolio website to promote his music.<br></br>
                            This was an exciting project as I had creative freedom to come up with a unique design.<br></br>
                            I used HTML/CSS for this website, with some added JavaScript for hamburger menu functionality.
                        </div>
                    </div>
                </div>
                {/* BAZ THOMPSON  */}
                {/* DUNKIN DONUTS  */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://dunkin-donuts.vercel.app/" target="_blank">
                            <img className="mockup-image" src="/images/website1.png" />
                        </a>
                        <div className="middle">
                            <a href="https://dunkin-donuts.vercel.app/" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">Dunkin Donuts</div>
                        <div className="website-description">
                            I coded this 'Dunkin Donuts' website redesign at the beginning of my diploma. <br></br>
                            It was a great way for me to learn CSS and how to implement responsive design to a website.<br></br>
                            The website features filtering functionality and allowed me to gain experience using JavaScript objects.
                        </div>
                    </div>
                </div>
                {/* DUNKIN DONUTS  */}
                {/* INSTYLE ARTICLE  */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://instylemobilehairdressing.vercel.app/" target="_blank">
                            <img className="mockup-image" src="/images/website6.png" />
                        </a>
                        <div className="middle">
                            <a href="https://instylemobilehairdressing.vercel.app/" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">Instyle Mobile Hairdressing</div>
                        <div className="website-description">
                            This is a website that I decided to design for a family member at the start of the year to improve my CSS skills.<br></br>
                            I upskilled my basic JavaScript knowledge on this website and improved my media query skills. The outcome suits the requirements of the business and provides modern branding.<br></br>
                        </div>
                    </div>
                </div>
                {/* INSTYLE ARTICLE  */}
                {/* NZ TOURSIM  */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://nz-toursim-vercel.vercel.app/" target="_blank">
                            <img className="mockup-image" src="/images/website5.png" />
                        </a>
                        <div className="middle">
                            <a href="https://nz-toursim-vercel.vercel.app/" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">New Zealand Toursim</div>
                        <div className="website-description">
                            New Zealand Tourism was assigned to be our hypothetical client for this project.<br></br>
                            During this project I learnt how to implement a date picker, swiper, mapbox, validation and learn more complex JavaScript.<br></br>
                            I tried to design this website to be as true to the NZ Tourism branding as possible while adding a modern twist.
                        </div>
                    </div>
                </div>
                {/* NZ TOURSIM  */}
            </div>
        </div >
    )
}

export default Work