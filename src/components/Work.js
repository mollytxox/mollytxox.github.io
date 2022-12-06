import { Link } from "react-router-dom";

const Work = () => {
    return (
        <div className="work-container">
            <h2 className="work-title">MY WORK</h2>
            <div className="mockup-container">
                {/* DUNKIN DONUTS  */}
                <div className="mockup-box">
                    <div className="website-name">Dunkin Donuts</div>
                    <a href="https://dunkin-donuts.vercel.app/" target="_blank">
                        <img className="mockup-image" src="/images/website1.png" />
                    </a>
                    <div className="middle">
                        <a href="https://dunkin-donuts.vercel.app/" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        I coded this 'Dunkin Donuts' website redesign at the beginning of my diploma. <br></br>
                        It was a great way for me to learn CSS and how to implement responsive design to a website.<br></br>
                        The website features filtering functionality and allowed me to gain experience using JavaScript objects.
                    </div>
                </div>
                {/* DUNKIN DONUTS  */}
                {/* WOMENS CENTRE  */}
                <div className="mockup-box">
                    <div className="website-name">The Women's Centre</div>
                    <a href="https://molly.yoobeestudent.net/" target="_blank">
                        <img className="mockup-image" src="/images/website2.png" />
                    </a>
                    <div className="middle">
                        <a href="https://molly.yoobeestudent.net/" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        The scenario for this project was to redesign a website for a non-profit organisation.<br></br>
                        This was my first time coding a website using a React front-end.<br></br>
                        The backend for this website providing custom posts was WordPress. It was interesting to learn how to use WordPress with React.
                    </div>
                </div>
                {/* WOMENS CENTRE  */}
                {/* PAPORI  */}
                <div className="mockup-box">
                    <div className="website-name">Papori Neighbourhood</div>
                    <a href="https://papori-frontend.vercel.app/" target="_blank">
                        <img className="mockup-image" src="/images/website3.png" />
                    </a>
                    <div className="middle">
                        <a href="https://papori-frontend.vercel.app/" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        This project was a group assignment, doing a group project improved my teamwork skills greatly.<br></br>
                        I enjoyed implementing so much functionality on this website, including: editing, deleting, posting, commenting, logging in and editing accounts.<br></br>
                        We learnt how to use MongoDB during this project, which I thoroughly enjoyed.
                    </div>
                </div>
                {/* PAPORI  */}
                {/* THOMPSON ELECTRICAL  */}
                <div className="mockup-box">
                    <div className="website-name">Thompson Electrical Ltd</div>
                    <a href="https://molly.yoobeestudent.net/thompsonelectrical" target="_blank">
                        <img className="mockup-image" src="/images/website4.png" />
                    </a>
                    <div className="middle">
                        <a href="https://molly.yoobeestudent.net/thompsonelectrical" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        The scenario for this project was to redesign a website for a company that provides a service.<br></br>
                        I used a WordPress backend with a React frontend for this website, the same way I did for my Women's Centre Website.<br></br>
                        This project helped me understand how to use API's even more. I was challenged when making the website on a live server but was a great accomplishment for me.
                    </div>
                </div>
                {/* THOMPSON ELECTRICAL  */}
                {/* NZ TOURSIM  */}
                <div className="mockup-box">
                    <div className="website-name">New Zealand Toursim</div>
                    <a href="https://nz-toursim-vercel.vercel.app/" target="_blank">
                        <img className="mockup-image" src="/images/website5.png" />
                    </a>
                    <div className="middle">
                        <a href="https://nz-toursim-vercel.vercel.app/" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        New Zealand Tourism was assigned to be our hypothetical client for this project. We were tasked with updating their brand to look more modern but stay true to their branding.<br></br>
                        During this project I learnt how to implement a date picker, swiper, mapbox, validation and more complicated JavaScript variables.<br></br>
                        I tried to design this website to be as true to the NZ Tourism branding as possible while adding a modern twist. I think the outcome suits the brief and would be functional in a real life scenario.
                    </div>
                </div>
                {/* NZ TOURSIM  */}
                {/* NEWS ARTICLE  */}
                <div className="mockup-box">
                    <div className="website-name">Instyle Mobile Hairdressing</div>
                    <a href="https://instylemobilehairdressing.vercel.app/" target="_blank">
                        <img className="mockup-image" src="/images/website6.png" />
                    </a>
                    <div className="middle">
                        <a href="https://instylemobilehairdressing.vercel.app/" target="_blank">
                            <div className="text">View Website</div>
                        </a>
                    </div>
                    <div className="website-description">
                        This is a website that I decided to design for a family member at the start of the year to improve my CSS skills.<br></br>
                        I upskilled my basic JavaScript knowledge on this website and improved my media query skills.<br></br>
                        My family member was very happy with the overall outcome as was I.
                    </div>
                </div>
                {/* NEWS ARTICLE  */}
            </div>
        </div >
    )
}

export default Work