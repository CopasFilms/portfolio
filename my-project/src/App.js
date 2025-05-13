import { useState, useEffect } from "react";
import './App.css';
import './variables/Colors.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from "./contexts/LanguageContext";
import Intro from "./pages/homePage/intro/Intro";
import ButtonScroll from "./components/buttons/buttonScroll/ButtonScroll";
import LoadingHome from "./components/loading/LoadingHome";
import Header from "./components/header/Header";
import About from "./pages/homePage/about/About";
import PanelAnimated from "./components/panelAnimated/panelAnimated";
import SpotlightProject from "./pages/homePage/spotlightProject/SpotlightProject";
import Projects from "./pages/homePage/projects/Projects";
import Contact from "./pages/homePage/contact/Contact";
import PricePage from "./pages/pricePage/Price";
import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";
import Footer from "./pages/homePage/footer/Footer.js";

function App() {
  const [loading, setLoading] = useState(true);

  const basename = process.env.REACT_APP_NODE_ENV === "production" ? "/portfolio" : "/";

  return (
    <Router basename={basename}>
      <LanguageProvider>
        <ScrollToTop/>
        {loading ? (
          <LoadingHome onFinish={() => setLoading(false)} />
        ) : (
          <MainContent />
        )}
      </LanguageProvider>
    </Router>
  );
}

function MainContent() {
  
  const location = useLocation();
    useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      {location.pathname === "/" && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <ButtonScroll />
              <Intro />
              <About />
              <SpotlightProject />
              <PanelAnimated />
              <Projects />
              <Contact />
              <Footer/>
            </div>
          }
        />
        <Route path="/price" element={< PricePage/>}/>
      </Routes>
    </div>
  );
}

export default App;