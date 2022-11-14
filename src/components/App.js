import ReactDOM from 'react-dom/client';
// import our components (java script files)
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';

//import our styles
import './../css/styles.css';

const App = () => {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <Contact />
            <Skills />
            <Footer />
        </>
    )
};

export default App;