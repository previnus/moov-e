import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Trending from "./components/pages/Trending"
import WhatsNew from "./components/pages/WhatsNew"
import Pricing from "./components/pages/Pricing"
import Contact from "./components/pages/Contact"
import NotFound from "./components/pages/NotFound"


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
