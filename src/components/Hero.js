import HeroYellow from "./HeroYellow"
import ZigZag from "./ZigZag"

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-purple-container">
                    <div className="name-container">Molly Thompson</div>
                    <ZigZag />
                    <div className="job-title-container">FRONTEND <br></br>DEVELOPER</div>
                    <div className="job-description-container"> I build modern, unique and <br></br>functional websites.</div>
                    <div className="yellow-line-divider"></div>
                    <div className="arrow-container">
                        <img className="arrow-image" src="/images/arrow.png" />
                    </div>
                    <div className="image-container">
                        <img className="image-of-me" src="/images/me.png" />
                    </div>
                    <div className="white-square-container">
                        <img className="square-outline-image" src="/images/whitesquare.png" />
                    </div>
                </div>
                <HeroYellow />
            </div>
        </>
    )
}

export default Hero