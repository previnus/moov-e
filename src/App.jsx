import Footer from "./assets/components/layouts/Footer";
import Header from "./assets/components/layouts/Header";
import {Routes, Route} from 'react-router-dom';
import Home from "./assets/components/pages/Home";
import Trending from "./assets/components/pages/Trending";
import WhatsNew from "./assets/components/pages/WhatsNew";
import Pricing from "./assets/components/pages/Pricing";
import Contact from "./assets/components/pages/Contact";
import NotFound from "./assets/components/pages/NotFound";


function App() {

  return (
    <>
      <Header />
      <div className="content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/whatsnew" element={<WhatsNew />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
      </div>
      <Footer />
    </>
  )
}

export default App
