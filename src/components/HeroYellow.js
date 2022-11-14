import ZigZag from "./ZigZag"

const HeroYellow = () => {
    return (
        <div className="hero-yellow-container">
            <ZigZag />
            <div className="brackets-image-container">
                <img className="brackets-image" src="/images/brackets.png" />
            </div>
            <div className="dots-container">
                <div className="dot-grey"></div>
                <div className="dot-white"></div>
                <div className="dot-white"></div>
                <div className="dot-white"></div>
            </div>
        </div>
    )
}

export default HeroYellow