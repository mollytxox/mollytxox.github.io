import ReactDOM from 'react-dom/client';
// import our components (java script files)
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Footer from './Footer';

//import our styles
import './../css/styles.css';

const App = () => {
    return (
        <>
            <Hero />
            <Work />
            <About />
            <Skills />
            <Footer />
        </>
    )
};

export default App;