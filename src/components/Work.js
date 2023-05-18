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
                            This project was a group assignment, doing a group project improved my teamwork skills greatly. I enjoyed implementing functionality on this website, including: editing, deleting, posting, commenting, logging in and editing accounts. I learnt how to use MongoDB, Express and NodeJS during this project. It was a rewarding process to design a website as a group.
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
                            My dad, who is a musician asked me to code him a portfolio website to promote his music. This was an exciting project as I had creative freedom to come up with a unique design. I used HTML/CSS for this website, with some added JavaScript for hamburger menu functionality. I designed a monochrome theme for this website as that is a design I haven't experimented with yet.
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
                            I redesigned the 'Dunkin Donuts' website at the beginning of my Web diploma. This website was a great way for me to learn CSS and how to implement responsive design to a website. This helped me learn how to adapt existing branding into my design. The website features filtering functionality and allowed me to gain JavaScript experience.
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
                            This is a website that I decided to design for a family member to improve my CSS skills for responsive design. I up-skilled on how to use media queries and designing mobile first. The outcome of this website suits the the business and provides modern branding. This was a rewarding challenge as I had to design the brand image at the same time as designing a new website for the company.
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
                            New Zealand Tourism was assigned to be our hypothetical client for this project. During this project I learnt how to implement a date picker, Swiper, Mapbox, validation and learn more complex JavaScript. I designed this website to be as true to the NZ Tourism branding as possible, while still adding a modern twist.
                        </div>
                    </div>
                </div>
                {/* NZ TOURSIM  */}
                {/* SPOTIFY  */}
                <div className="mockup-box">
                    <div className="website-image-container">
                        <a href="https://spotify-recreation.vercel.app/" target="_blank">
                            <img className="mockup-image" src="/images/spotify.png" />
                        </a>
                        <div className="middle">
                            <a href="https://spotify-recreation.vercel.app/" target="_blank">
                                <div className="text">View Website</div>
                            </a>
                        </div>
                    </div>
                    <div className="website-text-container">
                        <div className="website-name">Spotify Recreation</div>
                        <div className="website-description">
                            To challenge my CSS skills I decided to replicate the Spotify website for desktop. By doing this, it helped me practise positioning and layouts. I really enjoyed this project. Through replicating an existing design it helped me to understand design decisions and hierarchy. I would like to code the mobile version in the future. I am pleased with the outcome of this redesign.
                        </div>
                    </div>
                </div>
                {/* SPOTIFY  */}
            </div>
        </div >
    )
}

export default Work