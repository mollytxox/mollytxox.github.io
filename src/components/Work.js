import { Link } from "react-router-dom";

const Work = () => {
    return (
        <div className="work-container">
            <h2 className="work-title">MY WORK</h2>
            <div className="mockup-container">
                <div className="mockup-box">
                    <img className="mockup-image" src="/images/mockup1.jpeg" />
                    <div className="middle">
                        <a href="https://dunkin-donuts.vercel.app/" target="_blank">
                            <div className="text">DUNKIN DONUTS</div>
                        </a>
                    </div>
                </div>
                <div className="mockup-box">
                    <img className="mockup-image" src="/images/mockup3.jpeg" />
                    <div className="middle">
                        <a href="https://womenscentre-vercel.vercel.app/" target="_blank">
                            <div className="text">WOMEN'S CENTRE</div>
                        </a>
                    </div>
                </div>
                <div className="mockup-box">
                    <img className="mockup-image" src="/images/mockup2.jpeg" />
                    <div className="middle">
                        <a href="https://nz-toursim-vercel.vercel.app/" target="_blank">
                            <div className="text">NZ TOURISM</div>
                        </a>
                    </div>
                </div>
                <div className="mockup-box">
                    <img className="mockup-image" src="/images/mockup4.jpeg" />
                    <div className="middle">
                        <a href="https://papori-frontend.vercel.app/" target="_blank">
                            <div className="text">PAPORI</div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work